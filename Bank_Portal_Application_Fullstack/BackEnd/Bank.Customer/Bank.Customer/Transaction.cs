using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer
{
    /// <summary>
    /// Status of fund transaction
    /// </summary>
    public enum FundTransactionStatus
    {
        Pending = 0,
        Success,
        Failed
    }
    public class FundTransaction : BaseObject
    {
        /// <summary>
        /// Account number of the customer to whom the transaction should be made
        /// </summary>
        public string PayeeAccountNo { get; set; }

        /// <summary>
        /// Account number of the customer who initiates the transaction
        /// </summary>

        public string? PayerAccountNo { get; set; }
        /// <summary>
        /// IFSC code 
        /// </summary>
        public string? IFSC { get; set; }
        /// <summary>
        /// Amount transfered from payer to payee
        /// </summary>
        public float TransactionAmount { get; set; }
        /// <summary>
        /// Status of the fund transaction
        /// </summary>
        public FundTransactionStatus FundTransactionStatus { get; set; }

        //public float? Debit { get; set; }
        //public float Balance { get; set; }
        //public Customers Customers { get; set; }
    }
}
