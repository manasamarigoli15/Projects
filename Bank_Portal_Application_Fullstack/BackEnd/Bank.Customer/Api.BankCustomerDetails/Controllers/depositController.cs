using Bank.Customer;
using Bank.Customer.Data;
using Customer.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.BankCustomerDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepositController : ControllerBase
    {
        private ITransactionRepository transactionRepository;
        private ILogger<DepositController> log;
        public DepositController(ITransactionRepository transactionRepository, ILogger<DepositController> log)
        {
            this.transactionRepository = transactionRepository;
            this.log = log;
        }
        [HttpPost]
        public IActionResult Post(FundTransaction transaction)
        {
            log.LogInformation("Adding new transaction to the database");
            try
            {
                transaction = transactionRepository.Add(transaction);
                return Created("", transaction);
            }
            catch (UserNotFoundException excp)
            {
                return NotFound(excp.Message);
            }
            catch (InsufficientBalanceException excp)
            {
                return BadRequest(excp.Message);
            }
        }
    }
}
