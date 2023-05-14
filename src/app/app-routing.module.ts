import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {IndexComponent} from "./layout/index/index.component";
import {AuthGuardService} from "./helper/auth-guard.service";
import {ProfileComponent} from "./client/profile/profile.component";
import {FinishedAppointmentsComponent} from "./client/finished-appointments/finished-appointments.component";
import {ClientAppointmentsComponent} from "./client/client-appointments/client-appointments.component";
import {PsyComponent} from "./layout/psy/psy.component";
import {ActivationComponent} from "./auth/activation/activation.component";
import {HomeComponent} from "./client/home/home.component";
import {SpecialistListComponent} from "./client/specialist-list/specialist-list.component";
import {ContactsComponent} from "./information/contacts/contacts.component";
import {AboutComponent} from "./information/about/about.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'activate/:code', component: ActivationComponent},
  {path: 'specialistList', component: SpecialistListComponent, canActivate: [AuthGuardService]},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'main', component: HomeComponent}, //, canActivate: [AuthGuardService]
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService],
    children: [
      {path: '', component: ClientAppointmentsComponent, canActivate: [AuthGuardService]},
      {path: 'finishedApps', component: FinishedAppointmentsComponent, canActivate: [AuthGuardService]}
    ]
  },
  {path: 'psy/:id', component: PsyComponent, canActivate: [AuthGuardService]},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
