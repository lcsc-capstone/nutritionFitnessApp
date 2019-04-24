import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavParams, ToastController, Platform, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistrationValidator, PhoneValidator, PasswordValidator } from '../validators/registration';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ImageProvider } from './image';



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

  private _HOST : string 			=	"http://127.0.0.1:8080/";

  constructor(
    private camera: Camera, 
    private file: File,
    private formBuilder: FormBuilder,
    private _HTTP: HttpClient,
    private actionSheetController: ActionSheetController,
    private platform: Platform,
    private filePath: FilePath,
    private imageProvider: ImageProvider){}

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
    let  idnum  = 567,
    fName    = this.registerForm.value.FirstName,
    lName       = this.registerForm.value.LastName,
    phone        = this.registerForm.value.PhoneNumber,
    email      = this.registerForm.value.EmailAddress,
    password    = this.registerForm.value.Password,
    height    = this.registerForm.value.Height,
    birthday    = this.registerForm.value.Birthday,
    image    = this.registerForm.value.Thumbnail,
    thumbnail    = this.registerForm.value.Thumbnail,
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
  ngOnInit() {}
}

