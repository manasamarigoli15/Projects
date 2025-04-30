using System.Net.Http.Json;
using System.Net;
using Api.Properties.Customers;
using Microsoft.AspNetCore.Mvc.Testing;
using Api.Properties.Customers.Controllers;

namespace Api.Customer.Test
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
                Email = "khushi1234@gmail.com",
                Password = "12345678"
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


        //[TestCase("wrongemail@gmail.com", "12345678")]
        //[TestCase("namitha1234@gmail.com", "wrongpassword")]
        //[TestCase("wrongemail@gmail.com", "wrongpassword")]
        //public void Login_WrongValues_ReturnsUnauthorized(string email, string password)
        //{
        //    //Arrange
        //    var loginRequest = new LoginRequest { Email = email, Password = password };

        //    //Act
        //    var response = client.PostAsJsonAsync("/api/login", loginRequest).Result;

        //    //Assert
        //    Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.Unauthorized));
        //}


        //[TestCase("e6cd583682604a5a83d3e755d269f124@gmail.com", "12ABC")]
        //[TestCase("wrongEMAil@gmail.com", "1234")]
        //public void Login_CaseSensitiveValues_ReturnsNotFound(string email, string password)
        //{
        //    //Arrange
        //    var loginRequest = new LoginRequest { Email = email, Password = password };

        //    //Act
        //    var response = client.PostAsJsonAsync("/api/login", loginRequest).Result;

        //    //Assert
        //    Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.Unauthorized));
        //}
    }
}