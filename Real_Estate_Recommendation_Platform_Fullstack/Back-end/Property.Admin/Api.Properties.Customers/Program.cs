using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Properties.Data;
using System.Text;

namespace Api.Properties.Customers
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllers();
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme);
            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(policy =>
                {
                    policy.WithOrigins("http://localhost:4200")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowAnyOrigin();
                });
            });
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                                        .AddJwtBearer(option =>
                                        {
                                            option.TokenValidationParameters = new TokenValidationParameters
                                            {
                                                ValidateIssuer = false,
                                                ValidateAudience = false,
                                                ValidateLifetime = true,
                                                ValidateIssuerSigningKey = true,
                                                IssuerSigningKey =
                                        new SymmetricSecurityKey(Encoding.UTF8
                                        .GetBytes("Batman is not really a bat"))
                                            };
                                        });
            builder.Services.AddDbContext<PropertyDbContext>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();
            builder.Services.AddScoped<IPropertyRepository, PropertyRepository>();
            builder.Services.AddScoped<IQueryRepository, QueryRepository>();
            builder.Services.AddScoped<IRequestRepository, RequestRepository>();
            builder.Services.AddScoped<IShortlistRepository, ShortlistRepository>();
            var app = builder.Build();
            app.UseCors();
            app.UseAuthentication(); //should be in same order
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints => endpoints.MapControllers());
            app.Run();
        }
    }
}