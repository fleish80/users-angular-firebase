import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastMessageComponent } from '../../shared/toast-message/toast-message.component';
import { User } from '../usert';

export interface UsertId extends User { id: string; }

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
  @HostBinding('class.in') loading = false;
  private usersCollection: AngularFirestoreCollection<User>;
  @ViewChild(ToastMessageComponent)
  private toastMessage: ToastMessageComponent;

  constructor(private fb: FormBuilder,
    private afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>('users');        
  }

  ngOnInit(): void {
    this.initForm();
  }

  async submit() {
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
      this.loading = true;
      try {
        const doc: DocumentReference = await this.usersCollection.add(user);
        const documentSnapshot = await doc.get();
        const addeduser = documentSnapshot.data() as User;
        this.toastMessage.openSuccess(`User ${addeduser.firstName} ${addeduser.lastName} was registred succesfully`);
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    }
  }

  snapshot() {

  }

  private initForm() {
    this.firstNameCtrl = new FormControl(null,
      [Validators.required, Validators.pattern('[a-zA-Z\-]*')]);
    this.lastNameCtrl = new FormControl(null,
      [Validators.required, Validators.pattern('[a-zA-Z\-]*')]);
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

  open() {
    this.toastMessage.openSuccess('some test some test some test some test some test some test');
  }
}
