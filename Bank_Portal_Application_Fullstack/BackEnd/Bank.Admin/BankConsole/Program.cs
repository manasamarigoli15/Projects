using Bank.Admin;
using Bank.Data;
using System.Data;

namespace BankConsole
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var context = new BankDbContext();
            var admin = new Admins
            {
                Name = "manasa",
                Email = "manasa@gmail.com",
                Password = "Abc@12345",
                PhoneNumber="+919212345678",
                Role = "Admin"
            };
            context.Admins.Add(admin);
            context.SaveChanges();

            Console.WriteLine($"New admin created with id : {admin.Id}"); 


        }
    }
}