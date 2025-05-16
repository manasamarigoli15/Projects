import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { RegisterService } from 'src/app/services/register.service';
import { BlobServiceClient } from '@azure/storage-blob';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  gender : any = undefined;
  account : any = undefined;
  user: User = new User("","","","","","",0,"","","",0,"","","");


  constructor(private registerService: RegisterService,private route:Router) { }
  
  onRegister = async(f: NgForm) => {
    var result = JSON.stringify(f.value);
    let panCardImage = await this.uploadFile("filePanCard");
    let profileImage = await this.uploadFile("fileprofile");
    let aadharImage = await this.uploadFile("fileAadhar");

    var x = JSON.parse(result);
    //var email = x.useremail;
    this.user = new User(x.firstname,x.lastname,x.useremail,x.userphone,x.gender,x.address,Number(x.aadhar),x.pan,x.dob,x.occupation,Number(x.account),
                          x.profileImg,x.aadharImg,x.panImg);

    this.user.panImg = panCardImage != null ? panCardImage : "";
    this.user.adharImg = aadharImage!= null ? aadharImage : "";
    this.user.profileImg = profileImage != null ? profileImage : "";
    console.debug(this.user);
    /*this.registerservice
      .addUser(this.tempUser)
      .subscribe(d => console.debug(d));
    alert('You will be able to login once admin verifies the account!');*/


     var r = this.registerService.register(this.user);
     //var r = this.registerService.getUser(email);
     r.subscribe(d => {
      console.debug(d.data);
      this.route.navigateByUrl(`/registeralert/${x.useremail}`);
    });
  }
  uploadFile = async (id:string) => {
    let conStr: string = "https://containerbanking.blob.core.windows.net/?sv=2021-06-08&ss=b&srt=o&sp=rwdlaciytfx&se=2023-01-16T19:52:08Z&st=2023-01-02T11:52:08Z&spr=https,http&sig=5GXHVX45%2F%2FsCdr8SyHsEPVhKt80XF319lTXYiWEJIy0%3D";
    let  blobServiceClient: any = new BlobServiceClient(conStr);
     let containerClient: any = blobServiceClient
      .getContainerClient("skybankimages");
    var file = document.getElementById(id);
    if(file != null)
    {
      fileName:[]
      const element = file as HTMLInputElement;
      var files     = element.files;
      var r: any | undefined;
      var fileName = "";
      if (files != null) {
           fileName = files[0].name;
          var blobClient = containerClient.getBlockBlobClient(fileName);
          r = await blobClient.uploadData(files[0]);
          return `https://containerbanking.blob.core.windows.net/skybankimages/${fileName}`;
          }
      }
      return null;
    }
  }