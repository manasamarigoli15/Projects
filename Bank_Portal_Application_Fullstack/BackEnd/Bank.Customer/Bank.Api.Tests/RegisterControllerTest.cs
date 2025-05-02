
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http.Json;
using System.Net;
using Bank.Customer;
using Api.BankCustomerDetails;

namespace Bank.Api.Test
{
    public class RegisterControllerTests
    {
        HttpClient client;

        [SetUp]
        public void Setup()
        {
            var appFactory = new WebApplicationFactory<Program>();
            client = appFactory.CreateClient();
        }

        [Test]
        public void Register_ValidData_ReturnsOk()
        {
            //Arrange 
            var user = CreateDummyUser();

            //Act
            var response = client
                        .PostAsJsonAsync("/api/register", user).Result;

            //Assert
            Assert.That(HttpStatusCode.Created, Is.EqualTo(response.StatusCode));
        }

        //[Test]
        //public void GetRegistrationId_ReturnsOk()
        //{
        //    var email = "monica@gmail.com";
        //    var rid = client.GetAsync("/api/register", email).Result;
        //}

        Customers CreateDummyUser()
        {
            var customer = new Customers
            {
                FirstName = "Shilpa",
                LastName = "Shetty",
                panImg="",
                adharImg="",
                profileImg="",
                Email = "shia@gmail.com",
                PhoneNumber = "+918058347123",
                Address = "usa",
                Gender = "female",
                Occupation = "reader",
                DateOfBirth = "21/8/1989",
                AadharNumber = 734152870623,
                AccountType = AccountType.Salary
            };

            return customer;
        }
    }
}