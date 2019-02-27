import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseProvider } from './../../../../NutriBien/src/app/database';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class  RegisterPage {

  data = {lastName: "", firstName: "", phoneNumber: 0, emailAddress: "", password: "", birthday: "", height: 0}

  constructor(private router: Router,
    private sqlite: SQLite,
    public database: DatabaseProvider){}


  registerData(){
    this.sqlite.create({
      name: 'nutri.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO CUSTOMER_PROFILE VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)', [this.data.lastName,this.data.firstName,this.data.phoneNumber,this.data.birthday,this.data.height,this.data.emailAddress, this.data.password])
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }
}

