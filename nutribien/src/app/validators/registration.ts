import { AbstractControl, ValidatorFn, FormControl, FormGroup } from '@angular/forms';
import libphonenumber from 'google-libphonenumber';

export class PhoneValidator {
   static validCountryPhone = (countryControl: AbstractControl): ValidatorFn => {
   let subscribe: boolean = false;

   return (phoneControl: AbstractControl): {[key: string]: boolean} => {
     if (!subscribe) {
       subscribe = true;
       countryControl.valueChanges.subscribe(() => {
         phoneControl.updateValueAndValidity();
       });
     }
     if(phoneControl.value !== ""){
       try{
         const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
         let phoneNumber = "" + phoneControl.value + "",
             region = countryControl.value.iso,
             number = phoneUtil.parse(phoneNumber, region),
             isValidNumber = phoneUtil.isValidNumber(number);
         if(isValidNumber){
           return null;
         }
       }catch(e){
         return {
           validCountryPhone: true
         };
       }
       return {
         validCountryPhone: true
       };
     }
     else{
       return null;
     }
   };
 };
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