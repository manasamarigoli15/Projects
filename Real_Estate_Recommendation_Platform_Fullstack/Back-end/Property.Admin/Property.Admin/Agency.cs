using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties.Admin
{
    public class Agency : BaseObject
    {
        public string AgencyId { get; set; }
        public string AgencyName { get; set; }
        public string AgencyPhoneNumber { get; set; }
        public string AgencyAddress { get; set; }
    }
}
