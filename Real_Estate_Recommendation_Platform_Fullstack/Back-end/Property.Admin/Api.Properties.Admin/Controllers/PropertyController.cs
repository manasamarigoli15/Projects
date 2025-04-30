using Api.Properties.Admin.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Properties.Admin;
using Properties.Data;

namespace Api.Properties.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        IPropertyRepository propertyRepository;

        public PropertyController(IPropertyRepository propertyRepository)
        {
            this.propertyRepository = propertyRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var properties = propertyRepository.GetAll();
            return Ok(properties);
        }
        [HttpPost]
        public IActionResult Post(PropertyInfo propInfo)
        {
            var property = new Property();
            property.PropertyType = propInfo.PropertyType;
            property.PropertyRegNum = propInfo.PropertyRegNum;
            property.Description = propInfo.Description;
            property.AreaSqft = propInfo.AreaSqft;
            property.FurnishedStatus = propInfo.FurnishedStatus;
            property.NumberOfFloors = propInfo.NumberOfFloors;
            property.PropertyAge = propInfo.PropertyAge;
            property.Address = propInfo.Address;
            property.Price = propInfo.Price;
            property.City = propInfo.City;
            property.Location = propInfo.Location;
            property.CategoryType = propInfo.CategoryType;
            property.PropertyStatus = propInfo.PropertyStatus;
            property.Featured = propInfo.Featured;
            property.Images = propInfo.Images;
            property.AgencyInfo = new Agency
            {
                AgencyId = propInfo.AgencyId,
                AgencyName = propInfo.AgencyName,
                AgencyAddress = propInfo.AgencyAddress,
                AgencyPhoneNumber = propInfo.AgencyPhoneNumber
            };

            var newProperty = propertyRepository.Add(property);
            //return Created($"api/cars/{newCar.Id}", newCar);
            return Ok(newProperty);
        }

        [HttpPut]
        public IActionResult Put(Property property)
        {
            var updatedproperty = propertyRepository.Update(property);
            return Ok(updatedproperty);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            propertyRepository.Delete(id);
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var property = propertyRepository.FindById(id);
            if (property != null)
                return Ok(property);
            else
                return NotFound();
        }
    }
}
