using Bank.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Data
{
    public interface IAdminRepository : IRepository<Admins>
    {
        Admins FindByEmailAndPassword(string email, string password);
        bool Exist(string email);
    }
}

