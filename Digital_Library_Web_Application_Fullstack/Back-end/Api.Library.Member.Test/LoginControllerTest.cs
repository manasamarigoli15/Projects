using Api.Library.Member.Controllers;
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net;
using System.Net.Http.Json;
using static Api.Library.Member.Controllers.LoginController;

namespace Api.Library.Member.Test
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
                Email = "hamsini123@gmail.com",
                Password = "Hamsini@123"
            };

            //Act
            var response = client.PostAsJsonAsync("/api/login", loginRequest).Result;
            var body = response.Content.ReadAsStringAsync().Result;

            //Assert
            Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.OK));
            Assert.IsNotNull(body);
        }

        [TestCase("", "Hamsini@123")]
        [TestCase("hamsini123@gmail.com", "")]
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
    }
}
