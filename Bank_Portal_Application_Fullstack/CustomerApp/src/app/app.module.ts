import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { DashboardPageComponent } from './Pages/dashboard-page/dashboard-page.component';
import { ApplyLoanComponent } from './Pages/apply-loan/apply-loan.component';
import { FundTransferComponent } from './Pages/fund-transfer/fund-transfer.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { EditProfileComponent } from './Pages/edit-profile/edit-profile.component';
import { RegisterAlertComponent } from './Pages/register-alert/register-alert.component';
import { BottomNavbarComponent } from './layout/bottom-navbar/bottom-navbar.component';
import { FacilitiesPageComponent } from './Pages/facilities-page/facilities-page.component';
import { TransactionHistoryComponent } from './Pages/transaction-history/transaction-history.component';
import { AccountBalanceComponent } from './Pages/account-balance/account-balance.component';
import { ChangePasswordComponent } from './Pages/change-password/change-password.component';
import { HomeMainnavbarComponent } from './layout/home-mainnavbar/home-mainnavbar.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { NotificationsComponent } from './Pages/notifications/notifications.component';
import { FAQsComponent } from './Pages/faqs/faqs.component';
import { NgxPrintModule } from 'ngx-print';
import { TrackRegistrationStatusComponent } from './Pages/track-registration-status/track-registration-status.component';
import { RegistrationStatusComponent } from './Pages/registration-status/registration-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    TopNavbarComponent,
    DashboardPageComponent,
    ApplyLoanComponent,
    FundTransferComponent,
    ProfilePageComponent,
    EditProfileComponent,
    RegisterAlertComponent,
    BottomNavbarComponent,
    FacilitiesPageComponent,
    TransactionHistoryComponent,
    AccountBalanceComponent,
    ChangePasswordComponent,
    HomeMainnavbarComponent,
    ContactUsComponent,
    AboutUsComponent,
    NotificationsComponent,
    FAQsComponent,
    TrackRegistrationStatusComponent,
    RegistrationStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
