using Bank.Admin;
using System.Data;

namespace Bank.Data.Test
{
    public class UserRepositoryTest
    {
        private BankDbContext context;
        private IAdminRepository adminRepository;

        [SetUp]
        public void Setup()
        {
            context = new BankDbContext();
            adminRepository = new AdminRepository(context);
        }

        [Test]
        public void AddUser_Valid_UserData_ReturnsUserWithId()
        {
            //Arrange
            var admin = CreateDummyUser();

            //Act
            var newAdmin = adminRepository.Add(admin);

            Assert.IsNotNull(newAdmin);
            Assert.NotZero(newAdmin.Id);
        }

        [Test]
        public void AddUser_DuplicateUser_ThrowsException()
        {
            //Arrange
            var admin = CreateDummyUser();

            //Act
            var newAdmin = adminRepository.Add(admin);

            //Assert
            Assert.IsNotNull(newAdmin);
            Assert.NotZero(newAdmin.Id);
            Assert.Throws<Exception>(() => adminRepository.Add(admin));
        }

        [Test]
        public void FindUser_ByValidId_ReturnsId()
        {
            //Arrange
            var id = 1;

            //Act
            var admin = adminRepository.FindById(id);

            //Assert
            Assert.IsNotNull(admin);
            Assert.That(id, Is.EqualTo(admin.Id));
        }

        [Test]
        public void GetAll_NoInPut_ReturnsData()
        {
            //Act
            var admin = adminRepository.GetAll();

            //Assert
            Assert.NotNull(admin);
            Assert.NotZero(admin.Count);
        }

        //[Test]
        //public void Delete_ValidId_REturnsVoid()
        //{
        //    //Arrange
        //    var id = 1;

        //    //Act
        //    adminRepository.Delete(id);
        //    var admin = adminRepository.FindById(id);

        //    //Assert
        //    Assert.IsNull(admin);
        //}

        Admins CreateDummyUser()
        {
            var admin = new Admins
            {
                Name = "Sowmya H G",
                Email = "sowmya@gmail.com",
                Password = "Abc@12345",
                PhoneNumber= "9242235692",
                Role = "Admin"
            };

            return admin;
        }
    }
}
