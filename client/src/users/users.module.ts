import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [UsersComponent, RegistrationComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
