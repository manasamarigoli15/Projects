using Library.Data.Entities;
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http.Json;
using System.Net;
using Api.Library.Admin.Controllers;
using static Api.Library.Admin.Controllers.LoginController;

namespace Api.Library.Admin.Test
{
    public class BookControllerTest
    {
        HttpClient client;

        [SetUp]
        public void Setup()
        {
            var appFactory = new WebApplicationFactory<Program>();
            client = appFactory.CreateClient();
        }

        [Test]
        public void AddNewBook_ValidData_Returns200()
        {
            //Arrange
            var book = new Book
            {
                Title = "That Night",
                Author = "Nidhi Upadhyay",
                Genre = Genre.Thriller,
                RentPerDay = 400,
                TotalNumberOfCopies = 7,
                NumberOfCopiesAvailable = 4,
                NumberOfCopiesRentedOut = 3,
                ImageUrl = "https://img.etimg.com/photo/msid-98033561,imgsize-235148/ThatNightbyNidhiUpadhyay.jpg"
            };

            var loginRequest = new LoginRequest
            {
                Email = "namitha123@gmail.com",
                Password = "Namitha@123"
            };

            //Act
            var responseLogin = client.PostAsJsonAsync("/api/login", loginRequest).Result;
            var jwtToken = responseLogin.Content.ReadAsStringAsync().Result;

            client.DefaultRequestHeaders.Authorization =
                        new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", jwtToken);
            var responseStats = client.PostAsJsonAsync("/api/book", book).Result;

            //Assert
            Assert.That(responseLogin.StatusCode, Is.EqualTo(HttpStatusCode.OK));
            Assert.That(responseStats.StatusCode, Is.EqualTo(HttpStatusCode.OK));
        }
    }
}
