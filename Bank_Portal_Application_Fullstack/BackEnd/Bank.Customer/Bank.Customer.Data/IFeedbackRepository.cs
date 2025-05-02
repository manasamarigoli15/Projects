using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer.Data
{
    public interface IFeedbackRepository:IRepository<Feedback>
    {
        List<Feedback> GetByAccountNo(string accNo);

    }
}
