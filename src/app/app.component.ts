import { Component,ViewChild } from '@angular/core';
import { Platform,Nav,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// camera plugins imports
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
@Component({
	templateUrl: 'app.html',
})
export class MyApp {
	isHomeNav: any = true;
	isHomePage : boolean = false;

//   isHomeNav  : boolean;
  @ViewChild(Nav) nav: Nav;

  rootPage : any = HomePage;
  pages : Array<{title: string, component: any}>


  constructor( private transfer: Transfer, private file: File, private filePath: FilePath,private camera: Camera,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menu : MenuController) {

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
	const options: CameraOptions = {
		quality: 100,
		destinationType: this.camera.DestinationType.DATA_URL,
		encodingType: this.camera.EncodingType.JPEG,
		mediaType: this.camera.MediaType.PICTURE
	  }
	  
	  this.camera.getPicture(options).then((imageData) => {
		  console.log('image data !!!',imageData)
	   // imageData is either a base64 encoded string or a file URI
	   // If it's base64:
	   let base64Image = 'data:image/jpeg;base64,' + imageData;
	   console.log(base64Image);
	   
	  }, (err) => {
	   // Handle error
	  });
  }
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
}

