using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer
{
    /// <summary>
    /// Feedback category for the admin
    /// </summary>
    public enum FeedbackType
    {
        Registration=1,
        DebitCard,
        CreditCard,
        ChequeBook,
        Loan
    }
    public class Feedback:BaseObject
    {
        /// <summary>
        /// Registration ID of the customer
        /// </summary>
        public string RegistrationId { get; set; }
        /// <summary>
        /// Account number of the customer
        /// </summary>
        public string? AccountNumber { get; set; }
        /// <summary>
        /// Feedback Category chosen by admin
        /// </summary>
        public FeedbackType FeedbackType { get; set; }
        /// <summary>
        /// Feedback given by admin
        /// </summary>
        public string FeedBack { get; set; }
    }
}
