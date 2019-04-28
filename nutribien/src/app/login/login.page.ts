import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class  LoginPage {

  public Email: any;
  public Password: any;
  private _HOST : string 			=	"http://18.191.160.170:5000/"; //for actual server
  //private _HOST : string       =  "http://127.0.0.1:5000/";  //for testing in simulator 
  
  public items : Array<any>;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _HTTP: HttpClient,
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
    let Email    = this.loginForm.value.email,
        Password    = this.loginForm.value.password
    for(let i=0; i<this.items.length; i++){
      if(Email == this.items[i].EMAIL && Password == this.items[i].PASSWORD){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            "idnum": this.items[i].ID_NUM,
            "fname":  this.items[i].FIRSTNAME,
            "lname":  this.items[i].LASTNAME,
            "phone":  this.items[i].PHONE,
            "email":  this.items[i].EMAIL,
            "password":  this.items[i].PASSWORD,
            "bday":  this.items[i].DATE_OF_BIRTH,
            "height":  this.items[i].HEIGHT,
            "image": this.items[i].PICTURE,
            "thumbnail": this.items[i].THUMBNAIL
          }
        };
        this.router.navigate(['/profile'], navigationExtras);
      }
    }
    
    
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

