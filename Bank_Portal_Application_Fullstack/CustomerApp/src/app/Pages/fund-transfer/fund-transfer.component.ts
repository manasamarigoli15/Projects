import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Transaction from 'src/app/models/transaction';
import User from 'src/app/models/user';
import { FundTransferService } from 'src/app/services/fund-transfer.service';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent {
  router:any;
  transferType : any;
  ifsc : any;
  temp:Transaction =new Transaction("",0);

  user: User = new User("","","","","","",0,"","","",0,"","","");
  User: User[]=[];
 

  constructor(private http:HttpClient, private transactionservice:FundTransferService, private profileService:ProfileService){}

  onApply(f:NgForm) {

    this.temp = new Transaction(this.temp.payeeAccountNo,Number(this.temp.transactionAmount));

    if(this.user.totalBalance < this.temp.transactionAmount){
      Swal.fire('Oops!','Low balance!','error')

    };
    if(this.user.totalBalance > this.temp.transactionAmount){

           this.transactionservice
              .addTransaction(this.temp)
              .subscribe(d => console.debug(d));
              //this.toastr.success("Applied for loan successfully!")
              Swal.fire('Done!','Transaction successfull!','success');
    }
     }

onCancel() {
  Swal.fire({
    title: 'Are you sure you want to cancel the transaction?',
    showDenyButton: true,
    confirmButtonText: 'Yes',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
  if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
  this.router.navigateByUrl("/dashboard");
 }

  async ngOnInit() {
    // Retrieve the user's profile information from the server
    var user= await this.profileService.getUser();
    user.subscribe(d => {
      this.user = d;
    });
  }

  // changeState() {
  //   this.form.get("userform").valueChanges.subscribe(res => {
  //     if (res === "Custom") { this.form.get('customInput').enable() }
  //     else { this.form.get('customInput').disable() }
  //   });
  // }
}

