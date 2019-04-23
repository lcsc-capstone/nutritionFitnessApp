import { Component} from '@angular/core';
import { Router } from '@angular/router';
//import { DatabaseProvider } from '../database';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './../app.module';
import {enableProdMode} from "@angular/core";

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class  LoginPage {
  constructor(private router: Router){}
  signUp()
  {
    this.router.navigate(['register']);
  }
}

