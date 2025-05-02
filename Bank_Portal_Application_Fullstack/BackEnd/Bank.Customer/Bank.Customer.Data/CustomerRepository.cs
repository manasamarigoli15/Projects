using Bank.Customer;
using Bank.Customer.Data;
using Customer.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer.Data
{
    public class CustomerRepository : ICustomerRepository
    {
        private BankDbContext context;
        private ILogger<CustomerRepository> log;

        public CustomerRepository(BankDbContext context, ILogger<CustomerRepository> log)
        {
            this.context = context;
            this.log = log;
        }

        public Customers Add(Customers t)
        {
            log.LogInformation("Adding new customer to the database");

            if (ExistByEmail(t.Email))
                throw new DuplicateUserException($"User with the email {t.Email} already exist");
            else
            {
                if (t.PanNumber == "")
                    t.PanNumber = null;

                Random generator = new Random();
                String startWith = "2023";
                t.RegistrationId = startWith + generator.Next(1, 999999).ToString();
                var passwordHasher = new PasswordHasher<Customers>();
                t.Password = passwordHasher.HashPassword(t, "Abc@12345");
                t.Status = Status.Pending;
                t.CreatedDate = DateTime.Now;
                context.Customers.Add(t);
                context.SaveChanges();

                return t;
            }
        }

        public void Delete(int id)
        {
            log.LogInformation($"Deleted user with Id: {id}");

            var customer = context.Customers.FirstOrDefault(d => d.Id == id);

            if (customer != null)
            {
                customer.DeletedDate = DateTime.Now;
                context.Customers.UpdateRange(customer);
                context.SaveChanges();
            }
            else
                throw new UserNotFoundException($"User with Id {id} doesnot exist");
        }

        public bool ExistByAccountNo(string accNumber)
        {
            log.LogInformation($"Checking if the user with account number: {accNumber} exists");

            return context.Customers.Any(d => d.AccountNumber == accNumber);
        }

        public bool ExistByEmail(string email)
        {
            log.LogInformation($"Checking if the user with Email: {email} exists");

            return context.Customers.Any(d => d.Email == email);

            //if (user)
            //    return user;
            //else
            //    throw new UserNotFoundException($"User with email {email} was not found");
        }

        public Customers FindByAccountNo(string accNo)
        {
            log.LogInformation($"Searching user with account number {accNo}");

            var user = context.Customers.FirstOrDefault(d => d.AccountNumber == accNo);

            if (user != null)
                return user;
            else
                throw new UserNotFoundException($"User with account number {accNo} was not found");
        }

        public Customers FindByEmail(string email)
        {
            log.LogInformation($"Searching user with email {email}");

            var user = context.Customers.FirstOrDefault(d => d.Email == email);

            if (user != null)
                return user;
            else
                throw new UserNotFoundException($"User with email {email} was not found");
        }

        public Customers FindByEmailAndPassword(string email, string password="")
        {
            log.LogInformation($"Searching user with email {email}");

            var user = context.Customers.FirstOrDefault(d => d.Email == email);

            if (user != null)
                return user;
            else
                throw new UserNotFoundException($"User with email {email} was not found");
        }

        public Customers FindById(int id)
        {
            log.LogInformation($"Searching user with id {id}");

            var user = context.Customers.FirstOrDefault(d => d.Id == id);

            if (user != null)
                return user;
            else
                throw new UserNotFoundException($"User with id {id} was not found");
        }

        public List<Customers> GetAll()
        {
            log.LogInformation($"Fetching all the customers from the database");

            var users = context.Customers.ToList();

            if (users != null)
                return users;
            else
                throw new UserNotFoundException("No users found");
        }

        public Customers Update(Customers t)
        {
           // log.LogInformation($"Updating user with email {t.Email}");

          //  var user = context.Customers.FirstOrDefault(d => d.Email == t.Email);

           // if (user != null)
           // {
                log.LogInformation($"Generating new account number for user {t.FirstName}");

                if (t.AccountNumber == null && t.Status == Status.Pending)
                {
                    Random generator = new Random();
                    String startWith = "421";
                    t.Status = Status.Active;
                    t.AccountNumber = startWith + generator.Next(0, 999999999).ToString();
                    //  t.Password = generator.Next(0, 9999).ToString();
                    t.ModifiedDate = DateTime.Now;
                    context.Customers.Update(t);
                    context.SaveChanges();
                }
                else
                {
                    var passwordHasher = new PasswordHasher<Customers>();
                    t.Password = passwordHasher.HashPassword(t, t.Password);
                    t.ModifiedDate = DateTime.Now;
                    context.Customers.Update(t);
                    context.SaveChanges();
                }

                return t;
           // }
           // else
               // throw new UserNotFoundException($"User with email {user.Email} was not found");
        }

        public Customers UpdateByStatus(int id)
        {
            log.LogInformation($"Updating user with id {id}");

            var customer = context.Customers.FirstOrDefault(d => d.Id == id);

            if (customer != null)
            {
                if (customer.Status == Status.Active)
                {
                    customer.Status = Status.Inactive;
                    context.Customers.Update(customer);
                    context.SaveChanges();
                }
                else if (customer.Status == Status.Inactive)
                {
                    customer.Status = Status.Active;
                    context.Customers.Update(customer);
                    context.SaveChanges();
                }
                else;

                return customer;
            }
            else
            {
                throw new UserNotFoundException($"User with id {id} was not found");
            }
        }
    }
}
