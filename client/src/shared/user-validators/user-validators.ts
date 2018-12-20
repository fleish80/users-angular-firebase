import { ValidatorFn, AbstractControl, FormControl, FormGroup } from "@angular/forms";

export class UserValidators {

    static digitsOnly(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const matched = /^[0-9]*$/.test(control.value);
            return matched ? null : { digitsOnly: true };
        };
    }

    static notBeginWithZero(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const matched = /^[0].*$/.test(control.value);
            return matched ? { notBeginWithZero: true } : null;
        };
    }

    static beginWithZero(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const matched = !control.value || /^[0].*$/.test(control.value);
            return matched ? null : { beginWithZero: true };
        };
    }

    static requiredIfHasValue(controlNameFirst: string, controlNameSecond: string) {
        return (formGroup: FormGroup): { [key: string]: any } | null => {
            const firstCtrl = formGroup.controls[controlNameFirst];
            const secondCtrl = formGroup.controls[controlNameSecond];
            const firstValue = firstCtrl.value;
            const secondValue = secondCtrl.value;
            if (!firstValue && secondValue) {
                firstCtrl.setErrors({ requiredIfHasValue: true })
            }
            if (firstValue && !secondValue) {
                secondCtrl.setErrors({ requiredIfHasValue: true })
            }
            return null;
        }
    }

    static textOnly(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const matched = /^[a-zA-Z\-]*$/.test(control.value);
            return matched ? null : { textOnly: true };
        };
    }

}