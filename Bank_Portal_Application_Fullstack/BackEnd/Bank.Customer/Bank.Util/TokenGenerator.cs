using Bank.Customer;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Bank.Util
{
    public static class TokenGenerator
    {
        public static string GenerteJWTToken(Customers user)
        {
            string jwtToken = string.Empty;
            var mysecret = "Bengaluru is the capital city of Karnataka";
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(mysecret));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            List<Claim> claims = new List<Claim>();
            claims.Add(new Claim(ClaimTypes.Name, user.Id.ToString()));
            claims.Add(new Claim(ClaimTypes.NameIdentifier, user.Email));
            claims.Add(new Claim("AccountNumber", user.AccountNumber));
            //claims.Add(new Claim("", user.Role.ToString()));

            var token = new JwtSecurityToken("ourBank", "ourBank", claims,
                                              expires: DateTime.Now.AddDays(7),
                                              signingCredentials: credentials);

            jwtToken = new JwtSecurityTokenHandler().WriteToken(token);

            return jwtToken;
        }
    }
}