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
   // [Authorize]
    public class UserShortlistController : ControllerBase
    {
        IShortlistRepository shortlistRepository;
        IPropertyRepository propertyRepository;
        IUserRepository userRepository;
        public UserShortlistController(
            IShortlistRepository shortlistRepository, IPropertyRepository propertyRepository,
            IUserRepository userRepository)
        {
           
            this.propertyRepository = propertyRepository;
            this.shortlistRepository = shortlistRepository;
            this.userRepository = userRepository;
        }
        

        

        [HttpPost]
        public IActionResult Post(TotalShortlist shortlists)
        {


            var user = HttpContext.User;
            var userId = int.Parse(user.Identity.Name);
            var profile = userRepository.FindById(userId);
            var property = propertyRepository.FindById(shortlists.propertyid);
            Shortlist shortlist = new Shortlist();
            shortlist.user = profile;
            shortlist.propertyshortlist = property;
            var newrequest = shortlistRepository.Add(shortlist);
            return Ok(newrequest);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var properties = shortlistRepository.GetAll();
            return Ok(properties);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            shortlistRepository.Delete(id);
            return Ok();
        }
    }
}
