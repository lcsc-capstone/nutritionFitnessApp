import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistrationValidator, PhoneValidator, PasswordValidator } from '../validators/registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {

  private _HOST : string 			=	"http://127.0.0.1:8080/";

  constructor(private formBuilder: FormBuilder,
    private _HTTP: HttpClient){}

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
    Password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
   ])),
    Birthday: new FormControl ('', Validators.required),
    ConformPassword: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);   
    });

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
    headers     = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options     = { idnum : idnum, fName : fName, lName : lName, phone : phone, email : email, password : password, height : height, birthday : birthday },
    url         = this._HOST + "api/nutriFit.profile";

    this._HTTP
         .post(url, options, {headers: headers}) //different from tutorial so error goes away
         .subscribe((data : any) =>
         {
            // If the request was successful clear the form of data
            // and notify the user
            console.log('New entry was successfully created');
         },
         (error : any) =>
         {
            console.dir(error);
         });

    
  }
  ngOnInit() {}
}

