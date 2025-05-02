using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer
{
    /// <summary>
    /// Facilities available for customers
    /// </summary>
    public enum FacilityType
    {
        DebitCard = 1,
        CreditCard = 2,
        ChequeBook
    }

    /// <summary>
    /// Status of the facilities opted by the customer
    /// </summary>
    public enum FacilityStatus
    {
        Pending = 1,
        Active,
        Inactive,
        Reject
    }
    public class Facility : BaseObject
    {
        /// <summary>
        ///  customer Id
        /// </summary>
        public int Customer { get; set; }
        /// <summary>
        /// types of facilities
        /// </summary>
        public FacilityType Type { get; set; }
        /// <summary>
        /// facility status
        /// </summary>
        public FacilityStatus Status { get;set; }
    }
}
