import { Component,ViewChild } from '@angular/core';
import { Platform,Nav,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menu : MenuController) {

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

