import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-registration-status',
  templateUrl: './registration-status.component.html',
  styleUrls: ['./registration-status.component.css']
})
export class RegistrationStatusComponent {
  status : any;
  constructor(private route:ActivatedRoute, private notificationService:NotificationsService){
    route.params.subscribe((param:any) => {
                      var r = this.notificationService.getUserStatus(param.regNo);
                      r.subscribe(d => {console.debug(d); this.status = d;})
    })
  }
}
