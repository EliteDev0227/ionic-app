webpackJsonp([20],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedscategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedscatdetails_feedscatdetails__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidemenu_sidemenu__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedscategoryPage = (function () {
    function FeedscategoryPage(navCtrl, navParams, alertCtrl, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.resData = [];
        this.loadingAnimation = "./assets/imgs/loading.gif";
        this.tempImage = "./assets/imgs/logo.png";
    }
    FeedscategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedscategoryPage');
        this.loading = this.loadingCtrl.create({
            content: '',
            spinner: 'bubbles',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.getFeedsData();
    };
    FeedscategoryPage.prototype.getFeedsData = function () {
        var _this = this;
        this.authService.getFeedsInfo().then(function (data) {
            if (data) {
                console.log("Result_data", data);
                _this.resData = data;
                if (_this.loading !== null) {
                    _this.loading.dismiss();
                }
            }
            else {
                if (_this.loading !== null) {
                    _this.loading.dismiss();
                }
                _this.alertCtrl.create({
                    subTitle: 'Error',
                    message: "There is no Data",
                    buttons: ["Ok"]
                }).present();
            }
        }).catch(function (err) {
            console.log("Result_err_feeds", err.message);
            if (_this.loading !== null) {
                _this.loading.dismiss();
            }
        });
    };
    FeedscategoryPage.prototype.viewFeedsCateData = function (id, feeds_data) {
        console.log("Selected_feeds_data", id, feeds_data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__feedscatdetails_feedscatdetails__["a" /* FeedscatdetailsPage */], { feedsCate: feeds_data, cateId: id });
    };
    FeedscategoryPage.prototype.viewHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__sidemenu_sidemenu__["a" /* SidemenuPage */]);
    };
    FeedscategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feedscategory',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\feedscategory\feedscategory.html"*/`<ion-header>\n  <ion-navbar color="custom">\n    <button ion-button (click)="viewHome()">\n      <img src="assets/imgs/menu.png">\n    </button>\n    <ion-title>Feeds Categories</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="row categories-list">\n    <div *ngFor="let category of resData" class="col col-50">\n      <a class="feed-category" (click)="viewFeedsCateData(category.id, category.feed_sources)">\n        <img class="category-image" src="{{category.image}} " alt="" />\n        <div class="category-bg"></div>\n        <span class="category-title">{{category.title}}</span>\n      </a>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\feedscategory\feedscategory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], FeedscategoryPage);
    return FeedscategoryPage;
}());

//# sourceMappingURL=feedscategory.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedscatdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedsentries_feedsentries__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedscatdetailsPage = (function () {
    function FeedscatdetailsPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.resImage = './assets/imgs/feeds/news.jpg';
        this.resData = [];
        this.resData = this.navParams.get('feedsCate');
        this.resDataId = this.navParams.get('cateId');
    }
    FeedscatdetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FeedscatdetailsPage');
        console.log("resdata", this.resData, this.resDataId);
        this.loading = this.loadingCtrl.create({
            content: '',
            spinner: 'bubbles',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 800);
    };
    FeedscatdetailsPage.prototype.viewDetails = function (id) {
        console.log("Selected_id", this.resData[id]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__feedsentries_feedsentries__["a" /* FeedsentriesPage */], { entryData: this.resData[id] });
    };
    FeedscatdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feedscatdetails',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\feedscatdetails\feedscatdetails.html"*/`<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>News Feeds</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-list>\n    <ion-item *ngFor="let res of resData; let idx=index" (click)="viewDetails(idx)">\n      <div class="elencoImg"><img src={{res.image}} alt=""></div>\n      <div class="elencoTxt">\n        <div class="restroName">{{res.title}}</div>\n        <div class="restroDes">{{res.description}}</div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\feedscatdetails\feedscatdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], FeedscatdetailsPage);
    return FeedscatdetailsPage;
}());

//# sourceMappingURL=feedscatdetails.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsentriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedsentriesPage = (function () {
    function FeedsentriesPage(navCtrl, navParams, authService, loadingCtrl, alertCtrl, iab, platform, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.resData = {};
        this.feedsData = [];
        this.postData = [];
        this.resData = navParams.get('entryData');
        console.log("get_entriesData", this.resData);
        if (localStorage.getItem('postData') !== null) {
            this.postData = JSON.parse(localStorage.getItem('postData'));
        }
        else {
            this.postData = [];
        }
    }
    FeedsentriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedsentriesPage');
        this.loading = this.loadingCtrl.create({
            content: '',
            spinner: 'bubbles',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.getFeedsNews();
    };
    FeedsentriesPage.prototype.getFeedsNews = function () {
        var _this = this;
        console.log("url", this.resData.url);
        this.authService.getFeedsDetailsInfo(this.resData.url).then(function (data) {
            if (data) {
                if (_this.loading !== null) {
                    _this.loading.dismiss();
                }
                _this.feedsData = data.rss.channel[0].item;
                console.log("feeds_data", _this.feedsData[0].date, _this.feedsData);
            }
            else {
                if (_this.loading !== null) {
                    _this.loading.dismiss();
                }
                _this.alertCtrl.create({
                    subTitle: "Error",
                    message: "There is no Data",
                    buttons: ["Ok"]
                }).present();
            }
        }).catch(function (err) {
            console.log("Result_news_data", err.message);
            if (_this.loading !== null) {
                _this.loading.dismiss();
            }
        });
    };
    FeedsentriesPage.prototype.doInfinite = function (inifiniteScroll) {
        console.log("Begin async operation");
        setTimeout(function () {
            inifiniteScroll.complete();
        }, 500);
    };
    FeedsentriesPage.prototype.viewPostData = function (id) {
        var _this = this;
        var url = this.feedsData[id].link;
        console.log("MenuId", url);
        if (this.platform.is('android')) {
            var options = "hardwareback=no";
            this.browser = this.iab.create(url, "_blank", options);
        }
        else {
            this.browser = this.iab.create(url, "_blank");
        }
        this.browser.on('exit').subscribe(function (event) {
            console.log("event", event);
            _this.browser.close();
            console.log("Appbrowser closed");
        }, function (error) {
            console.log("error", error);
            _this.browser.close();
        });
    };
    FeedsentriesPage.prototype.bookmarkPost = function (id) {
        var toast = this.toastCtrl.create({
            message: "Post Saved ...",
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log("dismissed Toast");
        });
        toast.present();
        console.log("Posted_save_Data", this.feedsData[id]);
        if (this.postData.length == 0) {
            this.postData.push(this.feedsData[id]);
        }
        else {
            for (var i = 0; i < this.postData.length; i++) {
                if (this.postData[i].title !== this.feedsData[id].title) {
                    this.postData.push(this.feedsData[id]);
                }
            }
        }
        console.log("Save_array", this.postData);
        localStorage.setItem("postData", JSON.stringify(this.postData));
    };
    FeedsentriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feedsentries',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\feedsentries\feedsentries.html"*/`<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>{{resData.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-card *ngFor="let feeds of feedsData let idx=index">\n    <ion-item class="blog_tile">\n      <ion-avatar item-start>\n        <img src="./assets/imgs/blog/blog.png">\n      </ion-avatar>\n      <div class="card_title">{{feeds.title}}</div>\n      <div class="card_sub_title">Published {{feeds.pubDate | amTimeAgo}}</div>\n    </ion-item>\n    <ion-item>\n      <div class="card_content" [innerHTML]="feeds.description"></div>\n    </ion-item>\n    <div class="mainCont">\n      <div class="subCont1" (click)="bookmarkPost(idx)">\n        <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n      </div>\n      <div class="subCont2" (click)="viewPostData(idx)">\n        <button ion-button block small class="confirm_btn">Read more</button>\n      </div>\n    </div>\n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\feedsentries\feedsentries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], FeedsentriesPage);
    return FeedsentriesPage;
}());

//# sourceMappingURL=feedsentries.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkordernotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkordernotesPage = (function () {
    function WorkordernotesPage(navCtrl, navParams, loadingCtrl, alertCtrl, viewCtrl, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.workOrderData = this.navParams.get('subModalData');
        console.log("note_data", this.workOrderData);
    }
    WorkordernotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkordernotesPage');
    };
    WorkordernotesPage.prototype.resize = function () {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    WorkordernotesPage.prototype.confirm = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Syncing...",
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        loading.present();
        this.authService.getWorkOrderUpdate(this.workOrderData.id, this.workOrderData.referalNeeded, this.workOrderData.woWorkDone).then(function (data) {
            console.log("result_update_data", data);
            setTimeout(function () {
                if (loading !== null) {
                    loading.dismiss();
                    _this.viewCtrl.dismiss();
                }
            }, 1000);
        }).catch(function (err) {
            console.log("Error update ---", err.message);
            if (loading !== null) {
                loading.dismiss();
            }
            _this.alertCtrl.create({
                subTitle: "Error!",
                message: err.message,
                buttons: ["Ok"]
            }).present();
        });
    };
    WorkordernotesPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WorkordernotesPage.prototype, "myInput", void 0);
    WorkordernotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workordernotes',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\workordernotes\workordernotes.html"*/`<ion-header>\n  <ion-navbar color="custom">\n    <ion-title style="text-align:center">Job Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="top_content">\n    <img src="assets/imgs/siebert.png" />\n  </div>\n  <div class="mid_content">\n    <ion-item>\n      <!-- <ion-label floating>Details about the maintenance issue you are reporting</ion-label> -->\n      <ion-textarea #myInput id="myInput" rows="12" maxLength="500" (keyup)="resize()" [(ngModel)]="workOrderData.woWorkDone" placeholder="Details about the services performed."></ion-textarea>\n    </ion-item>\n  </div>\n  <div class="bottom_content">\n    <button ion-button round full color="danger" (click)="close()"> Close</button>\n    <button ion-button round full color="mainbtn" (click)="confirm()"> Save Details</button>\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\workordernotes\workordernotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], WorkordernotesPage);
    return WorkordernotesPage;
}());

//# sourceMappingURL=workordernotes.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapsPage = (function () {
    function MapsPage(navCtrl, navParams, nativeGeocoder, geolocation, loadingCtrl, alertCtrl, iab, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.platform = platform;
        this.destination = navParams.get('mapData');
    }
    MapsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapsPage');
        this.loading = this.loadingCtrl.create({
            content: "Loading...",
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.viewMap();
    };
    MapsPage.prototype.viewMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log("viewMap", resp);
            _this.current_lat = resp.coords.latitude;
            _this.current_lng = resp.coords.longitude;
            localStorage.setItem('current_lat', _this.current_lat);
            localStorage.setItem('current_lng', _this.current_lng);
            if (localStorage.getItem('current_lat') !== null || localStorage.getItem('current_lng') !== null) {
                _this.current_lat = localStorage.getItem('current_lat');
                _this.current_lng = localStorage.getItem('current_lng');
                _this.startLatLng = new google.maps.LatLng(_this.current_lat, _this.current_lng);
            }
            else {
                _this.startLatLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            }
            var directionsDisplay;
            var directionsService = new google.maps.DirectionsService();
            directionsDisplay = new google.maps.DirectionsRenderer();
            _this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: _this.startLatLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                // zoomControl: false,
                streetViewControl: false,
            });
            var mapx = _this.map;
            directionsDisplay.setMap(mapx);
            var options = {
                useLocale: true,
                maxResults: 5
            };
            _this.nativeGeocoder.forwardGeocode(_this.destination, options).then(function (coordinates) {
                console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
                _this.des_lat = coordinates[0].latitude;
                _this.des_lng = coordinates[0].longitude;
                _this.endLatLang = new google.maps.LatLng(_this.des_lat, _this.des_lng);
                var bounds = new google.maps.LatLngBounds();
                bounds.extend(_this.startLatLng);
                bounds.extend(_this.endLatLang);
                mapx.fitBounds(bounds);
                var request = {
                    origin: _this.startLatLng,
                    destination: _this.endLatLang,
                    travelMode: google.maps.TravelMode.DRIVING
                };
                var self = _this;
                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        console.log("resdata", response);
                        directionsDisplay.setDirections(response);
                        directionsDisplay.setMap(mapx);
                    }
                    else {
                        alert("Directions request failed due to " + status);
                    }
                });
            }).catch(function (error) {
                _this.alertCtrl.create({
                    subTitle: "Error!",
                    message: error.message,
                    buttons: ["OK"]
                }).present();
            });
            if (_this.loading !== null) {
                _this.loading.dismiss();
            }
        }).catch(function (err) {
            _this.alertCtrl.create({
                subTitle: "Error!",
                message: err.message,
                buttons: ["OK"]
            }).present();
            if (_this.loading !== null) {
                _this.loading.dismiss();
            }
        });
    };
    MapsPage.prototype.navigation = function () {
        var _this = this;
        var url = "https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=" + this.current_lat + "," + this.current_lng + "&destination=" + this.des_lat + "," + this.des_lng;
        if (this.platform.is('android')) {
            var options = "hardwareback=no";
            this.browser = this.iab.create(url, "_blank", options);
        }
        else {
            this.browser = this.iab.create(url, "_blank");
        }
        this.browser.on('exit').subscribe(function (event) {
            console.log("event", event);
            _this.browser.close();
            console.log("Appbrowser closed");
        }, function (error) {
            console.log("error", error);
            _this.browser.close();
        });
    };
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-maps',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\maps\maps.html"*/`<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Maps</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <div id="map" style="height: 100%;width:100%;"></div>\n    <div class="nav-btn">\n      <button ion-button round full color="navbtn" (click)="navigation()">\n        <ion-icon name="map"></ion-icon> &nbsp;&nbsp;&nbsp; Navigation\n      </button>\n    </div>\n  </ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\maps\maps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkorderTextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkorderTextPage = (function () {
    function WorkorderTextPage(navCtrl, navParams, loadingCtr, sms, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtr = loadingCtr;
        this.sms = sms;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.phones = [];
        this.phones = [
            { "id": "Toll Free", "number": "(877)422-2200", "num": 8774222200 },
            { "id": "Local", "number": "(757)426-6200", "num": 7574266200 }
        ];
    }
    WorkorderTextPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkorderTextPage');
    };
    WorkorderTextPage.prototype.resize = function () {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    WorkorderTextPage.prototype.closeBtn = function () {
        this.viewCtrl.dismiss();
    };
    WorkorderTextPage.prototype.confirm = function () {
        var _this = this;
        this.sms.send(this.phoneNumber, this.textNote);
        this.toastCtrl.create({
            message: "Sent Text Successfully!",
            duration: 3000,
            position: 'top'
        }).present();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WorkorderTextPage.prototype, "myInput", void 0);
    WorkorderTextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workorder-text',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\workorder-text\workorder-text.html"*/`<ion-content padding>\n  <div class="modal_page">\n    <div class="top_bar">\n      <div class="top_sub">\n        <p>Contact</p>\n      </div>\n      <div class="top_sub_btn">\n        <div class="close_btn" (click)="closeBtn()">\n          <ion-icon ios="ios-close" md="md-close"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class="top_content">\n        <img src="assets/imgs/siebert.png" />\n    </div>\n    <div class="mid_content">\n      <ion-item>\n        <ion-label>Phone Number</ion-label>\n        <ion-select [(ngModel)]="phoneNumber" name="phoneNumber">\n          <ion-option *ngFor="let phone of phones; let i = index" [value]="phone.num">{{phone.id}}:{{phone.number}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n          <ion-textarea #myInput id="myInput" rows="7" maxLength="500" (keyup)="resize()" [(ngModel)]="textNote" placeholder="Details about your content."></ion-textarea>\n        </ion-item>\n    </div>\n    <div class="modal_button">\n      <button ion-button round full color="mainbtn" (click)="confirm()">Send</button>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\workorder-text\workorder-text.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], WorkorderTextPage);
    return WorkorderTextPage;
}());

//# sourceMappingURL=workorder-text.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkorderimagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var WorkorderimagePage = (function () {
    // imagesData: any = [];
    function WorkorderimagePage(navCtrl, navParams, actionSheetCtrl, toastCtrl, camera, socialSharing, loadingCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.images = [];
        this.workorderData = {};
        this.workorderData = this.navParams.get('orderData');
        console.log("WorkOrderData", this.workorderData);
        if (this.workorderData.image == null) {
            this.images = [];
        }
        else {
            this.images.push(this.workorderData.image);
        }
        // this.imagesData = ["assets/imgs/order/camera.svg", "assets/imgs/order/invoice.svg", "assets/imgs/order/call.svg", "assets/imgs/order/contact1.svg", "assets/imgs/order/map2.svg"];
    }
    WorkorderimagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkorderimagePage');
    };
    WorkorderimagePage.prototype.openImagePicker = function () {
        this.uploadData();
    };
    WorkorderimagePage.prototype.uploadData = function () {
        var self = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image',
            buttons: [
                {
                    text: 'Take Photo',
                    handler: function () {
                        self.selectPhoto(0);
                    }
                },
                {
                    text: 'Select from Library',
                    handler: function () {
                        self.selectPhoto(1);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    WorkorderimagePage.prototype.selectPhoto = function (id) {
        var _this = this;
        if (id == 1) {
            this.phototype = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        else if (id == 0) {
            this.phototype = this.camera.PictureSourceType.CAMERA;
        }
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.phototype,
            targetWidth: 350,
            targetHeight: 350,
            saveToPhotoAlbum: false,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.photoImage = 'data:image/jpeg;base64,' + imageData;
            _this.images.push(_this.photoImage);
            console.log("result_photoimages", _this.images, _this.images.length);
        }, function (error) {
            console.log(error);
        });
    };
    WorkorderimagePage.prototype.shareImage = function (img) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: "Share Option",
            buttons: [
                {
                    text: "Share with Instagram",
                    handler: function () {
                        _this.shareContent(0, img);
                    }
                },
                {
                    text: "Share with Facebook",
                    handler: function () {
                        _this.shareContent(1, img);
                    }
                },
                {
                    text: "Share with Twitter",
                    handler: function () {
                        _this.shareContent(2, img);
                    }
                },
                {
                    text: "Share with SMS",
                    handler: function () {
                        _this.shareContent(3, img);
                    }
                },
                {
                    text: "Cancel",
                    role: 'cancel',
                    handler: function () {
                        console.log("cancel clicked");
                    }
                }
            ]
        });
        actionSheet.present();
    };
    WorkorderimagePage.prototype.shareContent = function (type, img) {
        return __awaiter(this, void 0, void 0, function () {
            var dateTime, msg, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("share_type", type);
                        dateTime = new Date();
                        msg = "Share";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 10, , 11]);
                        if (!(type == 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.socialSharing.shareViaInstagram(msg, img)];
                    case 2:
                        _a.sent();
                        this.displayToastData("Shared via instagram");
                        return [3 /*break*/, 9];
                    case 3:
                        if (!(type == 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.socialSharing.shareViaFacebook(msg, img, null)];
                    case 4:
                        _a.sent();
                        this.displayToastData("Shared via facebook");
                        return [3 /*break*/, 9];
                    case 5:
                        if (!(type == 2)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.socialSharing.shareViaTwitter(msg, img, null)];
                    case 6:
                        _a.sent();
                        this.displayToastData("Shared via twitter");
                        return [3 /*break*/, 9];
                    case 7:
                        if (!(type == 3)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.socialSharing.shareViaSMS(msg, "")];
                    case 8:
                        _a.sent();
                        this.displayToastData("Shared via SMS");
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        err_1 = _a.sent();
                        this.displayToastData(err_1.message);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    WorkorderimagePage.prototype.displayToastData = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        }).present();
    };
    WorkorderimagePage.prototype.remove = function (img) {
        console.log("Before Delete the Images", this.images, this.images.length);
        var index = this.images.indexOf(img);
        if (index > -1) {
            this.images.splice(index, 1);
        }
        console.log("After Delete the Images", this.images, this.images.length);
    };
    WorkorderimagePage.prototype.shareAll = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Uploading...",
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.authService.getSaveImagesData(this.workorderData.id, this.images).subscribe(function (res) {
            console.log("Result Imaage upload Data", res);
            if (_this.loading !== null) {
                _this.loading.dismiss();
                _this.navCtrl.pop();
            }
        }, function (err) {
            console.log("Error upload Imaage Data", err.message);
            if (_this.loading !== null) {
                _this.loading.dismiss();
                _this.navCtrl.pop();
            }
            // this.alertCtrl.create({
            //   subTitle: "Error!",
            //   message: err.message,
            //   buttons: ["Ok"]
            // }).present();
        });
    };
    WorkorderimagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workorderimage',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\workorderimage\workorderimage.html"*/`<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title>Upload Attachments</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="top_content">\n    <button ion-button round full color="mainbtn" (click)="openImagePicker()"> Select Images</button>\n    <button ion-button round outline color="mainbtn" (click)="shareAll()" *ngIf="images.length > 0"> Save Attachments</button>\n  </div>\n\n  <!-- <div class="mid_content" *ngFor="let img  of imagesData; let idx=index">\n    <div class="mid_img">\n        <img src="{{img}}" alt="">\n    </div>\n    <div class="mid_sub_cont">\n      <div class="sub_cont" (click)="shareImage(img)">\n          <ion-icon name="share"></ion-icon>  &nbsp; Share\n      </div>\n      <div class="sub_cont" (click)="testData(img)">\n          <ion-icon name="trash"></ion-icon> &nbsp; Remove\n      </div>\n    </div>\n  </div> -->\n\n  <div class="mid_content" *ngFor="let img  of images; let idx=index">\n    <div class="mid_img">\n      <img src="{{img}}" alt="">\n    </div>\n    <div class="mid_sub_cont">\n      <div class="sub_cont" (click)="shareImage(img)">\n        <ion-icon name="share"></ion-icon> &nbsp; Share\n      </div>\n      <div class="sub_cont" (click)="remove(img)">\n        <ion-icon name="trash"></ion-icon> &nbsp; Remove\n      </div>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\workorderimage\workorderimage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], WorkorderimagePage);
    return WorkorderimagePage;
}());

//# sourceMappingURL=workorderimage.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkorderinvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkorderinvoicePage = (function () {
    function WorkorderinvoicePage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    WorkorderinvoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkorderinvoicePage');
        this.getInvoiceData();
    };
    WorkorderinvoicePage.prototype.getInvoiceData = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Loading...",
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 1000);
    };
    WorkorderinvoicePage.prototype.addInvoice = function () {
        this.navCtrl.pop();
    };
    WorkorderinvoicePage.prototype.close = function () {
        this.navCtrl.pop();
    };
    WorkorderinvoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workorderinvoice',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\workorderinvoice\workorderinvoice.html"*/`<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title>Invoice Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-label>HTML5</ion-label>\n    <ion-toggle [(ngModel)]="htmlData"></ion-toggle>\n  </ion-item>\n  <div class="bottm_content">\n      <button ion-button round full color="mainbtn" (click)="addInvoice()"> Add Invoice </button>\n      <button ion-button round full color="promobtn" (click)="close()"> Close </button>\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\workorderinvoice\workorderinvoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], WorkorderinvoicePage);
    return WorkorderinvoicePage;
}());

//# sourceMappingURL=workorderinvoice.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkordersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workorderdetails_workorderdetails__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkordersPage = (function () {
    function WorkordersPage(navCtrl, navParams, loadingCtrl, alertCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        // searchInput: any;
        this.searchTerm = '';
        this.searching = false;
        this.workorders = [];
        this.tempWorksData = [];
        this.currentUser = {};
        this.current = true;
        if (localStorage.getItem('currentUser') !== null) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
    }
    WorkordersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WorkordersPage');
        this.getUserWorkHistory("NOW");
        this.setFilteredItem();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItem();
        });
    };
    WorkordersPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    WorkordersPage.prototype.setFilteredItem = function () {
        this.workorders = this.compareFunc(this.searchTerm);
    };
    WorkordersPage.prototype.compareFunc = function (searchTerm) {
        return this.tempWorksData.filter(function (result) {
            return result.woDesc.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    WorkordersPage.prototype.getUserWorkHistory = function (type) {
        var _this = this;
        this.current = type;
        console.log('get data ', type);
        this.getLoadingMessage(type);
        this.authService.getworkingHistory(this.currentUser.vendor_id, type).then(function (data) {
            _this.workorders = data;
            _this.tempWorksData = data;
            _this.finishLoading();
        }).catch(function (err) {
            _this.finishLoading();
            _this.alertCtrl.create({
                subTitle: "Error!",
                message: err.message,
                buttons: ["Ok0"]
            }).present();
        });
    };
    WorkordersPage.prototype.finishLoading = function () {
        if (this.loading !== null) {
            this.loading.dismiss();
        }
    };
    WorkordersPage.prototype.getLoadingMessage = function (message) {
        this.loading = this.loadingCtrl.create({
            content: 'Finding your work... (' + message + ')',
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
    };
    WorkordersPage.prototype.doRefresh = function (value) {
        this.getUserWorkHistory(value);
        /*    if (value == 'PAST') {
              this.getLoadingMessage('PAST');
              setTimeout(() => {
                this.finishLoading();
              }, 1000);
        
            } else if (value == 'NOW') {
              this.getLoadingMessage('NOW');
              setTimeout(() => {
                this.finishLoading();
              }, 1000);
            } else if (value == 'FUTURE') {
              this.getLoadingMessage('FUTURE');
              setTimeout(() => {
                this.finishLoading();
              }, 1000);
            }*/
    };
    WorkordersPage.prototype.viewData = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__workorderdetails_workorderdetails__["a" /* WorkorderdetailsPage */], { orderData: this.workorders[id] });
    };
    WorkordersPage.prototype.searchData = function () {
    };
    WorkordersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workorders',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\workorders\workorders.html"*/`<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>WorkOrders</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="top_content">\n    <!-- <ion-input type="text" [(ngModel)]="searchInput" placeholder="Search..." (ionChange)=\'searchData()\'></ion-input> -->\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="onSearchInput()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  </div>\n  <div class="middle_content">\n    <div class="middle_bar"></div>\n<!--    <div class="middle_current" *ngIf="current == \'NOW\'">\n      <h1>Great Job</h1>\n      <img src="./assets/imgs/tab/break-time.jpg" alt="">\n      <h3> Not much left to do here.</h3>\n    </div> -->\n    <div class="middle_past" *ngIf="current == \'PAST\'">\n      <ion-item *ngFor="let order of workorders; let id=index" (click)="viewData(id)">\n        <div class="elencoImg"><img src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/128/{{order.woStatus}}.png"\n            alt=""></div>\n        <div class="elencoTxt">\n          <div class="restroName">{{order.woDesc}}</div>\n          <div class="restroDes">{{order.UnitAddress}} <br>\n            {{order.unitName}} - {{order.unitID}}\n          </div>\n          <div class="restroNum">{{order.woDate}}</div>\n        </div>\n        <div class="elecoBtn">\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </ion-item>\n    </div>\n    <div class="middle_now" *ngIf="current == \'NOW\'">\n      <ion-item *ngFor="let order of workorders; let id=index" (click)="viewData(id)">\n        <div class="elencoImg"><img src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/128/{{order.woStatus}}.png"\n            alt=""></div>\n        <div class="elencoTxt">\n          <div class="restroName">{{order.woDesc}}</div>\n          <div class="restroDes">{{order.UnitAddress}} <br>\n            {{order.unitName}} - {{order.unitID}}\n          </div>\n          <div class="restroNum">{{order.woDate}}</div>\n        </div>\n        <div class="elecoBtn">\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </ion-item>\n    </div>\n    <div class="middle_future" *ngIf="current == \'FUTURE\'">\n      <ion-item *ngFor="let order of workorders; let id=index" (click)="viewData(id)">\n        <div class="elencoImg"><img src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/128/{{order.woStatus}}.png"\n            alt=""></div>\n        <div class="elencoTxt">\n          <div class="restroName">{{order.woDesc}}</div>\n          <div class="restroDes">{{order.UnitAddress}} <br>\n            {{order.unitName}} - {{order.unitID}}\n          </div>\n          <div class="restroNum">{{order.woDate}}</div>\n        </div>\n        <div class="elecoBtn">\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </ion-item>\n    </div>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <div class="main_foot">\n    <a class="sub_foot" (click)="doRefresh(\'PAST\')">\n      <img src="./assets/imgs/tab/tab1.svg">\n      <p> History</p>\n    </a>\n    <a class="sub_foot" (click)="doRefresh(\'NOW\')">\n      <img src="./assets/imgs/tab/tab2.svg">\n      <p>Current</p>\n    </a>\n    <a class="sub_foot" (click)="doRefresh(\'FUTURE\')">\n      <img src="./assets/imgs/tab/tab3.svg">\n      <p>Scheduled</p>\n    </a>\n  </div>\n</ion-footer>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\workorders\workorders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], WorkordersPage);
    return WorkordersPage;
}());

//# sourceMappingURL=workorders.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyalertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyalertPage = (function () {
    function MyalertPage(navCtrl, navParams, platform, iab, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.postsData = [];
        if (localStorage.getItem('postData') !== null) {
            this.postsData = JSON.parse(localStorage.getItem('postData'));
        }
        else {
            this.postsData = [];
        }
        console.log("post_Data", this.postsData);
    }
    MyalertPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MyalertPage');
        if (this.postsData.length > 0) {
            this.loading = this.loadingCtrl.create({
                content: "Loading...",
                spinner: 'hide',
                cssClass: 'my-loading-class'
            });
            this.loading.present();
            setTimeout(function () {
                _this.loading.dismiss();
            }, 1000);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'There is no Bookmark',
                duration: 3000,
                position: 'top'
            });
            toast.onDidDismiss(function () {
                console.log("dismiss");
            });
            toast.present();
        }
    };
    MyalertPage.prototype.getData = function (id) {
        var _this = this;
        var url = this.postsData[id].link;
        console.log("MenuId", url);
        if (this.platform.is('android')) {
            var options = "hardwareback=no";
            this.browser = this.iab.create(url, "_blank", options);
        }
        else {
            this.browser = this.iab.create(url, "_blank");
        }
        this.browser.on('exit').subscribe(function (event) {
            console.log("event", event);
            _this.browser.close();
            console.log("Appbrowser closed");
        }, function (error) {
            console.log("error", error);
            _this.browser.close();
        });
    };
    MyalertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myalert',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\myalert\myalert.html"*/`<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title>Alerts</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n    <div class="content_tile">Feeds Bookmarks</div>\n  <ion-list *ngFor="let post of postsData; let idx=index" (click)="getData(idx)">\n    <ion-item>\n      <div class="elencoImg"><img src="./assets/imgs/blog/blog.png" alt=""></div>\n      <div class="elencoTxt">\n        <div class="restroName">{{post.title}}</div>\n        <div class="restroDes">Posted</div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\myalert\myalert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], MyalertPage);
    return MyalertPage;
}());

//# sourceMappingURL=myalert.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectPage = (function () {
    function ConnectPage(navCtrl, navParams, loadingCtrl, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.callNumber = callNumber;
        this.connects = [];
        this.connect_hskp = [];
        this.connects = [
            { "name": "Trent S", "phone": "757-426-6200" },
            { "name": "Joadi L", "phone": "757-426-6200" },
            { "name": "Kate F", "phone": "757-426-6200" },
            { "name": "Kimberly B", "phone": "757-426-6200" }
        ];
        this.connect_hskp = [
            { "name": "Amberly B", "phone": "757-426-6200" },
            { "name": "Laura ", "phone": "757-426-6200" },
        ];
    }
    ConnectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConnectPage');
        this.getConnectUsers();
    };
    ConnectPage.prototype.getConnectUsers = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Loading...",
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 1000);
    };
    ConnectPage.prototype.viewConnect = function (id) {
        this.callNumber.callNumber(this.connects[id].name, true).then(function (res) {
            console.log("Launch Dialer!", res);
        }).catch(function (err) {
            console.log("Error Launching Dialer", err);
        });
    };
    ConnectPage.prototype.viewConnectHouseKp = function (id) {
        this.callNumber.callNumber(this.connect_hskp[id].name, true).then(function (res) {
            console.log("Launch Dialer!", res);
        }).catch(function (err) {
            console.log("Error Launching Dialer", err);
        });
    };
    ConnectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-connect',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\connect\connect.html"*/`<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title>Connect</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="top_content">\n    Maintenance Department\n  </div>\n  <div class="main_content">\n    <div class="main_content_title" *ngFor="let connect  of connects let idx=index" (click)="viewConnect(idx)">\n      <div class="sub_main_start">\n        <img src="./assets/imgs/connect/user.svg" alt="">\n        <p>{{connect.name}}</p>\n      </div>\n      <div class="sub_main_end" >\n        <img src="./assets/imgs/connect/phone.svg" alt="">\n      </div>\n    </div>\n  </div>\n\n  <div class="top_content">\n      Housekeeping Department\n    </div>\n    <div class="main_content">\n      <div class="main_content_title" *ngFor="let connecthk  of connect_hskp let idx=index" (click)="viewConnectHouseKp(idx)">\n        <div class="sub_main_start">\n          <img src="./assets/imgs/connect/user.svg" alt="">\n          <p>{{connecthk.name}}</p>\n        </div>\n        <div class="sub_main_end" >\n          <img src="./assets/imgs/connect/phone.svg" alt="">\n        </div>\n      </div>\n    </div>\n\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\connect\connect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], ConnectPage);
    return ConnectPage;
}());

//# sourceMappingURL=connect.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pushnotification_pushnotification__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, loadingCtrl, vibration, pushNotiService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.vibration = vibration;
        this.pushNotiService = pushNotiService;
        this.toastCtrl = toastCtrl;
        this.connects = [];
        this.connect_hskp = [];
        this.vibrationData = false;
        this.push = false;
        if (localStorage.getItem('push') !== null) {
            this.push = localStorage.getItem('push');
        }
        if (localStorage.getItem('vibration') !== null) {
            this.vibrationData = localStorage.getItem('vibration');
        }
        console.log("saved_toggle_data", this.push, this.vibrationData);
        this.connects = [
            { "name": "Trent S", "phone": "757-426-6200" },
            { "name": "Joadi L", "phone": "757-426-6200" },
            { "name": "Kate F", "phone": "757-426-6200" },
            { "name": "Kimberly B", "phone": "757-426-6200" }
        ];
        this.connect_hskp = [
            { "name": "Amberly B", "phone": "757-426-6200" },
            { "name": "Laura ", "phone": "757-426-6200" },
        ];
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
        this.getSettingData();
    };
    SettingsPage.prototype.getSettingData = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Loading...",
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 1000);
    };
    SettingsPage.prototype.viewConnectHouseKp = function (id) {
    };
    SettingsPage.prototype.viewConnect = function (id) {
    };
    SettingsPage.prototype.changePush = function () {
        localStorage.setItem('push', this.push);
    };
    SettingsPage.prototype.changeVibration = function () {
        if (this.vibrationData == true) {
            this.vibration.vibrate(1000);
        }
        localStorage.setItem('vibration', this.vibrationData);
    };
    SettingsPage.prototype.confirm = function () {
        this.toastCtrl.create({
            message: "Successfully Changed",
            duration: 3000,
            position: 'top'
        }).present();
        // localStorage.setItem('push', this.push);
        localStorage.setItem('vibration', this.vibrationData);
        this.pushNotiService.init();
        this.navCtrl.pop();
    };
    SettingsPage.prototype.showToast = function () {
        var _this = this;
        if (this.toast) {
            return;
        }
        this.toast = this.toastCtrl.create({
            message: "Test Toast",
            duration: 3000,
            position: 'top'
        });
        this.toast.onDidDismiss(function () {
            _this.toast = null;
        });
        this.toast.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\settings\settings.html"*/`<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="content_tile">TOGGLE</div>\n  <ion-item>\n    <ion-label>Enable Push Notifications</ion-label>\n    <ion-toggle [(ngModel)]="push" (ionChange)="changePush()"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label>Enable Vibration</ion-label>\n    <ion-toggle [(ngModel)]="vibrationData" (ionChange)="changeVibration()"></ion-toggle>\n  </ion-item>\n  <div class="content_tile">Sibert Contact</div>\n  <div class="content_tile">Maintenance Department</div>\n\n  <ion-list radio-group [(ngModel)]="connectData">\n      <ion-item *ngFor="let connect  of connects let idx=index">\n        <ion-label>{{connect.name}}</ion-label>\n        <ion-radio value="{{connect.name}}" ></ion-radio>\n      </ion-item>\n    </ion-list>\n\n\n\n  <!-- <div class="main_content">\n    <div class="main_content_title" *ngFor="let connect  of connects let idx=index" (click)="viewConnect(idx)">\n      <div class="sub_main_start">\n        <img src="./assets/imgs/connect/user.svg" alt="">\n        <p>{{connect.name}}</p>\n      </div>\n      <div class="sub_main_end" >\n        <ion-checkbox [(ngModel)]="connect.name"></ion-checkbox>\n      </div>\n    </div>\n  </div> -->\n\n\n\n\n\n  <div class="content_tile"> Housekeeping Department</div>\n  <!-- <div class="main_content">\n    <div class="main_content_title" *ngFor="let connecthk  of connect_hskp let idx=index" (click)="viewConnectHouseKp(idx)">\n      <div class="sub_main_start">\n        <img src="./assets/imgs/connect/user.svg" alt="">\n        <p>{{connecthk.name}}</p>\n      </div>\n      <div class="sub_main_end" >\n          <ion-radio value="connecthk.name"></ion-radio>\n      </div>\n    </div>\n  </div> -->\n\n  <ion-list radio-group [(ngModel)]="connecthkData">\n    <ion-item *ngFor="let connecthk  of connect_hskp let idx=index">\n      <ion-label>{{connecthk.name}}</ion-label>\n      <ion-radio value="{{connecthk.name}}" ></ion-radio>\n    </ion-item>\n  </ion-list>\n\n\n\n  <div class="settingBtn" (click)="confirm()">\n    <button ion-button round class="changeBtn">Save</button>\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_3__providers_pushnotification_pushnotification__["a" /* PushnotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotpwdPage = (function () {
    function ForgotpwdPage(navCtrl, navParams, viewCtrl, loadingCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    ForgotpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpwdPage');
    };
    ForgotpwdPage.prototype.resetPassword = function () {
        if (this.useremail == undefined) {
            this.alertCtrl.create({
                subTitle: "Error!",
                message: "Invalid Credential",
                cssClass: 'alertDanger',
                buttons: ["OK"]
            }).present();
        }
        else {
            this.loading = this.loadingCtrl.create({
                content: 'Loading...',
                spinner: 'bubbles',
                cssClass: 'my-loading-class'
            });
            this.loading.present();
            this.viewCtrl.dismiss();
            this.loading.dismiss();
            this.displayToastMesagem("Forget Password!!!");
        }
    };
    ForgotpwdPage.prototype.displayToastMesagem = function (message_data) {
        this.toastCtrl.create({
            message: message_data,
            duration: 3000,
            position: "top"
        }).present();
    };
    ForgotpwdPage.prototype.closeForgotModal = function () {
        this.viewCtrl.dismiss();
    };
    ForgotpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgotpwd',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\forgotpwd\forgotpwd.html"*/`<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title color="white" style="text-align: center">Forget Password</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <p>Reset your password</p>\n  <div class="main_top">\n    <div class="main_image">\n      <img src="assets/imgs/siebert.png" />\n    </div>\n  </div>\n  <div class="main_cont">\n    <ion-input type="text" [(ngModel)]="useremail" placeholder="Enter your email address"></ion-input>\n  </div>\n\n  <div class="forgot_controllers">\n    <div>\n      <button ion-button round color="mainbtn" (click)="resetPassword()">Reset</button>\n    </div>\n    <div>\n      <button ion-button round color="mainbtn" outline (click)="closeForgotModal()">Close</button>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\forgotpwd\forgotpwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ForgotpwdPage);
    return ForgotpwdPage;
}());

//# sourceMappingURL=forgotpwd.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.profileImg = "https://www.siebert-realty.com/img/homepage-sandbridgebeach.jpg";
        this.userImg = "assets/imgs/menu/empty_avatar.png";
        this.currentUser = {};
        if (localStorage.getItem('currentUser') !== null) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilePage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 1000);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\profile\profile.html"*/`<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content  no-padding>\n  <div class="top_content">\n      <img src="{{profileImg}}" alt="">\n  </div>\n  <div class="middle_content">\n      <img src="{{userImg}}" alt="">\n  </div>\n  <div class="bottom_content">\n    <div class="base_info">\n        <p>{{currentUser.full_name}}</p>\n        <p>@brynn</p>\n\n    </div>\n\n\n    <div class="user_cont">\n\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/connect/connect.module": [
		532,
		19
	],
	"../pages/feedscatdetails/feedscatdetails.module": [
		533,
		18
	],
	"../pages/feedscategory/feedscategory.module": [
		531,
		17
	],
	"../pages/feedsentries/feedsentries.module": [
		535,
		16
	],
	"../pages/forgotpwd/forgotpwd.module": [
		534,
		15
	],
	"../pages/main/main.module": [
		536,
		14
	],
	"../pages/maps/maps.module": [
		537,
		13
	],
	"../pages/myalert/myalert.module": [
		538,
		12
	],
	"../pages/profile/profile.module": [
		540,
		11
	],
	"../pages/settings/settings.module": [
		539,
		10
	],
	"../pages/sidemenu/sidemenu.module": [
		543,
		9
	],
	"../pages/signin/signin.module": [
		541,
		8
	],
	"../pages/signup/signup.module": [
		542,
		7
	],
	"../pages/workorder-text/workorder-text.module": [
		544,
		6
	],
	"../pages/workorderattach/workorderattach.module": [
		546,
		5
	],
	"../pages/workorderdetails/workorderdetails.module": [
		545,
		4
	],
	"../pages/workorderimage/workorderimage.module": [
		547,
		3
	],
	"../pages/workorderinvoice/workorderinvoice.module": [
		548,
		2
	],
	"../pages/workordernotes/workordernotes.module": [
		549,
		1
	],
	"../pages/workorders/workorders.module": [
		550,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workorderdetails_workorderdetails__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pushnotification_pushnotification__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, loadingCtrl, authService, alertCtrl, platform, pushNotiService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.pushNotiService = pushNotiService;
        this.workorders = [];
        this.workprogress = [];
        this.currentUser = {};
        if (localStorage.getItem('currentUser') !== null) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        console.log("current  user data", this.currentUser, typeof (this.currentUser));
        if (this.platform.is('cordova')) {
            this.pushNotiService.init();
        }
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.getCurrentUserWork();
    };
    HomePage.prototype.getCurrentUserWork = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Finding your work...',
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.workprogress = [];
        this.authService.getworkingHistory(this.currentUser.vendor_id, 'NOW').then(function (data) {
            console.log("current user working history", data);
            _this.workorders = data;
            var length = 5;
            if (length > _this.workorders.length)
                length = _this.workorders.length;
            for (var i = 0; i < length; i++) {
                _this.workprogress.push(_this.workorders[i]);
            }
            if (_this.loading !== null) {
                setTimeout(function () {
                    _this.loading.dismiss();
                }, 1000);
            }
        }).catch(function (err) {
            if (_this.loading !== null) {
                setTimeout(function () {
                    _this.loading.dismiss();
                }, 1000);
            }
            _this.alertCtrl.create({
                subTitle: "Error!",
                message: err.message,
                buttons: ["Ok"]
            }).present();
        });
    };
    HomePage.prototype.viewAll = function () {
    };
    HomePage.prototype.viewData = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__workorderdetails_workorderdetails__["a" /* WorkorderdetailsPage */], { orderData: this.workorders[id] });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\home\home.html"*/`<ion-header no-border>\n  <ion-navbar color="custom">\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.png">\n    </button>\n    <ion-title class="top_title"> Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="top_content">\n    <p> Welcome back {{currentUser.full_name}}</p>\n  </div>\n  <ion-list>\n    <div class="content_tile">\n      <img src="./assets/imgs/menu/mu.png" alt="">\n      Open Workorders</div>\n    <ion-item *ngFor="let order of  workprogress let id=index" (click)="viewData(id)">\n      <div class="elencoImg"><img src="./assets/imgs/menu/working.svg" alt=""></div>\n      <div class="elencoTxt">\n        <div class="restroName">\n          <p>{{order.woDesc}}<p>\n        </div>\n        <div class="restroDes">\n          <p>{{order.UnitAddress}}<p>\n        </div>\n        <div class="restroNum"><a> Date: {{order.woDate}} &nbsp;&nbsp; Status:{{order.woStatus2}} </a>\n        </div>\n      </div>\n    </ion-item>\n    <div class="end_content">\n\n      <button ion-button block round outline expand="block"  color="mainbtn" (click)="viewAll()">\n            VIEW ALL\n          </button>\n    </div>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_pushnotification_pushnotification__["a" /* PushnotificationProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xml2js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        this.LOGINURL = "https://api.siebert-realty.com/vendors/woVendorCheck.asp?vendor=";
        this.WORKINGHISTORY = "https://api.siebert-realty.com/vendors/wovendor.asp?vendor=";
        this.FEEDCATEGORY = "./assets/js/feeds-categories.json";
        this.WORKORDERDETAILS = "https://api.siebert-realty.com/vendors/woview.asp";
        this.WORKORDERUPDATE = "https://api.siebert-realty.com/vendors/updatework.asp";
        this.STARTJOB = "https://api.siebert-realty.com/vendors/startjob.asp";
        this.ENDJOB = "https://api.siebert-realty.com/vendors/endjob.asp";
        this.UPLOADIMAGE = "http://siebertguest.net/wip/api/upload_image.asp";
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.getLoginInfo = function (email, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.LOGINURL + id).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Reject_err", err);
                reject(err);
            });
        });
    };
    // get curretn user working processing and history....
    AuthServiceProvider.prototype.getworkingHistory = function (userId, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.WORKINGHISTORY + userId + '&d=5&filter=' + type).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Reject_error", err.message);
                reject(err);
            });
        });
    };
    //  feeds and news categories....
    AuthServiceProvider.prototype.getFeedsInfo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.FEEDCATEGORY).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getFeedsDetailsInfo = function (newsUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(newsUrl, { responseType: 'text' }).subscribe(function (res) {
                _this.xmlItems = res;
                //  console.log("Raw_news data", res);
                __WEBPACK_IMPORTED_MODULE_4_xml2js__["parseString"](_this.xmlItems, function (err, result) {
                    console.log("Result_Data", result);
                    resolve(result);
                });
            }, function (err) {
                console.log("Error_news", err.message);
                reject(err);
            });
        });
    };
    // Workoreder details data...
    AuthServiceProvider.prototype.getWorkOrderDetails = function (orderId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.WORKORDERDETAILS, { params: { "oi": orderId } }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // update workorder notes content
    AuthServiceProvider.prototype.getWorkOrderUpdate = function (orderId, orderNeed, orderDone) {
        var _this = this;
        return new Promise(function (resovle, reject) {
            _this.http.get(_this.WORKORDERUPDATE, {
                params: {
                    "oi": orderId,
                    "ref": (orderNeed ? "1" : "0"),
                    "w": orderDone
                }
            }).subscribe(function (res) {
                resovle(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    //  start the job
    AuthServiceProvider.prototype.getStartWorkOrder = function (workId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.STARTJOB, { params: { "oi": workId } }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // End the job
    AuthServiceProvider.prototype.getEndWorkOrder = function (workId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.ENDJOB, { params: { "oi": workId } }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getSaveImagesData = function (orderId, images) {
        console.log("upload_image_data", orderId, images);
        var postData = new URLSearchParams();
        postData.set('oi', orderId);
        postData.set('images', images);
        console.log("posData", postData);
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post(this.UPLOADIMAGE, postData.toString(), options);
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkorderattachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WorkorderattachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkorderattachPage = (function () {
    function WorkorderattachPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WorkorderattachPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkorderattachPage');
    };
    WorkorderattachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workorderattach',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\workorderattach\workorderattach.html"*/`<!--\n  Generated template for the WorkorderattachPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>workorderattach</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\workorderattach\workorderattach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], WorkorderattachPage);
    return WorkorderattachPage;
}());

//# sourceMappingURL=workorderattach.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(432);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_main_main__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forgotpwd_forgotpwd__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sidemenu_sidemenu__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_workorders_workorders__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_myalert_myalert__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_connect_connect__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_feedscategory_feedscategory__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_feedscatdetails_feedscatdetails__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_feedsentries_feedsentries__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_moment__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_call_number__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_workorderdetails_workorderdetails__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_workordernotes_workordernotes__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_workorderattach_workorderattach__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_maps_maps__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_geolocation__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_native_geocoder__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_email_composer__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_sms__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_workorder_text_workorder_text__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_workorderimage_workorderimage__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_workorderinvoice_workorderinvoice__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_social_sharing__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_vibration__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_onesignal__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_pushnotification_pushnotification__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// httpclient ...
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgotpwd_forgotpwd__["a" /* ForgotpwdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sidemenu_sidemenu__["a" /* SidemenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_workorders_workorders__["a" /* WorkordersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_myalert_myalert__["a" /* MyalertPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_connect_connect__["a" /* ConnectPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_feedscategory_feedscategory__["a" /* FeedscategoryPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_feedscatdetails_feedscatdetails__["a" /* FeedscatdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_feedsentries_feedsentries__["a" /* FeedsentriesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_workorderdetails_workorderdetails__["a" /* WorkorderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_workordernotes_workordernotes__["a" /* WorkordernotesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_workorderattach_workorderattach__["a" /* WorkorderattachPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_workorder_text_workorder_text__["a" /* WorkorderTextPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_workorderimage_workorderimage__["a" /* WorkorderimagePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_workorderinvoice_workorderinvoice__["a" /* WorkorderinvoicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientJsonpModule */],
                __WEBPACK_IMPORTED_MODULE_24_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/feedscategory/feedscategory.module#FeedscategoryPageModule', name: 'FeedscategoryPage', segment: 'feedscategory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/connect/connect.module#ConnectPageModule', name: 'ConnectPage', segment: 'connect', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedscatdetails/feedscatdetails.module#FeedscatdetailsPageModule', name: 'FeedscatdetailsPage', segment: 'feedscatdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpwd/forgotpwd.module#ForgotpwdPageModule', name: 'ForgotpwdPage', segment: 'forgotpwd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedsentries/feedsentries.module#FeedsentriesPageModule', name: 'FeedsentriesPage', segment: 'feedsentries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maps/maps.module#MapsPageModule', name: 'MapsPage', segment: 'maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myalert/myalert.module#MyalertPageModule', name: 'MyalertPage', segment: 'myalert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sidemenu/sidemenu.module#SidemenuPageModule', name: 'SidemenuPage', segment: 'sidemenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workorder-text/workorder-text.module#WorkorderTextPageModule', name: 'WorkorderTextPage', segment: 'workorder-text', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workorderdetails/workorderdetails.module#WorkorderdetailsPageModule', name: 'WorkorderdetailsPage', segment: 'workorderdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workorderattach/workorderattach.module#WorkorderattachPageModule', name: 'WorkorderattachPage', segment: 'workorderattach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workorderimage/workorderimage.module#WorkorderimagePageModule', name: 'WorkorderimagePage', segment: 'workorderimage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workorderinvoice/workorderinvoice.module#WorkorderinvoicePageModule', name: 'WorkorderinvoicePage', segment: 'workorderinvoice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workordernotes/workordernotes.module#WorkordernotesPageModule', name: 'WorkordernotesPage', segment: 'workordernotes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workorders/workorders.module#WorkordersPageModule', name: 'WorkordersPage', segment: 'workorders', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgotpwd_forgotpwd__["a" /* ForgotpwdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sidemenu_sidemenu__["a" /* SidemenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_workorders_workorders__["a" /* WorkordersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_myalert_myalert__["a" /* MyalertPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_connect_connect__["a" /* ConnectPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_feedscategory_feedscategory__["a" /* FeedscategoryPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_feedscatdetails_feedscatdetails__["a" /* FeedscatdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_feedsentries_feedsentries__["a" /* FeedsentriesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_workorderdetails_workorderdetails__["a" /* WorkorderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_workordernotes_workordernotes__["a" /* WorkordernotesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_workorderattach_workorderattach__["a" /* WorkorderattachPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_workorder_text_workorder_text__["a" /* WorkorderTextPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_workorderimage_workorderimage__["a" /* WorkorderimagePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_workorderinvoice_workorderinvoice__["a" /* WorkorderinvoicePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_sms__["a" /* SMS */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_42__providers_pushnotification_pushnotification__["a" /* PushnotificationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workorders_workorders__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myalert_myalert__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connect_connect__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SidemenuPage = (function () {
    function SidemenuPage(navCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.currentUser = {};
        this.photoUrl = "assets/imgs/menu/empty_avatar.png";
        this.pages = [];
        if (localStorage.getItem('currentUser') !== null) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
    }
    SidemenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SidemenuPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.viewPage();
        this.getCurrentUserData();
    };
    SidemenuPage.prototype.viewPage = function () {
        this.pages = [
            { image: 'assets/imgs/menu/nav1.svg', title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */] },
            { image: 'assets/imgs/menu/nav2.svg', title: 'Work Orders', component: __WEBPACK_IMPORTED_MODULE_3__workorders_workorders__["a" /* WorkordersPage */] },
            { image: 'assets/imgs/menu/nav3.svg', title: 'My Alerts', component: __WEBPACK_IMPORTED_MODULE_4__myalert_myalert__["a" /* MyalertPage */] },
            { image: 'assets/imgs/menu/nav4.svg', title: 'Connect', component: __WEBPACK_IMPORTED_MODULE_5__connect_connect__["a" /* ConnectPage */] },
            { image: 'assets/imgs/menu/nav5.svg', title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_6__settings_settings__["a" /* SettingsPage */] },
            { image: 'assets/imgs/menu/nav6.svg', title: 'Logout', component: null },
        ];
        this.loading.dismiss();
    };
    SidemenuPage.prototype.openPage = function (page) {
        var _this = this;
        if (page.component === null) {
            this.alertCtrl.create({
                title: "Confrim",
                message: "Are you sure want to Logout?",
                buttons: [{
                        text: "Cancel",
                        role: 'cancel',
                        handler: function () {
                            return;
                        }
                    },
                    {
                        text: "Ok",
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__main_main__["a" /* MainPage */]);
                        }
                    }
                ]
            }).present();
            return;
        }
        else if (page.component === __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        else {
            this.nav.push(page.component);
        }
    };
    SidemenuPage.prototype.viewProfile = function () {
        // this.nav.push(ProfilePage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */]);
    };
    SidemenuPage.prototype.getCurrentUserData = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], SidemenuPage.prototype, "nav", void 0);
    SidemenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sidemenu',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\sidemenu\sidemenu.html"*/`<ion-split-pane>\n  <ion-menu type="overlay" [content]="content">\n    <ion-content>\n      <div class="topInfo" (click)="viewProfile()">\n        <div class="topProIcon"><img src="{{photoUrl}}" class="profilePhoto"></div>\n        <div class="proName">{{currentUser.full_name}}</div>\n      </div>\n      <ion-list>\n        <div *ngFor="let p of pages" (click)="openPage(p)" style="border-top: 1px solid #ddd;">\n          <button menuClose ion-item class="menubtn">\n            <img src="{{p.image}}" class="imgSize">\n            <span class="navTxt"> {{p.title}}</span>\n          </button>\n        </div>\n      </ion-list>\n      <div class="bottom_cont">\n          <p>Member Since</p>\n          <h5>{{currentUser.member_since}}</h5>\n      </div>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav [root]="rootPage" main #content></ion-nav>\n</ion-split-pane>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\sidemenu\sidemenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SidemenuPage);
    return SidemenuPage;
}());

//# sourceMappingURL=sidemenu.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_main__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sidemenu_sidemenu__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pushnotification_pushnotification__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, pushNotiService, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.pushNotiService = pushNotiService;
        this.splashScreen = splashScreen;
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platform.is('cordova')) {
                _this.pushNotiService.init();
            }
            if (localStorage.getItem('currentUser') !== null) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_sidemenu_sidemenu__["a" /* SidemenuPage */]);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */]);
            }
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\app\app.html"*/`<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\app\app.html"*/,
            queries: {
                nav: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"]('content')
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__providers_pushnotification_pushnotification__["a" /* PushnotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 270,
	"./af.js": 270,
	"./ar": 271,
	"./ar-dz": 272,
	"./ar-dz.js": 272,
	"./ar-kw": 273,
	"./ar-kw.js": 273,
	"./ar-ly": 274,
	"./ar-ly.js": 274,
	"./ar-ma": 275,
	"./ar-ma.js": 275,
	"./ar-sa": 276,
	"./ar-sa.js": 276,
	"./ar-tn": 277,
	"./ar-tn.js": 277,
	"./ar.js": 271,
	"./az": 278,
	"./az.js": 278,
	"./be": 279,
	"./be.js": 279,
	"./bg": 280,
	"./bg.js": 280,
	"./bm": 281,
	"./bm.js": 281,
	"./bn": 282,
	"./bn.js": 282,
	"./bo": 283,
	"./bo.js": 283,
	"./br": 284,
	"./br.js": 284,
	"./bs": 285,
	"./bs.js": 285,
	"./ca": 286,
	"./ca.js": 286,
	"./cs": 287,
	"./cs.js": 287,
	"./cv": 288,
	"./cv.js": 288,
	"./cy": 289,
	"./cy.js": 289,
	"./da": 290,
	"./da.js": 290,
	"./de": 291,
	"./de-at": 292,
	"./de-at.js": 292,
	"./de-ch": 293,
	"./de-ch.js": 293,
	"./de.js": 291,
	"./dv": 294,
	"./dv.js": 294,
	"./el": 295,
	"./el.js": 295,
	"./en-SG": 296,
	"./en-SG.js": 296,
	"./en-au": 297,
	"./en-au.js": 297,
	"./en-ca": 298,
	"./en-ca.js": 298,
	"./en-gb": 299,
	"./en-gb.js": 299,
	"./en-ie": 300,
	"./en-ie.js": 300,
	"./en-il": 301,
	"./en-il.js": 301,
	"./en-nz": 302,
	"./en-nz.js": 302,
	"./eo": 303,
	"./eo.js": 303,
	"./es": 304,
	"./es-do": 305,
	"./es-do.js": 305,
	"./es-us": 306,
	"./es-us.js": 306,
	"./es.js": 304,
	"./et": 307,
	"./et.js": 307,
	"./eu": 308,
	"./eu.js": 308,
	"./fa": 309,
	"./fa.js": 309,
	"./fi": 310,
	"./fi.js": 310,
	"./fo": 311,
	"./fo.js": 311,
	"./fr": 312,
	"./fr-ca": 313,
	"./fr-ca.js": 313,
	"./fr-ch": 314,
	"./fr-ch.js": 314,
	"./fr.js": 312,
	"./fy": 315,
	"./fy.js": 315,
	"./ga": 316,
	"./ga.js": 316,
	"./gd": 317,
	"./gd.js": 317,
	"./gl": 318,
	"./gl.js": 318,
	"./gom-latn": 319,
	"./gom-latn.js": 319,
	"./gu": 320,
	"./gu.js": 320,
	"./he": 321,
	"./he.js": 321,
	"./hi": 322,
	"./hi.js": 322,
	"./hr": 323,
	"./hr.js": 323,
	"./hu": 324,
	"./hu.js": 324,
	"./hy-am": 325,
	"./hy-am.js": 325,
	"./id": 326,
	"./id.js": 326,
	"./is": 327,
	"./is.js": 327,
	"./it": 328,
	"./it-ch": 329,
	"./it-ch.js": 329,
	"./it.js": 328,
	"./ja": 330,
	"./ja.js": 330,
	"./jv": 331,
	"./jv.js": 331,
	"./ka": 332,
	"./ka.js": 332,
	"./kk": 333,
	"./kk.js": 333,
	"./km": 334,
	"./km.js": 334,
	"./kn": 335,
	"./kn.js": 335,
	"./ko": 336,
	"./ko.js": 336,
	"./ku": 337,
	"./ku.js": 337,
	"./ky": 338,
	"./ky.js": 338,
	"./lb": 339,
	"./lb.js": 339,
	"./lo": 340,
	"./lo.js": 340,
	"./lt": 341,
	"./lt.js": 341,
	"./lv": 342,
	"./lv.js": 342,
	"./me": 343,
	"./me.js": 343,
	"./mi": 344,
	"./mi.js": 344,
	"./mk": 345,
	"./mk.js": 345,
	"./ml": 346,
	"./ml.js": 346,
	"./mn": 347,
	"./mn.js": 347,
	"./mr": 348,
	"./mr.js": 348,
	"./ms": 349,
	"./ms-my": 350,
	"./ms-my.js": 350,
	"./ms.js": 349,
	"./mt": 351,
	"./mt.js": 351,
	"./my": 352,
	"./my.js": 352,
	"./nb": 353,
	"./nb.js": 353,
	"./ne": 354,
	"./ne.js": 354,
	"./nl": 355,
	"./nl-be": 356,
	"./nl-be.js": 356,
	"./nl.js": 355,
	"./nn": 357,
	"./nn.js": 357,
	"./pa-in": 358,
	"./pa-in.js": 358,
	"./pl": 359,
	"./pl.js": 359,
	"./pt": 360,
	"./pt-br": 361,
	"./pt-br.js": 361,
	"./pt.js": 360,
	"./ro": 362,
	"./ro.js": 362,
	"./ru": 363,
	"./ru.js": 363,
	"./sd": 364,
	"./sd.js": 364,
	"./se": 365,
	"./se.js": 365,
	"./si": 366,
	"./si.js": 366,
	"./sk": 367,
	"./sk.js": 367,
	"./sl": 368,
	"./sl.js": 368,
	"./sq": 369,
	"./sq.js": 369,
	"./sr": 370,
	"./sr-cyrl": 371,
	"./sr-cyrl.js": 371,
	"./sr.js": 370,
	"./ss": 372,
	"./ss.js": 372,
	"./sv": 373,
	"./sv.js": 373,
	"./sw": 374,
	"./sw.js": 374,
	"./ta": 375,
	"./ta.js": 375,
	"./te": 376,
	"./te.js": 376,
	"./tet": 377,
	"./tet.js": 377,
	"./tg": 378,
	"./tg.js": 378,
	"./th": 379,
	"./th.js": 379,
	"./tl-ph": 380,
	"./tl-ph.js": 380,
	"./tlh": 381,
	"./tlh.js": 381,
	"./tr": 382,
	"./tr.js": 382,
	"./tzl": 383,
	"./tzl.js": 383,
	"./tzm": 384,
	"./tzm-latn": 385,
	"./tzm-latn.js": 385,
	"./tzm.js": 384,
	"./ug-cn": 386,
	"./ug-cn.js": 386,
	"./uk": 387,
	"./uk.js": 387,
	"./ur": 388,
	"./ur.js": 388,
	"./uz": 389,
	"./uz-latn": 390,
	"./uz-latn.js": 390,
	"./uz.js": 389,
	"./vi": 391,
	"./vi.js": 391,
	"./x-pseudo": 392,
	"./x-pseudo.js": 392,
	"./yo": 393,
	"./yo.js": 393,
	"./zh-cn": 394,
	"./zh-cn.js": 394,
	"./zh-hk": 395,
	"./zh-hk.js": 395,
	"./zh-tw": 396,
	"./zh-tw.js": 396
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 529;

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushnotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PushnotificationProvider = (function () {
    function PushnotificationProvider(http, oneSignal, platform, vibration) {
        this.http = http;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.vibration = vibration;
        console.log('Hello PushnotificationProvider Provider');
    }
    PushnotificationProvider.prototype.init = function () {
        var _this = this;
        if (this.platform.is('core')) {
            return;
        }
        this.oneSignal.startInit('cddd2dd1-4340-4549-b014-58febf93110d', '41677609884');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(function () {
            if (localStorage.getItem('vibration') == 'true') {
                _this.vibration.vibrate(1000);
            }
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (noti) {
            console.log("Noti", noti);
        });
        this.oneSignal.endInit();
        if (localStorage.getItem('push') == 'true') {
            this.getPushData();
        }
        else {
            this.disablePush();
        }
    };
    PushnotificationProvider.prototype.disablePush = function () {
        this.oneSignal.setSubscription(false);
        // alert("Disable Push");
    };
    PushnotificationProvider.prototype.getPushData = function () {
        this.oneSignal.setSubscription(true);
        // alert("enalbe Push");
    };
    PushnotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__["a" /* Vibration */]])
    ], PushnotificationProvider);
    return PushnotificationProvider;
}());

//# sourceMappingURL=pushnotification.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkorderdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workordernotes_workordernotes__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__maps_maps__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__workorder_text_workorder_text__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__workorderimage_workorderimage__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__workorderinvoice_workorderinvoice__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var WorkorderdetailsPage = (function () {
    function WorkorderdetailsPage(navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl, authService, callNumber, actionSheetCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.callNumber = callNumber;
        this.actionSheetCtrl = actionSheetCtrl;
        this.emailComposer = emailComposer;
        this.workorderData = {};
        this.workhistoryData = {};
        this.workorderData = navParams.get('orderData');
        console.log("WorkOrderDetails", this.workorderData);
        // this.contacts = [
        //   { "name": "Take Photo", "image": "assets/imgs/order/camera.svg" },
        //   { "name": "Add Invoice", "image": "assets/imgs/order/invoice.svg" },
        //   { "name": "Call Property", "image": "assets/imgs/order/call.svg" },
        //   { "name": "Call Owner", "image": "assets/imgs/order/call.svg" },
        //   { "name": "Contact Office", "image": "assets/imgs/order/contact1.svg" },
        //   { "name": "Get Directions", "image": "assets/imgs/order/map2.svg" },
        // ]
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad WorkorderdetailsPage');
    //   this.getOrderData();
    // }
    WorkorderdetailsPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter WorkorderdetailsPage');
        this.getOrderData();
    };
    WorkorderdetailsPage.prototype.getOrderData = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Loading...",
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.authService.getWorkOrderDetails(this.workorderData.woNum).then(function (data) {
            console.log("result_order_data", data);
            _this.workhistoryData = data;
            if (_this.loading !== null) {
                setTimeout(function () {
                    _this.loading.dismiss();
                }, 1500);
            }
        }).catch(function (err) {
            console.log("Error_data", err.message);
            if (_this.loading !== null) {
                setTimeout(function () {
                    _this.loading.dismiss();
                }, 1500);
            }
            ;
            _this.alertCtrl.create({
                subTitle: "Error!",
                message: err.message,
                buttons: ["Ok"]
            }).present();
        });
    };
    WorkorderdetailsPage.prototype.viewContact = function (id) {
        console.log("contact_paage_info", id);
        switch (id) {
            case 0:
                this.getAttactmentData("img");
                break;
            case 1:
                this.getInvoice();
                break;
            case 2:
                this.getPhoneCall(this.workhistoryData.unitPhone);
                break;
            case 3:
                this.getPhoneCall(this.workhistoryData.ownerPhone);
                break;
            case 4:
                this.getContactOffice();
                break;
            case 5:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__maps_maps__["a" /* MapsPage */], { mapData: this.workhistoryData.unitAddress });
                break;
            default:
                break;
        }
    };
    WorkorderdetailsPage.prototype.getContactOffice = function () {
        var self = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact Siebert',
            buttons: [
                {
                    text: 'Email',
                    handler: function () {
                        self.sendEmail();
                    }
                },
                {
                    text: 'Text',
                    handler: function () {
                        self.sendText();
                    }
                },
                {
                    text: 'Chat',
                    handler: function () {
                        self.sendChat();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    WorkorderdetailsPage.prototype.getPhoneCall = function (phoneNumber) {
        var str = phoneNumber;
        var pstr = str.replace("-", "");
        var phoneNum = pstr.replace("-", "");
        console.log("phone_number", phoneNum);
        this.callNumber.callNumber(phoneNum, true).then(function (res) {
            console.log("Launched Dialer!", res);
        }).catch(function (err) {
            console.log("Error Launching Dialer", err);
        });
    };
    WorkorderdetailsPage.prototype.viewNoteData = function () {
        var _this = this;
        var sub_modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__workordernotes_workordernotes__["a" /* WorkordernotesPage */], { subModalData: this.workhistoryData });
        sub_modal.onDidDismiss(function (data) {
            _this.getOrderData();
        });
        sub_modal.present();
    };
    WorkorderdetailsPage.prototype.getAttactmentData = function (checkData) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__workorderimage_workorderimage__["a" /* WorkorderimagePage */], { attachData: checkData, orderData: this.workhistoryData });
    };
    // invoice
    WorkorderdetailsPage.prototype.getInvoice = function () {
        var self = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Option to continue',
            buttons: [
                {
                    text: 'Upload Invoice',
                    handler: function () {
                        self.getAttactmentData("inv");
                    }
                },
                {
                    text: 'Complete Form',
                    handler: function () {
                        self.getCompleteForm();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    WorkorderdetailsPage.prototype.getCompleteForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__workorderinvoice_workorderinvoice__["a" /* WorkorderinvoicePage */]);
    };
    // contact Info page...
    WorkorderdetailsPage.prototype.sendEmail = function () {
        var _this = this;
        this.emailComposer.isAvailable().then(function (avaliable) {
            if (avaliable) {
                console.log("avaliable");
            }
            else {
                _this.alertCtrl.create({
                    subTitle: "Confirm",
                    message: "Can't send the email now.",
                    buttons: ["OK"]
                }).present();
            }
        });
        var email = {
            to: 'darrius@siebert-realty.com',
            subject: 'Contact Issues',
            body: 'Hey I need ....',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    WorkorderdetailsPage.prototype.sendText = function () {
        var modalOptions = {
            cssClass: "subModal"
        };
        var sub_modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__workorder_text_workorder_text__["a" /* WorkorderTextPage */], "", modalOptions);
        sub_modal.onDidDismiss(function (data) {
            if (data !== undefined) {
                console.log("res_Text_modal", data);
            }
        });
        sub_modal.present();
    };
    WorkorderdetailsPage.prototype.sendChat = function () {
    };
    // start Job
    WorkorderdetailsPage.prototype.startJob = function () {
        var _this = this;
        var loadingData = this.loadingCtrl.create({
            content: "Syncing...",
            spinner: 'hide',
            cssClass: 'my-loading-class'
        });
        loadingData.present();
        this.authService.getStartWorkOrder(this.workorderData.woID).then(function (data) {
            if (loadingData !== null) {
                setTimeout(function () {
                    _this.getOrderData();
                    loadingData.dismiss();
                }, 1000);
            }
        }).catch(function (err) {
            console.log("Error Start Job", err.message);
            if (loadingData !== null) {
                setTimeout(function () {
                    loadingData.dismiss();
                }, 1000);
            }
            _this.alertCtrl.create({
                subTitle: "Error Start Job",
                message: err.message,
                buttons: ["Ok"]
            }).present();
        });
    };
    WorkorderdetailsPage.prototype.endJob = function () {
        var _this = this;
        this.alertCtrl.create({
            title: "Are you sure?",
            message: "Verify that all work is completed and noted?",
            buttons: [{
                    text: "Cancel",
                    role: 'cancel',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: "Ok",
                    handler: function () {
                        _this.getEndJob();
                    }
                }
            ]
        }).present();
    };
    WorkorderdetailsPage.prototype.getEndJob = function () {
        var _this = this;
        this.authService.getEndWorkOrder(this.workorderData.woID).then(function (data) {
            console.log("End Job", data);
            _this.getOrderData();
        }).catch(function (err) {
            console.log("end job error", err.message);
            _this.alertCtrl.create({
                subTitle: "Error End Job",
                message: err.message,
                buttons: ["Ok"]
            }).present();
        });
    };
    WorkorderdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workorderdetails',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\workorderdetails\workorderdetails.html"*/`<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title>{{workhistoryData.id}}: &nbsp;{{workhistoryData.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="top_content" *ngIf="workhistoryData.woEnded">\n    <div class="job_title">\n      <ion-icon name="checkmark-circle"></ion-icon>\n      <p>Great Job!</p>\n    </div>\n    <div class="job_date">\n      <p>Job update to <strong>completed</strong> on <strong>{{workhistoryData.woEndDate}}</strong></p>\n    </div>\n  </div>\n\n  <div class="top_content" *ngIf="workhistoryData.woStarted && !workhistoryData.woEnded">\n    <div class="job_title1">\n      <ion-icon name="checkmark-circle"></ion-icon>\n      <p>In Progress!</p>\n    </div>\n    <div class="job_date">\n      <p>You been working since <strong>{{workhistoryData.woStartDate}}</strong></p>\n    </div>\n  </div>\n\n\n  <div class="mid_content">\n    <div class="mid_title">\n      <img src="{{workhistoryData.unitImage}}" alt="">\n      <h2>{{workhistoryData.unitName}} - {{workhistoryData.unitID}}</h2>\n      <p>{{workhistoryData.unitAddress}}</p>\n      <p>{{workhistoryData.unitPhone}}</p>\n    </div>\n    <div class="mid_desc">\n      <p>{{workhistoryData.woDesc}}</p>\n    </div>\n  </div>\n\n  <div class="note_content"  *ngIf="workhistoryData.woStarted">\n    <div class="note_title">\n      <div class="sub_cat_start">\n        <h2>My Notes</h2>\n      </div>\n      <div class="sub_cat_end" (click)="viewNoteData()">\n        <img src="./assets/imgs/order/pencil.svg" alt="">\n      </div>\n    </div>\n    <div class="note_desc" *ngIf="workhistoryData.woWorkDone != \'\'">\n      <p>{{workhistoryData.woWorkDone}}</p>\n    </div>\n    <div class="note_desc" *ngIf="workhistoryData.woWorkDone == \'\'">\n      <p>You haven\'t said anything yet.</p>\n      <button ion-button round outline color="mainbtn" (click)="viewNoteData()">Add Notes</button>\n    </div>\n  </div >\n\n  <div class="cat_content"  *ngIf="workhistoryData.woStarted && !workhistoryData.woEnded">\n    <div class="cat_content_title" (click)="viewContact(0)">\n      <div class="sub_cat_start">\n        <p>Take Photo</p>\n      </div>\n      <div class="sub_cat_end">\n        <img src="./assets/imgs/order/camera.svg" alt="">\n      </div>\n    </div>\n    <div class="upload_img" *ngIf="workhistoryData.image">\n      <img src="{{workhistoryData.image}}" alt="">\n    </div>\n\n    <div class="cat_content_title" (click)="viewContact(1)">\n      <div class="sub_cat_start">\n        <p>Add Invoice *</p>\n      </div>\n      <div class="sub_cat_end">\n        <img src="./assets/imgs/order/invoice.svg" alt="">\n      </div>\n    </div>\n\n    <div class="cat_content_title" (click)="viewContact(2)">\n      <div class="sub_cat_start">\n        <p>Call Property</p>\n      </div>\n      <div class="sub_cat_end">\n        <img src="./assets/imgs/order/call.svg" alt="">\n      </div>\n    </div>\n\n\n\n    <div class="cat_content_title" (click)="viewContact(4)">\n      <div class="sub_cat_start">\n        <p>Contact Office</p>\n      </div>\n      <div class="sub_cat_end">\n        <img src="./assets/imgs/order/contact1.svg" alt="">\n      </div>\n    </div>\n\n    <div class="cat_content_title" (click)="viewContact(5)">\n      <div class="sub_cat_start">\n        <p>Get Directions</p>\n      </div>\n      <div class="sub_cat_end">\n        <img src="./assets/imgs/order/map2.svg" alt="">\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class="bottom_content">\n    <button ion-button round full color="mainbtn" (click)="startJob()" *ngIf="workhistoryData.action == \'startjob\'">\n      Start Job </button>\n    <button ion-button round full color="promobtn" (click)="endJob()" *ngIf="workhistoryData.action == \'endjob\'"> End\n      Job </button>\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\workorderdetails\workorderdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], WorkorderdetailsPage);
    return WorkorderdetailsPage;
}());

//# sourceMappingURL=workorderdetails.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainPage = (function () {
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.signinUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    MainPage.prototype.sigupUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-main',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\main\main.html"*/`<ion-content padding class="content-bg" no-bounce>\n  <div class="main_container">\n    <div class="main_image">\n      <img src="assets/imgs/siebert.png" />\n    </div>\n  </div>\n  <div class="signin_signinbtn">\n      <button ion-button round full color="mainbtn" (click)="signinUser()">\n        Log In\n      </button>\n\n    </div>\n  </ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidemenu_sidemenu__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpwd_forgotpwd__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, loadingCtrl, alertCtrl, mdlCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.mdlCtrl = mdlCtrl;
        this.authService = authService;
        this.userInfo = {};
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: 'circles',
        });
    };
    SigninPage.prototype.signinUser = function () {
        this.userInfo.email = 'UNUSED';
        if (this.userInfo.pwd == undefined) {
            this.alertCtrl.create({
                subTitle: 'Error!',
                message: "Please enter Vendor ID",
                cssClass: 'alertDanger',
                buttons: ["OK"]
            }).present();
        }
        else {
            this.loading.present();
            // this.checkUserInfo("john@doe.com", this.userInfo.pwd);
            this.checkUserInfo(this.userInfo.email, this.userInfo.pwd);
        }
    };
    SigninPage.prototype.checkUserInfo = function (userEmail, userId) {
        var _this = this;
        this.authService.getLoginInfo(userEmail, userId).then(function (data) {
            console.log("Result_data", data);
            if (_this.loading !== null) {
                _this.loading.dismiss();
            }
            localStorage.setItem("currentUser", JSON.stringify(data));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__sidemenu_sidemenu__["a" /* SidemenuPage */]);
        }).catch(function (err) {
            console.log("Result_err", err.message);
            if (_this.loading !== null) {
                _this.loading.dismiss();
            }
            _this.alertCtrl.create({
                subTitle: 'Invalid Login Details',
                message: "Please check Vendor. Contact 757-426-6212 for help",
                buttons: ["Ok"]
            }).present();
        });
    };
    SigninPage.prototype.gotoResetPage = function () {
        var forgot_mdl = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_3__forgotpwd_forgotpwd__["a" /* ForgotpwdPage */]);
        forgot_mdl.present();
    };
    SigninPage.prototype.registerUser = function () {
        // let signup_modal = this.mdlCtrl.create(SignupPage);
        // signup_modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\signin\signin.html"*/`<ion-content no-padding>\n  <div class="signin_container">\n    <p class="signin_title">\n      VENDOR\n    </p>\n\n      <div class="main_image">\n        <img src="assets/imgs/siebert.png" />\n      </div>\n\n    <div class="main_cont">\n      <div class="userCont">\n          <ion-input type="tel" [(ngModel)]="userInfo.pwd" placeholder="Vendor ID"></ion-input>\n      </div>\n\n    </div>\n    <div class="signin_signinbtn">\n      <button ion-button round full color="mainbtn" (click)="signinUser()">\n        Log In\n      </button>\n    </div>\n\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedscategory_feedscategory__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, viewCtrl, alertCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.registerUser = function () {
        var _this = this;
        if (this.user.email == undefined || this.user.pwd == undefined) {
            this.alertCtrl.create({
                subTitle: "Error!",
                message: "Invalid Credential",
                cssClass: 'alertDanger',
                buttons: ["OK"]
            }).present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Creating Account',
                spinner: 'bubbles'
            });
            loading_1.present();
            setTimeout(function () {
                // this.viewCtrl.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__feedscategory_feedscategory__["a" /* FeedscategoryPage */]);
                loading_1.dismiss();
            }, 2000);
        }
    };
    SignupPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ message: message, duration: 3000, position: 'top' }).present();
    };
    SignupPage.prototype.closeSignupModal = function () {
        // this.viewCtrl.dismiss();
        // this.navCtrl.pop()
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\2019\04\1Ionic\Vendor\src\pages\signup\signup.html"*/`<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title color="white" style="text-align: center">Sign Up</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="main_top">\n    <div class="main_image">\n      <img src="assets/imgs/siebert.png" />\n    </div>\n  </div>\n  <div class="main_cont">\n    <div class="userCont">\n        <ion-input type="email" [(ngModel)]="user.email" placeholder="Email"></ion-input>\n    </div>\n    <div class="userCont">\n        <ion-input type="password" [(ngModel)]="user.pwd" placeholder="Password"></ion-input>\n    </div>\n  </div>\n  <div class="signup_controllers">\n    <div>\n      <button ion-button round full color="mainbtn" (click)="registerUser()" class="confirm_btn">Register</button>\n    </div>\n    <div>\n      <button ion-button round full (click)="closeSignupModal()" class="confirm_btn">Cancel</button>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\2019\04\1Ionic\Vendor\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[410]);
//# sourceMappingURL=main.js.map