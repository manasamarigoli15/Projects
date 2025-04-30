using Api.Properties.Customers.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Properties.Admin;
using Properties.Data;

namespace Api.Properties.Customers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserRequestController : ControllerBase
    {
        IRequestRepository requestsRepository;
        IUserRepository userRepository;
        IPropertyRepository propertyRepository;
        public UserRequestController(IRequestRepository requestsRepository,
            IUserRepository userRepository, IPropertyRepository propertyRepository)
        {
            this.requestsRepository = requestsRepository;
            this.userRepository = userRepository;
            this.propertyRepository = propertyRepository;
        }
        [HttpPost]
        public IActionResult Post(TotalRequest requests)
        {
            var user = HttpContext.User;
            var userId = int.Parse(user.Identity.Name);
            var profile = userRepository.FindById(userId);
            var property = propertyRepository.FindById(requests.propertyid);
            Request request = new Request();
            request.username = profile;
            request.propertyregnum = property;
            var newrequest = requestsRepository.Add(request);
            return Ok(newrequest);
        }
        [HttpGet]
        public IActionResult Get()
        {
            var properties = requestsRepository.GetAll();
            return Ok(properties);
        }
    }
}
