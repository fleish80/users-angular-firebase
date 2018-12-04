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
export class PhoneFormFieldComponent implements MatFormFieldControl<PhoneFormField>, OnInit {
 
  // value: PhoneFormField = new PhoneFormField('053', '9123456');
  stateChanges = new Subject<void>();
  id: string;
  placeholder: string;
  focused: boolean;
  empty: boolean;
  shouldLabelFloat: boolean;
  required: boolean;
  disabled: boolean;
  errorState: boolean;
  controlType?: string;
  autofilled?: boolean;

  
  get value(): PhoneFormField | null {
    const {value: {area, phone}} = this.form;
      return new PhoneFormField(area, phone);
  }
  set value(tel: PhoneFormField | null) {
    const {area, phone} = tel || new PhoneFormField('', '');
    this.form.setValue({area, phone});
    this.stateChanges.next();
  }
  
  form: FormGroup;
  areaCtrl: FormControl;
  phoneCtrl: FormControl;

  constructor(private fb: FormBuilder,
    @Optional() @Self() public ngControl: NgControl) {
    
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.areaCtrl = new FormControl(null);
    this.phoneCtrl = new FormControl(null);
    this.form = this.fb.group({
      area: this.areaCtrl,
      phone: this.phoneCtrl
    });
  }



  setDescribedByIds(ids: string[]): void {
    // throw new Error("Method not implemented.");
  }
  onContainerClick(event: MouseEvent): void {
    // throw new Error("Method not implemented.");
  }

  writeValue(value: PhoneFormField): void {
    if (value) {
      this.form.setValue(value);
    }
    console.log('writeValue', value);
  }
  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }




}
