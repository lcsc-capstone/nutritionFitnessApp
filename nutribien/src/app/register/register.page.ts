import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavParams, ToastController, Platform, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistrationValidator, PhoneValidator, PasswordValidator } from '../validators/registration';
import { ImageProvider } from './image';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {

  public idnum		     : any;
  public fName		     : any;
  public lName		     : any;
  public phone		     : any;
  public email		     : any;
  public height		     : any;
  public password		     : any;
  public birthday		     : any;
  public image        :any;
  public thumbnail		     : any;
  public items : Array<any>;

  private _HOST : string 			=	"http://18.191.160.170:5000/";

  constructor(
    private formBuilder: FormBuilder,
    private _HTTP: HttpClient,
    private actionSheetController: ActionSheetController,
    private imageProvider: ImageProvider,
    private router: Router){}

    registerForm = this.formBuilder.group({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', Validators.compose([
        Validators.required,
        PhoneValidator.isValidMobile
      ])),
      EmailAddress: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      Height: new FormControl('', Validators.compose([
        Validators.required,
        RegistrationValidator.isValid
      ])),
      Birthday: new FormControl ('', Validators.required),
      Thumbnail: new FormControl ('', Validators.required),
      Password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
     ])),
      ConformPassword: new FormControl('', Validators.required)
      }, (formGroup: FormGroup) => {
        return PasswordValidator.areEqual(formGroup);   
      });

    ionViewDidEnter() : void
    {
        this.retrieve();
    }

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
   
  


  submit()
  {
    let idnum = 0,
        prevID = 0;   
    if (this.items == undefined||this.items.length == 0){
      idnum = 10000;
    }else{
      prevID = this.items[this.items.length-1].ID_NUM;
      idnum  = prevID + 1;
    }
    let fName    = this.registerForm.value.FirstName,
    lName       = this.registerForm.value.LastName,
    phone        = this.registerForm.value.PhoneNumber,
    email      = this.registerForm.value.EmailAddress,
    password    = this.registerForm.value.Password,
    height    = this.registerForm.value.Height,
    birthday    = this.registerForm.value.Birthday,
    image    = this.thumbnail,
    thumbnail    = this.thumbnail,
    headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options     = { idnum : idnum, fName : fName, lName : lName, phone : phone, email : email, password : password, height : height, birthday : birthday, image: image, thumbnail : thumbnail },
    url         = this._HOST + "api/nutriFit.profile";

    this._HTTP
         .post(url, options, {headers: headers}) //different from tutorial so error goes away
         .subscribe((data : any) =>
         {
            // If the request was successful clear the form of data
            // and notify the user
            console.log('New entry was successfully created');
            //this.clearForm();
         },
         (error : any) =>
         {
            console.dir(error);
         });
         this.router.navigate(['/login']);
  }

  clearForm() : void
   {
    this.idnum  = "";
    this.fName    = "";
    this.lName       = "";
    this.phone        = "";
    this.email      = "";
    this.password    = "";
    this.height    = "";
    this.birthday    = "";
    this.image    = "";
    this.thumbnail    = "";
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
  ngOnInit() {}
}

