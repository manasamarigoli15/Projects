
using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Api.BankCustomerDetails;
using static Api.BankCustomerDetails.Controllers.LoginController;

namespace Bank.Api.Tests
{
    public class LoginControllerTest
    {
        HttpClient client;

        [SetUp]
        public void Setup()
        {
            var appFactory = new WebApplicationFactory<Program>();
            client = appFactory.CreateClient();
        }

        [Test]
        public void Login_ValidCredentials_ReturnsJWT()
        {
            //Arrange
            var loginRequest = new LoginRequest
            {
                Email = "nagraj@gmail.com",
                Password = "Abc@12345"
            };

            //Act
            var response = client.PostAsJsonAsync("/api/login", loginRequest).Result;
            var body = response.Content.ReadAsStringAsync().Result;

            //Assert
            Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.OK));
            Assert.IsNotNull(body);
        }
    }
}
