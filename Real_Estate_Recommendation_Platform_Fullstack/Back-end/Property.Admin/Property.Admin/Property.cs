using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Properties.Admin
{
    public enum PropertyStatus
    {
        True = 1, False = 0
    }

    public enum Featured
    {
        True = 1, False = 0
    }
    public enum Category
    {
        Buy = 1,
        Sell,
        Rent
    }
    public class Property : BaseObject
    {
        public string PropertyType { get; set; }
        public string PropertyRegNum { get; set; }
        public string Description { get; set; }
        public string AreaSqft { get; set; }
        public string FurnishedStatus { get; set; }
        public string NumberOfFloors { get; set; }
        public string PropertyAge { get; set; }
        public string Address { get;set; }
        public string Price { get; set; }
        public string City { get; set; }
        public string Location { get; set; }
        public Category CategoryType { get; set; }
        public PropertyStatus PropertyStatus { get; set; }
        public Featured Featured { get; set; }

        //public List<Image> Images { get => img; set => img = value; }

        public List<Image> Images { get; set; }
        public Agency AgencyInfo { get; set; }

    }
}
