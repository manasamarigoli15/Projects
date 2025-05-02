using Bank.Customer;
using Bank.Customer.Data;
using Microsoft.Extensions.Logging;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Test
{
    public class TransactionRepositoryTest
    {
        private BankDbContext context;
        private TransactionRepository transactionRepository;
        private CustomerRepository customerRepository;

        [SetUp]
        public void Setup()
        {
            context = new BankDbContext();
            customerRepository = new CustomerRepository(context, Mock.Of<ILogger<CustomerRepository>>());
            transactionRepository = new TransactionRepository(context, Mock.Of<ILogger<TransactionRepository>>(), customerRepository);
        }

        [Test]
        public void AddTransaction_Valid_Data_ReturnsWithId()
        {
            //Arrange
            var transaction = CreateDummyTransaction();

            //Act
            var newTransaction = transactionRepository.Add(transaction);

            Assert.IsNotNull(newTransaction);
            Assert.NotZero(newTransaction.Id);
        }

        FundTransaction CreateDummyTransaction()
        {
            var transaction = new FundTransaction
            {
                PayeeAccountNo = "421249044813",
                PayerAccountNo = "421815105297",
                TransactionAmount = 250
            };

            return transaction;
        }
    }
}
