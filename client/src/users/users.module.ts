import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [UsersComponent, RegistrationComponent, ListComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
