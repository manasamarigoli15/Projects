import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { ApplyLoanComponent } from './Pages/apply-loan/apply-loan.component';
import { DashboardPageComponent } from './Pages/dashboard-page/dashboard-page.component';
import { FundTransferComponent } from './Pages/fund-transfer/fund-transfer.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { EditProfileComponent } from './Pages/edit-profile/edit-profile.component';
import { RegisterAlertComponent } from './Pages/register-alert/register-alert.component';
import { FacilitiesPageComponent } from './Pages/facilities-page/facilities-page.component';
import { TransactionHistoryComponent } from './Pages/transaction-history/transaction-history.component';
import { AccountBalanceComponent } from './Pages/account-balance/account-balance.component';
import { ChangePasswordComponent } from './Pages/change-password/change-password.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { NotificationsComponent } from './Pages/notifications/notifications.component';
import { FAQsComponent } from './Pages/faqs/faqs.component';
import { RegistrationStatusComponent } from './Pages/registration-status/registration-status.component';
import { TrackRegistrationStatusComponent } from './Pages/track-registration-status/track-registration-status.component';

const routes: Routes = [
  {path : "", component: DashboardPageComponent},
  {path : "login", component : LoginPageComponent},
  {path : "register", component : RegisterPageComponent},
  {path : "registeralert/:email", component : RegisterAlertComponent},
  {path : "home", component: HomePageComponent, canActivate:[AuthguardGuard]},
  {path : "applyloan", component : ApplyLoanComponent, canActivate:[AuthguardGuard]},
  {path : "fundtransfer", component : FundTransferComponent, canActivate:[AuthguardGuard]},
  {path : "profile", component : ProfilePageComponent, canActivate:[AuthguardGuard]},
  {path : "editprofile", component : EditProfileComponent, canActivate:[AuthguardGuard]},
  {path : "facilities", component : FacilitiesPageComponent, canActivate:[AuthguardGuard]},
  {path : "transactionhistory", component : TransactionHistoryComponent, canActivate: [AuthguardGuard]},
  {path : "accountbalance", component : AccountBalanceComponent, canActivate: [AuthguardGuard]},
  {path : "changepassword", component : ChangePasswordComponent, canActivate: [AuthguardGuard]},
  {path : "contactus", component:ContactUsComponent},
  {path : "aboutus", component:AboutUsComponent},
  {path : "notifications", component:NotificationsComponent,canActivate:[AuthguardGuard]},
  {path : "faqs", component:FAQsComponent},
  {path : "trackregistrationstatus", component:TrackRegistrationStatusComponent},
  {path : "registrationstatus/:regNo",component:RegistrationStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
