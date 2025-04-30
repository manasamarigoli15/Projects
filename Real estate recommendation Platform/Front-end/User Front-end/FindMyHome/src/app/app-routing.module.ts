import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { QueryComponent } from './query/query.component';
import { RentComponent } from './rent/rent.component';
import { SellComponent } from './sell/sell.component';
import { ShortlistComponent } from './shortlist/shortlist.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path:'signup', component :UserSignUpComponent},
  {path : 'login', component: UserloginComponent},
  {path : 'buy', component: BuyComponent},
  {path : 'rent', component: RentComponent},
  {path : 'sell', component: SellComponent},
  {path : 'propertydetails/:id', component: PropertyDetailsComponent},
  {path : 'userprofile', component : UserprofileComponent},
  {path : 'editprofile', component : EditprofileComponent},
  {path : 'query', component:QueryComponent},
  {path : 'shortlist', component:ShortlistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
