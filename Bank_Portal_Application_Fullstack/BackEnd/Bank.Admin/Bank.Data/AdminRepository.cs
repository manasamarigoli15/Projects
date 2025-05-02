using Bank.Admin;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Data
{
    public class AdminRepository : IAdminRepository
    {
        private BankDbContext context;

        public AdminRepository(BankDbContext context)
        {
            this.context = context;
        }

        public Admins Add(Admins t)
        {
            if (Exist(t.Email))
                throw new Exception($"User with the email : {t.Email} already exist");
            var passwordHasher = new PasswordHasher<Admins>();
            t.Password = passwordHasher.HashPassword(t, t.Password);
            t.CreatedDate = DateTimeOffset.UtcNow;
            context.Admins.Add(t);
            context.SaveChanges();

            return t;

        }

        public void Delete(int id)
        {
            var user = context.Admins.FirstOrDefault(d => d.Id == id);
            if (user != null)
            {
                user.DeletedDate = DateTimeOffset.UtcNow;
                context.Admins.UpdateRange(user);
                context.SaveChanges();
            }

        }

        public bool Exist(string email)
        {
            return context.Admins.Any(d => d.Email == email);
        }

        public Admins FindByEmailAndPassword(string email, string password="")
        {
            return context.Admins.FirstOrDefault(d => d.Email == email
                                        );

        }

        public Admins FindById(int id)
        {
            return context.Admins.FirstOrDefault(d => d.Id == id);
        }

        public List<Admins> GetAll()
        {
            return context.Admins.ToList();
        }

        public Admins Update(Admins t)
        {
            if (context.Admins
                .Any(d => d.Email == t.Email && d.Id != t.Id))
                throw new Exception($"User with the email : {t.Email} already exist");

            t.ModifiedDate = DateTimeOffset.UtcNow;
            context.Admins.Update(t);
            context.SaveChanges();

            return t;

        }
    }
}
