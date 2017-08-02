import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';  
import { SignupComponent } from '../../signup/signup.component';  
import { StudentComponent } from '../../signup/student/student.component';  
import { TeacherComponent } from '../../signup/teacher/teacher.component';  

import { GeneralinfoComponent } from '../../signup/generalinfo/generalinfo.component';
import { EducationinfoComponent } from '../../signup/student/educationinfo/educationinfo.component';
import { PaymentinfoComponent } from '../../signup/student/paymentinfo/paymentinfo.component';
import { ExperienceComponent } from '../../signup/teacher/experience/experience.component';
import { DepositinfoComponent } from '../../signup/teacher/depositinfo/depositinfo.component';
export const SIGNUP_ROUTES: Routes = [
    // { path: 'signup/student', component: StudentComponent },
    // { path: 'signup/teacher', component: TeacherComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signup/general/:id', component: GeneralinfoComponent },
    { path: 'signup/student/education', component: EducationinfoComponent },
    { path: 'signup/student/payment', component: PaymentinfoComponent },
    { path: 'signup/teacher/experience', component: ExperienceComponent },
    { path: 'signup/teacher/deposit', component: DepositinfoComponent },
];