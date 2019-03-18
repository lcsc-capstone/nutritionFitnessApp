import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseProvider } from '../database';
import { Toast } from '@ionic-native/toast/ngx';
import { NavController } from '@ionic/angular'; 
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-Measurements',
  templateUrl: 'Measurements.page.html',
  styleUrls: ['Measurements.page.scss']
})

export class  MeasurementsPage {
  
  data = {ID_NUM: 1, NECK: 1, HIPS: 1, THIGHS: 1, BELLY: 1, BICEP: 1}

  constructor(private router: Router,
    private sqlite: SQLite,
    public database: DatabaseProvider,
    private toast: Toast,
    public navCtrl: NavController){}


  MeasurementsData(){
    this.sqlite.create({
      name: 'nutri.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO CUSTOMER_PROFILE VALUES (NULL, ?, ?, ?, ?, ?, ?)', [this.data.ID_NUM,this.data.NECK,this.data.HIPS,this.data.THIGHS,this.data.BELLY,this.data.BICEP])
      .then(res => {
        console.log(res);
        this.toast.show('Successfully', '5000', 'center').subscribe(
          toast => {
            this.router.navigate(['profile'])
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

@Component({
  selector: 'Measurements.module.ts',
  templateUrl: 'Measurements.page.html',
  styleUrls: ['./Measurements.page.scss'],
})
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


