using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Properties.Admin;
using Properties.Data;

namespace Api.Properties.Customers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserPropertyController : ControllerBase
    {
        IPropertyRepository propertyRepository;

        public UserPropertyController(IPropertyRepository propertyRepository)
        {
            this.propertyRepository = propertyRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var properties = propertyRepository.GetAll();
            return Ok(properties);
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
        [HttpGet("getByCategory/{categoryType}")]
        public IActionResult GetByCategory(Category categoryType)
        {
            var property = propertyRepository.GetByCategoryType(categoryType);
            if (property != null)
                return Ok(property);
            else
                return NotFound();
        }

        [HttpGet("getByFurnishedStatus/{furnishedstatus}")]
        public IActionResult GetByLocation(string furnishedstatus)
        {
            var property = propertyRepository.GetByFurnishtedStatus(furnishedstatus);
            if (property != null)
                return Ok(property);
            else
                return NotFound();
        }

        [HttpGet("getByCity/{city}")]
        public IActionResult GetByCity(string city)
        {
            var property = propertyRepository.GetByCity(city);
            if (property != null)
                return Ok(property);
            else
                return NotFound();
        }

        [HttpGet("getByPropertyType/{propertyType}")]
        public IActionResult GetByPropertyType(string propertyType)
        {
            var property = propertyRepository.GetByPropertyType(propertyType);
            if (property != null)
                return Ok(property);
            else
                return NotFound();
        }

        [HttpGet("getBySearch/{searchTerm}")]
        public IActionResult GetBySearch(string searchTerm)
        {
            var property = propertyRepository.GetBySearch(searchTerm);
            if (property != null)
                return Ok(property);
            else
                return NotFound();
        }

        [HttpPost]
        public IActionResult Post(SearchFilter searchFilter)
        {
            var property = propertyRepository.GetBySearchFilter(searchFilter);
            return Ok(property);
        }
    }
}
