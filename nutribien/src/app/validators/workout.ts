import { FormControl } from '@angular/forms';

export class WorkoutValidator {

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