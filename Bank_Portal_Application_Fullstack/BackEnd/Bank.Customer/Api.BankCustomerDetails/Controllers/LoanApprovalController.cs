using Bank.Customer;
using Bank.Customer.Data;
using Customer.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.BankCustomerDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanApprovalController : ControllerBase
    {
        private ILoanRepository loanRepository;
        private ICustomerRepository customerRepository;
        private ILogger<LoanApprovalController> log;
        public LoanApprovalController(ILoanRepository loanRepository, ICustomerRepository customerRepository, ILogger<LoanApprovalController> log)
        {
            this.loanRepository = loanRepository;
            this.customerRepository = customerRepository;
            this.log = log;
        }
        [HttpGet]
        public IActionResult Get()
        {
            log.LogInformation("Fetching all loan details from the database");
            try
            {
                var users = loanRepository.GetAll();
                return Ok(users);
            }
            catch (RequestNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        //[HttpGet("{accNo}")]
        //public IActionResult Get(string accNo) {
        //    Console.WriteLine(accNo);
        //    var users = customerRepository.FindByAccountNo(accNo);
        //    return Ok(users);
        //}
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            log.LogInformation($"Fetching loan details {id} from the database");
            try
            {
                var loan = loanRepository.FindById(id);
                return Ok(loan);
            }
            catch (RequestNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPut]
        public IActionResult Put(Loan loan)
        {
            log.LogInformation($"Updating loan details of id {loan.Id}");
            try
            {
                var v = loanRepository.Update(loan);
                return Ok(v);
            }
            catch (UserNotFoundException excp)
            {
                return NotFound(excp.Message);
            }
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            log.LogWarning($"Deleting loan details of customer: {id}");
            try
            {
                loanRepository.Delete(id);
                return Ok("Customer loan request deleted successfully");
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

    }
}
