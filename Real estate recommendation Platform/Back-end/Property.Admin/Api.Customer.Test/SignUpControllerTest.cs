using Microsoft.AspNetCore.Mvc.Testing;
using Properties.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Api.Properties.Customers;

namespace Api.Customer.Test
{
    public class Tests
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
                Name = "Pooja",
                Email = "pooja1234@gmail.com",
                Password = "12345678",
                PhoneNumber = "9986503216",
                Address = "Bangalore"
            };

            return user;
        }
    }
}
