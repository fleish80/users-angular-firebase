import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';

class PhoneFormField {
  constructor(public area: string, public phone: string) {}
}

@Component({
  selector: 'app-phone-form-field',
  templateUrl: './phone-form-field.component.html',
  styleUrls: ['./phone-form-field.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: PhoneFormField}],
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

  constructor() { }

  setDescribedByIds(ids: string[]): void {
    throw new Error("Method not implemented.");
  }
  onContainerClick(event: MouseEvent): void {
    throw new Error("Method not implemented.");
  }

  


}
