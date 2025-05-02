using System.Net.Http.Json;
using System.Net;
using Bank.Customer;
using Api.BankCustomerDetails;
using Microsoft.AspNetCore.Mvc.Testing;
using static Api.BankCustomerDetails.Controllers.LoginController;

namespace Bank.Api.Tests
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
            var loginRequest = new LoginRequest
            {
                Email = "nagraj@gmail.com",
                Password = "Abc@12345"
            };

            //Act
          
            var responseLogin = client.PostAsJsonAsync("/api/login", loginRequest).Result;
            var jwtToken = responseLogin.Content.ReadAsStringAsync().Result;

            client.DefaultRequestHeaders.Authorization =
                        new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", jwtToken);
                       var loan = CreateDummyUser();              
            var response = client
                      .PostAsJsonAsync("/api/loan", loan).Result;

            //Assert
            Assert.That(responseLogin.StatusCode, Is.EqualTo(HttpStatusCode.OK));
            Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.OK));
        }
        Loan CreateDummyUser()
        {
            var loan = new Loan
            {
                loanAmount = 200000,
                loanStatus= LoanStatus.Approved,
                AccountNo= "421639268360",
                Customer=2,
                netIncome = 100000,
                loanType = LoanType.Vehicle

            };
            return loan;
        }
    }
}