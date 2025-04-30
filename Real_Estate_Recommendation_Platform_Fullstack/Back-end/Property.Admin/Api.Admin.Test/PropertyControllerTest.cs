using Api.Properties.Admin.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Testing;
using Properties.Admin;
using Properties.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Api.Properties.Admin;
using Api.Properties.Admin.Controllers;

namespace Api.Admin.Test
{
    public class PropertyControllerTest
    {
        HttpClient client;

        [SetUp]
        public void Setup()
        {
            var appFactory = new WebApplicationFactory<Program>();
            client = appFactory.CreateClient();
        }

        [Test]
        public void AddProperty_ValidCredentials_Return200()
        {
            //Arrange
            var loginRequest = new LoginRequest
            {
                Email = "khan1234@gmail.com",
                Password = "12345678"
            };
            var property = CreateProperty();

            //Act
            var responseLogin = client.PostAsJsonAsync("/api/login", loginRequest).Result;
            var jwtToken = responseLogin.Content.ReadAsStringAsync().Result;
            client.DefaultRequestHeaders.Authorization = new
                System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", jwtToken);
            var responseproperty = client.PostAsJsonAsync("/api/property", property).Result;

            //Assert
            Assert.That(responseLogin.StatusCode, Is.EqualTo(HttpStatusCode.OK));
            Assert.That(responseproperty.StatusCode, Is.EqualTo(HttpStatusCode.OK));
        }

        PropertyInfo CreateProperty()
        {

            var img1 = new Image
            {
                ImageUrl = "https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg"
            };
            var img2 = new Image
            {
                ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaPKd_RNaLzOBxnUbKDryg_txfUNzIVywtw&usqp=CAU"
            };
            var images = new List<Image> { img1, img2 };
            //var agency = new Agency
            //{
            //    AgencyName = "Sunay Enterprises",
            //    AgencyPhoneNumber = "9897689886",
            //    AgencyAddress = "Bannimantap, Mysore"
            //};
            var property = new PropertyInfo
            {
                PropertyType = "3BHK",
                PropertyRegNum = "PROP8282",
                Description = "Indepenedent-House",
                AreaSqft = "1220sqft",
                FurnishedStatus = "Fully-Furnished",
                NumberOfFloors = "1 floor",
                PropertyAge = "Less than 2 years",
                Address = "RR Nagar,Bngalore, Karnataka-567656.",
                Images = images,
                Price = "Rs.44 lakh",
                City = "Bangalore",
                Location = "RR Nagar",
                CategoryType = Category.Rent,
                PropertyStatus = PropertyStatus.True,
                Featured = Featured.True,
                AgencyId = "AG2345",
                AgencyName = "Shobha Developers",
                AgencyPhoneNumber = "9878675678",
                AgencyAddress = "Koremangala, Bangalore, Karnataka-567656."
            };

            return property;
        }

    }
}
