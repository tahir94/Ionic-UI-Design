import { Component,ViewChild } from '@angular/core';
import { Platform,Nav,MenuController,ToastController,Loading } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActionSheetController } from 'ionic-angular';

// camera plugins imports
import { Camera, CameraOptions, DestinationType } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

declare var cordova: any;

@Component({
	templateUrl: 'app.html',
})
export class MyApp {
	public base64Image : string;
	isProfileImg : boolean = true;
	isCameraImg : boolean = false;
	lastImage: string = null;
	loading: Loading;
	isHomeNav: any = true;
	isHomePage : boolean = false;

//   isHomeNav  : boolean;
  @ViewChild(Nav) nav: Nav;

  rootPage : any = HomePage;
  pages : Array<{title: string, component: any}>


  constructor(public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController,private transfer: Transfer, private file: File, private filePath: FilePath,private camera: Camera,private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menu : MenuController) {

	// used for an example of ngFor and navigation
    this.pages = [
		// { title: 'List', component: ListPage }
	  ];
	//   this.isHomeNav = true;








	
	platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openCamera(){
	console.log('camera clicked');
	
	let actionSheet = this.actionSheetCtrl.create({
		title: 'Select Image Source',
		// cssClass: 'action-sheets-basic-page',
		buttons: [
		  {
			text: 'Load from Library',
			role: 'destructive',
			// icon: !this.platform.is('ios') ? 'trash' : null,
			handler: () => {
				// this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
			}
		  },
		  {
			text: 'Use Camera',
			// icon: !this.platform.is('ios') ? 'share' : null,
			handler: () => {
				this.takePicture();
			}
		  },
		  {
			text: 'Cancel',
			role: 'cancel'
		  }
		] 
	  });
	  actionSheet.present();
	}
	takePicture (){
		console.log('camera open');
		this.camera.getPicture({
			destinationType : this.camera.DestinationType.DATA_URL,
			targetWidth : 100,
			targetHeight : 100
		}).then((imageData)=>{
		
		   this.base64Image = 'data:image/jpeg;base64,' + imageData;
			this.isProfileImg = false;
			this.isCameraImg = true;
		}),(err)=>{
			console.log(err);
		}
	}
	// const options: CameraOptions = {
	// 	quality: 100,
	// 	destinationType: this.camera.DestinationType.DATA_URL,
	// 	encodingType: this.camera.EncodingType.JPEG,
	// 	mediaType: this.camera.MediaType.PICTURE
	//   }
	  
// 	  this.camera.getPicture(options).then((imageData) => {
// 		  console.log('image data !!!',imageData)
// 	//    imageData is either a base64 encoded string or a file URI
// 	//    If it's base64:
// 	   let base64Image = 'data:image/jpeg;base64,' + imageData;
// 	   console.log(base64Image);
// 	   if(this.platform.is('android') && DestinationType === this.camera.PictureSourceType.PHOTOLIBRARY)
// 		this.filePath.resolveNativePath(imageData)
// 		.then(filePath =>{
// 			let correctPath = filePath.substr(0,filePath.lastIndexOf('/' + 1));
// 			let currentName = imageData.substring(imageData.lastIndexOf('/') + 1,imageData.lastIndexOf('?'));
// 			// this.copy
// 		})
// }, (err) => {
// 	   // Handle error
// 	  });



  
// public takePicture(sourceType) {
//   // Create options for the Camera Dialog
//   var options = {
//     quality: 100,
//     sourceType: sourceType,
//     saveToPhotoAlbum: false,
//     correctOrientation: true
//   };
 
//   // Get the data of an image
//   this.camera.getPicture(options).then((imagePath) => {
//     // Special handling for Android library
//     if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
//       this.filePath.resolveNativePath(imagePath)
//         .then(filePath => {
//           let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
//           let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
//           this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
//         });
//     } else {
//       var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
//       var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
//       this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
//     }
//   }, (err) => {
//     this.presentToast('Error while selecting image.');
//   });
// }

// Copy the image to a local folder
// private copyFileToLocalDir(namePath, currentName, newFileName) {
// 	this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
// 	  this.lastImage = newFileName;
// 	}, error => {
// 	  this.presentToast('Error while storing file.');
// 	});
//   }
//   private presentToast(text) {
// 	let toast = this.toastCtrl.create({
// 	  message: text,
// 	  duration: 3000,
// 	  position: 'top'
// 	});
// 	toast.present();
//   }

  

// Create a new name for the image
// private createFileName() {
//   var d = new Date(),
//   n = d.getTime(),
//   newFileName =  n + ".jpg";
//   return newFileName;
// }
// // Always get the accurate path to your apps folder
// public pathForImage(img) {
// 	if (img === null) {
// 	  return '';
// 	} else {
// 	  return cordova.file.dataDirectory + img;
// 	}
// }
// demo(){
// 	this.menu.swipeEnable(false);
// }
closeMenu(){
	console.log('closeed');
	this.isHomeNav = true;
	this.menu.close();
	this.isHomePage  = true;	
}
  openPage(page) {
	  console.log("openPage");	
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  signout(){
	  this.nav.setRoot(LoginPage)
  }
}


