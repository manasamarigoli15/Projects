using Bank.Customer.Data;
using Bank.Customer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Bank.Util;

namespace Api.BankCustomerDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        ICustomerRepository customerRepository;
        private ILogger<LoginController> log;
        public LoginController(ICustomerRepository customerRepository, ILogger<LoginController> log)
        {
            this.customerRepository = customerRepository;
            this.log = log;
        }
        [HttpPost]
        public IActionResult Post(LoginRequest request)
        {
            log.LogInformation("Checking if user is authorized or not to login");
            if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest($"User name or Password is blank");
            }
            else
            {
                var user = customerRepository.FindByEmailAndPassword(request.Email, request.Password);
                if (user == null)
                {
                    log.LogCritical("Unauthorized user");
                    return Unauthorized("Login Failed");
                }
                else
                {
                    // return
                    // Ok(new { Token = GenerteJWTToken(user) });
                    var passwordHasher = new PasswordHasher<Customers>();
                    var passwordResult = passwordHasher.VerifyHashedPassword(user, user.Password, request.Password);
                    if (passwordResult == PasswordVerificationResult.Success)
                    {
                        log.LogInformation("Authorized user");
                        return Ok(new { Token = TokenGenerator.GenerteJWTToken(user) });
                    }
                    else
                    {
                        log.LogCritical("Unauthorized user");
                        return Unauthorized("Login Failed");
                    }
                }
            }
        
        }

        public class LoginRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }
    }
}