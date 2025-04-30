using Microsoft.EntityFrameworkCore;
using Properties.Admin;
using Properties.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties.Data
{
    public class UserRepository : IUserRepository
    {
        private PropertyDbContext context;

        public UserRepository(PropertyDbContext context)
        {
            this.context = context;
        }

        public User Add(User t)
        {
            if (Exist(t.Email))
                throw new DuplicateUserException($"User with the email : {t.Email} already exist");

            t.CreatedDate = DateTime.UtcNow;
            context.Users.Add(t);
            context.SaveChanges();

            return t;
        }

        public void Delete(int id)
        {
            var user = context.Users.FirstOrDefault(d => d.Id == id);
            if (user != null)
            {
                user.DeletedDate = DateTime.UtcNow;
                context.Users.UpdateRange(user);
                context.SaveChanges();
            }
        }

        public bool Exist(string email)
        {
            return context.Users.Any(d => d.Email == email);
        }

        public User FindByEmailAndPassword(string email, string password)
        {
            return context.Users.FirstOrDefault(d => d.Email == email
                                        && d.Password == password);
        }

        public User FindById(int id)
        {
            return context.Users.FirstOrDefault(d => d.Id == id);
        }

        public List<User> GetAll()
        {
            return context.Users.ToList();
        }

        public List<User> GetByUser(int userId)
        {
            return context.Users
                             .Include(d => d.Email)
                             .Include(d => d.Password)
                             .Where(d => d.Id == userId)
                             .ToList();
        }

        public User Update(User t)
        {
            if (context.Users
                .Any(d => d.Email == t.Email && d.Id != t.Id))
                throw new DuplicateUserException($"User with the email : {t.Email} already exist");

            t.ModifiedDate = DateTime.UtcNow;
            context.Users.Update(t);
            context.SaveChanges();

            return t;
        }
    }
}
