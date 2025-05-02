using Api.BankCustomerDetails.Models;
using Bank.Customer;
using Bank.Customer.Data;
using Customer.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.BankCustomerDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacilityController : ControllerBase
    {
        IFacilityRepository facilityRepository;
        private ILogger<FacilityController> log;
        public FacilityController(IFacilityRepository facilityRepository, ILogger<FacilityController> log)
        {
            this.facilityRepository = facilityRepository;
            this.log = log;
        }
        [HttpGet]
        public IActionResult Get()
        {
            log.LogInformation("Fetching all facility requests from the database");
            try
            {
                var customers = facilityRepository.GetAll();
                return Ok(customers);
            }
            catch (RequestNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            log.LogInformation($"Fetching facility request {id} from the database");
            try
            {
                var facility = facilityRepository.FindById(id);
                return Ok(facility);
            }
            catch (RequestNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult Post(List<FacilityRequest> request)
        {
            log.LogInformation("Adding new facility request to the database");
            try
            {
                var httpUser = HttpContext.User;
                var user = int.Parse(httpUser.Identity.Name);
                foreach (var req in request)
                {
                    Facility f = new Facility();
                    f.Customer = user;
                    f.Type = req.Type;
                    facilityRepository.Add(f);
                }
                return Created("", request);
            }
            catch (InvalidRequestException excp)
            {
                return BadRequest(excp.Message);
            }
        }
        [HttpPut]
        public IActionResult Put(Facility facility)
        {
            log.LogInformation($"Updating the details of facility {facility.Id}");
            try
            {
                var v = facilityRepository.Update(facility);
                return Ok(v);
            }
            catch (UserNotFoundException excp)
            {
                return NotFound(excp.Message);
            }
            catch (InvalidRequestException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id)
        {
            log.LogInformation($"Updating the details of facility {id}");
            try
            {
                var v = facilityRepository.UpdateStatus(id);
                return Ok(v);
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (RequestNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
   
}
