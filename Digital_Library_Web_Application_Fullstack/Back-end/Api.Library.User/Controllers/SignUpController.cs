using Library.Business.Interfaces;
using Library.Data.Entities;
using Library.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace Api.Library.Member.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignUpController : ControllerBase
    {
        private readonly IUserService _userService;

        public SignUpController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var user = _userService.GetAll();
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            try
            {
                user.Role = Role.User;
                user = _userService.Add(user);
                return Ok(user);
            }
            catch (DuplicateUserException exp)
            {
                return BadRequest(exp.Message);
            }

            catch (Exception excp)
            {
                return BadRequest(excp.Message);
            }
        }
    }
}
