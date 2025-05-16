export default class Facilities {
    Customer : number | undefined;
    DebitCard : any | undefined;
    CreditCard : any | undefined;
    ChequeBook : any | undefined;

    constructor(customerId:number, debitCard:any, creditCard:any, chequeBook:any) {
        this.Customer = customerId;
        this.CreditCard = creditCard;
        this.DebitCard = debitCard;
        this.ChequeBook = chequeBook;
    }
}