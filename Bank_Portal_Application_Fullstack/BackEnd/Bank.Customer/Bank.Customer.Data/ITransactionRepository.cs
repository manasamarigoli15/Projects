using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer.Data
{
    public interface ITransactionRepository : IRepository<FundTransaction>
    {
        FundTransaction FindByAccountNo(string accNo);
        List<FundTransaction> GetByAccountNo(string accountNo);
    }
}