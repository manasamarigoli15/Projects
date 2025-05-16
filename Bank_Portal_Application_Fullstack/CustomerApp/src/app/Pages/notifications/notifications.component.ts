import { Component } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notification : any = [];
  notiCount : number = 0;
  constructor(private notificationService: NotificationsService) {
    var r = this.notificationService.fetchNotifications();
    r.subscribe(d => {console.debug(d);
      this.notification = d;
      this.notiCount = this.notification.length;
      console.debug(this.notiCount);
    })
  }
  onRemove(id : number) {
    var r = this.notificationService.deleteNotification(id);
    r.subscribe(d => {console.debug(d);
    window.location.reload();})
  }
}
