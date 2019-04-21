var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { NutrientsValidator } from './../../../../nutribien/src/app/validators/nutrients';
import * as db from './../../../../database';
var MY_NUTRITION = db.default.NUTRITION;
var NutritionPage = /** @class */ (function () {
    function NutritionPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.id = 73;
        this.nutrition = this.formBuilder.group({
            Proteins: new FormControl('Proteins', Validators.compose([
                Validators.required,
                NutrientsValidator.isValid
            ])),
            Carbs: new FormControl('Carbs', Validators.compose([
                Validators.required,
                NutrientsValidator.isValid
            ])),
            Fats: new FormControl('Fats', Validators.compose([
                Validators.required,
                NutrientsValidator.isValid
            ])),
            Fibers: new FormControl('Fibers', Validators.compose([
                Validators.required,
                NutrientsValidator.isValid
            ])),
            Calories: new FormControl('Calories', Validators.compose([
                Validators.required,
                NutrientsValidator.isValid
            ]))
        });
    }
    NutritionPage.prototype.submit = function () {
        MY_NUTRITION.insertMany([{ ID_NUM: this.id,
                PROTEINS: this.Proteins,
                CARBS: this.Carbs,
                FATS: this.Fats,
                FIBERS: this.Fibers,
                CALORIES: this.Calories }], function (err) {
            console.log("connection error:", err);
        });
        // TESTING THE VARIABLE CONTAIN CORRECT VALUES 
        // console.log(this.Proteins);
        // console.log(this.Fibers); 
    };
    NutritionPage.prototype.ngOnInit = function () { };
    NutritionPage = __decorate([
        Component({
            selector: 'app-nutrition',
            templateUrl: './nutrition.page.html',
            styleUrls: ['./nutrition.page.scss'],
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], NutritionPage);
    return NutritionPage;
}());
export { NutritionPage };
//# sourceMappingURL=nutrition.page.js.map