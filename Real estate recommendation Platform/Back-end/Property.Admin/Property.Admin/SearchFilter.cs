using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Properties.Admin
{
    public class SearchFilter
    {
        public string PropertyType { get; set; }
        public string FurnishedStatus { get; set; }
        public string? City { get; set; }
    }
}
