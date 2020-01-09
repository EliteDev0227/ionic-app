import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CountrycodeProvider } from '../../providers/countrycode/countrycode';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-phoneinfo',
  templateUrl: 'phoneinfo.html',
})
export class PhoneinfoPage {
  countryCode: any;
  searchTerm: string = '';
  items: any;
  searchControl: FormControl;
  searching: any = false;
  images: any;
  dial_code: any;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController,
     public countryService: CountrycodeProvider
     ) {
      this.countryCode = this.navParams.get('key');
      this.searchControl = new FormControl();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneinfoPage');
    this.setFilteredItem();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItem();
    });
  }
  onSearchInput() {
    this.searching = true;
  }
  close() {
    this.viewCtrl.dismiss(this.countryCode);
  }
  setFilteredItem() {
    this.items = this.countryService.filterItems(this.searchTerm);
    console.log("countries", this.items);
    Object.keys(this.items).map((i) => {
      this.items[i].images = "assets/imgs/flag/" + this.items[i].code.toLowerCase() + ".svg";
    });
  }
  getCountryCode(code) {
    console.log("CountryCode", code);
    localStorage.setItem("CountryCode", code);
    this.countryCode = code;
    this.viewCtrl.dismiss(this.countryCode);
  }
}
