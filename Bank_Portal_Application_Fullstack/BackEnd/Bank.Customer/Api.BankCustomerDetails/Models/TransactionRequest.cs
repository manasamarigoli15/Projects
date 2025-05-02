namespace Api.BankCustomerDetails.Models
{
    public class TransactionRequest
    {
        /// <summary>
        /// Customer account number who receives amount
        /// </summary>
        public string PayeeAccountNo { get; set; }
        /// <summary>
        /// Customer IFSC Number
        /// </summary>
        public string? IFSC { get; set; }
        /// <summary>
        /// Amount transfered
        /// </summary>
        public float TransactionAmount { get; set; }
    }
}
