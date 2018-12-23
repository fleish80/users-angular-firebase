import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ErrorKeyPipe } from './registration/error-key.pipe';

@NgModule({
  declarations: [UsersComponent, RegistrationComponent, UsersListComponent, ErrorKeyPipe],
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  exports: [ErrorKeyPipe]
})
export class UsersModule { }

