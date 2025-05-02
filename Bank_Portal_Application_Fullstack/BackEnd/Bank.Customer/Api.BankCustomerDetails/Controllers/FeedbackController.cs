using Bank.Customer.Data;
using Bank.Customer;
using Customer.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Api.BankCustomerDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class FeedbackController : ControllerBase
    {
        private IFeedbackRepository feedbackRepository;
        private ILogger<FeedbackController> log;
        public FeedbackController(IFeedbackRepository feedbackRepository, ILogger<FeedbackController> log)
        {
            this.feedbackRepository = feedbackRepository;
            this.log = log;
        }
        [HttpPost]
        public IActionResult Post(Feedback feedback)
        {
            log.LogInformation("Adding new feedback to the database");
            try
            {
                feedback = feedbackRepository.Add(feedback);
                return Created("", feedback);
            }
            catch (InvalidRequestException excp)
            {
                return BadRequest(excp.Message);
            }
        }
        [HttpGet]
        public IActionResult Get()
        {
            var user = HttpContext.User;
            var accNo = user.Claims.FirstOrDefault(x => x.Type == "AccountNumber").Value;
            log.LogInformation($"Fetching the feedback of account {accNo}");
            try
            {
                var feedback = feedbackRepository.GetByAccountNo(accNo);
                return Ok(feedback);
            }
            catch (RequestNotFoundException excp)
            {
                return NotFound(excp.Message);
            }
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            log.LogWarning($"Deleting  feedback: {id}");
            try
            {
                feedbackRepository.Delete(id);
                return Ok();
            }
            catch (RequestNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}