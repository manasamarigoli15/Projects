using Customer.Exceptions;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer.Data
{
    public class LoanRepository : ILoanRepository
    {
        private BankDbContext context;
        private ICustomerRepository customerRepository;
        private IFeedbackRepository feedbackRepository;
        private ILogger<LoanRepository> log;

        public LoanRepository(BankDbContext context, ICustomerRepository customerRepository,IFeedbackRepository feedbackRepository,
            ILogger<LoanRepository>log)
        {
            this.context = context;
            this.customerRepository = customerRepository;
            this.feedbackRepository = feedbackRepository;
            this.log = log;
        }

        public Loan Add(Loan t)
        {
            log.LogInformation($"Adding new loan request to the database");

            var user = customerRepository.FindByAccountNo(t.AccountNo);

            if (user != null)
            {
                t.CreatedDate = DateTime.Now;
                context.Loan.Add(t);
                context.SaveChanges();
                return t;
            }
            else
                throw new UserNotFoundException("No user found");
        }

        public void Delete(int id)
        {
            log.LogWarning($"Deleting loan request with customer id {id}");

            var loan = context.Loan.FirstOrDefault(d => d.Customer == id);
            if (loan != null)
            {
                loan.DeletedDate = DateTime.Now;
                context.Loan.UpdateRange(loan);
                context.SaveChanges();
            }
            else
                throw new UserNotFoundException($"No loan request found with customer id {id}");
        }

        public Loan Update(Loan t)
        {
            log.LogInformation("Updating loan status and adding feedback regarding loan");

            if (t.loanStatus == LoanStatus.Pending)
            {
                var user = customerRepository.FindById(t.Customer);

                if (user != null)
                {
                    t.loanStatus = LoanStatus.Approved;
                    t.ModifiedDate = DateTime.Now;
                    context.Loan.Update(t);
                    context.SaveChanges();
                    Feedback feedback = new Feedback();
                    feedback.RegistrationId = user.RegistrationId;
                    feedback.FeedBack = "Approved Successfully";
                    feedback.FeedbackType = FeedbackType.Loan;
                    feedback.AccountNumber = user.AccountNumber;
                    feedbackRepository.Add(feedback);
                }
                else
                    throw new UserNotFoundException("No user found");
            }

            else
            {
                t.ModifiedDate = DateTime.Now;
                context.Loan.Update(t);
                context.SaveChanges();
            }

            return t;
        }

        public Loan FindById(int id)
        {
            log.LogInformation($"Searching loan request with id {id}");

            var loan = context.Loan.FirstOrDefault(d => d.Id == id);

            if (loan != null)
                return loan;
            else
                throw new RequestNotFoundException($"Loan request with id {id} was not found");
        }

        public List<Loan> GetAll()
        {
            log.LogInformation($"Fetching all the loans from the database");

            var loans = context.Loan.ToList();

            if (loans != null)
                return loans;
            else
                throw new RequestNotFoundException("No loans found");
        }
        public List<Loan> GetByAccountNo(string accNo)
        {
            log.LogInformation($"Fetching the loan details of the account {accNo}");

            var loans = context.Loan.Where(d => d.AccountNo.Equals(accNo)).ToList();

            if (loans != null)
                return loans;
            else
                throw new RequestNotFoundException($"No loan details found for the account {accNo}");
        }
    }
}