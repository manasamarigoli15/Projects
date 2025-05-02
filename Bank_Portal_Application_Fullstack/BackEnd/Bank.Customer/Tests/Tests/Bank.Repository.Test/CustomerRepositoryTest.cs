using Bank.Customer;
using Bank.Customer.Data;
using Bank.Exceptions;
using Microsoft.Extensions.Logging;
using Moq;
using System.Data;

namespace Bank.Test
{
    public class CustomerRepositoryTest
    {
        private BankDbContext context;
        private CustomerRepository customerRepository;

        [SetUp]
        public void Setup()
        {
            context = new BankDbContext();
            customerRepository = new CustomerRepository(context, Mock.Of<ILogger<CustomerRepository>>());
        }

        [Test]
        public void AddUser_Valid_UserData_ReturnsUserWithId()
        {
            //Arrange
            var user = CreateDummyUser();

            //Act
            var newUser = customerRepository.Add(user);

            Assert.IsNotNull(newUser);
            Assert.NotZero(newUser.Id);
        }

        [Test]
        public void AddUser_DuplicateUser_ThrowsException()
        {
            //Arrange
            var user = CreateDummyUser();

            //Act
            var newUser = customerRepository.Add(user);

            //Assert
            Assert.IsNotNull(newUser);
            Assert.NotZero(newUser.Id);
            Assert.Throws<Bank.Exceptions.DuplicateUserException>(() => customerRepository.Add(user));

        }

        [Test]
        public void UpdateUser_GenerateAccountNo_ReturnsUser()
        {
            //Arrange
            var user = customerRepository.FindByEmail("disha@gmail.com");

            //Act
            var newUser = customerRepository.Update(user);

            //Assert
            Assert.IsNotNull(newUser.AccountNumber);
            Assert.NotZero(newUser.Id);

        }

        [Test]
        public void FindByAccountNo_ReturnsUser()
        {
            var accNo = "421467254382";
            var user = customerRepository.FindByAccountNo(accNo);
            Assert.IsNotNull(user);
        }

        Customers CreateDummyUser()
        {
            var customer = new Customers
            {
                FirstName = "Disha",
                LastName = "Patel",
                Email = "disha@gmail.com",
                PhoneNumber = "+918058347843",
                Address = "usa",
                Gender = "female",
                Occupation = "reader",
                DateOfBirth = "21/8/1994",
                AadharNumber = 734152870987,
                AccountType = AccountType.Savings,
                ProfileImg = "https://th.bing.com/th/id/R.25a7aa360b36ebb33a5c67d836e1e315?rik=uTzEfhK0Jo46Xw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fCute-Girl-HD-Images.jpg&ehk=f8oSKEEOgXyT36mlKi1prRst9doJjFVFwtkXuBoVaAY%3d&risl=&pid=ImgRaw&r=0",
                AadharImg = "https://img.jagranjosh.com/imported/images/E/Articles/Adhaar-Card-Complete-Details.jpg"
            };

            return customer;
        }
    }
}
