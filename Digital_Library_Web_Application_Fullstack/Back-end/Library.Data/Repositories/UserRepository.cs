using Library.Data.Entities;
using Library.Data.Interfaces;
using Library.Exceptions;
using Microsoft.EntityFrameworkCore;


namespace Library.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            this._context = context;
        }

        public User Add(User t)
        {
            t.CreatedDate = DateTime.UtcNow;
            _context.Users.Add(t);
            _context.SaveChanges();
            return t;
        }

        public void Delete(int id)
        {
            var user = _context.Users.FirstOrDefault(d => d.Id == id);
            if (user != null)
            {
                user.DeletedDate = DateTime.UtcNow;
                _context.Users.UpdateRange(user);
                _context.SaveChanges();
            }
        }

        public bool Exist(string email)
        {
            return _context.Users.Any(d => d.Email == email);
        }

        public User FindByEmailAndPassword(string email, string password)
        {
            return _context.Users.FirstOrDefault(d => d.Email == email
                                    && d.Password == password
                );
        }

        public User FindById(int id)
        {
            return _context.Users.FirstOrDefault(d => d.Id == id);
        }

        public List<User> GetAll()
        {
            return _context.Users.ToList();
        }

        public List<User> GetByUser(int userId)
        {
            return _context.Users
                                .Include(d => d.Email)
                                .Include(d => d.Password)
                                .Where(d => d.Id == userId)
                                .ToList();
        }

        public List<User> GetUsers()
        {
            return _context.Users.Where(d => d.Role == Role.User).ToList();
        }

        public User Update(User t)
        {
            
            t.ModifiedDate = DateTime.UtcNow;
            _context.Users.Update(t);
            _context.SaveChanges();

            return t;
        }
    }
}
