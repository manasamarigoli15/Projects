export default class Transaction {
    payeeAccountNo : string = "";
    transactionAmount : number =0;
    ifsc : string | undefined;

    constructor(payeeAccountNo : string, transactionAmount : number ) {
        this.payeeAccountNo = payeeAccountNo;
        this.transactionAmount = transactionAmount;
    }
}