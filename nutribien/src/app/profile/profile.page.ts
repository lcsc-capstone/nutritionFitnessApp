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
    this.storage.get("fname").then((data)=>{
      this.fName = data;
    });
    this.storage.get("image").then((data)=>{
      console.log(data);
      if (data == null){
        this.pic = "https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png";
      }else{
        this.pic = data;
      }
    });
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
  settings(){
    this.router.navigate(['setting']);
  }

 

  ngOnInit() {
  }

}
