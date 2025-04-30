using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Properties.Data;

namespace Api.Properties.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminRequestController : ControllerBase
    {
        IRequestRepository requestRepository;
        public AdminRequestController(IRequestRepository requestRepository)
        {
            this.requestRepository = requestRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var requests = requestRepository.GetAll();
            return Ok(requests);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            requestRepository.Delete(id);
            return Ok();
        }
    }
}
