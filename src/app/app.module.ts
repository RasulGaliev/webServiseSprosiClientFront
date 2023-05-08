import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material-module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {authInterceptorProviders} from "./helper/auth-interceptor.service";
import {authErrorInterceptorProvider} from "./helper/error-interceptor.service";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { IndexComponent } from './layout/index/index.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { ProfileComponent } from './client/profile/profile.component';
import { FinishedAppointmentsComponent } from './client/finished-appointments/finished-appointments.component';
import { ClientAppointmentsComponent } from './client/client-appointments/client-appointments.component';
import { PsyComponent } from './layout/psy/psy.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import { ActivationComponent } from './auth/activation/activation.component';
import {HeaderComponent} from "./layout/header/header.component";
import {HomeComponent} from "./client/home/home.component";
import {SpecialistListComponent} from "./client/specialist-list/specialist-list.component";
import { RatingModule } from "primeng/rating";
import {AboutComponent} from "./information/about/about.component";
import {ContactsComponent} from "./information/contacts/contacts.component";
import {MatSliderModule} from "@angular/material/slider";
import {FlexLayoutModule} from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    IndexComponent,
    EditClientComponent,
    ProfileComponent,
    FinishedAppointmentsComponent,
    ClientAppointmentsComponent,
    PsyComponent,
    ActivationComponent,
    HeaderComponent,
    HomeComponent,
    SpecialistListComponent,
    AboutComponent,
    ContactsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        [FlexLayoutModule],
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
      RatingModule,
      MatSliderModule
    ],
  providers: [authInterceptorProviders, authErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
