using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Properties.Admin;
using Properties.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Api.Properties.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        IUserRepository userRepository;

        public LoginController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [HttpPost]
        public IActionResult Post(LoginRequest request)
        {
            if (string.IsNullOrEmpty(request.Email)
             || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest($"User name or Password is blank");
            }
            else
            {
                var user = userRepository.FindByEmailAndPassword(request.Email
                                                                , request.Password);

                if (user == null || user.Role == Role.Member) { return Unauthorized("Login Failed"); }
                else { return Ok(GenerateJWTToken(user)); }
            }

        }

        string GenerateJWTToken(User user)
        {
            string jwtToken = string.Empty;
            var mysecret = "Batman is not really a bat";
            var key = new SymmetricSecurityKey(
                                Encoding.UTF8
                                .GetBytes(mysecret));

            var credentials = new SigningCredentials(key
                                            , SecurityAlgorithms.HmacSha256);

            List<Claim> claims = new List<Claim>();
            claims.Add(new Claim(ClaimTypes.Name, user.Id.ToString()));
            claims.Add(new Claim(ClaimTypes.NameIdentifier, user.Name));
            claims.Add(new Claim(ClaimTypes.MobilePhone, user.PhoneNumber));
            claims.Add(
                new Claim(ClaimTypes.Role
                , user.Role.ToString()));

            var token = new JwtSecurityToken("mybooklibrary",
                                             "mybooklibrary",
                                             claims,
                                             expires: DateTime.Now.AddDays(7)
                                             , signingCredentials: credentials
                                             );

            jwtToken = new JwtSecurityTokenHandler().WriteToken(token);

            return jwtToken;
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
