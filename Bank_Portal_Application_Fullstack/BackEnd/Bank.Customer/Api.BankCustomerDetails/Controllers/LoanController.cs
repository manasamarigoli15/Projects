using Bank.Customer.Data;
using Bank.Customer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Customer.Exceptions;
using Api.BankCustomerDetails.Models;

namespace Api.BankCustomerDetails.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class LoanController : ControllerBase
    {
        private ILoanRepository loanRepository;
        private ILogger<LoanController> log;
        public LoanController(ILoanRepository loanRepository, ILogger<LoanController> log)
        {
            this.loanRepository = loanRepository;
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
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            log.LogInformation($"Fetching loan details {id} from the database");
            try
            {
                var user = loanRepository.FindById(id);
                return Ok(user);
            }
            catch (RequestNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult Post(LoanRequest request)
        {
            var user = HttpContext.User;
            var accNo = user.Claims.FirstOrDefault(x => x.Type == "AccountNumber").Value;
            var id = int.Parse(user.Identity.Name);
            log.LogInformation($"Adding new loan request of account {accNo}");
            try
            {
                Loan l = new Loan();
                l.Customer = id;
                l.AccountNo = accNo;
                l.loanType = request.loanType;
                l.loanAmount = request.loanAmount;
                l.netIncome = request.netIncome;
                l.loanStatus = LoanStatus.Pending;
                var loan = loanRepository.Add(l);
                return Created("", request);
            }
            catch (UserNotFoundException ex)
            {
                log.LogCritical(ex, "No user found");
                return NotFound(ex.Message);
            }
        }
    }
}
