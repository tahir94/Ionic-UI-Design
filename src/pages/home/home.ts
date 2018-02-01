import { Component, Input } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	inputs : ['menuButton']
})
export class HomePage {
	menuButton : boolean;
	// @Input('stringTest') stringTest: any;
	// @ViewChild(Nav) nav: Nav;
	isHomeNav: boolean = true;
	constructor(private menu: MenuController) {
		console.log(this.menuButton)
		setTimeout(() => {
			console.log('home log',this.menuButton);
			if(this.menuButton !== undefined){

				this.isHomeNav = this.menuButton;
			}
		}, 1000);
		 
	}
	closeMenu() {
		this.isHomeNav = false;
		
	}

}
