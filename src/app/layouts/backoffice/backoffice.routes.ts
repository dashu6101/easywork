import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentListComponent } from '../../assignment/assignment-list/assignment-list.component';
import { AssignmentAddeditComponent } from '../../assignment/assignment-addedit/assignment-addedit.component';
import { AssignmentDetailsComponent } from '../../assignment/assignment-details/assignment-details.component';
import { PaymentsComponent } from '../../payment/payments/payments.component';
import { CardsComponent } from '../../payment/cards/cards.component';
import { InboxComponent } from '../../inbox/inbox.component';
import { ProfileComponent } from '../../profile/profile.component';

export const BACKOFFICE_ROUTES: Routes = [
      { path : 'assignments', component : AssignmentListComponent},
      { path : 'assignment-addedit', component : AssignmentAddeditComponent},
      { path : 'assignment-details', component : AssignmentDetailsComponent},
      { path : 'payment', component : PaymentsComponent},
      { path : 'cards', component : CardsComponent},
      { path : 'inbox', component : InboxComponent},
      { path : 'profile', component : ProfileComponent},
];