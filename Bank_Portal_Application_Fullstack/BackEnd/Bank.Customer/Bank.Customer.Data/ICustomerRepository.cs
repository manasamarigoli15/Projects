
using Bank.Customer.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer.Data
{
    public interface ICustomerRepository : IRepository<Customers>
    {
        Customers FindByEmailAndPassword(string email, string password);
        bool ExistByAccountNo(string accNumber);
        bool ExistByEmail(string email);
        Customers FindByEmail(string email);
        Customers FindByAccountNo(string accNo);
        Customers UpdateByStatus(int id);

    }
}

