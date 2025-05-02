using Bank.Customer.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

namespace Api.BankCustomerDetails
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);


            builder.Services.AddControllers();


            builder.Services.AddAuthentication(
                            JwtBearerDefaults.AuthenticationScheme)
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
                    policy.WithOrigins("http://localhost:3000", "http://localhost:4200")
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
            builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
            builder.Services.AddScoped<ITransactionRepository, TransactionRepository>();
            builder.Services.AddScoped<IFeedbackRepository, FeedbackRepository > ();
            builder.Services.AddScoped<IFacilityRepository, FacilityRepository>();
            builder.Services.AddScoped<ILoanRepository, LoanRepository>();

            var app = builder.Build();

            app.UseCors();
            app.UseSwagger();
            app.UseAuthentication();
            app.UseRouting();
            app.UseAuthorization();
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
