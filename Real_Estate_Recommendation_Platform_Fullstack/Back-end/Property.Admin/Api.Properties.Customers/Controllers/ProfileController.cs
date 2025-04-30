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
    public class ProfileController : ControllerBase
    {
        IUserRepository userRepository;

        public ProfileController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var httpUser = HttpContext.User;
            var userId = int.Parse(httpUser.Identity.Name);

            var user = userRepository.FindById(userId);
            if (user != null)
                return Ok(user);
            else
                return NotFound();
        }

        [HttpPut]
        public IActionResult Put(User user)
        {
            var v = userRepository.Update(user);
            return Ok(user);
        }

       
    }
}
