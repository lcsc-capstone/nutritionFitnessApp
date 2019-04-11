var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var WorkoutPage = /** @class */ (function () {
    function WorkoutPage() {
        this.showDistance = false;
    }
    WorkoutPage.prototype.changeSport = function () {
        //console.log(this.sport)
        if (this.sport == "Swimming" || this.sport == "Running" || this.sport == "Hiking" || this.sport == "Biking" || this.sport == "Walking") {
            this.showDistance = true;
        }
    };
    WorkoutPage = __decorate([
        Component({
            selector: 'app-Workout',
            templateUrl: 'Workout.page.html',
            styleUrls: ['Workout.page.scss']
        })
    ], WorkoutPage);
    return WorkoutPage;
}());
export { WorkoutPage };
//# sourceMappingURL=Workout.page.js.map