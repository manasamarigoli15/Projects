using Library.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data.Interfaces
{
    public interface IUserRepository : IRepository<User>
    {
        User FindByEmailAndPassword(string email, string password);
        bool Exist(string email);
        List<User> GetByUser(int userId);
        List<User> GetUsers();
    }
}
