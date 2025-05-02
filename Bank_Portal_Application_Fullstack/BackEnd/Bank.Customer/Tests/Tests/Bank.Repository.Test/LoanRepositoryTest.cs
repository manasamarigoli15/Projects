using Bank.Customer;
using Bank.Customer.Data;
using Microsoft.Extensions.Logging;
using Moq;
using System.Reflection.Metadata;
namespace Bank.Test
{
    public class LoanRepositoryTest
    {
        private BankDbContext context;
        private LoanRepository loanRepository;
        private CustomerRepository customerRepository;
        private FeedbackRepository feedbackRepository;

        [SetUp]
        public void Setup()
        {
            context = new BankDbContext();
            loanRepository = new LoanRepository(context, customerRepository, feedbackRepository,
                Mock.Of<ILogger<LoanRepository>>());
        }
        [Test]
        public void AddUser_Valid_UserData_ReturnUserWithId()
        {
            var loan = new Loan
            {
                LoanAmount = 20000,
                NetIncome = 50000,
                LoanType = LoanType.Vehicle
            };
            int Id = 1;
            //Act
            var newLoan = loanRepository.Add(loan);
            //Assert
            Assert.IsNotNull(newLoan);
            Assert.NotZero(newLoan.Id);
        }
    }
}