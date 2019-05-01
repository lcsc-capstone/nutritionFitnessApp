import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RegistrationValidator, PhoneValidator, PasswordValidator } from '../validators/registration';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { ImageProvider } from '../register/image';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  public phone: any;
  public email: any;
  public password: any;
  public height: number;
  public idnum: any;
  public fname: any;
  public lname: any;
  public bday: any;
  public ft: number;
  public inch: number;
  public image: any;
  public _id: any;
  public thumbnail		     : any;
  public success: boolean = false;
  public newHeight; any;
  public feet : any[] = [];
  public inches : any[] = [];
  

  
  public items : Array<any>;

  private _HOST : string 			=	"http://18.191.160.170:5000/"; //for actual server
  //private _HOST : string       =  "http://127.0.0.1:5000/";  //for testing in simulator 

  constructor(
    private router: Router,
    private _HTTP: HttpClient,
    private formBuilder: FormBuilder,
    private actionSheetController: ActionSheetController,
    private imageProvider: ImageProvider,
    private _TOAST       : ToastController,
    private storage: Storage) {
      for (let num = 2; num < 10; num++){
        this.feet.push(num)
      }
      for (let num = 0; num < 12; num++){
        this.inches.push(num)
      }
      console.log(this.feet);
    }



  ionViewDidEnter(){
    this.storage.get("phone").then((data)=>{
      this.phone = data;
    });
    this.storage.get("email").then((data)=>{
      this.email = data;
    });
    this.storage.get("height").then((data)=>{
      this.height = data;
      this.ft = Math.floor(this.height / 30.48);
      console.log(this.height);
      let rem = this.height - 30.48 * this.ft;
      this.inch = Math.floor(rem / 2.54);
    });
    this.storage.get("fname").then((data)=>{
      this.fname = data;
    });
    this.storage.get("lname").then((data)=>{
      this.lname = data;
    });
    this.storage.get("idnum").then((data)=>{
      this.idnum = data;
    });
    this.storage.get("bday").then((data)=>{
      this.bday = data;
    });
    this.storage.get("image").then((data)=>{
      this.image = data;
    });
    this.storage.get("password").then((data)=>{
      this.password = data;
    });
    this.storage.get("_id").then((data)=>{
      this._id = data;
    });

  }

  settingForm = this.formBuilder.group({
    PhoneNumber: new FormControl(''),
    EmailAddress: new FormControl(''),
    Feet: new FormControl(''),
    Inches: new FormControl(''),
    Thumbnail: new FormControl (''),
    Password: new FormControl(''),
    ConformPassword: new FormControl('')
    });

    async getPhoto() {
      const actionSheet = await this.actionSheetController.create({
        header: "Select Image source",
          buttons: [{
            text: 'Load from Library',
            handler: () =>  {
              this.selectImage();
            }
          },
                {
                    text: 'Use Camera',
                    handler: () =>{
                        this.takePhotograph();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        await actionSheet.present();
    }
     
    takePhotograph() : void
     {
        this.imageProvider
        .takePhotograph()
        .then((image)=>
        {
           this.thumbnail   	= image.toString();
           this.image   		= image.toString();
        })
        .catch((err)=>
        {
           console.log(err);
        });
     }
  
     selectImage() : void
     {
        this.imageProvider
        .selectPhotograph()
        .then((image)=>
        {
           this.thumbnail   	= image.toString();
           this.image   		= image.toString();
        })
        .catch((err)=>
        {
           console.log(err);
        });
     }
     
     convertion(){
      let feet = this.settingForm.value.Feet;
      let inches = this.settingForm.value.Inches;
      this.newHeight = (feet * 30.48) + (inches * 2.54)
      return this.newHeight
    }
  
  
    submit()
    {

        
      
      let phone = 0,
          email = "",
          password ="",
          height = 0,
          image = "",
          thumbnail = "";
      if (this.settingForm.value.PhoneNumber == 0){
        phone = this.phone
      }else{
        phone        = this.settingForm.value.PhoneNumber
      }
      if (this.settingForm.value.EmailAddress == ""){
        email = this.email
      }else{
        email      = this.settingForm.value.EmailAddress
      }
      if (this.settingForm.value.Password == ""){
        password = this.password
      }else{
        password    = this.settingForm.value.Password
      }
      if (this.settingForm.value.Feet == 0){
        height = this.height
      }else{
        height    = this.convertion()
      }
      if (this.settingForm.value.Thumbnail == ""){
        image = this.image,
        thumbnail    = this.image
      }else{
        image    = this.settingForm.value.Thumbnail,
       thumbnail    = this.settingForm.value.Thumbnail
      }
      let headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options     = { idnum : this.idnum, fName : this.fname, lName : this.lname, phone : phone, email : email, password : password, height : height, birthday : this.bday, image: image, thumbnail : thumbnail },
      url         = this._HOST + "api/nutriFit.profile";
  
      this._HTTP
           .put(url + '/' + this._id, options, {headers: headers}) //different from tutorial so error goes away
           .subscribe((data : any) =>
           {
              // If the request was successful clear the form of data
              // and notify the user
              this.clearForm();
              this.displayNotification('Account Updated');
              //this.clearForm();
           },
           (error : any) =>
           {
              console.dir(error);
           });
           this.router.navigate(['/profile']);
           this.success = true;

           this.storage.clear();
           this.storage.set("idnum", this.idnum),
           this.storage.set("fname",  this.fname),
           this.storage.set("lname",  this.lname),
           this.storage.set("phone",  phone),
           this.storage.set("email",  email),
           this.storage.set("password",  password),
           this.storage.set("bday",  this.bday),
           this.storage.set("height",  height),
           this.storage.set("image", image),
           this.storage.set("_id", thumbnail)
           this.success = true;
           if (this.success){
            this.storage.clear();
           }
    }
    clearForm() : void
   {
    this.idnum  = 0;
    this.fname    = "";
    this.lname       = "";
    this.phone        = "";
    this.email      = "";
    this.password    = "";
    this.height    = 0;
    this.bday    = "";
    this.image    = "";
    this.thumbnail    = "";
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

   back(){
    this.router.navigate(['/profile']);
   }

  ngOnInit() {
  }

}
