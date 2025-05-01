import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BookRentalComponent } from './components/book-rental/book-rental.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'signup', component:SignUpComponent},
  {path: 'login', component:LogInComponent},
  {path: 'bookrental', component: BookRentalComponent, canActivate:[AuthguardGuard]},
  {path: 'userprofile', component:UserProfileComponent, canActivate:[AuthguardGuard]},
  {path: 'editprofile', component:EditProfileComponent, canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
