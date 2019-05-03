import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class  LoginPage {

  public Email: any;
  public Password: any;
  public success: boolean = false;
  private _HOST : string 			=	"http://18.191.160.170:5000/"; //for actual server
  //private _HOST : string       =  "http://127.0.0.1:5000/";  //for testing in simulator 
  
  public items : Array<any>;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST       : ToastController,
    private storage: Storage
    //private actionSheetController: ActionSheetController,
    //private navParams: NavParams
    ){}


    ionViewDidEnter() : void
   {
      this.retrieve();
      
   }


  loginForm = this.formBuilder.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  login(){
    this.storage.clear();
    let Email    = this.loginForm.value.email,
        Password    = this.loginForm.value.password
       
    for(let i=0; i<this.items.length; i++){
      if(Email == this.items[i].EMAIL && Password == this.items[i].PASSWORD){
          this.storage.set("idnum", this.items[i].ID_NUM),
          this.storage.set("fname",  this.items[i].FIRSTNAME),
          this.storage.set("lname",  this.items[i].LASTNAME),
          this.storage.set("phone",  this.items[i].PHONE),
          this.storage.set("email",  this.items[i].EMAIL),
          this.storage.set("password",  this.items[i].PASSWORD),
          this.storage.set("bday",  this.items[i].DATE_OF_BIRTH),
          this.storage.set("height",  this.items[i].HEIGHT),
          this.storage.set("image", this.items[i].PICTURE),
          this.storage.set("_id", this.items[i]._id)
          this.success = true;
      }
    }
    if(this.success){
      this.router.navigate(['profile']);
      this.displayNotification('Successfully Logged in');
    }else{
      this.displayNotification('Login Failed');
    }
    
  }

  displayNotification(message : string) : void
  {
     let toast = this._TOAST.create({
        message 	: message,
        duration 	: 3000
     }).then((toastData)=>{
       toastData.present();
     });
  }
  retrieve() : void
   {
      this._HTTP
      .get(this._HOST + "api/nutriFit.profile")
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         this.items = data.records;
         
      },
      (error : any) =>
      {
         console.dir(error);
      });
   }


  signUp()
  {
    this.router.navigate(['register']);
  }
}

