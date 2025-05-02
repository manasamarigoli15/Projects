using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Bank.Customer;
using System.Transactions;
using Api.BankCustomerDetails;

namespace Bank.Api.Test
{
    public class TransactionControllerTest
    {
        HttpClient client;

        [SetUp]
        public void Setup()
        {
            var appFactory = new WebApplicationFactory<Program>();
            client = appFactory.CreateClient();
        }

        [Test]
        public void Transaction_ValidData_ReturnsCreated()
        {
            //Arrange 
            var transaction = CreateDummyTransaction();

            //Act
            var response = client
                        .PostAsJsonAsync("/api/transaction", transaction).Result;

            //Assert
            Assert.That(HttpStatusCode.Created, Is.EqualTo(response.StatusCode));
        }

        [Test]
        public void GetAllTransactions_ReturnsOk()
        {
            var response = client.GetAsync("/api/transaction").Result;
            Assert.That(HttpStatusCode.OK, Is.EqualTo(response.StatusCode));
            Assert.IsNotNull(response);
        }

        FundTransaction CreateDummyTransaction()
        {
            var transaction = new FundTransaction
            {
                PayeeAccountNo = "42164700047",
                PayerAccountNo = "421778884400",
                TransactionAmount = 20,
                IFSC = "GJH123",
                FundTransactionStatus = FundTransactionStatus.Pending
            };

            return transaction;
        }
    }
}
