using Properties.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties.Data
{
    public interface IPropertyRepository : IRepository<Property>
    {
        List<Property> GetByCategoryType(Category categorytype);
        List<Property> GetByLocation(string location);
        List<Property> GetByCity(string city);
        List<Property> GetByPropertyType(string propertytype);

        List<Property> GetBySearchFilter(SearchFilter searchFilter);
        List<Property> GetBySearch(string searchTerm);
        List<Property> GetByFurnishtedStatus(string furnishedStatus);
    }
}
