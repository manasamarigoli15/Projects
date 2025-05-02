using Bank.Customer;
using Bank.Customer.Data;
using Customer.Exceptions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.BankCustomerDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProfileController : ControllerBase
    {
        ICustomerRepository customerRepository;
        private ILogger<ProfileController> log;
        public ProfileController(ICustomerRepository customerRepository, ILogger<ProfileController> log)
        {
            this.customerRepository = customerRepository;
            this.log = log;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var httpUser = HttpContext.User;
            var userId = int.Parse(httpUser.Identity.Name);
            log.LogInformation($"Fetching the details of the customer id {userId}");
            try
            {
                var user = customerRepository.FindById(userId);
                return Ok(user);
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPut]
        public IActionResult Put(Customers customer)
        {
            log.LogInformation($"Updating the details of the customer account {customer.AccountNumber}");
            try
            {
                customerRepository.Update(customer);
                return Ok(customer);
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
