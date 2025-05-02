using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer.Data
{
    public interface IFacilityRepository:IRepository<Facility>
    {
        Facility UpdateStatus(int id);
    }
}
