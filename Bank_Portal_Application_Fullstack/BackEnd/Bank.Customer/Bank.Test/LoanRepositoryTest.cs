//using Bank.Customer.Data;
//using Bank.Customer;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Bank.Test
//{
//    public class LoanRepositoryTest
//    {
//        private BankDbContext context;
//        private LoanRepository loanRepository;
//        [SetUp]
//        public void Setup()
//        {
//            context = new BankDbContext();
//            loanRepository = new LoanRepository(context);
//        }

//        [Test]
//        public void AddUser_Valid_UserData_ReturnUserWithId()
//        {
//            var loan = new Loan
//            {
//                loanAmount = 20000,
//                netIncome = 50000,
//                loanType = LoanType.Vehicle
//            };
//            int Id = 1;
//            //Act
//            var newLoan = loanRepository.Add(loan);

//            //Assert
//            Assert.IsNotNull(newLoan);
//            Assert.NotZero(newLoan.Id);
//        }
//    }
//}