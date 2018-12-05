import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../usert';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  firstNameCtrl: FormControl;
  lastNameCtrl: FormControl;
  phoneNumberCtrl: FormControl;
  streetCtrl: FormControl;
  houseCtrl: FormControl;
  cityCtrl: FormControl;

  private usersCollection: AngularFirestoreCollection<User>;


  constructor(private fb: FormBuilder,
    private afs: AngularFirestore) {
      this.usersCollection = afs.collection<User>('users');
    }

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    if (this.form.valid) {
      const user: User = {
        areaCode: this.phoneNumberCtrl.value && this.phoneNumberCtrl.value.area,
        city: this.cityCtrl.value,
        firstName: this.firstNameCtrl.value,
        houseNumber: this.houseCtrl.value,
        lastName: this.lastNameCtrl.value,
        phoneNumber: this.phoneNumberCtrl.value && this.phoneNumberCtrl.value.phone,
        street: this.streetCtrl.value
      };
      console.log('user', user);
      this.usersCollection.add(user);
    }
  }

  private initForm() {
    this.firstNameCtrl = new FormControl(null, [Validators.required]);
    this.lastNameCtrl = new FormControl(null, [Validators.required]);
    this.phoneNumberCtrl = new FormControl(null);
    this.cityCtrl = new FormControl(null);
    this.streetCtrl = new FormControl(null);
    this.houseCtrl = new FormControl(null);

    this.form = this.fb.group({
      firstName: this.firstNameCtrl,
      lastName: this.lastNameCtrl,
      phoneNumber: this.phoneNumberCtrl,
      city: this.cityCtrl,
      street: this.streetCtrl,
      house: this.houseCtrl
    });
  }
}
