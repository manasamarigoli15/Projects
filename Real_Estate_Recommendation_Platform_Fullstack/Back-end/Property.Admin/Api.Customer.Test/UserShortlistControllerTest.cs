using Api.Properties.Customers.Models;
using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Net.Http.Json;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Api.Properties.Customers;
using Api.Properties.Customers.Controllers;
using Properties.Data;

namespace Api.Customer.Test
{
    public class UserShortlistControllerTest
    {
        IShortlistRepository shortlistRepository;
        PropertyDbContext context;
        HttpClient client;
        [SetUp]
        public void Setup()
        {
            var appFactory = new WebApplicationFactory<Program>();
            client = appFactory.CreateClient();
            context = new PropertyDbContext();
            shortlistRepository = new ShortlistRepository(context);
        }
        [Test]
        public void AddShortlist_ValidCredentials_Return200()
        {
            //Arrange
            var loginRequest = new LoginRequest
            {
                Email = "hamsini1234@gmail.com",
                Password = "12345678"
            };
            var id = new TotalShortlist
            {
                propertyid =  3
            };
            //Act
            var responseLogin = client.PostAsJsonAsync("/api/login", loginRequest).Result;
            var jwtToken = responseLogin.Content.ReadAsStringAsync().Result;
            dynamic token = System.Text.Json.JsonSerializer.Deserialize<ExpandoObject>(jwtToken);
            client.DefaultRequestHeaders.Authorization = new
                System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token.token.ToString());
            var responserequest = client.PostAsJsonAsync("/api/usershortlist", id).Result;
            //Assert
            Assert.That(responseLogin.StatusCode, Is.EqualTo(HttpStatusCode.OK));
            Assert.That(responserequest.StatusCode, Is.EqualTo(HttpStatusCode.OK));
        }

        [Test]
        public void GetRequests_ByValidId_ReturnsId()
        {
            //Arrange
            //Act
            var requests = shortlistRepository.GetAll();
            //Assert
            Assert.IsNotNull(requests);
            Assert.NotZero(requests.Count);
        }
    }
}
