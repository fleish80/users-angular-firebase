import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule,
  MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
  MatMenuModule, MatRippleModule, MatSelectModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { environment } from 'src/environments/environment';
import { PhoneFormFieldComponent } from './phone-form-field/phone-form-field.component';
import { ToastMessageComponent } from './toast-message/toast-message.component';

@NgModule({
  declarations: [PhoneFormFieldComponent, ToastMessageComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    ReactiveFormsModule,
    PhoneFormFieldComponent,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ToastMessageComponent
  ],
  providers: [AngularFirestore]
})
export class SharedModule { }
