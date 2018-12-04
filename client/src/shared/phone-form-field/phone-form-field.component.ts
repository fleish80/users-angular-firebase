import { Component, OnInit, Optional, Self, Input } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, NgControl, ControlValueAccessor } from '@angular/forms';

class PhoneFormField {
  constructor(public area: string, public phone: string) { }
}

@Component({
  selector: 'app-phone-form-field',
  templateUrl: './phone-form-field.component.html',
  styleUrls: ['./phone-form-field.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: PhoneFormFieldComponent }],
})
export class PhoneFormFieldComponent implements ControlValueAccessor, MatFormFieldControl<PhoneFormField>, OnInit {
 
  // value: PhoneFormField;
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

  @Input()
    get value(): PhoneFormField {
        return this.form.value;
    }
    set value(val) {
      if (val) {
        this.form.setValue(val);
      }
    }
  
  // get value(): PhoneFormField | null {
  //   const {value: {area, phone}} = this.form;
  //     return new PhoneFormField(area, phone);
  // }
  // set value(tel: PhoneFormField | null) {
  //   const {area, phone} = tel || new PhoneFormField('', '');
  //   this.form.setValue({area, phone});
  //   this.stateChanges.next();
  // }
  
  form: FormGroup;
  areaCtrl: FormControl;
  phoneCtrl: FormControl;

  constructor(private fb: FormBuilder,
    @Optional() @Self() public ngControl: NgControl) {
    
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.initForm();
  }

  ngOnInit(): void {
    // this.initForm();
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
    // if (value) {
    //   this.form.setValue(value);
    // }
    this.value = value;
    console.log('writeValue', value);
  }
  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
    console.log('registerOnChange');
  }
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
    console.log('registerOnTouched');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
    console.log('setDisabledState');
    
  }




}
