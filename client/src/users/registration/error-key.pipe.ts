import { Pipe } from "@angular/core";
import { ValidationErrors } from "@angular/forms";
import { errorMessage } from "./error-messages";

@Pipe({
    name: 'errorKey'
})
export class ErrorKeyPipe {
    transform(obj: ValidationErrors, errorMessageKey: string) {
        let ans = null;
        const keys = Object.keys(obj);
        const key = keys && keys.length > 0 && keys[0];
        if (key) {
            ans = errorMessage[errorMessageKey][key];
        }
        return ans;
    }
}