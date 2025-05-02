using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http.Json;
using System.Net;
using Api.Library.Admin.Controllers;
using static Api.Library.Admin.Controllers.LoginController;

namespace Api.Library.Admin.Test
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
                Email = "namitha123@gmail.com",
                Password = "Namitha@123"
            };

            //Act
            var response = client.PostAsJsonAsync("/api/login", loginRequest).Result;
            var body = response.Content.ReadAsStringAsync().Result;

            //Assert
            Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.OK));
            Assert.IsNotNull(body);

        }

        [TestCase("", "Namitha@123")]
        [TestCase("namitha123@gmail.com", "")]
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

        [TestCase("namitha123@gmail.com", "wrongpassword")]
        [TestCase("wrongemail@gmail.com", "Namitha@123")]
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