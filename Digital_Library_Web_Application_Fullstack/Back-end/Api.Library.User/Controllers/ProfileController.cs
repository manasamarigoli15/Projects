using Library.Business.Interfaces;
using Library.Data.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Library.Member.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProfileController : ControllerBase
    {
        private readonly IUserService _userService;

        public ProfileController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var httpUser = HttpContext.User;
                var userId = int.Parse(httpUser.Identity.Name);

                var user = _userService.FindById(userId);
                if (user != null)
                    return Ok(user);
                else
                    return NotFound();
            }
            catch (Exception ex)
            {
                throw new ArgumentNullException(ex.Message);
            }
      
        }

        [HttpPut]
        public IActionResult Put(User user)
        {
            var v = _userService.Update(user);
            return Ok(user);
        }
    }
}
