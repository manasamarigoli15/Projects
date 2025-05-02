using Bank.Customer;
using Bank.Customer.Data;
using Microsoft.Extensions.Logging;
using Moq;
using System.Reflection.Metadata;
namespace RepositoryTest
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
            loanRepository = new LoanRepository(context, customerRepository, feedbackRepository, Mock.Of<ILogger<LoanRepository>>());
        }
        [Test]
        public void AddUser_Valid_UserData_ReturnUserWithId()
        {
            var loan = new Loan
            {
                loanAmount = 200000,
                loanStatus = LoanStatus.Approved,
                AccountNo = "421639268360",
              
                netIncome = 100000,
                loanType = LoanType.Vehicle
            };
            int Id = 2;
            //Act
            var newLoan = loanRepository.Add(loan);
            //Assert
            Assert.IsNotNull(newLoan);
            Assert.NotZero(newLoan.Id);
        }
    }
}