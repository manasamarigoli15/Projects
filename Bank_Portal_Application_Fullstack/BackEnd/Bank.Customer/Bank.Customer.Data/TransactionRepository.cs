using Customer.Exceptions;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer.Data
{
    public class TransactionRepository : ITransactionRepository
    {
        ICustomerRepository customerRepository;
        BankDbContext context;
        private ILogger<TransactionRepository> log;

        public TransactionRepository(BankDbContext context, ILogger<TransactionRepository> log
            , ICustomerRepository customerRepository)
        {
            this.context = context;
            this.customerRepository = customerRepository;
            this.log = log;
        }

        public FundTransaction Add(FundTransaction t)
        {
            log.LogInformation("Adding new fund transfer to the database");
            
            if (t.PayerAccountNo == "Admin")
            {
                log.LogInformation("Adding new transaction from admin side");

                var payee = customerRepository.FindByAccountNo(t.PayeeAccountNo);
                if (payee != null)
                {
                    t.FundTransactionStatus = FundTransactionStatus.Success;
                    t.CreatedDate= DateTime.Now;
                    context.Transactions.Add(t);
                    context.SaveChanges();

                    payee.TotalBalance = payee.TotalBalance + t.TransactionAmount;
                    context.Customers.Update(payee);
                    context.SaveChanges();

                    return t;
                }
                else
                    throw new UserNotFoundException("No payee found");
            }
            else
            {
                log.LogInformation("Adding new transaction from bank account holder side");

                var payee = customerRepository.FindByAccountNo(t.PayeeAccountNo);
                var payer = customerRepository.FindByAccountNo(t.PayerAccountNo);

                if (payee != null)
                {
                    if (payer.TotalBalance <= t.TransactionAmount)
                    {
                        throw new InsufficientBalanceException("No sufficient balance");
                    }
                    else
                    {
                        t.FundTransactionStatus = FundTransactionStatus.Success;
                        t.CreatedDate = DateTime.Now;
                        context.Transactions.Add(t);
                        context.SaveChanges();

                        payee.TotalBalance = payee.TotalBalance + t.TransactionAmount;
                        payer.TotalBalance = payer.TotalBalance - t.TransactionAmount;
                        context.Customers.Update(payee);
                        context.SaveChanges();
                        context.Customers.Update(payer);
                        context.SaveChanges();

                        return t;
                    }
                }
                else
                    throw new UserNotFoundException("No payee found");
            }
            return t;
        }

        public void Delete(int id)
        {
            log.LogWarning($"Deleting transaction details with id {id}");

            var transaction = context.Transactions.FirstOrDefault(d => d.Id == id);

            if (transaction != null)
            {
                transaction.DeletedDate = DateTime.Now;
                context.SaveChanges();
            }
            else
                throw new RequestNotFoundException($"No transaction details found with id {id}");
        }

        public FundTransaction FindById(int id)
        {
            log.LogInformation($"Searching transaction details with id {id}");

            var transaction = context.Transactions.FirstOrDefault(d => d.Id == id);

            if (transaction != null)
                return transaction;
            else
                throw new RequestNotFoundException($"Transaction details with id {id} was not found");
        }

        public FundTransaction FindByAccountNo(string accNo)
        {
            return context.Transactions.FirstOrDefault(d => d.PayerAccountNo == accNo || d.PayeeAccountNo == accNo);
        }

        public List<FundTransaction> GetAll()
        {
            log.LogInformation($"Fetching all the fund transfer details from the database");

            var transactions = context.Transactions.ToList();

            if (transactions != null)
                return transactions;
            else
                throw new RequestNotFoundException("No fund transfers found");
        }

        public List<FundTransaction> GetByAccountNo(string accNo)
        {
            log.LogInformation($"Fetching the loan details of the account {accNo}");

            var transactions = context.Transactions.Where(d => d.PayeeAccountNo.Equals(accNo) || d.PayerAccountNo.Equals(accNo)).ToList();

            if (transactions != null)
                return transactions;
            else
                throw new RequestNotFoundException($"No transaction details found for the account {accNo}");
        }

        public FundTransaction Update(FundTransaction t)
        {
            throw new NotImplementedException();
        }
    }
}
