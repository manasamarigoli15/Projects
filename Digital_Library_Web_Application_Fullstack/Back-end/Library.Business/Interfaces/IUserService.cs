using Library.Data.Entities;
using Library.Data.Interfaces;

namespace Library.Business.Interfaces
{
    public interface IUserService : IRepository<User>
    {
        User FindByEmailAndPassword(string email, string password);
        bool Exist(string email);
        List<User> GetByUser(int userId);
        List<User> GetUsers();
    }
}
