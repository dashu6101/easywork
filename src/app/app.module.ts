import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { BackofficeComponent } from './layouts/backoffice/backoffice.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { SignuplayoutComponent } from './layouts/signuplayout/signuplayout.component';
import { BACKOFFICE_ROUTES } from './layouts/backoffice/backoffice.routes';
import { BLANK_ROUTES } from './layouts/blank/blank.routes'; 
import { SIGNUP_ROUTES } from './layouts/signuplayout/signuplayout.routes'; 

import { AssignmentListComponent } from './assignment/assignment-list/assignment-list.component';
import { AssignmentAddeditComponent } from './assignment/assignment-addedit/assignment-addedit.component';
import { AssignmentDetailsComponent } from './assignment/assignment-details/assignment-details.component';
import {DataTableModule} from "angular2-datatable";
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { PaymentsComponent } from './payment/payments/payments.component';
import { CardsComponent } from './payment/cards/cards.component';
import { StudentComponent } from './signup/student/student.component';
import { TeacherComponent } from './signup/teacher/teacher.component';
import { GeneralinfoComponent } from './signup/generalinfo/generalinfo.component';
import { EducationinfoComponent } from './signup/student/educationinfo/educationinfo.component';
import { PaymentinfoComponent } from './signup/student/paymentinfo/paymentinfo.component';
import { ExperienceComponent } from './signup/teacher/experience/experience.component';
import { DepositinfoComponent } from './signup/teacher/depositinfo/depositinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    BackofficeComponent,
    BlankComponent,
    AssignmentListComponent,
    AssignmentAddeditComponent,
    AssignmentDetailsComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    InboxComponent,
    PaymentsComponent,
    CardsComponent,
    StudentComponent,
    TeacherComponent,
    GeneralinfoComponent,
    EducationinfoComponent,
    PaymentinfoComponent,
    ExperienceComponent,
    DepositinfoComponent,
    SignuplayoutComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full', }, 
      { path: '', component: BlankComponent, data: { title: 'landing Views' }, children: BLANK_ROUTES }, 
      { path: '', component: BackofficeComponent, data: { title: 'dashboard Views' }, children: BACKOFFICE_ROUTES },
      { path: '', component: SignuplayoutComponent, data: { title: 'signup Views' }, children: SIGNUP_ROUTES },
    ]),
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
