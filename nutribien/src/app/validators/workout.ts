import { FormControl } from '@angular/forms';

export class WorkoutValidator {

    static isValid(control: FormControl): any {

        if(isNaN(control.value)){
            return {
                "notNum": true
            };
        }

        if(control.value < 0){
            return {
                "negative": true
            };
        }

        if (control.value > 1000){
            return {
                "realistic": true
            };
        }

        return null;
    }

    static isTooBig(control: FormControl): any {

        if(isNaN(control.value)){
            return {
                "notNum": true
            };
        }

        if(control.value < 0){
            return {
                "negative": true
            };
        }

        if (control.value > 10000){
            return {
                "realistic": true
            };
        }

        return null;
    }

}