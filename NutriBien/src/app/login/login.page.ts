import { Component} from '@angular/core';
import { Router } from '@angular/router';
//import { DatabaseProvider } from '../database';



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

