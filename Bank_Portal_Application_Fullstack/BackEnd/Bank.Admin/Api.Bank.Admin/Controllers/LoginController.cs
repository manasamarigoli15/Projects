using Bank.Admin;
using Bank.Data;
using Bank.Util;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Bank.Util;

namespace Api.Bank.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class LoginController : ControllerBase
    {
        IAdminRepository adminRepository;

        public LoginController(IAdminRepository adminRepository)
        {
            this.adminRepository = adminRepository;
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
                var admin = adminRepository.FindByEmailAndPassword(request.Email
                                                                , request.Password);

                if (admin == null) { return Unauthorized("Login Failed"); }
                else {
                    //return Ok(GenerateJWTToken(admin));
                    var passwordHasher = new PasswordHasher<Admins>();
                    var passwordResult = passwordHasher.VerifyHashedPassword(admin, admin.Password, request.Password);
                    if(passwordResult==PasswordVerificationResult.Success)
                    {
                        return Ok(TokenGenerator.GenerateJWTToken(admin) );
                    }
                    else
                    {
                        return Unauthorized("Login Failed");
                    }
                    }
            }

        }

    //    string GenerateJWTToken(Admins admin)
    //    {
    //        string jwtToken = string.Empty;
    //        var mysecret = "Bengaluru is the capital city of Karnataka";
    //        var key = new SymmetricSecurityKey(
    //                            Encoding.UTF8
    //                            .GetBytes(mysecret));

    //        var credentials = new SigningCredentials(key
    //                                        , SecurityAlgorithms.HmacSha256);

    //        List<Claim> claims = new List<Claim>();
    //        claims.Add(new Claim(ClaimTypes.Name, admin.Id.ToString()));
    //        claims.Add(new Claim(ClaimTypes.NameIdentifier,admin.Name));
    //        claims.Add(
    //            new Claim(ClaimTypes.Role
    //            , admin.Role));

    //        var token = new JwtSecurityToken("ourBank",
    //                                         "ourBank",
    //                                         claims,
    //                                         expires: DateTime.Now.AddDays(7)
    //                                         , signingCredentials: credentials
    //                                         );

    //        jwtToken = new JwtSecurityTokenHandler().WriteToken(token);

    //        return jwtToken;
    //    }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

}

