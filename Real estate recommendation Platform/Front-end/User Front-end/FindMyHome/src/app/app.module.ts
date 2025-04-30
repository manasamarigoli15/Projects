import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { SellComponent } from './sell/sell.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { QueryComponent } from './query/query.component';
import { FooterComponent } from './footer/footer.component';
import { ShortlistComponent } from './shortlist/shortlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UserSignUpComponent,
    HomeComponent,
    NavBarComponent,
    BuyComponent,
    RentComponent,
    PropertyDetailsComponent,
    SellComponent,
    UserprofileComponent,
    EditprofileComponent,
    QueryComponent,
    FooterComponent,
    ShortlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }