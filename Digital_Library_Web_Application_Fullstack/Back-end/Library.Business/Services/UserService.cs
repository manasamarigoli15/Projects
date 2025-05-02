using Library.Business.Interfaces;
using Library.Data.Entities;
using Library.Data.Interfaces;
using Library.Exceptions;
using Microsoft.EntityFrameworkCore;


namespace Library.Business.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

        public User Add(User t)
        {
            if (Exist(t.Email))
            {
                throw new DuplicateUserException($"User with the email : {t.Email} already exist");
            }

            _userRepository.Add(t);
            return t;
        }

        public void Delete(int id)
        {
           _userRepository.Delete(id);
        }

        public bool Exist(string email)
        {
            return _userRepository.Exist(email);
        }

        public User FindByEmailAndPassword(string email, string password)
        {
            return _userRepository.FindByEmailAndPassword(email, password);
        }

        public User FindById(int id)
        {
            return _userRepository.FindById(id);
        }

        public List<User> GetAll()
        {
            return _userRepository.GetAll();
        }

        public List<User> GetByUser(int userId)
        {
            return _userRepository.GetByUser(userId);
        }

        public List<User> GetUsers()
        {
            return _userRepository.GetUsers();
        }

        public User Update(User t)
        {
            return _userRepository.Update(t);
        }
    }
}
