import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    if (this.form.valid) {
      console.log('form submitted');
    }
  }

  private initForm() {
    this.firstNameCtrl = new FormControl(null, [Validators.required]);
    this.lastNameCtrl = new FormControl(null, [Validators.required]);
    this.phoneNumberCtrl = new FormControl(null);

    this.form = this.fb.group({
      firstName: this.firstNameCtrl,
      lastName: this.firstNameCtrl,
      phoneNumber: this.phoneNumberCtrl
    })
  }
}
