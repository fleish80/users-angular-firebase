import { Pipe } from "@angular/core";

@Pipe({
    name: 'error-key'
})
export class ErrorKeyPipe {
    transform(obj) {
        var keys = Object.keys(obj);
        if (keys && keys.length>0) {
          return keys[0];
        }
        return null;
      }
}