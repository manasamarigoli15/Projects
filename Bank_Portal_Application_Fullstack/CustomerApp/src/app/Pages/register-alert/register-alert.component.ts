import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-register-alert',
  templateUrl: './register-alert.component.html',
  styleUrls: ['./register-alert.component.css']
})
export class RegisterAlertComponent  {
regId:any="";
  constructor(private route:ActivatedRoute,private registerService:RegisterService){
    route.params.subscribe((param:any) => {
                        var r = registerService.getUser(param.email);
                            r.subscribe(d=>{console.debug(d);this.regId=d;})
                    });
  }
}