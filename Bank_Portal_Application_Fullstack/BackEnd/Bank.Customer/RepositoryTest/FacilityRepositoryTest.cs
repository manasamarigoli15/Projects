using Bank.Customer;
using Bank.Customer.Data;
using Microsoft.Extensions.Logging;
using Moq;

namespace RepositoryTest
{
    public class FacilityRepositoryTest
    {
        private BankDbContext context;
        private FacilityRepository facilityRepository;
        private FeedbackRepository feedbackRepository;
        private CustomerRepository customerRepository;  

        [SetUp]
        public void SetUp()
        {
            context = new BankDbContext();
            facilityRepository = new FacilityRepository(context,feedbackRepository,customerRepository, Mock.Of<ILogger<FacilityRepository>>());
        }

        [Test]
        public void AddFacility_ReturnsOk()
        {
            var facility = CreateDummyFacility();

            var newFacility = facilityRepository.Add(facility);
            Assert.IsNotNull(newFacility);
            Assert.NotZero(newFacility.Id);
        }

        Facility CreateDummyFacility()
        {
            var facility = new Facility
            {
                Type = FacilityType.ChequeBook

            };
            return facility;
        }
    }
}
