import { AbstractControl, ValidatorFn, FormControl, FormGroup } from '@angular/forms';


export class PhoneValidator {

    static isValidMobile(control: FormControl): any {

        let regExp = /^[0-9]{10}$/;
    
        if (!regExp.test(control.value)) {
            return {"invalidMobile": true};
        }
        return null;
    }
}

export class PasswordValidator {
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    static areEqual(formGroup: FormGroup) {
        let val;
        let valid = true;
    
        for (let key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                let control: FormControl = <FormControl>formGroup.controls[key];
                if (val === undefined) {
                    val = control.value
                } else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        }
     }
}

export class RegistrationValidator {

    static isValid(control: FormControl): any {

        if(isNaN(control.value)){
            return {
                "not a number": true
            };
        }

        if(control.value < 0){
            return {
                "no negative values allowed": true
            };
        }

        if (control.value > 1000){
            return {
                "not realistic": true
            };
        }

        return null;
    }

}