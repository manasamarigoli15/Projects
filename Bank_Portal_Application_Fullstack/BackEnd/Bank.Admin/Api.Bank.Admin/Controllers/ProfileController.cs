using Bank.Admin;
using Bank.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Bank.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProfileController : ControllerBase
    {
        IAdminRepository adminRepository;
        public ProfileController(IAdminRepository adminRepository)
        {
            this.adminRepository = adminRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var httpUser = HttpContext.User;
            var adminId = int.Parse(httpUser.Identity.Name);
            var admin = adminRepository.FindById(adminId);
            if (admin != null)
            {
                return Ok(admin);
            }
            else
                return BadRequest();
        }
        [HttpPut]
        public IActionResult Put(Admins admins)
        {
            var v = adminRepository.Update(admins);
            return Ok(admins);
        }
    }
}