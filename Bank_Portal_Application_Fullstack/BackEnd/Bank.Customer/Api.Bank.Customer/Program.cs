using Bank.Customer.Data;

namespace Api.Bank.Customer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllers();
        //    builder.Services.AddCors(options => {
        //        options.AddDefaultPolicy(policy => {
        //            policy.WithOrigins("http://localhost:3000")
        //                  .AllowAnyHeader()
        //                  .AllowAnyMethod();
        //        });


        //    });

        //    builder.Services.AddDbContext<BankDbContext>();
        //    builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();

        //    var app = builder.Build();

        //    app.UseCors();
        //    app.UseRouting();
        //    app.UseEndpoints(endpoints => endpoints.MapControllers());

        //    app.Run();
        }
    }
}