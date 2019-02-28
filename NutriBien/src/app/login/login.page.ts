import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseProvider } from './../../../../NutriBien/src/app/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class  LoginPage {
  constructor(private router: Router,
    public database: DatabaseProvider){}

  ionViewDidLoad() {
    this.database.createDbFile();
  }

  ionViewWillEnter() {
    this.database.createDbFile();
  }

  signUp(){
    this.router.navigate(['register']);
  }
}
