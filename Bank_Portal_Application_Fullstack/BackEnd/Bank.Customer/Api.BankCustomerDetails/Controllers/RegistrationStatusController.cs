using Bank.Customer;
using Bank.Customer.Data;
using Customer.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.BankCustomerDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationStatusController : ControllerBase
    {
        private IFeedbackRepository feedbackRepository;
        private ILogger<RegistrationStatusController> log;
        public RegistrationStatusController(IFeedbackRepository feedbackRepository, ILogger<RegistrationStatusController> log)
        {
            this.feedbackRepository = feedbackRepository;
            this.log = log;
        }
        [HttpGet("{regNo}")]
        public IActionResult Get(string regNo)
        {
            log.LogInformation($"Fetching the registration status for registration id {regNo}");
            try
            {
                var feedback = feedbackRepository.GetByAccountNo(regNo);
                return Ok(feedback);
            }
            catch (RequestNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult Post(Feedback feedback)
        {
            log.LogInformation($"Adding new registration feedback to the database");
            feedback = feedbackRepository.Add(feedback);
            return Created("", feedback);
        }
    }
}