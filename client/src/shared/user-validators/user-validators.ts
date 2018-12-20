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

    static requiredIfHasValue(otherControlName: string) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const formGroup: FormGroup = control.parent as FormGroup;
            if (formGroup) {
                const otherControl = formGroup.controls[otherControlName];
                const ans = !control.value && !!otherControl && !!otherControl.value;
                if (!ans) {
                    otherControl.updateValueAndValidity({emitEvent: false});
                }
                return ans ? { RequiredIfHasValue: true } : null;
            } else {
                return null;
            }
        }
    }

}