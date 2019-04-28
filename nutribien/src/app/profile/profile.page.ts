import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
   public fName: any;
   public pic: any;

   public constructor(
    private router: Router,
    private storage: Storage) {
  }
  ionViewDidEnter(){
    this.fName = this.storage.get("fname");
    this.pic = this.storage.get("image");
  }
  workout(){
    this.router.navigate(['workout']);
  }
  measurements(){
    this.router.navigate(['measurements']);
  }
  nutrition(){
    this.router.navigate(['nutrition']);
  }

 

  ngOnInit() {
  }

}
