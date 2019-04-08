import { Component, OnInit } from '@angular/core';
import * as express from 'express';
import { }
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { NavController } from '@ionic/angular'; 
import { ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
 
import { finalize } from 'rxjs/operators';
import { LoginPage } from '../login/login.page';

import * as mongodb from 'mongodb';


const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class  RegisterPage {
  
  //data = {lastName: "", firstName: "", phoneNumber: 0, emailAddress: "", password: "", birthday: "", height: 0}
  //images = [];
  data = {lastName: "", firstName: "", phoneNumber: 0, emailAddress: "", password: "", birthday: "", height: 0}
  constructor(){
  }
/////MONGO CONNECTION AND PUSH/////
/*public lastName: string;
public firstName: string;
public phoneNumber: number;
public emailAddress: string;
public password: string;
public birthday: string;
public height: number;*/
  
  submit()
  {

    function createPost(request: express.Request, response: express.Response) {
      const postData: Post = request.body;
      const createdPost = new postModel(postData);
      createdPost.save()
        .then(savedPost => {
          response.send(savedPost);
        })
    }
    /*const uri = "mongodb+srv://nutri:<bien>@nutrition-fitness-app-dsodq.gcp.mongodb.net/admin?retryWrites=true";
    const client = new mongodb.MongoClient(uri, { useNewUrlParser: true });
    client.connect(async(_err: any) => {
      const nutri = client.db("nutritionFitnessApp");
      console.log("connected to Mongo, whohoo!");
      // perform actions on the collection object
      await nutri.collection('PROFILE').insertMany([
        {LASTNAME: this.data.lastName},
        {FIRSTNAME: this.data.firstName},
        {PHONE: this.data.phoneNumber},
        {EMAIL: this.data.emailAddress},
        {PASSWORD: this.data.password},
        {DATE_OF_BIRTH: this.data.birthday},
        {HEIGHT: this.data.height}
      ]);
      client.close();
    });*/
  }
  

  /*registerData(){
    this.sqlite.create({
      name: 'nutri.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO CUSTOMER_PROFILE VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)', [this.data.lastName,this.data.firstName,this.data.phoneNumber,this.data.birthday,this.data.height,this.data.emailAddress, this.data.password])
      .then(res => {
        console.log(res);
        this.toast.show('Successfully Rrgistered', '5000', 'center').subscribe(
          toast => {
            this.router.navigate(['login'])
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
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }
 
  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () =>  {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }]
      });
    await actionSheet.present();
  }
  
  takePicture(sourceType: PictureSourceType) {
      var options: CameraOptions = {
          quality: 100,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          correctOrientation: true
      };
  
      this.camera.getPicture(options).then(imagePath => {
          if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
              this.filePath.resolveNativePath(imagePath)
                  .then(filePath => {
                      let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                      let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                      this.createFileName();
                  });
          } else {
              var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
              this.createFileName();
          }
      });
  
  }
  createFileName() {
      var d = new Date(),
          n = d.getTime(),
          newFileName = n + ".jpg";
      return newFileName;
  }*/
}

