using Properties.Admin;
using Properties.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties.Data.Test
{
    public class PropertyRepositoryTest
    {
        private PropertyDbContext context;
        private IPropertyRepository propertyRepository;

        [SetUp]
        public void Setup()
        {
            context = new PropertyDbContext();
            propertyRepository = new PropertyRepository(context);
        }

        [Test]
        public void AddProperty_Valid_ReturnsWithId()
        {
            //Arrange
            var property = CreateProperty();

            //Act
            var newproperty = propertyRepository.Add(property);

            Assert.IsNotNull(newproperty);
            Assert.NotZero(newproperty.Id);
        }

        [Test]
        public void AddProperty_DuplicateProperty_ThrowsException()
        {
            //Arrange
            var property = CreateProperty();

            //Act
            var newproperty = propertyRepository.Add(property);

            //Assert
            Assert.IsNotNull(newproperty);
            Assert.NotZero(newproperty.Id);
            Assert.Throws<DuplicatePropertyException>(() => propertyRepository.Add(property));
        }

        [Test]
        public void FindProperty_ByValidId_ReturnsId()
        {
            //Arrange
            var id = 1;

            //Act
            var property = propertyRepository.FindById(id);

            //Assert
            Assert.IsNotNull(property);
            Assert.That(id, Is.EqualTo(property.Id));
        }

        [Test]
        public void GetAllProperties_NoInPut_ReturnsData()
        {
            //Act
            var properties = propertyRepository.GetAll();

            //Assert
            Assert.NotNull(properties);
            Assert.NotZero(properties.Count);
        }

        //[Test]
        //public void Delete_ValidId_ReturnsVoid()
        //{
        //    //Arrange
        //    var id = 1;

        //    //Act
        //    propertyRepository.Delete(id);
        //    var property = propertyRepository.FindById(id);

        //    //Assert
        //    Assert.IsNull(property);
        //}

        Property CreateProperty()
        {



            var img1 = new Image
            {
                ImageUrl = "https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg"
            };
            var img2 = new Image
            {
                ImageUrl = "https://thumbs.dreamstime.com/b/luxury-big-modern-house-electric-car-luxury-modern-house-electric-car-141295838.jpg"
            };
            var images = new List<Image> { img1, img2 };
            var agency = new Agency
            {
                AgencyId = "AG8989",
                AgencyName = "BSR Group",
                AgencyPhoneNumber = "8989896767",
                AgencyAddress = "GR Nagar, Bangalore"

            };
            var property = new Property
            {
                PropertyType = "1BHK",
                PropertyRegNum = "PROP9165",
                Description = "Apartment",
                AreaSqft = "1340 sqft",
                FurnishedStatus = "Fully-Furnished",
                NumberOfFloors = "2 Floor",
                PropertyAge = "Less than 5 years",
                Address = "AK Nagar, Bangalore, Karnataka.",
                Images = images,
                Price = "Rs.99 lakh",
                City = "Benagalore",
                Location = "AK Nagar",
                CategoryType = Category.Buy,
                PropertyStatus = PropertyStatus.True,
                Featured = Featured.True,
                AgencyInfo = agency
            };

            return property;
        }
    }
}
