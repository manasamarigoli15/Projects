using Bank.Customer.Data;
using Bank.Customer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Moq;

namespace Bank.Test
{
    public class FeedbackRepositoryTest
    {
        private BankDbContext context;
        private FeedbackRepository feedbackRepository;


        [SetUp]
        public void Setup()
        {
            context = new BankDbContext();
            feedbackRepository = new FeedbackRepository(context, Mock.Of<ILogger<FeedbackRepository>>());

        }

        [Test]
        public void AddTransaction_Valid_Data_ReturnsWithId()
        {
            //Arrange
            var feedback = CreateDummyFeedback();

            //Act
            var newFeedback = feedbackRepository.Add(feedback);

            Assert.IsNotNull(newFeedback);
            Assert.NotZero(newFeedback.Id);
        }

        Feedback CreateDummyFeedback()
        {
            var feedback = new Feedback
            {
                RegistrationId = "2023215989",
                FeedBack = "Please provide passport size Photo"
            };

            return feedback;
        }
    }
}