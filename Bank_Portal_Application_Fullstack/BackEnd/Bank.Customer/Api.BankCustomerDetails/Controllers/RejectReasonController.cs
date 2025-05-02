using Bank.Customer.Data;
using Bank.Customer;
using Customer.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.BankCustomerDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RejectReasonController : ControllerBase
    {
        private IFeedbackRepository feedbackRepository;
        private ILogger<RejectReasonController> log;

        public RejectReasonController(IFeedbackRepository feedbackRepository, ILogger<RejectReasonController> log)
        {
            this.feedbackRepository = feedbackRepository;
            this.log = log;
        }

        [HttpPost]
        public IActionResult Post(Feedback feedback)
        {
            try
            {


                feedback = feedbackRepository.Add(feedback);
                return Created("", feedback);
                //return Ok("connected");
            }
            catch (DuplicateUserException excp)
            {
                return BadRequest(excp.Message);
            }
            catch (Exception excp)
            {
                throw; ;
            }
        }
    }
}
