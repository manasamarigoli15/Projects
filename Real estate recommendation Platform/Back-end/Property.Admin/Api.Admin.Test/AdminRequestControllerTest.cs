using Properties.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Admin.Test
{
    public class AdminRequestControllerTest
    {
        IRequestRepository requestRepository;
        PropertyDbContext context;
        [SetUp]
        public void SetUp()
        {
            context = new PropertyDbContext();
            requestRepository = new RequestRepository(context);
        }
        [Test]
        public void GetRequests_ByValidId_ReturnsId()
        {
            //Arrange
            //Act
            var requests = requestRepository.GetAll();
            //Assert
            Assert.IsNotNull(requests);
            Assert.NotZero(requests.Count);
        }
    }
}
