using System.Net.Http.Json;
using System.Net;
using Library.Data.Entities;
using Microsoft.AspNetCore.Mvc.Testing;

namespace Api.Library.Member.Test
{
    public class SignUpControllerTest
    {
        HttpClient client;

        [SetUp]
        public void Setup()
        {
            var appFactory = new WebApplicationFactory<Program>();
            client = appFactory.CreateClient();
        }

        [Test]
        public void SignUp_ValidData_ReturnsOk()
        {
            //Arrange 
            var user = CreateDummyUser();

            //Act
            var response = client
                        .PostAsJsonAsync("/api/signup", user).Result;

            //Assert
            Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.OK));
        }


        User CreateDummyUser()
        {
            var user = new User
            {
                Name = "Nagaraj",
                Email = "nagaraj123@gmail.com",
                Password = "Nagaraj@123",
                PhoneNumber = "8767654534",
                Address = "Murdeshwara",
                Role = Role.User
            };

            return user;
        }
    }
}