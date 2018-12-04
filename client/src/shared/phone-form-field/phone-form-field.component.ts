import { Component, OnInit, Optional, Self, Input, HostBinding, ElementRef } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, NgControl, ControlValueAccessor } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';

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
  id: string = 'phone';
  placeholder: string;
  focused: boolean = false;
  empty: boolean = true;
  shouldLabelFloat: boolean;
  required: boolean;
  disabled: boolean = false;
  errorState: boolean;
  controlType?: string;
  autofilled?: boolean = false;

  @HostBinding('class.float') float: boolean = false;
  form: FormGroup;
  areaCtrl: FormControl;
  phoneCtrl: FormControl;

  constructor(private fb: FormBuilder,
    @Optional() @Self() public ngControl: NgControl,
    private fm: FocusMonitor, private elRef: ElementRef<HTMLElement>) { 
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
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
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
}
