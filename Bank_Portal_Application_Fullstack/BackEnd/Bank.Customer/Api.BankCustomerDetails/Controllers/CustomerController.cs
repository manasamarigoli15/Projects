using Bank.Customer;
using Bank.Customer.Data;
using Customer.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.BankCustomerDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        ICustomerRepository customerRepository;
        private ILogger<CustomerController> log;
        public CustomerController(ICustomerRepository customerRepository, ILogger<CustomerController> log)
        {
            this.customerRepository = customerRepository;
            this.log = log;
        }
        [HttpGet]
        public IActionResult Get()
        {
            log.LogInformation("Fetching all the customers from the database");
            try
            {
                var customers = customerRepository.GetAll();
                return Ok(customers);
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            log.LogInformation($"Fetching the details of the customer {id}");
            try
            {
                var customer = customerRepository.FindById(id);
                return Ok(customer);
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPut]
        public IActionResult Put(Customers customer)
        {
            log.LogInformation($"Updating the details of the customer {customer.Email}");
            try
            {
                var result = customerRepository.Update(customer);
                return Ok(result);
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id)
        {
            log.LogInformation($"Updating the account status of the customer {id}");
            try
            {
                var result = customerRepository.UpdateByStatus(id);
                return Ok(result);
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            log.LogInformation($"Deleting the details of the customer {id}");
            try
            {
                customerRepository.Delete(id);
                return Ok("Customer deleted successfully");
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}