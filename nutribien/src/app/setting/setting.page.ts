import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  public phone: any;
  public email: any;
  public password: any;
  public height: any;
  public idnum: any;

  constructor(
    private router: Router,
    private storage: Storage) {
      
     }

  ionViewDidEnter(){
    this.phone = this.storage.get("phone");
    this.email = this.storage.get("email");
    this.password = this.storage.get("password");
    this.height = this.storage.get("height");
    this.idnum = this.storage.get("idnum");
  }

  ngOnInit() {
  }

}
