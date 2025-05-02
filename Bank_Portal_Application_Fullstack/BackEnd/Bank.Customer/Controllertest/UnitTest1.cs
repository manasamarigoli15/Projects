using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http.Json;
using System.Net;

using Bank.Customer;
using Api.BankCustomerDetails;

namespace Controllertest
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
                        .PostAsJsonAsync("/api/register", user).Result;
            //Assert
            Assert.That(HttpStatusCode.Created, Is.EqualTo(response.StatusCode));
        }
        Customers CreateDummyUser()
        {
            var customer = new Customers
            {
                FirstName = "Harry",
                LastName = "billl",
                Email = "jack@gmail.com",
                PhoneNumber = "+919212345678",
                Address = "Banglore",
                Gender = "Male",
                Occupation = "employee",
                DateOfBirth = "12/10/2000",
                AadharNumber = 156740643212,
                AccountType = AccountType.Savings,
                Password=""
            };

            return customer;
        }
    }
}