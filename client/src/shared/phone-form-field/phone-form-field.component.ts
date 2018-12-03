import { Component, OnInit, Optional, Self } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, NgControl } from '@angular/forms';

class PhoneFormField {
  constructor(public area: string, public phone: string) { }
}

@Component({
  selector: 'app-phone-form-field',
  templateUrl: './phone-form-field.component.html',
  styleUrls: ['./phone-form-field.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: PhoneFormFieldComponent }],
})
export class PhoneFormFieldComponent implements MatFormFieldControl<PhoneFormField> {
  value: PhoneFormField;
  stateChanges = new Subject<void>();
  id: string;
  placeholder: string;
  ngControl = null;
  focused: boolean;
  empty: boolean;
  shouldLabelFloat: boolean;
  required: boolean;
  disabled: boolean;
  errorState: boolean;
  controlType?: string;
  autofilled?: boolean;

  form: FormGroup;
  areaCtrl: FormControl;
  phoneCtrl: FormControl;

  constructor(fb: FormBuilder, 
    @Optional() @Self() public ngControl: NgControl) {
    this.areaCtrl = new FormControl(null);
    this.phoneCtrl = new FormControl(null);
    this.form = fb.group({
      area: this.areaCtrl,
      phone: this.phoneCtrl
    });
  }

  setDescribedByIds(ids: string[]): void {
    throw new Error("Method not implemented.");
  }
  onContainerClick(event: MouseEvent): void {
    throw new Error("Method not implemented.");
  }




}
