import { Pipe } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Pipe({
    name: 'error-key'
})
export class ErrorKeyPipe {
    transform(obj: ValidationErrors) {
        var keys = Object.keys(obj);
        if (keys && keys.length > 0) {
            return keys[0];
        }
        return null;
    }
}