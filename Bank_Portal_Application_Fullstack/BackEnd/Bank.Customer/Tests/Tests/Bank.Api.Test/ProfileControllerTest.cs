using Api.Customer.Bank.Controllers;
using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Api.Customer.Bank;
using Api.BankCustomerDetails;
using Api.BankCustomerDetails.Controllers;

namespace Bank.Api.Test
{
    public class ProfileControllerTest
    {
        HttpClient client;

        [SetUp]
        public void Setup()
        {
            var appFactory = new WebApplicationFactory<Program>();
            client = appFactory.CreateClient();
        }

        [Test]
        public void GetUser_ValidCredentials_ReturnsOk()
        {
            //Arrange
            var loginRequest = new LoginRequest
            {
                Email = "mary@gmail.com",
                Password = "9438"
            };
            //var userid = 2;

            //Act
            var responseLogin = client.PostAsJsonAsync("/api/login", loginRequest).Result;
            var jwtToken = responseLogin.Content.ReadAsStringAsync().Result;

            client.DefaultRequestHeaders.Authorization =
                        new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", jwtToken);

            var responseStats = client.GetAsync("/api/profile").Result;

            //Assert
            Assert.That(responseLogin.StatusCode, Is.EqualTo(HttpStatusCode.OK));
            Assert.That(responseStats.StatusCode, Is.EqualTo(HttpStatusCode.OK));
        }
    }
}
