using System;



using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer
{

    /// <summary>
    /// Types of loan available for customers
    /// </summary>
    public enum LoanType
    {
        Personal = 1,
        Home,
        Vehicle,
        Education
    }

    /// <summary>
    /// Status of the loan
    /// </summary>

    public enum LoanStatus
    {
        Pending = 1,
        Approved,
        Rejected
    }

    public class Loan : BaseObject
    {
        /// <summary>
        /// Customer account number
        /// </summary>
        public string AccountNo { get; set; }

        public int loanAmount { get; set; }
        /// <summary>
        /// Net income of the customer per month
        /// </summary>

        public int netIncome { get; set; }
        /// <summary>
        /// Type of loan opted by the customer
        /// </summary>

        public LoanType loanType { get; set; }
        /// <summary>
        /// Loan status given by the admin
        /// </summary>
        public LoanStatus loanStatus { get; set; }
        /// <summary>
        /// Customer Id
        /// </summary>

        public int Customer { get; set; }
    }
}