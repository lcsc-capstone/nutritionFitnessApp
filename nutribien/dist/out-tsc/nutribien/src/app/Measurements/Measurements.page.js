var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
//import { Router } from '@angular/router';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
//import { DatabaseProvider } from '../database';
//import { Toast } from '@ionic-native/toast/ngx';
//import { NavController, MenuController } from '@ionic/angular'; 
//import { LoginPage } from '../login/login.page';
var MeasurementsPage = /** @class */ (function () {
    function MeasurementsPage() {
    }
    MeasurementsPage = __decorate([
        Component({
            selector: 'app-Measurements',
            templateUrl: 'Measurements.page.html',
            styleUrls: ['Measurements.page.scss']
        })
    ], MeasurementsPage);
    return MeasurementsPage;
}());
export { MeasurementsPage };
/*
export class MenuExample {

constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
*/ 
//# sourceMappingURL=Measurements.page.js.map