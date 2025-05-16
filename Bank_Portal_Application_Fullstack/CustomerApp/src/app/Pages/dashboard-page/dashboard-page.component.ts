import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  router: any;
  onClick() {
    if(sessionStorage.getItem("Token")){
      this.router.navigateByUrl("/home");
    }
    else {
      this.router.navigateByUrl("/register");
    }
    
  }
}
