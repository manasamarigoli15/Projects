using Bank.Customer;
using Bank.Customer.Data;

namespace BankCustConsole
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var context = new BankDbContext();
            // Random generator = new Random();


            //var customer = new Customers
            //{
            //    //AccountNumber = generator.Next(0, 999999999).ToString("D12"),
            //    FirstName = "Jack",
            //    LastName = "bill",
            //    Email = "jack@gmail.com",
            //    Password = "Abc@12345",
            //    PhoneNumber = "+919212345678",
            //    Address = "Banglore",
            //    Gender = "male",
            //    Occupation = "employee",
            //    DateOfBirth = DateTime.Now,
            //    AadharNumber = 123456789012,
            //    AccountType = AccountType.Savings,
            //    //Status=Status.Pending

            //};
            //context.Customers.Add(customer);
            //context.SaveChanges();

            // Console.WriteLine($"New customer created with ACCNO : {customer.Status}");
            var cust = context.Customers.FirstOrDefault(d => d.Id == 1);
            cust.AccountNumber = "1234567890";


            context.Customers.Update(cust);
            context.SaveChanges();


        }
    }
}