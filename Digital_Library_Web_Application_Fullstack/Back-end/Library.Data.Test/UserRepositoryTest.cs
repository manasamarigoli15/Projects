using Library.Data.Entities;
using Library.Data.Interfaces;
using Library.Data.Repositories;

namespace Library.Data.Test
{
    public class UserRepositoryTest
    {
        private DataContext context;
        private IUserRepository userRepository;

        [SetUp]
        public void Setup()
        {
            context = new DataContext();
            userRepository = new UserRepository(context);
        }

        [Test]
        public void AddUser_Valid_UserData_ReturnsUserWithId()
        {
            //Arrange
            var user = CreateDummyUser();

            //Act
            var newUser = userRepository.Add(user);

            Assert.IsNotNull(newUser);
            Assert.NotZero(newUser.Id);
        }

        //[Test]
        //public void AddUser_DuplicateUser_ThrowsException()
        //{
        //    //Arrange
        //    var user = CreateDummyUser();

        //    //Act
        //    var newUser = userRepository.Add(user);

        //    //Assert
        //    Assert.IsNotNull(newUser);
        //    Assert.NotZero(newUser.Id);
        //    Assert.Throws<Exception>(() => userRepository.Add(user));
        //}

        //[Test]
        //public void FindUser_ByValidId_ReturnsId()
        //{
        //    //Arrange
        //    var id = 1;

        //    //Act
        //    var user = userRepository.FindById(id);

        //    //Assert
        //    Assert.IsNotNull(user);
        //    Assert.That(id, Is.EqualTo(user.Id));
        //}

        //[Test]
        //public void GetAll_NoInPut_ReturnsData()
        //{
        //    //Act
        //    var users = userRepository.GetAll();

        //    //Assert
        //    Assert.NotNull(users);
        //    Assert.NotZero(users.Count);
        //}

        //[Test]
        //public void Delete_ValidId_REturnsVoid()
        //{
        //    //Arrange
        //    var id = 1;

        //    //Act
        //    userRepository.Delete(id);
        //    var user = userRepository.FindById(id);

        //    //Assert
        //    Assert.IsNull(user);
        //}

        User CreateDummyUser()
        {
            var user = new User
            {
                Name = "Namitha",
                //Email = $"{Guid.NewGuid().ToString("N")}@gmail.com",
                Email = "namitha123@gmail.com",
                Password = "Namitha@123",
                Role = Role.Admin,
                Address = "Mysore",
                PhoneNumber = "9878675645"
            };

            return user;
        }
    }
}