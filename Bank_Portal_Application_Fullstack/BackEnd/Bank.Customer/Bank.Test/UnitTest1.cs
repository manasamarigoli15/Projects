//using Bank.Customer;
//using Bank.Customer.Data;
//using System.Data;

//namespace Bank.Test
//{
//    public class Tests
//    {
//        private BankDbContext context;
//        private CustomerRepository customerRepository;

//        [SetUp]
//        public void Setup()
//        {
//            context = new BankDbContext();
//            customerRepository = new CustomerRepository(context);
//        }

//        [Test]
//        public void AddUser_Valid_UserData_ReturnsUserWithId()
//        {
//            //Arrange
//            var user = CreateDummyUser();

//            //Act
//            var newUser = customerRepository.Add(user);

//            Assert.IsNotNull(newUser);
//            Assert.NotZero(newUser.Id);
//        }

//        [Test]
//        public void UpdateUser_Valid_UserData_ReturnsUserWithId()
//        {
//            //Arrange
//            var cust = context.Customers.FirstOrDefault(d => d.Id == 1);
//            //cust.PhoneNumber = "9242245692";

//            //Act
//            var newUser = customerRepository.Update(cust);

//            Assert.IsNotNull(newUser);
//            Assert.NotZero(newUser.Id);
//        }





//        Customers CreateDummyUser()
//        {
//            var customer = new Customers
//            {
//                FirstName = "Harry",
//                LastName = "bill",
//                Email = "jack@gmail.com",
//                PhoneNumber = "+919212345678",
//                Address = "Banglore",
//                Gender = "male",
//                Occupation = "employee",
//                DateOfBirth = "12/10/2000",
//                AadharNumber = 123456789012,
//                AccountType = AccountType.Savings
//            };

//            return customer;
//        }
//    }
//}
