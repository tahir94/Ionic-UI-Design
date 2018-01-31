import { Component,ViewChild } from '@angular/core';
import { NavController,MenuController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	// @ViewChild(Nav) nav: Nav;
	isHomeNav : boolean = true;
  constructor(public navCtrl: NavController,private menu: MenuController) {
console.log('home log');

  }
  closeMenu(){
	  this.isHomeNav = false;
  }

}
