using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties.Admin
{
    public class Request : BaseObject
    {
        public Property propertyregnum { get; set; }
        public User username { get; set; }
    }
}
