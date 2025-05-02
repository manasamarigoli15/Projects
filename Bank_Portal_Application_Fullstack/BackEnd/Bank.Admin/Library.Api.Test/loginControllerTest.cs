using System.Net.Http.Json;
using System.Net;
using Microsoft.AspNetCore.Mvc.Testing;
using Api.Bank.Admin;
using Api.Bank.Admin.Controllers;

namespace Bank.Api.Test
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
                Email = "7b444153f574462a8152dd73b3cbfe52@gmail.com",
                Password = "12345"
            };

            //Act
            var response = client.PostAsJsonAsync("/api/login", loginRequest).Result;
            var body = response.Content.ReadAsStringAsync().Result;

            //Assert
            Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.OK));
            Assert.IsNotNull(body);

        }

        [TestCase("", "12345")]
        [TestCase("test@gmail.com", "")]
        [TestCase("", "")]
        public void Login_BlankValues_ReturnsBadRequest(string email, string password)
        {
            //Arrange
            var loginRequest = new LoginRequest { Email = email, Password = password };

            //Act
            var response = client.PostAsJsonAsync("/api/login", loginRequest).Result;

            //Assert
            Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.BadRequest));
        }

        [TestCase("7b444153f574462a8152dd73b3cbfe52@gmail.com", "wrongpassword")]
        [TestCase("wrongemail@gmail.com", "12345")]
        [TestCase("wrongemail@gmail.com", "wrongpassword")]
        public void Login_WrongCredentials_ReturnsUnauthorized(string email, string password)
        {
            //Arrange
            var loginRequest = new LoginRequest { Email = email, Password = password };

            //Act
            var response = client.PostAsJsonAsync("/api/login", loginRequest).Result;

            //Assert
            Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.Unauthorized));
        }

    }
}
