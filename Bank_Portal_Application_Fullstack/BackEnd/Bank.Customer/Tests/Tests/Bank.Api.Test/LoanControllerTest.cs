using Bank.Customer;
using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Api.BankCustomerDetails;

namespace Bank.Api.Test
{
    public class LoanControllerTest
    {
        HttpClient client;
        [SetUp]
        public void Setup()
        {
            var appFactory = new WebApplicationFactory<Program>();
            client = appFactory.CreateClient();
        }

        [Test]
        public void Loan_ValidData_ReturnsOk()
        {
            //Arrange
            var loan = CreateDummyUser();
            //Act
            var response = client
                        .PostAsJsonAsync("/api/loan", loan).Result;
            //Assert
            Assert.That(HttpStatusCode.Created, Is.EqualTo(response.StatusCode));
        }
        Loan CreateDummyUser()
        {
            var loan = new Loan
            {
                LoanAmount = 200000,
                NetIncome = 100000,
                LoanType = LoanType.Vehicle
            };
            return loan;
        }
    }
}









