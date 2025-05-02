using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer.Data
{
    public interface ILoanRepository : IRepository<Loan>
    {
        List<Loan> GetByAccountNo(string accNo);
    }
}
