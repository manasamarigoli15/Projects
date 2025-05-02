
using Api.BankCustomerDetails;
using Bank.Customer;
using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace Controllertest
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
        public void Transaction_ValidData_ReturnsOk()
        {
            //Arrange
            var transaction = CreateDummyUser();
            //Act
            var response = client
                        .PostAsJsonAsync("/api/transaction", transaction).Result;
            //Assert
            Assert.That(HttpStatusCode.Created, Is.EqualTo(response.StatusCode));
        }
        FundTransaction CreateDummyUser()
        {
            var transaction = new FundTransaction
            {
                PayeeAccountNo = "421490152889",
                PayerAccountNo = "421861442002",
                TransactionAmount = 200,
                FundTransactionStatus = FundTransactionStatus.Success,
                IFSC="abc"
            };

            return transaction;
        }
    }
}