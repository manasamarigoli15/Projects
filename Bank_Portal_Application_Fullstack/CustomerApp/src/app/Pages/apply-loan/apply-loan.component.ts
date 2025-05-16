import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { BlobServiceClient } from '@azure/storage-blob';
import Loan from 'src/app/models/loan';
import User from 'src/app/models/user';
import { LoanService } from 'src/app/services/loan.service';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent {
  loanType : number = 0;
  loanAmount : number =0;
  netIncome : number =0;
  accountNumber : string = "";
  fullName : string = "";
  router : any;
tempUser:Loan =new Loan(0,0,0,"","");


user: User = new User("","","","","","",0,"","","",0,"","","");
User: User[]=[];

constructor(
  private http:HttpClient
  ,private loanservice:LoanService, private profileService:ProfileService){}

onApply(f: NgForm) {

     this.tempUser= new Loan(Number(this.loanType),Number(this.loanAmount),Number(this.netIncome),this.accountNumber,this.fullName);

     console.debug(this.user);

           this.loanservice
              .addLoan(this.tempUser)
              .subscribe(d => console.debug(d));
              Swal.fire('Applied!','Applied for loan successfully!','success');
}

async ngOnInit() {
  // Retrieve the user's profile information from the server
 var user= await this.profileService.getUser();
 user.subscribe(d => {
  this.user = d;
 });
 }
}