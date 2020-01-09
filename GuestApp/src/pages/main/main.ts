import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SigninPage} from "../signin/signin";
import {SignupPage} from "../signup/signup";

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  signinUser(){
    this.navCtrl.push(SigninPage);
  }
  sigupUser(){
    this.navCtrl.push(SignupPage);
  }
}
