using System.Net.Http.Json;
using System.Net;
using Api.Library.Books;
using Microsoft.AspNetCore.Mvc.Testing;
using Api.Library.Admin.Controllers;
using static Api.Library.Admin.Controllers.LoginController;

namespace Api.Library.Book.Test
{
    public class BookControllerTest
    {
        HttpClient adminClient;
        HttpClient client;

        [SetUp]
        public void Setup()
        {
            var appFactoryBook = new WebApplicationFactory<Program>();
            var appFactoryAdmin = new WebApplicationFactory<Api.Library.Admin.Program>();

            //To be used with api.library.books
            client = appFactoryBook.CreateClient();

            //To be used with api.library.admin
            adminClient = appFactoryAdmin.CreateClient();
        }


        [Test]
        public void GetAllBooks_ValidaData_ReturnsOk()
        {
            var loginRequest = new LoginRequest
            {
                Email = "namitha123@gmail.com",
                Password = "Namitha@123"
            };

            //Act
            var responseLogin = adminClient.PostAsJsonAsync("/api/login", loginRequest).Result;
            var jwtToken = responseLogin.Content.ReadAsStringAsync().Result;

            client.DefaultRequestHeaders.Authorization =
                        new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", jwtToken);
            var responseStats = client.GetAsync("/api/book").Result;

            //Assert
            Assert.That(responseLogin.StatusCode, Is.EqualTo(HttpStatusCode.OK));
            Assert.That(responseStats.StatusCode, Is.EqualTo(HttpStatusCode.OK));

        }
    }
}