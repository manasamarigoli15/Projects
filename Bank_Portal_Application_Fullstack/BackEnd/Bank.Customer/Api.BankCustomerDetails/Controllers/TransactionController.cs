using Bank.Customer.Data;
using Bank.Customer;
using Customer.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Api.BankCustomerDetails.Models;
using Microsoft.AspNetCore.Authorization;

namespace Api.BankCustomerDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TransactionController : ControllerBase
    {
        private ITransactionRepository transactionRepository;
        private ICustomerRepository customerRepository;
        private ILogger<TransactionController> log;

        public TransactionController(ITransactionRepository transactionRepository, ICustomerRepository customerRepository
            , ILogger<TransactionController> log)
        {
            this.transactionRepository = transactionRepository;
            this.customerRepository = customerRepository;
            this.log = log;
        }

        [HttpPost]
        public IActionResult Post(TransactionRequest request)
        {
            var user = HttpContext.User;
            var accNo = user.Claims.FirstOrDefault(x => x.Type == "AccountNumber").Value;
            var t = customerRepository.FindByAccountNo(accNo);

            if (t != null)
            {
                try
                {
                    FundTransaction f = new FundTransaction();
                    f.PayeeAccountNo = request.PayeeAccountNo;
                    f.TransactionAmount = request.TransactionAmount;
                    f.PayerAccountNo = accNo;
                    f.FundTransactionStatus = FundTransactionStatus.Pending;
                    var newTransaction = transactionRepository.Add(f);
                    return Created("", newTransaction);
                }
                catch (Exception excp)
                {
                    return BadRequest(excp.Message);
                }
            }
            else
                return BadRequest();

        }

        [HttpGet]
        public IActionResult Get()
        {
            var user = HttpContext.User;
            var accNo = user.Claims.FirstOrDefault(x => x.Type == "AccountNumber").Value;
            var transaction = transactionRepository.GetByAccountNo(accNo);

            return Ok(transaction);

        }
    }
}
