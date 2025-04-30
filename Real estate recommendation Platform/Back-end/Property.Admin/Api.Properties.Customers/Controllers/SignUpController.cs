using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Properties.Admin;
using Properties.Data;
using Properties.Exceptions;

namespace Api.Properties.Customers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignUpController : ControllerBase
    {
        private IUserRepository userRepository;

        public SignUpController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var user = userRepository.GetAll();
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            try
            {
                user.Role = Role.Member;
                user = userRepository.Add(user);
                return Ok(user);
            }
            catch (DuplicateUserException exp)
            {
                return BadRequest(exp.Message);
            }

            catch (Exception excp)
            {
                throw;
            }
        }
    }
}
