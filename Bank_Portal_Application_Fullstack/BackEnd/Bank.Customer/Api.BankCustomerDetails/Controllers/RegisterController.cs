using Bank.Customer.Data;
using Bank.Customer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Customer.Exceptions;

namespace Api.BankCustomerDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private ICustomerRepository customerRepository;
        private ILogger<RegisterController> log;
        public RegisterController(ICustomerRepository customerRepository, ILogger<RegisterController> log)
        {
            this.customerRepository = customerRepository;
            this.log = log;
        }
        [HttpPost]
        public IActionResult Post(Customers customer)
        {
            log.LogInformation("Adding new customer to the database");
            try
            {
                //customer.Password = "Abc@123456";
                customer.Status = Status.Pending;
                customer = customerRepository.Add(customer);
                return Created("", customer);
            }
            catch (DuplicateUserException excp)
            {
                return BadRequest(excp.Message);
            }
        }
        [HttpGet("{email}")]
        public IActionResult Get(string email)
        {
            log.LogInformation($"Fetching the details of the user {email}");
            try
            {
                var user = customerRepository.FindByEmail(email);
                var regId = user.RegistrationId;
                return Ok(regId);
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}