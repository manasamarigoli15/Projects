//using Bank.Customer.Data;
//using Bank.Customer;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using Microsoft.Extensions.Logging;
//using Moq;

//namespace Bank.Test
//{
//    public class TransactionRepositoryTest
//    {
//        private BankDbContext context;
//        private TransactionRepository transactionRepository;
//        private CustomerRepository customerRepository;

//        [SetUp]
//        public void Setup()
//        {
//            context = new BankDbContext();
//            customerRepository = new CustomerRepository(context, Mock.Of<ILogger<CustomerRepository>>());
//            transactionRepository = new TransactionRepository(context, customerRepository, Mock.Of<ILogger<TransactionRepository>>());
//        }

//        [Test]
//        public void AddTransaction_Valid_Data_ReturnsWithId()
//        {
//            //Arrange
//            var transaction = CreateDummyTransaction();

//            //Act
//            var newTransaction = transactionRepository.Add(transaction);

//            Assert.IsNotNull(newTransaction);
//            Assert.NotZero(newTransaction.Id);
//        }

//        FundTransaction CreateDummyTransaction()
//        {
//            var transaction = new FundTransaction
//            {
//                PayeeAccountNo = "421490152889",
//                PayerAccountNo = "421861442002",
//                TransactionAmount = 2500
//            };

//            return transaction;
//        }
//    }
//}
