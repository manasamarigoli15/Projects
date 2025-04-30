using Properties.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Admin.Test
{
    public class AdminControllerTest
    {
        IUserRepository userRepository;

        PropertyDbContext context;

        [SetUp]
        public void SetUp()
        {
            context = new PropertyDbContext();
            userRepository = new UserRepository(context);
        }

        [Test]
        public void FindUser_ByValidId_ReturnsId()
        {
            //Arrange
            var id = 1;

            //Act
            var user = userRepository.FindById(id);

            //Assert
            Assert.IsNotNull(user);
            Assert.That(id, Is.EqualTo(user.Id));
        }
    }
}
