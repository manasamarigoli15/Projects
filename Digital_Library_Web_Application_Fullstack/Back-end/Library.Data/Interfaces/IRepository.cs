using Library.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data.Interfaces
{
    public interface IRepository<T> where T : BaseObject
    {
        T Add(T t);
        T Update(T t);
        void Delete(int id);
        T FindById(int id);
        List<T> GetAll();

    }
}
