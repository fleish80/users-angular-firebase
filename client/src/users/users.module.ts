import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {MatButtonModule} from '@angular/material';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [UsersComponent, RegistrationComponent, UsersListComponent],
  imports: [
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
