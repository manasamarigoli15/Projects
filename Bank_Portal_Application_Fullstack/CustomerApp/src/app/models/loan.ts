export default class Loan{
    LoanType:number = 0;
    NetIncome:number = 0;
    LoanAmount:number = 0;
    AccountNumber : string="";
    FullName : string="";
      constructor(loanType:number,netIncome:number,loanAmount:number, accountNumber:string, fullName:string)
      {
       this.LoanType=loanType;
       this.NetIncome=netIncome;
       this.LoanAmount=loanAmount;
       this.AccountNumber=accountNumber;
       this.FullName=fullName;
      }
   }