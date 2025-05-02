 


namespace Bank.Customer.Data

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
