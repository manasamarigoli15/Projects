using Library.Business.Interfaces;
using Library.Data.Entities;
using Library.Data.Interfaces;
using Library.Data.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Library.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AdminController : ControllerBase
    {
        private readonly IUserService _userService;

        public AdminController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var httpUser = HttpContext.User;
            var userId = int.Parse(httpUser.Identity.Name);

            var user = _userService.FindById(userId);
            if (user != null)
                return Ok(user);
            else
                return NotFound();
        }

        [HttpGet("getAllUsers/{getUsers}")]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetUsers();
            return Ok(users);
        }


        [HttpPut]
        public IActionResult Put(User user)
        {
            var v = _userService.Update(user);
            return Ok(user);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userService.Delete(id);
            return Ok("User Deleted Successfully");
        }
    }
}
