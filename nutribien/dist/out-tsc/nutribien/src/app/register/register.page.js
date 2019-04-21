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
import * as express from 'express';
import * as db from './../../../../database';
var STORAGE_KEY = 'my_images';
var profile = db.default.PROFILE;
var RegisterPage = /** @class */ (function () {
    function RegisterPage() {
        //data = {lastName: "", firstName: "", phoneNumber: 0, emailAddress: "", password: "", birthday: "", height: 0}
        //images = [];
        this.path = '/app/register';
        this.router = express.Router();
        this.createProfile = function (request, response) {
            var registerData = request.body;
            var createdProfile = new profile(registerData);
            createdProfile.save()
                .then(function (savedRegister) {
                response.send(savedRegister);
            });
        };
        this.initializeRoutes();
    }
    RegisterPage.prototype.initializeRoutes = function () {
        this.router.post(this.path, this.createProfile);
    };
    RegisterPage = __decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map