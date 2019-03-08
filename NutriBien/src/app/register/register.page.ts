import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseProvider } from './../../../../NutriBien/src/app/database';
import { Toast } from '@ionic-native/toast/ngx';
import { NavController } from '@ionic/angular'; 
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class  RegisterPage {
  
  data = {lastName: "", firstName: "", phoneNumber: 0, emailAddress: "", password: "", birthday: "", height: 0}

  constructor(private router: Router,
    private sqlite: SQLite,
    public database: DatabaseProvider,
    private toast: Toast,
    public navCtrl: NavController){}


  registerData(){
    this.sqlite.create({
      name: 'nutri.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO CUSTOMER_PROFILE VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)', [this.data.lastName,this.data.firstName,this.data.phoneNumber,this.data.birthday,this.data.height,this.data.emailAddress, this.data.password])
      .then(res => {
        console.log(res);
        this.toast.show('Successfully Rrgistered', '5000', 'center').subscribe(
          toast => {
            this.router.navigate(['login'])
          }
        );
      })
      .catch(e => {
        console.log(e);
        this.toast.show(e, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
  }).catch(e => {
    console.log(e);
    this.toast.show(e, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  });
  }
}

