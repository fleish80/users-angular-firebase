import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, forwardRef, HostBinding, Injector, OnInit } from '@angular/core';
import {
  AbstractControl, FormBuilder,
  FormControl, FormGroup, NgControl,
  NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators
} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
import { UserValidators } from '../user-validators/user-validators';

class PhoneFormField {
  constructor(public area: string, public phone: string) { }
}

@Component({
  selector: 'app-phone-form-field',
  templateUrl: './phone-form-field.component.html',
  styleUrls: ['./phone-form-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneFormFieldComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneFormFieldComponent),
      multi: true
    },
    { provide: MatFormFieldControl, useExisting: PhoneFormFieldComponent }
  ]
})
export class PhoneFormFieldComponent implements MatFormFieldControl<PhoneFormField>, Validator, OnInit {
  ngControl: NgControl;
  get value(): PhoneFormField {
    const { value: { area, phone } } = this.form;
    return new PhoneFormField(area, phone);
  }
  set value(phoneFormField: PhoneFormField | null) {
    const { area, phone } = phoneFormField || new PhoneFormField('', '');
    this.form.setValue({ area, phone });
    this.stateChanges.next();
  }

  stateChanges = new Subject<void>();
  id = 'phone';
  placeholder: string;
  focused = false;
  get empty() {
    let ans = true;
    if (this.form) {
      const { value: { area, phone } } = this.form;
      ans = !area && !phone;
    }
    return ans;
  }
  get shouldLabelFloat() { return this.focused || !this.empty; }
  required: boolean;
  disabled = false;
  errorState: boolean;

  @HostBinding('class.float') get float() {
    return this.shouldLabelFloat;
  }
  form: FormGroup;
  areaCtrl: FormControl;
  phoneCtrl: FormControl;

  constructor(private fb: FormBuilder,
    private fm: FocusMonitor, private elRef: ElementRef<HTMLElement>,
    public injector: Injector) {
    this.initForm();

    fm.monitor(elRef, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
    if (this.ngControl != null) { this.ngControl.valueAccessor = this; }
  }

  private initForm() {
    this.areaCtrl = new FormControl(null, [
      Validators.minLength(2),
      Validators.maxLength(3),
      UserValidators.digitsOnly(),
      UserValidators.beginWithZero()
    ]);
    this.phoneCtrl = new FormControl(null, [
      Validators.minLength(7),
      Validators.maxLength(7),
      UserValidators.digitsOnly(),
      UserValidators.notBeginWithZero(),
    ]);
    this.form = this.fb.group({
      area: this.areaCtrl,
      phone: this.phoneCtrl
    }, {validator: UserValidators.requiredIfHasValue('area', 'phone')});
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

  validate(control: AbstractControl): ValidationErrors {
    this.errorState = false;
    if (this.form.invalid) {
      this.errorState = true;
      let ans = {
        area: null,
        phone: null
      }
      if (this.areaCtrl.errors) {
        ans.area = this.areaCtrl.errors;
      } else if (this.phoneCtrl.errors) {
        ans.phone = this.phoneCtrl.errors;
      }
      return ans;
    }
    return null;
  }

}
