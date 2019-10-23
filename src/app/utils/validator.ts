import { AbstractControl } from '@angular/forms';

export class MyValidators {

    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        console.log('value', value);
        if (value > 100) {
            return {
                price_invalid: true
            };
        }
        return null;
    }

}