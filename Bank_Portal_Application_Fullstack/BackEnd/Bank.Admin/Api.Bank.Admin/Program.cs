using Bank.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

namespace Api.Bank.Admin
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllers();
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                            .AddJwtBearer(option =>
                            {
                                option.TokenValidationParameters =
                                new TokenValidationParameters
                                {
                                    ValidateIssuer = false,
                                    ValidateAudience = false,
                                    ValidateLifetime = true,
                                    ValidateIssuerSigningKey = true,
                                    IssuerSigningKey =
                            new SymmetricSecurityKey(Encoding.UTF8
                            .GetBytes("Bengaluru is the capital city of Karnataka"))
                                };
                            });
            builder.Services.AddCors(options => {
                options.AddDefaultPolicy(policy => {
                    policy.WithOrigins("http://localhost:3000")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });


            });
            builder.Services.AddSwaggerGen(option =>
            {
                option.SwaggerDoc("v1"
                                , new OpenApiInfo
                                {
                                    Title = "Api Version 1"
                                                   ,
                                    Version = "v1"
                                });
            });

            builder.Services.AddDbContext<BankDbContext>();
            builder.Services.AddScoped<IAdminRepository, AdminRepository>();

            var app = builder.Build();

            app.UseCors();
            app.UseAuthentication();
            app.UseRouting();
            app.UseAuthorization();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("v1/swagger.json", "v1");
            });

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
                endpoints.MapSwagger();
            });

            app.Run();
        }
    }
}
