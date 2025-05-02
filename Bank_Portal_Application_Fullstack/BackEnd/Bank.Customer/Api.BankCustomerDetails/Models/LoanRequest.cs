using Bank.Customer;

namespace Api.BankCustomerDetails.Models
{
    public class LoanRequest
    {
        /// <summary>
        /// Loan Amount requested by customer
        /// </summary>
        public int loanAmount { get; set; }
        /// <summary>
        /// netIncome of a customer
        /// </summary>
        public int netIncome { get; set; }
        /// <summary>
        /// Type of loan request
        /// </summary>
        public LoanType loanType { get; set; }
    }
}
