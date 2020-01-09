webpackJsonp([42],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiOperatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_database__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_auth__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApiOperatorProvider = (function () {
    // userId: any;
    function ApiOperatorProvider(http) {
        this.http = http;
        // resurantUrl = "https://www.siebert-realty.com/htmls/api.php?endpoint=restuarants";
        // atractionUrl = "https://www.siebert-realty.com/htmls/api.php?endpoint=attractions";
        this.eventUrl = "https://www.siebert-realty.com/htmls/api.php?endpoint=events";
        this.feedCategortpath = "./assets/js/feeds-categories.json";
        this.reservation_path = "./assets/js/sample-guest.json";
        this.rentalSubDataIamgePath = "https://www.siebert-realty.com/htmls/unitsAPI.php?unit=";
        this.WORDPRESS_API_URL = "https://www.siebert-realty.com/blog/api/";
        this.leaseUrl = "https://guest.siebert-realty.com/confirmation.asp?p=1&lease=";
        this.userVerifyUrl = "https://api.siebert-realty.com/guest-app/verify.asp"; // post...
        this.shareApiUrl = "https://api.siebert-realty.com/guest-app/share.asp";
        // leaseInfoApi = "https://api.siebert-realty.com/guest-app/index2.asp?lease=";
        this.leaseInfoApi = "https://api.siebert-realty.com/guest-app/lease.asp?lease=";
        this.guestInfoApi = "https://api.siebert-realty.com/guest-app/index.asp?guest_id=";
        this.localattrationUrl = "https://api2.siebert-realty.com/explore/attractions";
        this.resCatUrl = "https://api2.siebert-realty.com/explore/restaurants";
        this.guestData = {};
        console.log('Hello ApiOperatorProvider Provider');
        // if (localStorage.getItem('user_id') !== null) {
        //   this.userId = localStorage.getItem("user_id")
        // };
    }
    //  get resturant data ..
    ApiOperatorProvider.prototype.getResCatData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.resCatUrl).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Reject_error", err);
                reject(err);
            });
        });
    };
    //  get  Local Attraction data ..
    ApiOperatorProvider.prototype.getLocalAtrractionData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.localattrationUrl).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Reject_error", err);
                reject(err);
            });
        });
    };
    //  get Event data ..
    ApiOperatorProvider.prototype.getUpComingEventData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.eventUrl).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Reject_error", err);
                reject(err);
            });
        });
    };
    //  get Current Weather data ..
    ApiOperatorProvider.prototype.getCurrentWeatherData = function (lat, lng) {
        var _this = this;
        var current_weather_url = 'https://api.darksky.net/forecast/' + '6b7c2fec43cb9006f5d525f7934887bd' + '/' + lat + ',' + lng + '?units=us';
        console.log("current_weather_url", current_weather_url);
        return new Promise(function (resolve, reject) {
            _this.http.get(current_weather_url).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Reject_error", JSON.stringify(err));
                reject(err);
            });
        });
    };
    // get Rental Data....
    ApiOperatorProvider.prototype.getBrowseRentalData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.feedCategortpath).subscribe(function (res) {
                console.log("categoryData", res);
                resolve(res);
            }, function (err) {
                console.log("Reject_error", err);
                reject(err);
            });
        });
    };
    // get Reservation Data....
    ApiOperatorProvider.prototype.getMyReservationData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.reservation_path).subscribe(function (res) {
                console.log("categoryData", res);
                resolve(res);
            }, function (err) {
                console.log("Reject_error", err);
                reject(err);
            });
        });
    };
    //  get Rental SubData...
    ApiOperatorProvider.prototype.getRentalDetailsData = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.rentalSubDataIamgePath + id).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Reject_error", err);
                reject(err);
            });
        });
    };
    //  get Rental SubData...
    ApiOperatorProvider.prototype.getWordPressBlogData = function (page) {
        var _this = this;
        var blogUrl = this.WORDPRESS_API_URL + 'get_recent_posts/' + '?page=' + page;
        return new Promise(function (resolve, reject) {
            _this.http.get(blogUrl).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Reject_error", err);
                reject(err);
            });
        });
    };
    // get lease data...
    //  get Rental SubData...
    ApiOperatorProvider.prototype.getLeaseData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.leaseUrl);
        });
    };
    // firebase part...
    ApiOperatorProvider.prototype.setGuestData = function (userId, inviteRes, shareInfo) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            var ref = __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.database().ref('/guests/' + userId);
            var self = _this;
            ref.orderByKey().limitToLast(1).once('value', function (snapshot) {
                if (snapshot.val() == null) {
                    console.log("first_value");
                    _this.guestData.key = 0;
                    self.saveUserEmailData(inviteRes, shareInfo, userId);
                    observer.next();
                }
                else {
                    snapshot.forEach(function (childSnapshot) {
                        childSnapshot.key;
                        self.key = childSnapshot.key;
                        self.key++;
                        _this.guestData.key = self.key;
                        self.saveUserEmailData(inviteRes, shareInfo, userId);
                        console.log("key", self.key);
                        observer.next();
                    });
                }
            }).catch(function (err) {
                console.log("err", err.message);
            });
        });
    };
    ApiOperatorProvider.prototype.saveUserEmailData = function (inviteRes, shareInfo, userId) {
        console.log("save_res", inviteRes, shareInfo, this.guestData.key);
        __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.database().ref('/guests/' + userId + "/" + this.guestData.key).update({
            guest_phone: shareInfo.telephone,
            status: shareInfo.status,
            share_code: shareInfo.share_code,
            guest_name: inviteRes.guest,
            guset_trip: inviteRes.trip,
            signed: 0
        });
    };
    ApiOperatorProvider.prototype.getGuestData = function (userId) {
        return __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.database().ref('/guests/' + userId + "/").once('value');
    };
    ApiOperatorProvider.prototype.getDeletedUserData = function (idx, userId) {
        return __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.database().ref('/guests/' + userId + "/" + idx).remove();
    };
    ApiOperatorProvider.prototype.getLeaseUserVerify = function (lease, unit, method) {
        var postData = new URLSearchParams();
        postData.set('lease', lease);
        postData.set('unit', unit);
        postData.set('method', method);
        console.log("postData", postData);
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post(this.userVerifyUrl, postData.toString(), options);
    };
    ApiOperatorProvider.prototype.getGuestUserVerify = function (telephone, shareCode, method) {
        var postData = new URLSearchParams();
        postData.set('telephone', telephone);
        postData.set('share_code', shareCode);
        postData.set('method', method);
        console.log("postData", postData);
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post(this.userVerifyUrl, postData.toString(), options);
    };
    ApiOperatorProvider.prototype.getInviteGuestData = function (phone, lease, guest_id) {
        console.log("invite_provide", phone, lease, guest_id);
        var postData = new URLSearchParams();
        postData.set('telephone', phone);
        postData.set('lease', lease);
        postData.set('guest_id', guest_id);
        console.log("postData", postData);
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post(this.shareApiUrl, postData.toString(), options);
    };
    ApiOperatorProvider.prototype.getLeaseUserIndexData = function (lease) {
        var _this = this;
        var guestAppUrl = this.leaseInfoApi + lease;
        return new Promise(function (resolve, reject) {
            _this.http.get(guestAppUrl).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Reject_error", err);
                reject(err);
            });
        });
    };
    ApiOperatorProvider.prototype.getGuestUserIndexData = function (guestId) {
        var _this = this;
        var guestAppUrl = this.guestInfoApi + guestId;
        return new Promise(function (resolve, reject) {
            _this.http.get(guestAppUrl).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log("Reject_error", err);
                reject(err);
            });
        });
    };
    ApiOperatorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiOperatorProvider);
    return ApiOperatorProvider;
}());

//# sourceMappingURL=api-operator.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrivalmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArrivalmodalPage = (function () {
    function ArrivalmodalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modal_content = {};
        this.modal_content = navParams.get('arModalData');
        console.log("modal_content", this.modal_content);
    }
    ArrivalmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArrivalmodalPage');
    };
    ArrivalmodalPage.prototype.confirm = function () {
        // var  map_address = "601 Sandbridge Road Virginia Beach, VA 23456";
        // this.navCtrl.push(SubmapPage, {mapviewData: map_address});
        this.viewCtrl.dismiss();
    };
    ArrivalmodalPage.prototype.closeBtn = function () {
        this.viewCtrl.dismiss();
    };
    ArrivalmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-arrivalmodal',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\arrivalmodal\arrivalmodal.html"*/'<ion-content padding>\n    <div class="modal_page">\n        <div class="close_btn" (click)="closeBtn()"><ion-icon ios="ios-close" md="md-close"></ion-icon></div>\n        <div class="modal_title">{{modal_content.title}}</div>\n        <div class="modal_content">{{modal_content.message}}</div>\n        <div class="modal_button">\n            <button ion-button round outline color="mainbtn" (click)="confirm()"> Close</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\arrivalmodal\arrivalmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], ArrivalmodalPage);
    return ArrivalmodalPage;
}());

//# sourceMappingURL=arrivalmodal.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttractionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attraction_sub_attraction_sub__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttractionsPage = (function () {
    function AttractionsPage(navCtrl, navParams, loadingCtrl, apiDataProvider, alertCtrl, mdlCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.apiDataProvider = apiDataProvider;
        this.alertCtrl = alertCtrl;
        this.mdlCtrl = mdlCtrl;
        this.resImage = './assets/imgs/attract/teq.jpg';
        this.loading = null;
        this.resData = {};
        this.modal_data = {};
        this.objectKeys = Object.keys;
        this.currentArraction = {};
        this.arractionData = [];
        this.current_selected = 0;
        this.currentArraction = navParams.get('currentAttractionData');
        this.arractionData = navParams.get('wholeAttractionData');
        this.current_selected = navParams.get('currentId');
        console.log("arrtaction_data", this.currentArraction, this.arractionData);
    }
    AttractionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttractionsPage');
        var temp = document.getElementById('btn_num_' + this.current_selected).getBoundingClientRect();
        console.log("CurrentLeft", temp.left);
        this.scroll._scrollContent.nativeElement.scrollLeft = temp.left - 20;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
        });
        this.loading.present();
        this.getAttractionData();
    };
    AttractionsPage.prototype.getAttractionData = function () {
        if (this.loading !== null) {
            this.loading.dismiss();
        }
    };
    AttractionsPage.prototype.viewData = function (subData) {
        console.log("Click_data", subData);
        this.modal_data = subData;
        this.modal_data.name = this.currentArraction.name;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__attraction_sub_attraction_sub__["a" /* AttractionSubPage */], { subModalData: this.modal_data });
    };
    AttractionsPage.prototype.selectCategory = function (btnId) {
        console.log("btn_number", btnId);
        this.current_selected = btnId;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
        });
        this.loading.present();
        this.getContentArractionData(btnId);
    };
    AttractionsPage.prototype.getContentArractionData = function (btnId) {
        this.currentArraction = this.arractionData[btnId];
        console.log("current_id", this.currentArraction);
        if (this.loading !== null) {
            this.loading.dismiss();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", Object)
    ], AttractionsPage.prototype, "scroll", void 0);
    AttractionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-attractions',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\attractions\attractions.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>{{currentArraction.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding>\n  <ion-grid>\n    <ion-scroll #scroll scrollX="true" style="height: 4em">\n        <div style="display: flex">\n            <div *ngFor="let res of arractionData; let i=index;">\n                <button ion-button id="{{\'btn_num_\' + i}}" [color]="i==current_selected?\'primary\':\'white\'" (click)="selectCategory(i)">\n                  <p>{{res.name}}</p>\n                </button>\n              </div>\n        </div>\n    </ion-scroll>\n  </ion-grid>\n  <ion-list>\n    <div class="content_tile">\n      <img src="./assets/imgs/attract/mu.png" alt="">\n      {{currentArraction.name}}</div>\n    <ion-item *ngFor="let subMenu of  currentArraction.items let id=index" (click)="viewData(currentArraction.items[id])">\n      <div class="elencoImg"><img src="{{subMenu.image}}" alt=""></div>\n      <div class="elencoTxt">\n        <div class="restroName">\n          <p>{{subMenu.title}}<p>\n        </div>\n        <div class="restroDes">\n          <p>{{subMenu.address}}<p>\n        </div>\n        <div class="restroNum"><a>{{subMenu.phone}}</a>\n        </div>\n      </div>\n      <div class="elecoBtn">\n          <i class="fa fa-chevron-right" aria-hidden="true"></i>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\attractions\attractions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], AttractionsPage);
    return AttractionsPage;
}());

//# sourceMappingURL=attractions.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blogpost_blogpost__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogPage = (function () {
    function BlogPage(navCtrl, navParams, loadingCtrl, apiDataProvider, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.apiDataProvider = apiDataProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.resData = [];
        this.blogData = [];
        this.page = 1;
    }
    BlogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BlogPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.getBlogData(this.page);
    };
    BlogPage.prototype.getBlogData = function (page) {
        var _this = this;
        this.apiDataProvider.getWordPressBlogData(page).then(function (data) {
            if (data) {
                _this.resData = data.posts;
                console.log("raw_res_data", data.posts);
                _this.blogData = _this.parseData(data.posts);
                console.log("blog_data", _this.blogData);
                _this.loading.dismiss();
            }
            else {
                _this.alertCtrl.create({
                    title: "Error",
                    message: "There is no Data",
                    buttons: ["OK"]
                }).present();
                _this.loading.dismiss();
            }
        }).catch(function (err) {
            console.log("Reult_err", err.message);
            _this.loading.dismiss();
        });
    };
    BlogPage.prototype.doInfinite = function (inifiniteScroll) {
        var _this = this;
        console.log("Begin async operation");
        setTimeout(function () {
            _this.page += 1;
            _this.getContineBlogData(_this.page);
            inifiniteScroll.complete();
        }, 500);
    };
    // infinite scroll data..
    BlogPage.prototype.getContineBlogData = function (page) {
        var _this = this;
        console.log("page_count", page);
        this.apiDataProvider.getWordPressBlogData(page).then(function (data) {
            if (data.posts.length == 0) {
            }
            else {
                console.log("continue_data", data.posts);
                _this.resData = data.posts;
                var new_posts = _this.parseData(_this.resData);
                _this.blogData = _this.blogData.concate(new_posts);
                console.log("Continue_result_data", _this.resData);
            }
        }).catch(function (err) {
            console.log("Continue_err", err.message);
        });
    };
    BlogPage.prototype.bookmarkPost = function (blog_data) {
        var toast = this.toastCtrl.create({
            message: "Post Saved ....",
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log("Dismissed toast");
        });
        toast.present();
    };
    BlogPage.prototype.viewPostData = function (blog) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__blogpost_blogpost__["a" /* BlogpostPage */], { blogpostData: blog });
    };
    // filter pages...
    BlogPage.prototype.parseData = function (posts) {
        var maxLength = 500;
        return __WEBPACK_IMPORTED_MODULE_4_underscore___default.a.map(posts, function (post) {
            if (post.content.length > maxLength) {
                //trim the string to the maximum length
                var trimmedString = post.content.substr(0, maxLength);
                //re-trim if we are in the middle of a word
                trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf("</p>")));
                post.shortContent = trimmedString;
            }
            return post;
        });
    };
    BlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-blog',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\blog\blog.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Siebert Blog</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-card *ngFor="let blog of blogData let idx=index">\n    <ion-item class="blog_tile">\n      <ion-avatar item-start>\n        <img src="./assets/imgs/blog/blog.png">\n      </ion-avatar>\n      <div class="card_title">{{blog.title}}</div>\n      <div class="card_sub_title">By {{blog.author.nickname}} {{blog.date | amTimeAgo}}</div>\n    </ion-item>\n    <ion-item >\n      <div [innerHTML]="blog.shortContent"></div>\n    </ion-item>\n    <div class="mainCont">\n      <div class="subCont1" (click)="bookmarkPost(blog)">\n        <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n      </div>\n      <div class="subCont2" (click)="viewPostData(blog)">\n        <button ion-button block small class="confirm_btn">Read more</button>\n      </div>\n    </div>\n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="Loading more data...">\n      </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\blog\blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], BlogPage);
    return BlogPage;
}());

//# sourceMappingURL=blog.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorehomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExplorehomePage = (function () {
    function ExplorehomePage(navCtrl, navParams, socialSharing, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.groups = [];
    }
    ExplorehomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExplorehomePage');
        this.viewData();
    };
    ExplorehomePage.prototype.viewData = function () {
        this.groups = [];
        for (var i = 0; i < 10; i++) {
            this.groups[i] = {
                name: i,
                items: [],
                show: false
            };
            for (var j = 0; j < 3; j++) {
                this.groups[i].items.push(i + '-' + j);
            }
        }
    };
    ExplorehomePage.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ExplorehomePage.prototype.contact = function () {
        var _this = this;
        this.socialSharing.canShareViaEmail().then(function () {
            console.log("result_ok");
        }).catch(function (err) {
            _this.alertCtrl.create({
                subTitle: "Error!",
                message: err.message,
                buttons: ["OK"]
            }).present();
        });
        var email = {
            to: 'mail@siebert-realty.com',
            cc: 'mail@siebert-realty.com',
            bcc: ['john@doe.com'],
            subject: 'House Wiki',
            message: 'This is the message content...',
            isHtml: true
        };
        this.socialSharing.shareViaEmail(email.message, email.subject, [email.to]).then(function (success) {
            console.log("success_share");
        }).catch(function (err) {
            _this.alertCtrl.create({
                subTitle: "Error!",
                message: err.message,
                buttons: ["OK"]
            }).present();
        });
    };
    ExplorehomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-explorehome',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\explorehome\explorehome.html"*/'<ion-header>\n  <ion-navbar color="custom">\n\n    <ion-title>House Wiki</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding>\n  <ion-list>\n    <div class="content_tile">This is your complete guide to everything in your home</div>\n    <div *ngFor="let group of groups" style="border-bottom: 1px solid #ddd">\n      <ion-item class="item-stable" (click)=toggleGroup(group)>\n        <ng-container *ngIf="!group.show"> {{item}}</ng-container>\n        <ion-icon ios="ios-add" md="md-add" *ngIf="group.show==false"> </ion-icon>\n        <ion-icon ios="ios-remove" md="md-remove" *ngIf="group.show==true"></ion-icon>\n        Section {{group.name}}\n      </ion-item>\n      <ng-container *ngIf="group.show">\n        <ion-item class="item-accordion" *ngFor="let item of group.items">{{item}}</ion-item>\n      </ng-container>\n    </div>\n  </ion-list>\n  <div class="contact_title">\n    <p style="text-align: center">Have a question not listed? Ask us now!</p>\n  </div>\n  <div class="signin_signinbtn">\n    <button ion-button round full color="mainbtn" (click)="contact()">\n      Contact Us\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\explorehome\explorehome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ExplorehomePage);
    return ExplorehomePage;
}());

//# sourceMappingURL=explorehome.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqPage = (function () {
    function FaqPage(navCtrl, navParams, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.groups = [];
        this.navClass = 'show_white';
        this.faq = [
            {
                question: "How can I pay for the vacation rental?",
                answer: "<p>Siebert Realty has a variety of payment options. We accept personal checks through our electronic E-Check feature for reservations at least 10 days out, and personal checks via mail if arrival time is at least 30 days out. We also accept cashier checks and money orders. You can pay via credit card (Visa, MasterCard, Discover) through our 3rd party processing company. The company has a $49.95 transaction fee for each process</p><br><br><p>For more payment information, please make sure to view details in your lease as well as our Guest Net once you book a beach home or condo.</p>"
            },
            {
                question: "Do you offer Travel Insurance?\n",
                answer: "<p>Yes! Siebert Realty does offer a travel insurance plan that protects your investment from unforeseen circumstances that prohibit you from being able to come on vacation or cause you to leave abruptly.  There is even protection for lost luggage, auto accidents, and job loss and much more.</p>\n" +
                    "<br><p>Many people think that travel insurance is just for weather related interruptions.  The truth of the matter is that the vast majority of claims are for medical related issues that certainly were not planned for by the guests</p>\n" +
                    "\t\t\t\t<p>This is an optional line item on your lease. Please view the policy brochure online from <a href=\"http://www.siebertguest.net/gn/Objs/2010_CSA.pdf\" target=\"_new\">CSA Travel Insurance </a>for complete details of the coverage. </p><br><br><p>For more payment information, please make sure to view details in your lease as well as our Guest Net once you book a beach home or condo.</p>"
            },
            {
                question: "What happens if I have to cancel my reservation?\n",
                answer: "<p>If you need to cancel a reservation, whether payment has been made or not, please contact our rental department at 877-422-2200. Further details will be provided based on your specific reservation and cancellation time frame.</p>"
            },
            {
                question: "What are the \"Standard Features\" that are available in Siebert Realty rental properties?",
                answer: "<p>All Siebert Realty rentals are fully furnished to ensure your satisfaction. The following are STANDARD FEATURES in every rental unless otherwise noted in property description:</p>\n" +
                    "<ul>" +
                    "   <li> Non-smoking </li>\n" +
                    "   <li> Air Conditioning </li>\n" +
                    "   <li> Fully Equipped Kitchen (Stove/Oven, Refrigerator, Dishwasher, Microwave, Coffee Maker, Toaster) </li>\n" +
                    "   <li> Washer and Dryer </li>\n" +
                    "   <li> Telephone </li>\n" +
                    "   <li> TV </li>\n" +
                    "   <li> DVD Player </li>\n" +
                    "   <li> High Speed Internet Access </li>\n" +
                    "   <li> Pillows and Bedspreads </li>\n" +
                    "   <li> Fresh Sheets Provided with Beds Made </li>\n" +
                    "   <li> Towel Sets Provided (# rental sleeps) </li>\n" +
                    "   <li> Kitchen Towels & Bath Mats Provided </li>\n" +
                    "   <li> Deck Furniture </li>\n" +
                    "   <li> BBQ Grill (except condos) </li></ul>\n"
            },
            {
                question: "Are linens and towels provided? ",
                answer: "<p>Complimentary Linens with beds made are provided for all taxable guest reservations. In addition, towel sets for the total unit limit (bath towel, hand towel and wash cloth), a Kitchen Towel Set (2 towels), and a Bathmat for each Full Bath are provided.</p>"
            },
            {
                question: "Can I bring my pet?",
                answer: "<p>If the rental property accepts them, yes! Properties that accept pets will have that noted in the \"Amenities\" section of the property listing. Also, you can search for pet-specific rentals by selecting the \"pets\" checkbox in the search criteria in Advanced Search. There is a non-refundable pet fee of $100 per pet with a 2 pet limit if you decide to bring your furry friend. </p><br><br><p>Please note from Memorial Day to Labor Day, pets are only allowed on the beach before 10am and after 6pm and must be on a leash. </p>"
            },
            {
                question: "What is the phone number of the property I just rented? ",
                answer: "<p>Your phone number will be listed on your Check In packet or you can call the rental office at 866-721-6810 to get it in advance. </p>"
            },
            {
                question: "When and how do I check in?",
                answer: "<p>Check In time is 3pm. Come to our rental office at 601 Sandbridge Road. Upon arrival, you'll be given a Check In Packet containing your keys and information about our area. </p><br><br><p>During the summer, breeze through our Drive-Thru Check In. Also in the summer, we have extended hours and stay open until 7pm on Saturdays to help later arrivals. We also have a 24/hr lobby that is open all year round for those that arrive after hours. </p>"
            },
            {
                question: "When and how do I check out? ",
                answer: "<p>The latest Check Out time is 10am. Please return your keys to the rental office at 601 Sandbridge Road. Again, in the summer we will have a Drive Thru Check Out open for easy departure. There is also a Key Drop Box located in our 24/hr lobby for early departures </p>"
            },
            {
                question: "Why go to Sandbridge Beach? ",
                answer: "Sandbridge Beach, the premier vacation beach located in Southern Virginia Beach, is a perfect setting for a relaxing vacation. Guests of Sandbridge can expect to visit a large, expansive beach while staying in a rental that has all the comforts of home. From sunbathing, surfing, kayaking and fishing, to bird watching and taking strolls down the beach, Sandbridge provides the ultimate memorable vacation. It's even just a short drive to the Virginia Beach Boardwalk. Check out more about the area by visiting our Local Attractions page and Secrets of Sandbridge. "
            }
        ];
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
        this.viewData();
    };
    FaqPage.prototype.viewData = function () {
        this.groups = [];
        for (var i = 0; i < this.faq.length; i++) {
            this.groups[i] = {
                name: this.faq[i].question,
                items: this.faq[i].answer,
                show: false
            };
        }
    };
    FaqPage.prototype.toggleGroup = function (group, id) {
        console.log("id", id);
        group.show = !group.show;
        if (group.show == true) {
            // this.navClass = 'show_grey';
            document.getElementById("select_" + id).classList.add('show_grey');
        }
        else {
            // this.navClass = 'show_white';
            document.getElementById("select_" + id).classList.remove('show_grey');
        }
    };
    FaqPage.prototype.contact = function () {
        this.emailComposer.isAvailable().then(function (avaliable) {
            if (avaliable) {
                console.log("avaliable sending email...");
            }
        });
        var email = {
            to: 'mail@siebert-realty.com',
            cc: 'mail@siebert-realty.com',
            bcc: ['john@doe.com'],
            subject: 'Faq',
            body: 'This is the mesage..',
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\faq\faq.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Frequently Asked Questions</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-list>\n      <div *ngFor="let group of groups; let idx=index" style="border-bottom: 1px solid #ddd">\n        <ion-item (click)="toggleGroup(group, idx)" [id]="\'select_\' + idx" >\n          <ion-icon ios="ios-add" md="md-add" *ngIf="group.show==false"> </ion-icon>\n          <ion-icon ios="ios-remove" md="md-remove" *ngIf="group.show==true"></ion-icon>\n          {{group.name}}\n        </ion-item>\n        <ion-item  *ngIf="group.show==true" class="item-accordion" [innerHTML]="group.items" ></ion-item>\n      </div>\n    </ion-list>\n    <div class="contact_title">\n      <p style="text-align: center">Have a question not listed? Ask us now!</p>\n    </div>\n    <div class="signin_signinbtn">\n      <button ion-button round full color="mainbtn" (click)="contact()">\n        Contact Us\n      </button>\n    </div>\n\n  </ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(17);
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
    function ForgotpwdPage(navCtrl, navParams, viewCtrl, authService, loadingCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    ForgotpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpwdPage');
    };
    ForgotpwdPage.prototype.resetPassword = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.authService.getforgetPasswordData(this.useremail).subscribe(function (snapshot) {
            console.log("result_forget_password_data", snapshot);
            if (snapshot !== null) {
                _this.resetEmail();
            }
            else {
                _this.displayToastMesagem("There is no saved data!");
            }
            _this.loading.dismiss();
        }, function (err) {
            _this.displayToastMesagem(err.message);
            _this.loading.dismiss();
        });
    };
    ForgotpwdPage.prototype.resetEmail = function () {
        var _this = this;
        this.authService.forgotPassword(this.useremail).then(function (resData) {
            console.log("resData", resData);
            alert("Please check your email!");
            _this.viewCtrl.dismiss();
        }).catch(function (err) {
            console.log("err", err.message);
        });
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
            selector: 'page-forgotpwd',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\forgotpwd\forgotpwd.html"*/'<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title color="white">Forgotpwd?</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="email" [(ngModel)]="useremail"></ion-input>\n  </ion-item>\n\n  <div class="forgot_controllers">\n    <div>\n      <button ion-button round color="mainbtn" (click)="resetPassword()">Reset</button>\n    </div>\n    <div>\n      <button ion-button round color="mainbtn" outline (click)="closeForgotModal()">Close</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\forgotpwd\forgotpwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ForgotpwdPage);
    return ForgotpwdPage;
}());

//# sourceMappingURL=forgotpwd.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GettingmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GettingmapPage = (function () {
    function GettingmapPage(navCtrl, navParams, loadingCtrl, geolocation, nativeGeocoder, alertCtrl, launchNavigator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertCtrl = alertCtrl;
        this.launchNavigator = launchNavigator;
        this.destination = navParams.get('mapData');
    }
    GettingmapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubmapPage');
        this.loading = this.loadingCtrl.create({
            content: '',
            spinner: 'bubbles'
        });
        this.loading.present();
        this.viewMap();
    };
    GettingmapPage.prototype.viewMap = function () {
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
            _this.loading.dismiss();
        }).catch(function (err) {
            _this.alertCtrl.create({
                subTitle: "Error!",
                message: err.message,
                buttons: ["OK"]
            }).present();
            _this.loading.dismiss();
        });
    };
    GettingmapPage.prototype.navigation = function () {
        var options = {
            start: [this.current_lat, this.current_lng],
            app: this.launchNavigator.APP.GOOGLE_MAPS
        };
        this.launchNavigator.navigate(this.destination, options)
            .then(function (success) {
            console.log(success);
        }, function (error) {
            console.log(error);
        });
    };
    GettingmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gettingmap',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\gettingmap\gettingmap.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Maps</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div id="map" style="height: 100%;width:100%;"></div>\n  <div class="nav-btn">\n    <button ion-button round full color="navbtn" (click)="navigation()">\n      <ion-icon name="map"></ion-icon> &nbsp;&nbsp;&nbsp; Navigation\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\gettingmap\gettingmap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], GettingmapPage);
    return GettingmapPage;
}());

//# sourceMappingURL=gettingmap.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sms__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inviteguest_inviteguest__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inviteothers_inviteothers__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvitePage = (function () {
    function InvitePage(navCtrl, navParams, alertCtrl, apiDataProvider, loadingCtrl, toastCtrl, authService, sms, mdlCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.apiDataProvider = apiDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.sms = sms;
        this.mdlCtrl = mdlCtrl;
        this.userList = [];
        this.inviteUserInfo = {};
        this.inviteFlag = false;
        this.inviteResFlag = false;
        this.inviteResData = {};
        this.inviteShareResData = {};
        if (localStorage.getItem('user_id') !== null) {
            this.currentUserId = localStorage.getItem("user_id");
        }
        ;
        if (localStorage.getItem('current_lease') !== null) {
            this.inviteUserInfo = JSON.parse(localStorage.getItem('current_lease'));
        }
        else {
            this.authService.getcurrentUserData(this.currentUserId).subscribe(function (res) {
                _this.inviteUserInfo = res.val();
            }, function (err) {
                console.log("Error", err.message);
            });
        }
    }
    InvitePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitePage');
        this.getUserEmailList();
    };
    InvitePage.prototype.addGuest = function () {
        var _this = this;
        this.inviteFlag = false;
        var modalOptions = {
            cssClass: "subModal"
        };
        var sub_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_6__inviteothers_inviteothers__["a" /* InviteothersPage */], "", modalOptions);
        sub_modal.onDidDismiss(function (data) {
            if (data !== undefined) {
                console.log("res_invite_modal", data);
                _this.inviteResData = data;
                _this.getShareData(_this.inviteResData.phone);
            }
        });
        sub_modal.present();
    };
    InvitePage.prototype.getShareData = function (phone) {
        var _this = this;
        console.log("invitInfo", this.inviteUserInfo, phone);
        var lease = this.inviteUserInfo.lease_id;
        var guest_id = this.inviteUserInfo.guest_id;
        this.apiDataProvider.getInviteGuestData(phone, lease, guest_id).subscribe(function (inviteRes) {
            _this.inviteFlag = true;
            console.log("share_userData", inviteRes);
            if (inviteRes.status !== 'success') {
                _this.inviteResFlag = false;
                // this.alert(inviteRes.status);
            }
            else {
                _this.inviteResFlag = true;
                _this.inviteShareResData = inviteRes;
            }
        });
    };
    InvitePage.prototype.saveUserData = function (inviteRes, shareRes) {
        var _this = this;
        this.apiDataProvider.setGuestData(this.currentUserId, inviteRes, shareRes).subscribe(function (resData) {
            _this.getUserEmailList();
        });
    };
    InvitePage.prototype.getUserEmailList = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "wait...",
            spinner: "bubbles"
        });
        this.loading.present();
        this.apiDataProvider.getGuestData(this.currentUserId).then(function (snapshot) {
            console.log("result_data", snapshot.val());
            _this.userList = snapshot.val();
            _this.loading.dismiss();
        }).catch(function (err) {
            _this.alertCtrl.create({
                subTitle: "Error!",
                message: err.message,
                buttons: ["OK"]
            }).present();
            _this.loading.dismiss();
        });
    };
    InvitePage.prototype.viewGuestData = function (idx) {
        var _this = this;
        var modalOptions = {
            cssClass: "subModal"
        };
        var sub_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_5__inviteguest_inviteguest__["a" /* InviteguestPage */], { viewGuestProfile: this.userList[idx] }, modalOptions);
        sub_modal.onDidDismiss(function (data) {
            if (data !== undefined) {
                _this.deleteUser(idx);
            }
        });
        sub_modal.present();
    };
    InvitePage.prototype.deleteUser = function (idx) {
        var _this = this;
        console.log("index", idx);
        this.apiDataProvider.getDeletedUserData(idx, this.currentUserId).then(function (resdata) {
            _this.displayToastData("Removed Data!");
            _this.getUserEmailList();
        }).catch(function (err) {
            _this.displayToastData("Removed Data Fail!");
        });
    };
    InvitePage.prototype.displayToastData = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        }).present();
    };
    InvitePage.prototype.confirmDone = function () {
        this.inviteFlag = false;
        this.saveUserData(this.inviteResData, this.inviteShareResData);
        this.sms.send(this.inviteResData.phone, 'Hello! \n Download the Siebert Guest App and start your vacation now.\n Share Code:' + this.inviteShareResData.share_code);
    };
    InvitePage.prototype.keepInvite = function () {
        this.inviteFlag = false;
    };
    InvitePage.prototype.closeBtn = function () {
        this.inviteFlag = false;
    };
    InvitePage.prototype.retryButton = function () {
        this.inviteFlag = false;
        this.getShareData(this.inviteResData.phone);
    };
    InvitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-invite',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\invite\invite.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Invite Others</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n\n  <div class="modal_back" *ngIf="inviteFlag">\n    <div class="modal_page" *ngIf="inviteResFlag">\n      <div class="modal_title">\n          <img src="./assets/imgs/check.png" class="flag-icon">\n        <p>Success</p>\n      </div>\n      <div class="modal_button">\n        <button ion-button round full color="mainbtn" (click)="confirmDone()"> I\'m Done</button>\n        <button ion-button round full color="danger" (click)="keepInvite()">Keep Inviting</button>\n      </div>\n    </div>\n    <div class="modal_page" *ngIf="!inviteResFlag">\n        <div class="modal_title">\n            <img src="./assets/imgs/cancel.png" class="flag-icon">\n          <p style="color: red">ERROR</p>\n        </div>\n        <div class="modal_button">\n          <button ion-button round full color="mainbtn" (click)="closeBtn()">Close</button>\n          <button ion-button round full color="danger" (click)="retryButton()">Retry</button>\n        </div>\n      </div>\n  </div>\n\n  <div class="top_content">\n    <p>Your can share the app with other quests in your party and aloow them to view rental information, local\n      attractions, promitions and more</p>\n  </div>\n  <div class="mid_content">\n    <p>Guest List</p>\n  </div>\n\n  <div class="end_content">\n    <div class="end_content_title" (click)="addGuest()">\n      <div class="new_guest">\n        <i class="fa fa-plus-circle" aria-hidden="true"></i>\n        <p>Add New</p>\n      </div>\n    </div>\n  </div>\n  <div class="guest_content">\n    <div class="end_content_title" *ngFor="let user  of userList let idx=index">\n      <div class="new_guest">\n        <i class="fa fa-circle" aria-hidden="true" [ngClass]="user.signed === 0 ? \'ungsign\' : \'sign\'"></i>\n        <p>{{user.guest_name}}</p>\n      </div>\n      <div class="sub_end_content" (click)="viewGuestData(idx)">\n        <i class="fa fa-chevron-right" aria-hidden="true"></i>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\invite\invite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__["a" /* AuthserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_sms__["a" /* SMS */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], InvitePage);
    return InvitePage;
}());

//# sourceMappingURL=invite.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteguestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InviteguestPage = (function () {
    function InviteguestPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.currentGuestProfile = {};
        this.currentGuestProfile = navParams.get('viewGuestProfile');
        console.log("currentGusetProfile", this.currentGuestProfile);
    }
    InviteguestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InviteguestPage');
    };
    InviteguestPage.prototype.deleteBtn = function () {
        var confirmFlag = true;
        this.viewCtrl.dismiss(confirmFlag);
    };
    InviteguestPage.prototype.closeBtn = function () {
        this.viewCtrl.dismiss();
    };
    InviteguestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inviteguest',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\inviteguest\inviteguest.html"*/'<ion-content padding>\n    <div class="modal_page">\n      <div class="top_bar">\n        <div class="top_sub">\n          <p>Guest Profile</p>\n        </div>\n        <div class="top_sub_btn">\n          <div class="close_btn" (click)="closeBtn()">\n            <ion-icon ios="ios-close" md="md-close"></ion-icon>\n          </div>\n        </div>\n      </div>\n      <div class="mid_content">\n        <p>Guest Name</p>\n        <h3>{{currentGuestProfile.guest_name}}</h3>\n      </div>\n      <div class="mid_content">\n          <p>Shared Trip</p>\n          <h3>{{currentGuestProfile.guset_trip}}</h3>\n      </div>\n      <div class="mid_content">\n          <p>Mobile Number</p>\n          <h3>{{currentGuestProfile.guest_phone}}</h3>\n      </div>\n      <div class="mid_content">\n          <p>Share Code</p>\n          <h3 style="color: #4eab3a">{{currentGuestProfile.share_code}}</h3>\n      </div>\n      <div class="modal_button">\n        <button ion-button round full color="mainbtn" (click)="deleteBtn()">Delete</button>\n        <button ion-button round full color="danger" (click)="closeBtn()">Close</button>\n      </div>\n    </div>\n  </ion-content>\n\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\inviteguest\inviteguest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], InviteguestPage);
    return InviteguestPage;
}());

//# sourceMappingURL=inviteguest.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteothersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phoneinfo_phoneinfo__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_countrycode_countrycode__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sms__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InviteothersPage = (function () {
    function InviteothersPage(navCtrl, navParams, viewCtrl, countryService, modalCtrl, popoverCtrl, alertCtrl, sms, apiDataProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.countryService = countryService;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.sms = sms;
        this.apiDataProvider = apiDataProvider;
        this.toastCtrl = toastCtrl;
        this.currentCountryCode = "";
        this.currentDialCode = "+1";
        this.imageUrl = "assets/imgs/flag/us.svg";
        this.modal_data = {};
        this.leaseData = {};
        if (localStorage.getItem('leaseData') !== null) {
            this.leaseData = JSON.parse(localStorage.getItem('leaseData'));
        }
        else {
            this.leaseData = "";
        }
    }
    InviteothersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InviteothersPage');
    };
    InviteothersPage.prototype.closeBtn = function () {
        this.viewCtrl.dismiss();
    };
    InviteothersPage.prototype.openPhoneNumber = function () {
        var _this = this;
        var key = this.currentCountryCode;
        var countryModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__phoneinfo_phoneinfo__["a" /* PhoneinfoPage */], { key: key });
        countryModal.onDidDismiss(function (data) {
            console.log("modalData", data);
            _this.getCountryCode(data);
        });
        countryModal.present();
    };
    InviteothersPage.prototype.getCountryCode = function (codeName) {
        var _this = this;
        console.log("countryName", codeName);
        this.countryService.getCountryCode(codeName).subscribe(function (result) {
            console.log("result", result);
            _this.currentCountryCode = result.code;
            var code = _this.currentCountryCode.toLowerCase();
            console.log("code", code);
            _this.currentDialCode = result.dial_code;
            _this.imageUrl = "assets/imgs/flag/" + code + ".svg";
        });
    };
    InviteothersPage.prototype.confirm = function () {
        if (this.phoneNumber == "" || this.houseName == "" || this.guestName == "") {
            this.alertCtrl.create({
                title: "Error",
                message: "Invalid Credientail",
                buttons: ["Ok"]
            }).present();
        }
        else {
            this.modal_data.phone = this.phoneNumber;
            this.modal_data.trip = this.houseName;
            this.modal_data.guest = this.guestName;
            this.viewCtrl.dismiss(this.modal_data);
        }
    };
    InviteothersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inviteothers',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\inviteothers\inviteothers.html"*/'<ion-content padding>\n  <div class="modal_page">\n    <div class="top_bar">\n      <div class="top_sub">\n        <p>Invite Your Guests</p>\n      </div>\n      <div class="top_sub_btn">\n        <div class="close_btn" (click)="closeBtn()">\n          <ion-icon ios="ios-close" md="md-close"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class="top_content">\n      <p>Guest Name</p>\n      <div class="top_user">\n          <ion-input type="text" [(ngModel)]="guestName" placeholder="John Doe"></ion-input>\n      </div>\n    </div>\n    <div class="top_content">\n        <p>Enter Mobile Number</p>\n    </div>\n    <div class="mainCont">\n      <div class="subCont1" (click)="openPhoneNumber()">\n        <img src="{{imageUrl}}" class="flag-icon">\n        <p>{{currentDialCode}}</p>\n      </div>\n      <div class="subCont2">\n        <ion-input type="tel" [(ngModel)]="phoneNumber" placeholder="Phone Number"></ion-input>\n      </div>\n    </div>\n    <div class="mid_content">\n      <p>Select Trip</p>\n      <ion-item>\n          <ion-label>House Name</ion-label>\n          <ion-select [(ngModel)]="houseName" name="houseName">\n            <ion-option *ngFor="let trip of leaseData.trips; let i = index" [value]="trip.unit_name">{{trip.unit_name}}</ion-option>\n          </ion-select>\n        </ion-item>\n    </div>\n    <div class="modal_button">\n      <button ion-button round full color="mainbtn" (click)="confirm()"> share</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\inviteothers\inviteothers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_countrycode_countrycode__["a" /* CountrycodeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_sms__["a" /* SMS */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], InviteothersPage);
    return InviteothersPage;
}());

//# sourceMappingURL=inviteothers.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_countrycode_countrycode__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhoneinfoPage = (function () {
    function PhoneinfoPage(navCtrl, navParams, viewCtrl, countryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.countryService = countryService;
        this.searchTerm = '';
        this.searching = false;
        this.countryCode = this.navParams.get('key');
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
    }
    PhoneinfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PhoneinfoPage');
        this.setFilteredItem();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItem();
        });
    };
    PhoneinfoPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    PhoneinfoPage.prototype.close = function () {
        this.viewCtrl.dismiss(this.countryCode);
    };
    PhoneinfoPage.prototype.setFilteredItem = function () {
        var _this = this;
        this.items = this.countryService.filterItems(this.searchTerm);
        console.log("countries", this.items);
        Object.keys(this.items).map(function (i) {
            _this.items[i].images = "assets/imgs/flag/" + _this.items[i].code.toLowerCase() + ".svg";
        });
    };
    PhoneinfoPage.prototype.getCountryCode = function (code) {
        console.log("CountryCode", code);
        localStorage.setItem("CountryCode", code);
        this.countryCode = code;
        this.viewCtrl.dismiss(this.countryCode);
    };
    PhoneinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-phoneinfo',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\phoneinfo\phoneinfo.html"*/'<ion-header  no-border>\n    <ion-navbar color="custom">\n      <ion-title style="text-align: center">Select Country</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="close()">\n              <ion-icon ios="ios-close" md="md-close"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="onSearchInput()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n        <ion-spinner></ion-spinner>\n    </div>\n    <ion-list>\n      <button ion-item *ngFor="let item of items" (click)="getCountryCode(item.code)">\n          <img src="{{item.images}}" class="flag-icon">\n          <label style="margin-left: 20px">{{item.name}}</label>\n          <label style="float: right;">{{item.dial_code}}</label>\n      </button>\n  </ion-list>\n  </ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\phoneinfo\phoneinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_countrycode_countrycode__["a" /* CountrycodeProvider */]])
    ], PhoneinfoPage);
    return PhoneinfoPage;
}());

//# sourceMappingURL=phoneinfo.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(73);
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
            selector: 'page-main',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\main\main.html"*/'<ion-content padding class="content-bg" no-bounce>\n    \n<div class="main_container">\n  <div class="main_image">\n    <img src="assets/imgs/siebert.png" />\n  </div>\n</div>\n<div class="signin_signinbtn">\n    <button ion-button round full color="mainbtn" (click)="signinUser()">\n      Log In\n    </button>\n    <button ion-button round full color="mainbtn" (click)="sigupUser()" class="sign_up">\n        Sign Up\n      </button>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeathersubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeathersubPage = (function () {
    function WeathersubPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.weatherData = {};
        this.weatherData = navParams.get('modalDataInfo');
        this.CurrentDate = navParams.get('modalDataId');
        console.log("current_date_info", this.weatherData);
    }
    WeathersubPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WeathersubPage');
    };
    WeathersubPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    WeathersubPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-weathersub',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\weathersub\weathersub.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title style="text-align:center;">{{CurrentDate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding>\n  <div class="top_cont">\n    <div class="sub_cont">\n      <img src="./assets/imgs/weather/{{weatherData.icon}}.png">\n    </div>\n    <div class="top_cont_txt">\n      <p>{{weatherData.summary}}</p>\n    </div>\n  </div>\n  <div class="main_content">\n    <div class="main_content_title">\n      <p>Details</p>\n    </div>\n    <div class="detail_content">\n      <div class="start_detail_content">\n        <img src="./assets/imgs/weather/w5.png">\n      </div>\n      <div class="end_details_content">\n        <div class="temp_title">Temperature</div>\n        <p>{{weatherData.temperatureMax}}°C</p>\n        <p>{{weatherData.temperatureMin}}°C</p>\n      </div>\n    </div>\n    <div class="detail_content">\n      <div class="start_detail_content">\n        <img src="./assets/imgs/weather/w3.png">\n      </div>\n      <div class="end_details_content">\n        <div class="temp_title">Humidity</div>\n        <p>{{weatherData.humidity}}</p>\n      </div>\n    </div>\n    <div class="detail_content">\n      <div class="start_detail_content">\n        <img src="./assets/imgs/weather/w1.png">\n      </div>\n      <div class="end_details_content">\n        <div class="temp_title">Could Server</div>\n        <p>{{weatherData.cloudCover}}</p>\n      </div>\n    </div>\n    <div class="detail_content">\n      <div class="start_detail_content">\n        <img src="./assets/imgs/weather/w4.png">\n      </div>\n      <div class="end_details_content">\n        <div class="temp_title">Probablity of Precipitation</div>\n        <p>{{weatherData.precipType}}</p>\n        <p>{{weatherData.precipProbability}}</p>\n      </div>\n    </div>\n    <div class="detail_content">\n      <div class="start_detail_content">\n        <img src="./assets/imgs/weather/w2.png">\n      </div>\n      <div class="end_details_content">\n        <div class="temp_title">Wind Speed</div>\n        <p>{{weatherData.windSpeed}} km/h</p>\n      </div>\n    </div>\n  </div>\n  <br><br>\n\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\weathersub\weathersub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], WeathersubPage);
    return WeathersubPage;
}());

//# sourceMappingURL=weathersub.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submap_submap__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpcomingmodalPage = (function () {
    function UpcomingmodalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modal_content = {};
        this.modal_content = navParams.get('subModalData');
        console.log("modal_content", this.modal_content);
    }
    UpcomingmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpcomingmodalPage');
    };
    UpcomingmodalPage.prototype.confirm = function () {
        console.log("upcomming data", this.modal_content.address);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__submap_submap__["a" /* SubmapPage */], { mapviewData: this.modal_content.address });
        this.viewCtrl.dismiss();
    };
    UpcomingmodalPage.prototype.closeBtn = function () {
        this.viewCtrl.dismiss();
    };
    UpcomingmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-upcomingmodal',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\upcomingmodal\upcomingmodal.html"*/'<ion-content padding>\n  <div class="modal_page">\n    <div class="close_btn" (click)="closeBtn()">\n      <ion-icon ios="ios-close" md="md-close"></ion-icon>\n    </div>\n    <div class="modal_title">{{modal_content.title}}</div>\n    <div class="modal_content">{{modal_content.des}}</div>\n    <div class="modal_phone">{{modal_content.address}}</div>\n    <div class="restroNum"><a>{{modal_content.phone}}</a>\n      <div class="restoBtns"><a href="tel:{{modal_content.phone}}">CALL</a></div>\n    </div>\n    <div class="modal_button">\n      <button ion-button round full color="mainbtn" (click)="confirm()"> View Map</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\upcomingmodal\upcomingmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], UpcomingmodalPage);
    return UpcomingmodalPage;
}());

//# sourceMappingURL=upcomingmodal.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportPage = (function () {
    function ReportPage(navCtrl, navParams, viewCtrl, emailComposer, toastCtrl, loadingCtrl, actionsheetCtrl, camera, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.emailComposer = emailComposer;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.camera = camera;
        this.socialSharing = socialSharing;
        this.floor = "Level 1";
        this.location = "Bathroom";
        this.issue_content = "";
        this.ishidden = false;
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportPage');
    };
    ReportPage.prototype.resize = function () {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    ReportPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ReportPage.prototype.upload = function () {
        var self = this;
        var actionSheet = this.actionsheetCtrl.create({
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
    ReportPage.prototype.selectPhoto = function (id) {
        var _this = this;
        if (id == 1) {
            this.phototype = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
        }
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.phototype,
            correctOrientation: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.photoImage = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.photoImage);
            _this.uploadImage();
        }, function (error) {
            console.log(error);
        });
    };
    ReportPage.prototype.uploadImage = function () {
        var self = this;
        if (self.photoImage) {
            var loadingView_1 = self.loadingCtrl.create({
                content: 'Waiting...',
                spinner: 'bubbles',
            });
            loadingView_1.present();
            var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
            var d = new Date();
            var filename = d.getTime();
            var imageRef = storageRef.child('users/' + filename + '.png');
            imageRef.putString(self.photoImage, __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                console.log("OK");
                loadingView_1.dismiss();
                snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log("downloadURL", downloadURL);
                    self.ishidden = true;
                    self.photos = downloadURL;
                    self.displayToast("Updated successfully");
                });
            }).catch(function (error) {
                console.log("Error_iamge", error.message);
            });
        }
    };
    ReportPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ message: message, duration: 3000, position: 'top' }).present();
    };
    ReportPage.prototype.confirm = function () {
        var _this = this;
        var body = 'Select Floor:' + this.floor + "\n" + "Issue Location:" + this.location + "\n" + "details_issue:" + this.issue_content;
        var subject = "Siebert App Report...";
        var toRecp = "mail@siebert-realty.com";
        var attach_file = this.photos;
        this.socialSharing.shareViaEmail(body, subject, [toRecp], [], [], attach_file).then(function (sucess) {
            _this.displayToast("Sent the Message scuuceslly..");
            setTimeout(function () {
                _this.viewCtrl.dismiss();
            }, 2500);
        }).catch(function (err) {
            alert("Faild send the email due to" + err.message);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ReportPage.prototype, "myInput", void 0);
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\report\report.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title style="text-align:center;">Report an issues</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="top_cont">\n    <img src="./assets/imgs/siebert.png">\n    <div class="top_title">\n      <p>Use the following from the report any maintenance issues or concerns directly to our Go Team.</p>\n    </div>\n  </div>\n  <ion-item>\n    <ion-label>Select Floor</ion-label>\n    <ion-select [(ngModel)]="floor" okText="Okay" cancelText="Dismiss">\n      <ion-option value="fl_0">Chosse wihich floor</ion-option>\n      <ion-option value="fl_1">Level 1</ion-option>\n      <ion-option value="fl_2">Level 2</ion-option>\n      <ion-option value="fl_3">Level 3</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Issue Location</ion-label>\n    <ion-select [(ngModel)]="location" okText="Okay" cancelText="Dismiss">\n      <ion-option value="lo_1">Chosse wihich location</ion-option>\n      <ion-option value="lo2">Bathroom</ion-option>\n      <ion-option value="lo_2">Bedroom</ion-option>\n      <ion-option value="lo_3">Kitchen</ion-option>\n      <ion-option value="lo_4">Outside Area</ion-option>\n      <ion-option value="lo_5">Garage</ion-option>\n      <ion-option value="lo_6">Not Listed?</ion-option>\n    </ion-select>\n  </ion-item>\n  <div class="report_cont">\n    <ion-item>\n      <ion-label floating>Details about the maintanence issue you are reporting</ion-label>\n      <ion-textarea #myInput id="myInput" rows="5" maxLength="500" (keyup)="resize()" [(ngModel)]="issue_content"></ion-textarea>\n    </ion-item>\n  </div>\n  <div class="upload-image" *ngIf="ishidden">\n      <img src="{{photos}}"  class="imageSetting">\n  </div>\n<div class="upload-btn">\n  <button ion-button round full color="promobtn" (click)="upload()">\n      <ion-icon name="cloud-upload"></ion-icon> &nbsp; &nbsp; Upload file</button>\n</div>\n  <div class="footer-btn">\n    <button ion-button round full color="mainbtn" (click)="confirm()"> Send</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\report\report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attraction_sub_attraction_sub__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestaurantsPage = (function () {
    function RestaurantsPage(navCtrl, navParams, loadingCtrl, apiDataProvider, ngZone, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.apiDataProvider = apiDataProvider;
        this.ngZone = ngZone;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.resImage = './assets/imgs/resturant/food.png';
        this.loading = null;
        this.resData = {};
        this.objectKeys = Object.keys;
        this.modal_data = {};
        this.currentArraction = {};
        this.arractionData = [];
        this.current_selected = 0;
        this.currentArraction = navParams.get('currentAttractionData');
        this.arractionData = navParams.get('wholeAttractionData');
        this.current_selected = navParams.get('currentId');
        console.log("arrtaction_data", this.currentArraction, this.arractionData);
    }
    RestaurantsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantsPage');
        var temp = document.getElementById('btn_num_' + this.current_selected).getBoundingClientRect();
        console.log("CurrentLeft", temp.left);
        this.scroll._scrollContent.nativeElement.scrollLeft = temp.left - 20;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.getResturant();
    };
    RestaurantsPage.prototype.getResturant = function () {
        if (this.loading !== null) {
            this.loading.dismiss();
        }
    };
    RestaurantsPage.prototype.viewData = function (subData) {
        console.log("Click_data", subData);
        this.modal_data = subData;
        this.modal_data.name = this.currentArraction.name;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__attraction_sub_attraction_sub__["a" /* AttractionSubPage */], { subModalData: this.modal_data });
    };
    RestaurantsPage.prototype.selectCategory = function (btnId) {
        console.log("btn_number", btnId);
        this.current_selected = btnId;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
        });
        this.loading.present();
        this.getContentArractionData(btnId);
    };
    RestaurantsPage.prototype.getContentArractionData = function (btnId) {
        this.currentArraction = this.arractionData[btnId];
        console.log("current_id", this.currentArraction);
        if (this.loading !== null) {
            this.loading.dismiss();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", Object)
    ], RestaurantsPage.prototype, "scroll", void 0);
    RestaurantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-restaurants',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\restaurants\restaurants.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>{{currentArraction.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding>\n    <ion-grid>\n        <ion-scroll #scroll scrollX="true" style="height: 4em">\n            <div style="display: flex">\n                <div *ngFor="let res of arractionData; let i=index;">\n                    <button ion-button id="{{\'btn_num_\' + i}}" [color]="i==current_selected?\'primary\':\'white\'" (click)="selectCategory(i)">\n                      <p>{{res.name}}</p>\n                    </button>\n                  </div>\n            </div>\n        </ion-scroll>\n      </ion-grid>\n  <ion-list>\n    <div class="content_tile">\n      <img src="./assets/imgs/resturant/res.png" alt="">\n      {{currentArraction.name}}</div>\n    <ion-item *ngFor="let subMenu of  currentArraction.items let id=index" (click)="viewData(currentArraction.items[id])">\n      <div class="elencoImg"><img src="{{subMenu.image}}" alt=""></div>\n      <div class="elencoTxt">\n        <div class="restroName">\n          <p>{{subMenu.title}}<p>\n        </div>\n        <div class="restroDes">\n          <p>{{subMenu.address}}<p>\n        </div>\n        <div class="restroNum"><a>{{subMenu.phone}}</a></div>\n      </div>\n      <div class="elecoBtn">\n          <i class="fa fa-chevron-right" aria-hidden="true"></i>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\restaurants\restaurants.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], RestaurantsPage);
    return RestaurantsPage;
}());

//# sourceMappingURL=restaurants.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rental_rental__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gettingmap_gettingmap__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_operator_api_operator__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TripsPage = (function () {
    function TripsPage(navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, apiDataProvider, platform, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.apiDataProvider = apiDataProvider;
        this.platform = platform;
        this.iab = iab;
        this.tripsData = {};
        this.map_address = "601 Sandbridge Road Virginia Beach, VA 23456";
        this.tripsData = navParams.get('tripsData');
        this.tripId = navParams.get('tripsId');
        console.log("trip_data", this.tripsData, this.tripId);
    }
    TripsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TripsPage');
        this.loading = this.loadingCtrl.create({
            content: "Loading...",
            spinner: 'bubbles',
        });
        this.loading.present();
        this.getTripData();
    };
    TripsPage.prototype.getTripData = function () {
        this.loading.dismiss();
    };
    TripsPage.prototype.viewPaymentData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    };
    TripsPage.prototype.viewLeaseData = function () {
        var _this = this;
        this.apiDataProvider.getLeaseData().then(function (data) {
            console.log("res_data", data);
            if (data) {
                var url = data + '180953';
                if (_this.platform.is('android')) {
                    var options = "hardwareback=no";
                    _this.browser = _this.iab.create(url, "_blank", options);
                }
                else {
                    _this.browser = _this.iab.create(url, "_blank");
                }
                _this.browser.on('exit').subscribe(function (event) {
                    console.log("event", event);
                    _this.browser.close();
                    console.log("Appbrowser closed");
                }, function (error) {
                    console.log("error", error);
                    _this.browser.close();
                });
            }
            else {
                _this.alertCtrl.create({
                    title: "Check the Api",
                    message: "This will show the via APi",
                    buttons: ["OK"]
                }).present();
            }
        }).catch(function (err) {
            console.log("Reult_err", err.message);
        });
    };
    TripsPage.prototype.viewRentalData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__rental_rental__["a" /* RentalPage */]);
    };
    TripsPage.prototype.viewMapData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__gettingmap_gettingmap__["a" /* GettingmapPage */], { mapData: this.map_address });
    };
    TripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trips',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\trips\trips.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>{{tripsData.trips[tripId].unit_name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="top_content">\n    <img src="{{tripsData.trips[tripId].unit_thumbnail}}" />\n    <p>{{tripsData.trips[tripId].arrival_date}}~{{tripsData.trips[tripId].departure_date}}</p>\n  </div>\n  <div class="home_title">\n    <p>{{tripsData.profile.first_name}}{{tripsData.profile.last_name}}</p>\n  </div>\n  <div class="message_content">\n    <div class="message_title">\n      <ion-icon ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n      <p>Messages</p>\n    </div>\n    <div class="message_body">\n      <li>We do not have a singed lease</li>\n      <li>We do not have a singed lease</li>\n    </div>\n  </div>\n  <div class="mainCont">\n    <div class="subCont" (click)="viewPaymentData()"><img src="./assets/imgs/home/payment.png">\n      <p>Make a <br>Payment</p>\n    </div>\n    <div class="subCont" (click)="viewLeaseData()"><img src="./assets/imgs/home/lease.png">\n      <p>View My <br>Lease</p>\n    </div>\n    <div class="subCont right" (click)="viewRentalData()"><img src="./assets/imgs/home/rental.png">\n      <p>Browse<br> Rentals</p>\n    </div>\n  </div>\n  <div class="arrival">\n    <div class="arrival_title">\n      <p>Getting Here</p> &nbsp;&nbsp;\n      <img src="./assets/imgs/home/guide.png">\n    </div>\n    <div class="arrival_content">\n      <p>601 Sandbridge Road Virginia Beach, VA 23456</p>\n    </div>\n    <div class="arrival_btn">\n      <button ion-button outline color="homecolor" class="homebtn" (click)="viewMapData()">View Map</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\trips\trips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], TripsPage);
    return TripsPage;
}());

//# sourceMappingURL=trips.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentsubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rentdetails_rentdetails__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RentsubPage = (function () {
    function RentsubPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.resImage = './assets/imgs/rent/rent3.jpg';
        this.resData = [];
        this.resData = navParams.get('rentpassData');
        this.resDataId = navParams.get('rentpassId');
    }
    RentsubPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RentsubPage');
        this.loading = this.loadingCtrl.create({
            content: '',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.getSubRentData();
    };
    RentsubPage.prototype.getSubRentData = function () {
        this.loading.dismiss();
    };
    RentsubPage.prototype.rentDetails = function (id) {
        console.log("rent_details_data", id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__rentdetails_rentdetails__["a" /* RentdetailsPage */], { rentdetailId: id });
    };
    RentsubPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rentsub',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rentsub\rentsub.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Oceanfront Rentals</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-list>\n    <ion-item *ngFor="let res of resData" (click)="rentDetails(res.UnitID)">\n      <div class="elencoImg"><img src="https://www.siebert-realty.com/units/pics/{{res.UnitID}}.jpg" alt=""></div>\n      <div class="elencoTxt">\n        <div class="restroName">{{res.Name}} - {{res.UnitID}}</div>\n        <div class="restroDes">{{res.location}}</div>\n        <div class="restroDes">\n            <span class="subDes">{{res.baths}} Baths </span>\n            <span class="subDes">{{res.brs}} Bed </span>\n            <span class="subDes">{{res.baths}} Sleeps </span>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rentsub\rentsub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], RentsubPage);
    return RentsubPage;
}());

//# sourceMappingURL=rentsub.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rentmap_rentmap__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rentalmodal_rentalmodal__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RentdetailsPage = (function () {
    function RentdetailsPage(navCtrl, navParams, loadingCtrl, apiDataProvider, alertCtrl, iab, platform, emailComposer, photoViewer, mdlCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.apiDataProvider = apiDataProvider;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.platform = platform;
        this.emailComposer = emailComposer;
        this.photoViewer = photoViewer;
        this.mdlCtrl = mdlCtrl;
        this.resData = [];
        this.isHidden = false;
        this.viewHtmlShow = false;
        this.modal_data = {};
        this.resUnitId = navParams.get('rentdetailId');
    }
    RentdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RentdetailsPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
        });
        this.loading.present();
        this.getRentDetails();
    };
    RentdetailsPage.prototype.getRentDetails = function () {
        var _this = this;
        this.apiDataProvider.getRentalDetailsData(this.resUnitId).then(function (data) {
            if (data) {
                _this.resData = data;
                console.log("temp_data", _this.resData);
                _this.loading.dismiss();
            }
            else {
                _this.alertCtrl.create({
                    title: "Error",
                    message: "There is no Data",
                    buttons: ["OK"]
                }).present();
                _this.loading.dismiss();
            }
        }).catch(function (err) {
            console.log("Reult_err", err.message);
            _this.loading.dismiss();
        });
    };
    RentdetailsPage.prototype.viewDes = function () {
        this.modal_data.des = this.resData.description;
        this.modal_data.title = "Description";
        this.modal_data.ishidden = true;
        var modalOptions = {
            cssClass: "subModal"
        };
        var sub_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_7__rentalmodal_rentalmodal__["a" /* RentalmodalPage */], { subModalData: this.modal_data }, modalOptions);
        sub_modal.present();
    };
    RentdetailsPage.prototype.viewGallery = function () {
        this.photoViewer.show('https://www.siebert-realty.com/units/pics/' + this.resUnitId + '.jpg');
    };
    RentdetailsPage.prototype.viewMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rentmap_rentmap__["a" /* RentmapPage */]);
    };
    RentdetailsPage.prototype.viewAmenty = function () {
        this.modal_data.des = this.resData[0];
        this.modal_data.title = "Description";
        this.modal_data.ishidden = true;
        var modalOptions = {
            cssClass: "subModal"
        };
        var sub_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_7__rentalmodal_rentalmodal__["a" /* RentalmodalPage */], { subModalData: this.modal_data }, modalOptions);
        sub_modal.present();
    };
    RentdetailsPage.prototype.viewAvaliablity = function () {
        this.modal_data.des = "TODO: BRING IN AVAIL CALENDAR";
        this.modal_data.title = "Avaliablity";
        this.modal_data.ishidden = false;
        var modalOptions = {
            cssClass: "subModal"
        };
        var sub_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_7__rentalmodal_rentalmodal__["a" /* RentalmodalPage */], { subModalData: this.modal_data }, modalOptions);
        sub_modal.present();
    };
    RentdetailsPage.prototype.viewWebsite = function () {
        var _this = this;
        var url = "https://www.siebert-realty.com/";
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
    RentdetailsPage.prototype.confirm = function () {
        this.isHidden = false;
        this.viewHtmlShow = !this.viewHtmlShow;
    };
    RentdetailsPage.prototype.viewBook = function () {
    };
    RentdetailsPage.prototype.sendEmail = function () {
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
            to: 'max@mustermann.de',
            cc: 'erika@mustermann.de',
            bcc: ['john@doe.com', 'jane@doe.com'],
            attachments: [
                'file://img/logo.png',
                'res://icon.png',
                'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                'file://README.pdf'
            ],
            subject: 'Rent house...',
            body: 'This is the message content...',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    RentdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rentdetails',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rentdetails\rentdetails.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>RentDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding>\n  <div class="top_img">\n    <img src="https://www.siebert-realty.com/units/pics/{{resUnitId}}.jpg" alt="">\n  </div>\n  <div class="row cta">\n    <div class="col" style="text-align:center" (click)="viewBook()" ><a class="cat-icon"> <i class="fa fa-shopping-bag" aria-hidden="true"></i></a><br><span\n        class="cta-label">BOOK IT</span></div>\n    <div class="col" style="text-align:center"><a class="cat-icon"  href="tel:757 426 6200">\n        <ion-icon ios="ios-call" md="md-call"></ion-icon>\n      </a><br><span class="cta-label">CALL</span></div>\n    <div class="col" style="text-align:center" (click)="sendEmail()" ><a class="cat-icon">\n        <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n      </a><br><span class="cta-label">EMAIL</span></div>\n  </div>\n  <ion-list>\n    <ion-item (click)="viewDes()">\n      <div class="restroName">\n        <i class="fa fa-file-text" aria-hidden="true"></i> &nbsp;&nbsp; View Description\n      </div>\n    </ion-item>\n    <ion-item (click)="viewGallery()">\n      <div class="restroName">\n        <i class="fa fa-camera" aria-hidden="true"></i> &nbsp;&nbsp;View Gallery\n      </div>\n    </ion-item>\n    <ion-item (click)="viewMap()">\n      <div class="restroName">\n        <i class="fa fa-map-o" aria-hidden="true"></i>&nbsp;&nbsp;View Map\n      </div>\n    </ion-item>\n    <ion-item (click)="viewAmenty()">\n      <div class="restroName">\n        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;&nbsp;Amentities\n      </div>\n    </ion-item>\n    <ion-item (click)="viewAvaliablity()">\n      <div class="restroName">\n        <i class="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;&nbsp; Availability\n      </div>\n    </ion-item>\n    <ion-item (click)="viewWebsite()">\n      <div class="restroName">\n        <i class="fa fa-link" aria-hidden="true"></i>&nbsp;&nbsp; View Website\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rentdetails\rentdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], RentdetailsPage);
    return RentdetailsPage;
}());

//# sourceMappingURL=rentdetails.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RentmapPage = (function () {
    function RentmapPage(navCtrl, navParams, geolocation, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.lat = 43.07493;
        this.lng = -89.381388;
    }
    RentmapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RentmapPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.viewMapData();
        // this.centerOnMe();
    };
    RentmapPage.prototype.viewMapData = function () {
        this.loadMap(this.lat, this.lng);
    };
    RentmapPage.prototype.loadMap = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            // zoomControl: false,
            streetViewControl: false,
        });
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        var content = "<p>This is html so you can put whatever <br>you want such as images and <a href=''>links</a> <br></p> <img style='border-radius: 24px;' src='http://lorempixel.com/50/50/food/?v=1'/><img style='border-radius: 24px;' src='http://lorempixel.com/50/50/food/?v=2'/> <img style='border-radius: 24px;' src='http://lorempixel.com/50/50/food/?v=3'/>";
        this.addInfoWindow(marker, content);
        this.loading.dismiss();
    };
    RentmapPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    RentmapPage.prototype.centerOnMe = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "finding..."
        });
        this.loading.present();
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log("result_data", resp.coords.latitude, resp.coords.longitude);
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.loadMap(resp.coords.latitude, resp.coords.longitude);
            _this.my_location = resp.coords.latitude + "," + resp.coords.longitude;
        }, function (err) {
            console.log("Err", err);
        });
    };
    RentmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rentmap',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rentmap\rentmap.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Maps</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="map-action">\n    <div class="location_view">\n      <a (click)="centerOnMe()">\n          <ion-icon name="locate"></ion-icon>\n      </a>\n      <label class="location_label">\n        <input type="text" placeholder="My Location" [(ngModel)]="my_location">\n      </label>\n    </div>\n  </div>\n\n  <div id="map" style="height: 100%;width:100%;"></div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rentmap\rentmap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], RentmapPage);
    return RentmapPage;
}());

//# sourceMappingURL=rentmap.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RentalmodalPage = (function () {
    function RentalmodalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modal_content = {};
        this.viewHtmlShow = false;
        this.modal_content = navParams.get('subModalData');
        this.viewHtmlShow = this.modal_content.ishidden;
        console.log("modal_content", this.modal_content);
    }
    RentalmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RentalmodalPage');
    };
    RentalmodalPage.prototype.confirm = function () {
        this.viewCtrl.dismiss();
    };
    RentalmodalPage.prototype.closeBtn = function () {
        this.viewCtrl.dismiss();
    };
    RentalmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rentalmodal',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rentalmodal\rentalmodal.html"*/'<ion-content padding>\n    <div class="modal_page">\n        <div class="close_btn" (click)="closeBtn()"><ion-icon ios="ios-close" md="md-close"></ion-icon></div>\n        <div class="modal_title">{{modal_content.title}}</div>\n        <div class="modal_content" *ngIf="!viewHtmlShow">{{modal_content.des}}</div>\n        <div class="modal_content" *ngIf="viewHtmlShow" [innerHTML]="modal_content.des"></div>\n\n        <div class="modal_button">\n            <button ion-button round full color="mainbtn" (click)="confirm()"> OK</button>\n        </div>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rentalmodal\rentalmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], RentalmodalPage);
    return RentalmodalPage;
}());

//# sourceMappingURL=rentalmodal.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__ = __webpack_require__(17);
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
    function ProfilePage(navCtrl, navParams, actionSheetCtrl, camera, actionsheetCtrl, loadingCtrl, toastCtrl, alretCtrl, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alretCtrl = alretCtrl;
        this.authService = authService;
        this.userInfo = { photoURL: "assets/imgs/empty_avatar.png" };
        this.leaseData = {};
        this.guestData = {};
        if (localStorage.getItem('user_id') !== null) {
            this.user_id = localStorage.getItem("user_id");
        }
        ;
        this.authService.getcurrentUserData(this.user_id).subscribe(function (res) {
            // this.userInfo = res.val();
            _this.userInfo.photoURL = res.val().photo;
            _this.userInfo.pwd = "*******";
            _this.userInfo.email = res.val().email;
        });
        if (localStorage.getItem('userType') == 'lease') {
            if (localStorage.getItem('leaseData') !== null) {
                this.leaseData = JSON.parse(localStorage.getItem('leaseData'));
                // this.current_user = this.leaseData.profile;
                this.userInfo.firstname = this.leaseData.profile.first_name;
                this.userInfo.lastname = this.leaseData.profile.last_name;
                this.userInfo.phone = this.leaseData.profile.phone_1;
            }
        }
        else if (localStorage.getItem('userType') == 'guest') {
            if (localStorage.getItem('guestData') !== null) {
                this.guestData = JSON.parse(localStorage.getItem('guestData'));
                console.log("home_guest_data", this.guestData);
                this.userInfo.firstname = this.guestData.GuestInfo.firstName;
                this.userInfo.lastname = this.guestData.GuestInfo.lastName;
                this.userInfo.phone = this.guestData.GuestInfo.phoneOne;
            }
        }
        console.log("user_data_1", this.guestData);
        console.log("user_data_2", this.leaseData);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.getAvatarOption = function () {
        var self = this;
        var actionSheet = this.actionsheetCtrl.create({
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
    ProfilePage.prototype.selectPhoto = function (id) {
        var _this = this;
        if (id == 1) {
            this.phototype = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
        }
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.phototype,
            correctOrientation: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.photoImage = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.photoImage);
            _this.uploadImage();
        }, function (error) {
            console.log(error);
        });
    };
    ProfilePage.prototype.uploadImage = function () {
        var self = this;
        if (self.photoImage) {
            var loadingView_1 = self.loadingCtrl.create({
                content: 'Uploading image...',
                spinner: 'bubbles',
            });
            loadingView_1.present();
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
            var d = new Date();
            var filename = d.getTime();
            var imageRef = storageRef.child('users/' + filename + '.png');
            imageRef.putString(self.photoImage, __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                console.log("OK");
                loadingView_1.dismiss();
                snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log("downloadURL", downloadURL);
                    self.userInfo.photoURL = downloadURL;
                    self.displayToast("Updated successfully");
                });
            }).catch(function (error) {
                console.log("Error_iamge", error.message);
            });
        }
    };
    ProfilePage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ message: message, duration: 3000, position: 'top' }).present();
    };
    ProfilePage.prototype.Update = function () {
        var _this = this;
        if (this.userInfo.firstname == undefined || this.userInfo.lastname == undefined || this.userInfo.email == undefined || this.userInfo.pwd == undefined || this.userInfo.phone == undefined) {
            this.alretCtrl.create({
                subTitle: "Error!",
                message: "Invalid Credential",
                cssClass: 'alertDanger',
                buttons: ["OK"]
            }).present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: "Updating Information...",
                spinner: "bubbles"
            });
            loading_1.present();
            this.userInfo.uid = this.user_id;
            this.userInfo.created_at = new Date();
            console.log("userData", this.userInfo.name);
            this.authService.updateuserInfo(this.userInfo).then(function () {
                loading_1.dismiss();
                _this.navCtrl.pop();
            }, function (err) {
                loading_1.dismiss();
                console.log("error", err.message);
                _this.displayToast(err.message);
            });
        }
    };
    ProfilePage.prototype.closeSignupModal = function () {
        this.navCtrl.pop();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\profile\profile.html"*/'<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title color="white">Profile Page</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding no-bounce>\n  <div class="signup_avatar">\n    <img src="{{userInfo.photoURL}}" (click)="getAvatarOption()" />\n  </div>\n  <ion-row>\n    <ion-col width-50>\n      <ion-item>\n        <ion-label floating>\n          First Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="userInfo.firstname"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col width-50>\n      <ion-item>\n        <ion-label floating>\n          Last Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="userInfo.lastname"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-item>\n    <ion-label floating>\n      Email\n    </ion-label>\n    <ion-input type="email" [(ngModel)]="userInfo.email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>\n      Password\n    </ion-label>\n    <ion-input type="password" [(ngModel)]="userInfo.pwd"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>\n      Phone Number\n    </ion-label>\n    <ion-input type="tel" [(ngModel)]="userInfo.phone"></ion-input>\n  </ion-item>\n\n  <div class="signup_controllers">\n    <div>\n      <button ion-button round full color="mainbtn" (click)="update()" class="confirm_btn">Update</button>\n    </div>\n    <div>\n      <button ion-button round full (click)="closeSignupModal()" class="confirm_btn">Cancel</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavelaterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blogpost_blogpost__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SavelaterPage = (function () {
    function SavelaterPage(navCtrl, navParams, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.bookData = [];
    }
    SavelaterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SavelaterPage');
        if (localStorage.getItem('bookMarked') !== null) {
            var tempData = localStorage.getItem('bookMarked');
            this.bookData = JSON.parse(tempData);
        }
        else {
            this.displayToastData("There is no book Data!");
        }
    };
    SavelaterPage.prototype.showBookMark = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
            if (_this.bookData.length !== 0) {
                console.log("book_data", _this.bookData);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__blogpost_blogpost__["a" /* BlogpostPage */], { blogpostData: _this.bookData });
            }
            else {
                _this.displayToastData("there is no book Data !");
            }
        }, 1000);
    };
    SavelaterPage.prototype.displayToastData = function (message_data) {
        this.toastCtrl.create({
            message: message_data,
            duration: 3000,
            position: "top"
        }).present();
    };
    SavelaterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-savelater',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\savelater\savelater.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>My Favourites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content no-padding>\n  <ion-list>\n    <div class="content_tile">Wordpress bookmarks</div>\n    <ion-item (click)="showBookMark()">\n        <div class="elencoImg"><img src="assets/imgs/bookmark.png" alt=""></div>\n        <div class="elencoTxt">\n          <div class="restroName">{{bookData.title}}</div>\n            <div class="restroDes">{{bookData.date | amTimeAgo}}</div>\n        </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\savelater\savelater.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SavelaterPage);
    return SavelaterPage;
}());

//# sourceMappingURL=savelater.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservationPage = (function () {
    function ReservationPage(navCtrl, navParams, loadingCtrl, apiDataProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.apiDataProvider = apiDataProvider;
        this.alertCtrl = alertCtrl;
        this.resData = [];
        this.leaseData = [];
        if (localStorage.getItem('leaseData') !== null) {
            this.leaseData = JSON.parse(localStorage.getItem('leaseData'));
        }
        else {
            this.leaseData = "";
        }
        this.resData = this.leaseData.trips;
        console.log("LeaseData", this.resData);
    }
    ReservationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationPage');
        this.loading = this.loadingCtrl.create({
            content: '',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.getReservation();
    };
    ReservationPage.prototype.getReservation = function () {
        this.loading.dismiss();
    };
    ReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reservation',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\reservation\reservation.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>My Past Reservations</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-list>\n    <ion-item *ngFor="let res of resData">\n      <div class="elencoImg"><img src="{{res.unit_thumbnail}}" alt=""></div>\n      <div class="elencoTxt">\n        <div class="restroName">{{res.unit_name}}</div>\n        <div class="restroDes">{{res.arrival_date}} -  {{res.departure_date}}</div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\reservation\reservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ReservationPage);
    return ReservationPage;
}());

//# sourceMappingURL=reservation.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pushnotification_pushnotification__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingPage = (function () {
    function SettingPage(navCtrl, navParams, alertCtrl, toastCtrl, storage, pushNotificationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.pushNotificationService = pushNotificationService;
        this.special = false;
        this.deals = false;
        if (localStorage.getItem('special') !== null) {
            this.special = localStorage.getItem('special');
        }
        if (localStorage.getItem('deals') !== null) {
            this.deals = localStorage.getItem('deals');
        }
        console.log("saved_toggle_data", this.special, this.deals);
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.confirm = function () {
        localStorage.setItem('special', this.special);
        localStorage.setItem('deals', this.deals);
        this.toastCtrl.create({
            message: "Successfully Changed",
            duration: 3000,
            position: 'top'
        }).present();
        console.log("toggle selection data", this.special, this.deals);
        this.pushNotificationService.init();
        this.navCtrl.pop();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\setting\setting.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="content_tile">Push Notifications</div>\n  <ion-item>\n    <ion-label>Specials</ion-label>\n    <ion-toggle [(ngModel)]="special"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label>Deals</ion-label>\n    <ion-toggle [(ngModel)]="deals"></ion-toggle>\n  </ion-item>\n  <div class="settingBtn" (click)="confirm()">\n      <button ion-button round class="changeBtn">Save</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_pushnotification_pushnotification__["a" /* PushnotificationProvider */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneauthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidemenu_sidemenu__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authservice_authservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_operator_api_operator__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhoneauthPage = (function () {
    function PhoneauthPage(navCtrl, navParams, alertCtrl, authService, apiService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.progress = 0;
        this.verifyCode = true;
        this.userInfo = { photoURL: "assets/imgs/empty_avatar.png" };
        this.possibel_share_data = "0123456789";
        this.guestData = {};
        this.verficationCode = navParams.get('verificationId');
        this.phoneNumber = navParams.get('phoneCode');
        this.guestData = navParams.get('guestInfo');
        console.log("PhoneAuthData", this.verficationCode, this.phoneNumber, this.guestData);
    }
    PhoneauthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhoneauthPage');
        this.viewProgressValue();
    };
    PhoneauthPage.prototype.viewProgressValue = function () {
        var _this = this;
        setTimeout(function () {
            _this.showBar();
        }, 200);
    };
    PhoneauthPage.prototype.showBar = function () {
        if (this.progress >= 100) {
            this.progress = 0;
            this.verifyCode = false;
        }
        else {
            this.progress += 2;
            this.viewProgressValue();
            this.verifyCode = true;
        }
    };
    PhoneauthPage.prototype.onChangeTime = function () {
        var _this = this;
        if (this.authCode.length > 6) {
            console.log("Please check your code");
            var alert_1 = this.alertCtrl.create({
                title: "Error!",
                subTitle: "I didn't get the Code...",
                buttons: [{
                        text: "OK",
                        handler: function () {
                            _this.authCode = "";
                        }
                    }]
            });
            alert_1.present();
        }
        else {
            if (this.authCode.length == 6) {
                console.log("inputed_value", this.authCode);
                var signInCredential = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].PhoneAuthProvider.credential(this.verficationCode, this.authCode);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithCredential(signInCredential).then(function (authData) {
                    localStorage.setItem('user_id', authData.uid);
                    var self = _this;
                    _this.apiService.getLeaseUserIndexData(_this.guestData.lease_id).then(function (resData) {
                        console.log("res_guestIndex_data", resData);
                        localStorage.setItem('guestData', JSON.stringify(resData));
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sidemenu_sidemenu__["a" /* SidemenuPage */]);
                    }).catch(function (err) {
                        console.log("Error Guest Index", err.message);
                    });
                    localStorage.setItem('userType', "guest");
                    self.authService.getcurrentUserData(authData.uid).subscribe(function (res) {
                        self.saveUserData(authData.uid, authData.phoneNumber, authData.email, authData.displayName);
                    });
                }).catch(function (error) {
                    _this.alertCtrl.create({
                        subTitle: "Error!",
                        message: error.message,
                        buttons: ["OK"]
                    }).present();
                    _this.authCode = "";
                });
            }
        }
    };
    PhoneauthPage.prototype.backPhonePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    PhoneauthPage.prototype.saveUserData = function (uid, phone, email, name) {
        this.userInfo.uid = uid;
        this.userInfo.phone = phone;
        this.userInfo.email = "";
        this.userInfo.role = 1;
        this.userInfo.create_at = new Date();
        this.authService.savePhoneUser(this.userInfo, this.guestData).then(function () {
            // this.navCtrl.setRoot(SidemenuPage);
        }, function (err) {
            alert("Save UserData failed due to " + err.message);
        });
    };
    PhoneauthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-phoneauth',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\phoneauth\phoneauth.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Enter SMS code</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="codiceWrap">\n        <div class="codiceTxt">We sent a text message with the<br>code to the  {{phoneNumber}}</div>\n          <div class="codiceInput">\n            <ion-input type="tel" [(ngModel)]="authCode" placeholder="SMS Code" (ionChange)=\'onChangeTime()\'></ion-input>\n          </div>\n          <div class="progress-outer" *ngIf="verifyCode==true">\n              <div class="progress-inner" [style.width]="progress + \'%\'">\n              </div>\n          </div>\n          <div class="alertTxt" *ngIf="verifyCode==false" (click)="backPhonePage()">I didn\'t get the code</div>\n      </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\phoneauth\phoneauth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authservice_authservice__["a" /* AuthserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], PhoneauthPage);
    return PhoneauthPage;
}());

//# sourceMappingURL=phoneauth.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneloginPage = (function () {
    function PhoneloginPage(navCtrl, navParams, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.guest = {};
    }
    PhoneloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhoneloginPage');
    };
    PhoneloginPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    PhoneloginPage.prototype.withPhoneLogin = function () {
        console.log("user", this.guest.phone, this.guest.shareCode);
        if (this.phone = undefined || this.guest.shareCode == undefined) {
            this.alertCtrl.create({
                subTitle: "Error!",
                message: "Invalid Credential",
                buttons: ["Ok"]
            }).present();
        }
        else {
            this.viewCtrl.dismiss(this.guest);
        }
    };
    PhoneloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-phonelogin',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\phonelogin\phonelogin.html"*/'<ion-content padding>\n  <div class="signin_container">\n    <p class="signin_title">\n      Guest Login with Phone Number\n    </p>\n    <div class="main_cont">\n      <ion-input type="tel" [(ngModel)]="guest.phone" placeholder="Phone Number"></ion-input>\n      <ion-input type="tel" [(ngModel)]="guest.shareCode" placeholder="Share Code"></ion-input>\n    </div>\n    <div class="signup_controllers">\n        <div>\n          <button ion-button round block outline color="mainbtn" (click)="withPhoneLogin()">Register</button>\n        </div>\n        <div>\n          <button ion-button round block outline color="danger" (click)="closeModal()">Cancel</button>\n        </div>\n      </div>\n\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\phonelogin\phonelogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PhoneloginPage);
    return PhoneloginPage;
}());

//# sourceMappingURL=phonelogin.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupguestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupguestPage = (function () {
    function SignupguestPage(navCtrl, navParams, actionsheetCtrl, loadingCtrl, alertCtrl, authService, toastCtrl, camera, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.viewCtrl = viewCtrl;
        this.userInfo = { photoURL: "assets/imgs/empty_avatar.png" };
    }
    SignupguestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupguestPage');
    };
    SignupguestPage.prototype.getAvatarOption = function () {
        var self = this;
        var actionSheet = this.actionsheetCtrl.create({
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
    SignupguestPage.prototype.selectPhoto = function (id) {
        var _this = this;
        if (id == 1) {
            this.phototype = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
        }
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.phototype,
            correctOrientation: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.photoImage = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.photoImage);
            _this.uploadImage();
        }, function (error) {
            console.log(error);
        });
    };
    SignupguestPage.prototype.uploadImage = function () {
        var self = this;
        if (self.photoImage) {
            var loadingView_1 = self.loadingCtrl.create({
                content: 'Uploading image...',
                spinner: 'bubbles',
            });
            loadingView_1.present();
            var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
            var d = new Date();
            var filename = d.getTime();
            var imageRef = storageRef.child('users/' + filename + '.png');
            imageRef.putString(self.photoImage, __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                console.log("OK");
                loadingView_1.dismiss();
                snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log("downloadURL", downloadURL);
                    self.userInfo.photoURL = downloadURL;
                    self.displayToast("Updated successfully");
                });
            }).catch(function (error) {
                console.log("Error_iamge", error.message);
            });
        }
    };
    SignupguestPage.prototype.closeSignupModal = function () {
        this.viewCtrl.dismiss();
    };
    SignupguestPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ message: message, duration: 3000, position: 'top' }).present();
    };
    SignupguestPage.prototype.registerGuest = function () {
        var _this = this;
        if (this.userInfo.email == undefined || this.userInfo.pwd == undefined) {
            this.alertCtrl.create({
                subTitle: "Error!",
                message: "Invalid Credential",
                cssClass: 'alertDanger',
                buttons: ["OK"]
            }).present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: "Creating Account",
                spinner: "bubbles"
            });
            loading_1.present();
            this.userInfo.role = 1;
            this.authService.registerUser(this.userInfo).subscribe(function (resData) {
                console.log("user_info_result", resData);
                loading_1.dismiss();
                _this.viewCtrl.dismiss();
            }, function (err) {
                loading_1.dismiss();
                console.log("error", err.message);
                _this.displayToast(err.message);
            });
        }
    };
    SignupguestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signupguest',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\signupguest\signupguest.html"*/'<ion-header no-border>\n    <ion-navbar color="custom">\n      <ion-title color="white">Guest Sign Up</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <div class="signup_avatar">\n      <img src="{{userInfo.photoURL}}" (click)="getAvatarOption()" />\n    </div>\n    <div class="main_cont">\n      <ion-input type="email" [(ngModel)]="userInfo.email" placeholder="Email"></ion-input>\n      <ion-input type="password" [(ngModel)]="userInfo.pwd" placeholder="Password"></ion-input>\n    </div>\n    <div class="signup_controllers">\n      <div>\n        <button ion-button round full color="mainbtn" (click)="registerGuest()" class="confirm_btn">Register</button>\n      </div>\n      <div>\n        <button ion-button round full (click)="closeSignupModal()" class="confirm_btn">Cancel</button>\n      </div>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\signupguest\signupguest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], SignupguestPage);
    return SignupguestPage;
}());

//# sourceMappingURL=signupguest.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_database__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(4);
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









var AuthserviceProvider = (function () {
    function AuthserviceProvider(http, firebaseToken, platform) {
        this.http = http;
        this.firebaseToken = firebaseToken;
        this.platform = platform;
        this.DEFAULT_AVATAR = './assets/img/default-dp.png';
        this.EMAIL_VERIFICATION_ENABLED = true;
        console.log('Hello AuthserviceProvider Provider');
    }
    AuthserviceProvider.prototype.logout = function () {
        return __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().signOut();
    };
    AuthserviceProvider.prototype.login = function (userData) {
        return __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().signInWithEmailAndPassword(userData.email, userData.pwd);
    };
    AuthserviceProvider.prototype.forgotPassword = function (useremail) {
        console.log("forgot_email", useremail);
        return __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().sendPasswordResetEmail(useremail);
    };
    AuthserviceProvider.prototype.getforgetPasswordData = function (forgetEmail) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.database().ref("users").orderByChild("email").equalTo(forgetEmail).once("value", function (snapshot) {
                observer.next(snapshot.val());
            }).catch(function (error) {
                if (error) {
                    4;
                    observer.error(error);
                }
            });
        });
    };
    AuthserviceProvider.prototype.registerUser = function (userData) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().createUserWithEmailAndPassword(userData.email, userData.pwd).then(function (authData) {
                console.log("authData", authData);
                userData.uid = authData.user.uid;
                userData.create_at = new Date();
                // this.emailVerification();
                _this.updateUserProfile(userData);
                observer.next(authData);
            }).catch(function (error) {
                if (error) {
                    observer.error(error);
                }
            });
        });
    };
    AuthserviceProvider.prototype.updateUserProfile = function (user) {
        console.log("user_data_ts", user);
        __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.database().ref('users/' + user.uid).update({
            email: user.email,
            photo: user.photoURL,
            created_at: user.create_at,
            role: user.role,
            device_token: localStorage.getItem('token')
        });
    };
    AuthserviceProvider.prototype.getcurrentUserData = function (userId) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.database().ref('users/' + userId).once('value').then(function (snap) {
                observer.next(snap);
            }).catch(function (err) {
                console.log("error", err);
                if (err) {
                    observer.error(err);
                }
            });
        });
    };
    AuthserviceProvider.prototype.updateuserInfo = function (user) {
        console.log("user_data_ts", user);
        return __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.database().ref('users/' + user.uid).update({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            photo: user.photoURL,
            phone: user.phone,
            created_at: user.create_at,
        });
    };
    AuthserviceProvider.prototype.savePhoneUser = function (user, guestData) {
        console.log("userData", user, guestData);
        return __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.database().ref('users/' + user.uid).update({
            phone: user.phone,
            email: user.email,
            photo: user.photoURL,
            created_at: user.create_at,
            role: user.role,
            status: guestData.status,
            lease_id: guestData.lease_id,
            guest_id: guestData.guest_id
        });
    };
    AuthserviceProvider.prototype.emailVerification = function () {
        // return firebase.auth().currentUser.sendEmailVerification;
        var user = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().currentUser;
        return user.sendEmailVerification();
    };
    // lease user data....
    AuthserviceProvider.prototype.saveLeaseData = function (uid, leaseData, unit) {
        return __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.database().ref('users/' + uid).update({
            unit: unit,
            status: leaseData.status,
            lease_id: leaseData.lease_id,
            guest_id: leaseData.guest_id,
            verified_at: new Date()
        });
    };
    // Token part
    AuthserviceProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseToken.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseToken.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebaseToken.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        localStorage.setItem('token', token);
                        console.log("user_token_data", token);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthserviceProvider.prototype.onNotification = function () {
        return this.firebaseToken.onNotificationOpen();
    };
    AuthserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["m" /* Platform */]])
    ], AuthserviceProvider);
    return AuthserviceProvider;
}());

//# sourceMappingURL=authservice.js.map

/***/ }),

/***/ 180:
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
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/arrivalmodal/arrivalmodal.module": [
		524,
		41
	],
	"../pages/attraction-sub/attraction-sub.module": [
		525,
		40
	],
	"../pages/attractions/attractions.module": [
		526,
		39
	],
	"../pages/blog/blog.module": [
		527,
		38
	],
	"../pages/blogpost/blogpost.module": [
		528,
		37
	],
	"../pages/explorehome/explorehome.module": [
		529,
		36
	],
	"../pages/faq/faq.module": [
		530,
		35
	],
	"../pages/forgotpwd/forgotpwd.module": [
		531,
		34
	],
	"../pages/gettingmap/gettingmap.module": [
		532,
		33
	],
	"../pages/invite/invite.module": [
		533,
		32
	],
	"../pages/inviteguest/inviteguest.module": [
		534,
		31
	],
	"../pages/inviteothers/inviteothers.module": [
		535,
		30
	],
	"../pages/localattraction/localattraction.module": [
		537,
		29
	],
	"../pages/main/main.module": [
		536,
		28
	],
	"../pages/payment/payment.module": [
		538,
		27
	],
	"../pages/phoneauth/phoneauth.module": [
		539,
		26
	],
	"../pages/phoneinfo/phoneinfo.module": [
		540,
		25
	],
	"../pages/phonelogin/phonelogin.module": [
		542,
		24
	],
	"../pages/profile/profile.module": [
		541,
		23
	],
	"../pages/promotions/promotions.module": [
		543,
		22
	],
	"../pages/rental/rental.module": [
		544,
		21
	],
	"../pages/rentalmodal/rentalmodal.module": [
		545,
		20
	],
	"../pages/rentdetails/rentdetails.module": [
		546,
		19
	],
	"../pages/rentmap/rentmap.module": [
		547,
		18
	],
	"../pages/rentsub/rentsub.module": [
		548,
		17
	],
	"../pages/report/report.module": [
		549,
		16
	],
	"../pages/rescat/rescat.module": [
		550,
		15
	],
	"../pages/reservation/reservation.module": [
		551,
		14
	],
	"../pages/restaurants/restaurants.module": [
		552,
		13
	],
	"../pages/savelater/savelater.module": [
		553,
		12
	],
	"../pages/setting/setting.module": [
		554,
		11
	],
	"../pages/sidemenu/sidemenu.module": [
		564,
		10
	],
	"../pages/signin/signin.module": [
		565,
		9
	],
	"../pages/signup/signup.module": [
		555,
		8
	],
	"../pages/signupguest/signupguest.module": [
		556,
		7
	],
	"../pages/submap/submap.module": [
		557,
		6
	],
	"../pages/submodal/submodal.module": [
		558,
		5
	],
	"../pages/trips/trips.module": [
		559,
		4
	],
	"../pages/upcomeevent/upcomeevent.module": [
		560,
		3
	],
	"../pages/upcomingmodal/upcomingmodal.module": [
		561,
		2
	],
	"../pages/weather/weather.module": [
		562,
		1
	],
	"../pages/weathersub/weathersub.module": [
		563,
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
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather_weather__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promotions_promotions__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upcomeevent_upcomeevent__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_report__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invite_invite__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__arrivalmodal_arrivalmodal__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_network_network__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_authservice_authservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__localattraction_localattraction__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rescat_rescat__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__trips_trips__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_pushnotification_pushnotification__ = __webpack_require__(65);
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
    function HomePage(navCtrl, alertCtrl, mdlCtrl, apiDataProvider, iab, platform, storage, network, callNumber, toastCtrl, networkStatus, nativeGeocoder, authService, pushNotificationService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.mdlCtrl = mdlCtrl;
        this.apiDataProvider = apiDataProvider;
        this.iab = iab;
        this.platform = platform;
        this.storage = storage;
        this.network = network;
        this.callNumber = callNumber;
        this.toastCtrl = toastCtrl;
        this.networkStatus = networkStatus;
        this.nativeGeocoder = nativeGeocoder;
        this.authService = authService;
        this.pushNotificationService = pushNotificationService;
        this.slide_items = [
            {
                id: 0,
                url: "./assets/imgs/rent/rent1.jpg",
                intro_txt: "4/21/2018-4/28/2018"
            },
            {
                id: 1,
                url: "./assets/imgs/rent/rent2.jpg",
                intro_txt: "4/21/2018-4/28/2018"
            },
            {
                id: 2,
                url: "./assets/imgs/rent/rent3.jpg",
                intro_txt: "4/21/2018-4/28/2018"
            },
        ];
        this.map_address = "601 Sandbridge Road Virginia Beach, VA 23456";
        this.arrivalmodalData = {};
        this.weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        this.weatherInfo = {};
        this.currently = {};
        this.weekly = {};
        this.selectDay = {};
        this.forcastData = [];
        this.current_user = {};
        this.leaseData = {};
        this.guestData = {};
        this.userFlag = false;
        if (localStorage.getItem('user_id') !== null) {
            this.current_user = localStorage.getItem("user_id");
        }
        else
            this.current_user = null;
        if (localStorage.getItem('userType') == 'lease') {
            if (localStorage.getItem('leaseData') !== null) {
                this.leaseData = JSON.parse(localStorage.getItem('leaseData'));
                // this.current_user = this.leaseData.profile;
                this.userFlag = false;
                this.firstName = this.leaseData.profile.first_name;
                this.lastName = this.leaseData.profile.last_name;
            }
        }
        else if (localStorage.getItem('userType') == 'guest') {
            if (localStorage.getItem('guestData') !== null) {
                this.guestData = JSON.parse(localStorage.getItem('guestData'));
                console.log("home_guest_data", this.guestData);
                this.userFlag = true;
                this.firstName = this.guestData.GuestInfo.firstName;
                this.lastName = this.guestData.GuestInfo.lastName;
                console.log("image_url", this.guestData.UnitInfo.thumbnail);
            }
        }
        this.pushNotificationService.init();
        console.log("lease_data", this.leaseData, this.current_user);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.getHomeData();
    };
    HomePage.prototype.getHomeData = function () {
        var _this = this;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        var zipcode = "23456";
        var address = "Sandbridge, Virginia Beach, VA, USA";
        this.nativeGeocoder.forwardGeocode(address, options).then(function (coordinates) {
            console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
            _this.lat = coordinates[0].latitude;
            _this.lng = coordinates[0].longitude;
            _this.getWeatherData(_this.lat, _this.lng);
        }).catch(function (error) { return console.log(error); });
    };
    HomePage.prototype.getWeatherData = function (lat, lng) {
        var _this = this;
        this.apiDataProvider.getCurrentWeatherData(lat, lng).then(function (data) {
            if (data) {
                console.log("Weather_data", data);
                _this.weatherInfo = data;
                _this.currently = data.currently;
                _this.weekly = data.daily;
                _this.forcastData = _this.weekly.data;
            }
            else {
                _this.alertCtrl.create({
                    title: "Error",
                    message: "There is no Data",
                    buttons: ["OK"]
                }).present();
            }
        }).catch(function (err) {
            console.log("err", err.message);
        });
    };
    HomePage.prototype.getDayName = function (id) {
        var currentDay = new Date().getDay();
        var dayReturnIndex = +id;
        if (dayReturnIndex > 8) {
            dayReturnIndex -= 8;
            console.log("weekDay", this.weekDays[dayReturnIndex]);
        }
        return this.weekDays[dayReturnIndex];
    };
    HomePage.prototype.getDate = function (id) {
        return '';
    };
    HomePage.prototype.viewAttractionData = function () {
        // this.navCtrl.push(AttractionsPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__localattraction_localattraction__["a" /* LocalattractionPage */]);
    };
    HomePage.prototype.viewEatData = function () {
        // this.navCtrl.push(RestaurantsPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__rescat_rescat__["a" /* RescatPage */]);
    };
    HomePage.prototype.viewEventData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__upcomeevent_upcomeevent__["a" /* UpcomeeventPage */]);
    };
    HomePage.prototype.viewDealData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__promotions_promotions__["a" /* PromotionsPage */]);
    };
    HomePage.prototype.viewReportData = function () {
        var report_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_5__report_report__["a" /* ReportPage */]);
        report_modal.present();
    };
    HomePage.prototype.viewCallData = function () {
        this.callNumber.callNumber("7574266200", true).then(function (res) {
            console.log("Launch Dialer!", res);
        }).catch(function (err) {
            console.log("Error Launching Dialer", err);
        });
    };
    HomePage.prototype.viewArrivalData = function () {
        var modalOptions = {
            cssClass: "subModal"
        };
        this.arrivalmodalData.title = "Your arrival",
            this.arrivalmodalData.message = "Check in time is 3pm, come to our rental office at 601 Sandbrige Road. Upon arrival, you'll be given a Check in Packet containing your keys and information about our area.";
        var sub_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_12__arrivalmodal_arrivalmodal__["a" /* ArrivalmodalPage */], { arModalData: this.arrivalmodalData }, modalOptions);
        sub_modal.present();
    };
    HomePage.prototype.viewInviteData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__invite_invite__["a" /* InvitePage */]);
    };
    HomePage.prototype.viewGuideData = function () {
        this.alertCtrl.create({
            title: "Check the Api",
            message: "This will show the via APi",
            buttons: ["OK"]
        }).present();
    };
    HomePage.prototype.viewWeatherData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__weather_weather__["a" /* WeatherPage */]);
    };
    HomePage.prototype.viewPhoneData = function () {
        var _this = this;
        //
        var self = this;
        this.networkStatus.getNetworkStatus().subscribe(function (status) {
            if (self.networkStatus.getNetworkType() == 'none') {
                self.displayToastData("We can't reach out network right now. Please check your connection");
            }
            else if (self.networkStatus.getNetworkType() !== 'none') {
                self.displayToastData("Netwrork Connected....");
                // this.getCallNumeber();
                _this.showWifiPassword();
            }
        });
    };
    HomePage.prototype.showWifiPassword = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: "WIFI PASSWORD",
            inputs: [{
                    name: 'number',
                    placeholder: 'wifi password',
                    type: 'tel'
                }],
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('data_result', data.number);
                        if (data.number == _this.guestData.UnitInfo.wifi_password) {
                            console.log("ok");
                            _this.getCallNumeber();
                        }
                    }
                }
            ]
        });
        this.alert.present();
    };
    HomePage.prototype.getCallNumeber = function () {
        this.callNumber.callNumber("7574266200", true).then(function (res) {
            console.log("Launched dialer!", res);
        }).catch(function (err) {
            console.log("Error launching Dialer", err);
        });
    };
    HomePage.prototype.displayToastData = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        }).present();
    };
    HomePage.prototype.viewCatData = function (idx) {
        console.log("idx", idx);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__trips_trips__["a" /* TripsPage */], { tripsData: this.leaseData, tripsId: idx });
    };
    HomePage.prototype.changeTeamp = function (temp) {
        var ftemp = temp * 9 / 5 + 32;
        return Math.round(ftemp);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], HomePage.prototype, "guide_slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\home\home.html"*/'<ion-header no-border>\n  <ion-navbar color="custom">\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.png">\n    </button>\n    <ion-title> My Trips </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="top_content" *ngIf="!userFlag">\n    <ion-card *ngFor="let res of leaseData.trips; let idx=index" (click)="viewCatData(idx)">\n      <img src="{{res.unit_thumbnail}}" />\n      <div class="category-bg"></div>\n      <div class="card-title">\n        <p>{{res.unit_name}}<p>\n            <p>{{res.arrival_date}}~{{res.departure_date}}<p>\n      </div>\n      <div class="card-subtitle">VIEW\n        <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon>\n      </div>\n    </ion-card>\n  </div>\n\n  <div class="top_content" *ngIf="userFlag">\n    <ion-card>\n      <img src="{{guestData.UnitInfo.thumbnail}}" />\n      <div class="category-bg"></div>\n      <div class="card-title">\n        <p>{{guestData.UnitInfo.name}}<p>\n            <p>{{guestData.TripInfo.arrival_date}}~{{guestData.TripInfo.departure_date}}<p>\n      </div>\n    </ion-card>\n  </div>\n\n  <div class="home_title">\n    <p>{{firstName}} &nbsp;{{lastName}}</p>\n    <!-- <p>{{leaseData.profile.first_name}} &nbsp;{{leaseData.profile.last_name}}</p> -->\n  </div>\n  <div class="mainCont">\n    <div class="subCont" (click)="viewAttractionData()"><img src="./assets/imgs/home/attraction.png">\n      <p>Local<br> Attractions</p>\n    </div>\n    <div class="subCont" (click)="viewEatData()"><img src="./assets/imgs/home/eat.png">\n      <p>Please<br> To Eat</p>\n    </div>\n    <div class="subCont right" (click)="viewEventData()"><img src="./assets/imgs/home/event.png">\n      <p>Upcoming <br>Events</p>\n    </div>\n  </div>\n  <div class="mainCont mid">\n    <div class="subCont" (click)="viewDealData()"><img src="./assets/imgs/home/deal.png">\n      <p>Siebert<br>Coupons</p>\n    </div>\n    <div class="subCont" (click)="viewReportData()" *ngIf="current_user"><img src="./assets/imgs/home/report.png">\n      <p>Report <br>Maintenance</p>\n    </div>\n    <div class="subCont right" (click)="viewCallData()"><img src="./assets/imgs/home/call.png">\n      <a href="tel:757 426 6200 ">\n        <p>Call Our <br>Office</p>\n      </a>\n    </div>\n  </div>\n  <div class="arrival" *ngIf="current_user">\n    <div class="arrival_title">\n      <p>Your Arrival</p> &nbsp;&nbsp;\n      <img src="./assets/imgs/home/car.png">\n    </div>\n    <div class="arrival_content">\n      <p>Check in time is 3pm, come to our rental office at 601 Sandbrige Road. Upon arrival, you\'ll be given a Check\n        in Packet containing your keys and information about our area. </p>\n    </div>\n    <div class="arrival_btn">\n      <button ion-button outline color="homecolor" class="homebtn" (click)="viewArrivalData()">See All</button>\n    </div>\n  </div>\n\n  <div class="arrival" *ngIf="current_user">\n    <div class="arrival_title">\n      <p>Rental Phone</p> &nbsp;&nbsp;\n      <img src="./assets/imgs/home/phone.png">\n    </div>\n    <div class="arrival_phone" (click)="viewPhoneData()">\n      <!-- <a >757 426 6200</a><br> -->\n      <p>757 426 6200</p>\n    </div>\n  </div>\n\n  <div class="arrival" *ngIf="current_user">\n    <div class="arrival_title">\n      <p>Invite Others</p> &nbsp;&nbsp;\n      <img src="./assets/imgs/home/invite.png">\n    </div>\n    <div class="arrival_content">\n      <p>Invite others in your traveling party to download the app to make the most of your vacation.</p>\n    </div>\n    <div class="arrival_btn">\n      <button ion-button outline color="homecolor" class="homebtn" (click)="viewInviteData()">Inivte Guests</button>\n    </div>\n  </div>\n  <div class="arrival">\n    <div class="arrival_title">\n      <p>Sandbridge Weather</p> &nbsp;&nbsp;\n      <img src="./assets/imgs/home/weather.png">\n    </div>\n    <div class="arrival_weather">\n\n      <div class="weather_sub">\n        <img src="assets/imgs/weather/{{forcastData[0]?.icon}}.png">\n        <p>{{getDayName(1)}} </p>\n        <p>{{forcastData[1]?.temperatureMax}}°F</p>\n        <!-- <p>{{changeTeamp(forcastData[0]?.temperatureMax)}}°F</p> -->\n\n      </div>\n      <div class="weather_sub">\n        <img src="assets/imgs/weather/{{forcastData[1]?.icon}}.png">\n        <p>{{getDayName(2)}} </p>\n        <p>{{forcastData[2]?.temperatureMax}}°F</p>\n        <!-- <p>{{changeTeamp(forcastData[1]?.temperatureMax)}}°F</p> -->\n\n      </div>\n      <div class="weather_sub">\n        <img src="assets/imgs/weather/{{forcastData[2]?.icon}}.png">\n        <p>{{getDayName(3)}}</p>\n        <p>{{forcastData[3]?.temperatureMax}}°F</p>\n        <!-- <p>{{changeTeamp(forcastData[2]?.temperatureMax)}}°F</p> -->\n\n      </div>\n    </div>\n    <div class="weather_btn">\n      <button ion-button outline color="homecolor" class="homebtn" (click)="viewWeatherData()">View Week Forecast</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_13__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_15__providers_authservice_authservice__["a" /* AuthserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_pushnotification_pushnotification__["a" /* PushnotificationProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["Online"] = 0] = "Online";
    ConnectionStatus[ConnectionStatus["Offline"] = 1] = "Offline";
})(ConnectionStatus || (ConnectionStatus = {}));
var NetworkProvider = (function () {
    function NetworkProvider(http, network, events) {
        this.http = http;
        this.network = network;
        this.events = events;
        this._status = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        console.log('Hello NetworkProvider Provider');
        this.status = ConnectionStatus.Online;
    }
    NetworkProvider.prototype.initializeNetworkEvents = function () {
        var _this = this;
        /* OFFLINE */
        this.network.onDisconnect().subscribe(function () {
            _this.setStatus(ConnectionStatus.Offline);
        });
        /* ONLINE */
        this.network.onConnect().subscribe(function () {
            _this.setStatus(ConnectionStatus.Online);
        });
    };
    NetworkProvider.prototype.getNetworkType = function () {
        return this.network.type;
    };
    NetworkProvider.prototype.getNetworkStatus = function () {
        return this._status.asObservable();
    };
    NetworkProvider.prototype.setStatus = function (status) {
        this.status = status;
        this._status.next(this.status);
    };
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submap_submap__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmodalPage = (function () {
    function SubmodalPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.modal_content = {};
        this.modal_content = navParams.get('subModalData');
        console.log("modal_content", this.modal_content);
    }
    SubmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubmodalPage');
    };
    SubmodalPage.prototype.confirm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__submap_submap__["a" /* SubmapPage */], { mapviewData: this.modal_content.title });
        this.viewCtrl.dismiss();
    };
    SubmodalPage.prototype.closeBtn = function () {
        this.viewCtrl.dismiss();
    };
    SubmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-submodal',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\submodal\submodal.html"*/'<ion-content padding>\n    <div class="modal_page">\n        <div class="close_btn" (click)="closeBtn()">\n            <ion-icon ios="ios-close" md="md-close"></ion-icon>\n        </div>\n        <div class="modal_title">{{modal_content.title}}</div>\n        <div class="modal_content">{{modal_content.des}}</div>\n        <div class="restroNum"><a>{{modal_content.phone}}</a>\n            <div class="restoBtns"><a href="tel:{{modal_content.phone}}">CALL</a></div>\n        </div>\n        <div class="modal_button">\n            <button ion-button round full color="mainbtn" (click)="confirm()"> View Map</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\submodal\submodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SubmodalPage);
    return SubmodalPage;
}());

//# sourceMappingURL=submodal.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(437);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_main_main__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forgotpwd_forgotpwd__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sidemenu_sidemenu__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_weather_weather__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_savelater_savelater__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_explorehome_explorehome__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_faq_faq__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_restaurants_restaurants__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_attractions_attractions__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_promotions_promotions__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_upcomeevent_upcomeevent__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_reservation_reservation__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_payment_payment__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_rental_rental__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_blog_blog__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_setting_setting__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_rentsub_rentsub__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_rentdetails_rentdetails__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_report_report__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_invite_invite__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_rentmap_rentmap__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_blogpost_blogpost__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_weathersub_weathersub__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_gettingmap_gettingmap__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_submodal_submodal__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_submap_submap__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_arrivalmodal_arrivalmodal__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_phoneauth_phoneauth__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_rentalmodal_rentalmodal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_upcomingmodal_upcomingmodal__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_localattraction_localattraction__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_attraction_sub_attraction_sub__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_rescat_rescat__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_inviteguest_inviteguest__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_inviteothers_inviteothers__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_phoneinfo_phoneinfo__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_trips_trips__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_phonelogin_phonelogin__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_signupguest_signupguest__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_http__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_firebase_app__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_51_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_authservice_authservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_network_network__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_countrycode_countrycode__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_onesignal__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pipes_pipes_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_in_app_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_geolocation__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_email_composer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_photo_viewer__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63_angular2_moment__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_63_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_native_geocoder__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ionic_native_document_viewer__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ionic_native_network__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__ionic_native_call_number__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__ionic_native_launch_navigator__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__ionic_native_sim__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ionic_native_sms__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__ionic_native_file_transfer__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__ionic_native_file__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ionic_native_base64__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__providers_pushnotification_pushnotification__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































// httpclient ...




//  api part





// pipe part..

// plugin...



















// Initialize Firebase
var config = {
    apiKey: "AIzaSyB3KIlsJgJJqFc8pk9WH-uEzQ-9szzpHPI",
    authDomain: "siebert-guest-app.firebaseapp.com",
    databaseURL: "https://siebert-guest-app.firebaseio.com",
    projectId: "siebert-guest-app",
    storageBucket: "siebert-guest-app.appspot.com",
    messagingSenderId: "648371285185"
};
__WEBPACK_IMPORTED_MODULE_51_firebase_app___default.a.initializeApp(config);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_sidemenu_sidemenu__["a" /* SidemenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_weather_weather__["a" /* WeatherPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_savelater_savelater__["a" /* SavelaterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_restaurants_restaurants__["a" /* RestaurantsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_explorehome_explorehome__["a" /* ExplorehomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_attractions_attractions__["a" /* AttractionsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_promotions_promotions__["a" /* PromotionsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_upcomeevent_upcomeevent__["a" /* UpcomeeventPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_reservation_reservation__["a" /* ReservationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_rental_rental__["a" /* RentalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_rentsub_rentsub__["a" /* RentsubPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_rentdetails_rentdetails__["a" /* RentdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_invite_invite__["a" /* InvitePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_weathersub_weathersub__["a" /* WeathersubPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_rentmap_rentmap__["a" /* RentmapPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_blogpost_blogpost__["a" /* BlogpostPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_gettingmap_gettingmap__["a" /* GettingmapPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_submodal_submodal__["a" /* SubmodalPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_submap_submap__["a" /* SubmapPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_arrivalmodal_arrivalmodal__["a" /* ArrivalmodalPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_phoneauth_phoneauth__["a" /* PhoneauthPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_rentalmodal_rentalmodal__["a" /* RentalmodalPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_upcomingmodal_upcomingmodal__["a" /* UpcomingmodalPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_localattraction_localattraction__["a" /* LocalattractionPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_attraction_sub_attraction_sub__["a" /* AttractionSubPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_rescat_rescat__["a" /* RescatPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_inviteguest_inviteguest__["a" /* InviteguestPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_inviteothers_inviteothers__["a" /* InviteothersPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_phoneinfo_phoneinfo__["a" /* PhoneinfoPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_trips_trips__["a" /* TripsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_phonelogin_phonelogin__["a" /* PhoneloginPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_signupguest_signupguest__["a" /* SignupguestPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_common_http__["b" /* HttpClientJsonpModule */],
                __WEBPACK_IMPORTED_MODULE_63_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_58__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_50__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/arrivalmodal/arrivalmodal.module#ArrivalmodalPageModule', name: 'ArrivalmodalPage', segment: 'arrivalmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/attraction-sub/attraction-sub.module#AttractionSubPageModule', name: 'AttractionSubPage', segment: 'attraction-sub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/attractions/attractions.module#AttractionsPageModule', name: 'AttractionsPage', segment: 'attractions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blog/blog.module#BlogPageModule', name: 'BlogPage', segment: 'blog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blogpost/blogpost.module#BlogpostPageModule', name: 'BlogpostPage', segment: 'blogpost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/explorehome/explorehome.module#ExplorehomePageModule', name: 'ExplorehomePage', segment: 'explorehome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpwd/forgotpwd.module#ForgotpwdPageModule', name: 'ForgotpwdPage', segment: 'forgotpwd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gettingmap/gettingmap.module#GettingmapPageModule', name: 'GettingmapPage', segment: 'gettingmap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invite/invite.module#InvitePageModule', name: 'InvitePage', segment: 'invite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inviteguest/inviteguest.module#InviteguestPageModule', name: 'InviteguestPage', segment: 'inviteguest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inviteothers/inviteothers.module#InviteothersPageModule', name: 'InviteothersPage', segment: 'inviteothers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/localattraction/localattraction.module#LocalattractionPageModule', name: 'LocalattractionPage', segment: 'localattraction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/phoneauth/phoneauth.module#PhoneauthPageModule', name: 'PhoneauthPage', segment: 'phoneauth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/phoneinfo/phoneinfo.module#PhoneinfoPageModule', name: 'PhoneinfoPage', segment: 'phoneinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/phonelogin/phonelogin.module#PhoneloginPageModule', name: 'PhoneloginPage', segment: 'phonelogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promotions/promotions.module#PromotionsPageModule', name: 'PromotionsPage', segment: 'promotions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rental/rental.module#RentalPageModule', name: 'RentalPage', segment: 'rental', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rentalmodal/rentalmodal.module#RentalmodalPageModule', name: 'RentalmodalPage', segment: 'rentalmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rentdetails/rentdetails.module#RentdetailsPageModule', name: 'RentdetailsPage', segment: 'rentdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rentmap/rentmap.module#RentmapPageModule', name: 'RentmapPage', segment: 'rentmap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rentsub/rentsub.module#RentsubPageModule', name: 'RentsubPage', segment: 'rentsub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rescat/rescat.module#RescatPageModule', name: 'RescatPage', segment: 'rescat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservation/reservation.module#ReservationPageModule', name: 'ReservationPage', segment: 'reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurants/restaurants.module#RestaurantsPageModule', name: 'RestaurantsPage', segment: 'restaurants', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/savelater/savelater.module#SavelaterPageModule', name: 'SavelaterPage', segment: 'savelater', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signupguest/signupguest.module#SignupguestPageModule', name: 'SignupguestPage', segment: 'signupguest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/submap/submap.module#SubmapPageModule', name: 'SubmapPage', segment: 'submap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/submodal/submodal.module#SubmodalPageModule', name: 'SubmodalPage', segment: 'submodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trips/trips.module#TripsPageModule', name: 'TripsPage', segment: 'trips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upcomeevent/upcomeevent.module#UpcomeeventPageModule', name: 'UpcomeeventPage', segment: 'upcomeevent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upcomingmodal/upcomingmodal.module#UpcomingmodalPageModule', name: 'UpcomingmodalPage', segment: 'upcomingmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/weather/weather.module#WeatherPageModule', name: 'WeatherPage', segment: 'weather', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/weathersub/weathersub.module#WeathersubPageModule', name: 'WeathersubPage', segment: 'weathersub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sidemenu/sidemenu.module#SidemenuPageModule', name: 'SidemenuPage', segment: 'sidemenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_67__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgotpwd_forgotpwd__["a" /* ForgotpwdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sidemenu_sidemenu__["a" /* SidemenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_weather_weather__["a" /* WeatherPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_savelater_savelater__["a" /* SavelaterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_restaurants_restaurants__["a" /* RestaurantsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_explorehome_explorehome__["a" /* ExplorehomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_attractions_attractions__["a" /* AttractionsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_promotions_promotions__["a" /* PromotionsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_upcomeevent_upcomeevent__["a" /* UpcomeeventPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_reservation_reservation__["a" /* ReservationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_rental_rental__["a" /* RentalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_rentsub_rentsub__["a" /* RentsubPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_rentdetails_rentdetails__["a" /* RentdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_invite_invite__["a" /* InvitePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_weathersub_weathersub__["a" /* WeathersubPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_rentmap_rentmap__["a" /* RentmapPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_blogpost_blogpost__["a" /* BlogpostPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_gettingmap_gettingmap__["a" /* GettingmapPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_submodal_submodal__["a" /* SubmodalPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_submap_submap__["a" /* SubmapPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_arrivalmodal_arrivalmodal__["a" /* ArrivalmodalPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_phoneauth_phoneauth__["a" /* PhoneauthPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_rentalmodal_rentalmodal__["a" /* RentalmodalPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_upcomingmodal_upcomingmodal__["a" /* UpcomingmodalPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_localattraction_localattraction__["a" /* LocalattractionPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_attraction_sub_attraction_sub__["a" /* AttractionSubPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_rescat_rescat__["a" /* RescatPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_inviteguest_inviteguest__["a" /* InviteguestPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_inviteothers_inviteothers__["a" /* InviteothersPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_phoneinfo_phoneinfo__["a" /* PhoneinfoPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_trips_trips__["a" /* TripsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_phonelogin_phonelogin__["a" /* PhoneloginPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_signupguest_signupguest__["a" /* SignupguestPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_65__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_72__ionic_native_sim__["a" /* Sim */],
                __WEBPACK_IMPORTED_MODULE_53__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_60__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_61__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_62__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_54__providers_authservice_authservice__["a" /* AuthserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_66__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_68__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_69__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_70__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_55__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_71__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_56__providers_countrycode_countrycode__["a" /* CountrycodeProvider */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_73__ionic_native_sms__["a" /* SMS */],
                __WEBPACK_IMPORTED_MODULE_74__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_75__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_76__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_56__providers_countrycode_countrycode__["a" /* CountrycodeProvider */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_77__providers_pushnotification_pushnotification__["a" /* PushnotificationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sidemenu_sidemenu__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_authservice_authservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_pushnotification_pushnotification__ = __webpack_require__(65);
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
    function MyApp(platform, statusBar, splashScreen, storage, authService, toastCtrl, pushNotificationService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.pushNotificationService = pushNotificationService;
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.pushNotificationService.init();
            var unsubscribe = __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth().onAuthStateChanged(function (user) {
                console.log('auth changed : ', user);
                if (!user) {
                    unsubscribe();
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.database().ref('users/' + user.uid).update({
                        device_token: localStorage.getItem('token')
                    });
                    localStorage.setItem('user_id', user.uid);
                    //          this.nav.setRoot(SidemenuPage);
                    unsubscribe;
                }
            });
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_sidemenu_sidemenu__["a" /* SidemenuPage */]);
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\app\app.html"*/,
            queries: {
                nav: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"]('content')
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__providers_authservice_authservice__["a" /* AuthserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_pushnotification_pushnotification__["a" /* PushnotificationProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_filter__ = __webpack_require__(519);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__filter_filter__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_1__filter_filter__["a" /* FilterPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__filter_filter__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_1__filter_filter__["a" /* FilterPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FilterPipe = (function () {
    function FilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FilterPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter',
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 281,
	"./af.js": 281,
	"./ar": 282,
	"./ar-dz": 283,
	"./ar-dz.js": 283,
	"./ar-kw": 284,
	"./ar-kw.js": 284,
	"./ar-ly": 285,
	"./ar-ly.js": 285,
	"./ar-ma": 286,
	"./ar-ma.js": 286,
	"./ar-sa": 287,
	"./ar-sa.js": 287,
	"./ar-tn": 288,
	"./ar-tn.js": 288,
	"./ar.js": 282,
	"./az": 289,
	"./az.js": 289,
	"./be": 290,
	"./be.js": 290,
	"./bg": 291,
	"./bg.js": 291,
	"./bm": 292,
	"./bm.js": 292,
	"./bn": 293,
	"./bn.js": 293,
	"./bo": 294,
	"./bo.js": 294,
	"./br": 295,
	"./br.js": 295,
	"./bs": 296,
	"./bs.js": 296,
	"./ca": 297,
	"./ca.js": 297,
	"./cs": 298,
	"./cs.js": 298,
	"./cv": 299,
	"./cv.js": 299,
	"./cy": 300,
	"./cy.js": 300,
	"./da": 301,
	"./da.js": 301,
	"./de": 302,
	"./de-at": 303,
	"./de-at.js": 303,
	"./de-ch": 304,
	"./de-ch.js": 304,
	"./de.js": 302,
	"./dv": 305,
	"./dv.js": 305,
	"./el": 306,
	"./el.js": 306,
	"./en-au": 307,
	"./en-au.js": 307,
	"./en-ca": 308,
	"./en-ca.js": 308,
	"./en-gb": 309,
	"./en-gb.js": 309,
	"./en-ie": 310,
	"./en-ie.js": 310,
	"./en-il": 311,
	"./en-il.js": 311,
	"./en-nz": 312,
	"./en-nz.js": 312,
	"./eo": 313,
	"./eo.js": 313,
	"./es": 314,
	"./es-do": 315,
	"./es-do.js": 315,
	"./es-us": 316,
	"./es-us.js": 316,
	"./es.js": 314,
	"./et": 317,
	"./et.js": 317,
	"./eu": 318,
	"./eu.js": 318,
	"./fa": 319,
	"./fa.js": 319,
	"./fi": 320,
	"./fi.js": 320,
	"./fo": 321,
	"./fo.js": 321,
	"./fr": 322,
	"./fr-ca": 323,
	"./fr-ca.js": 323,
	"./fr-ch": 324,
	"./fr-ch.js": 324,
	"./fr.js": 322,
	"./fy": 325,
	"./fy.js": 325,
	"./gd": 326,
	"./gd.js": 326,
	"./gl": 327,
	"./gl.js": 327,
	"./gom-latn": 328,
	"./gom-latn.js": 328,
	"./gu": 329,
	"./gu.js": 329,
	"./he": 330,
	"./he.js": 330,
	"./hi": 331,
	"./hi.js": 331,
	"./hr": 332,
	"./hr.js": 332,
	"./hu": 333,
	"./hu.js": 333,
	"./hy-am": 334,
	"./hy-am.js": 334,
	"./id": 335,
	"./id.js": 335,
	"./is": 336,
	"./is.js": 336,
	"./it": 337,
	"./it.js": 337,
	"./ja": 338,
	"./ja.js": 338,
	"./jv": 339,
	"./jv.js": 339,
	"./ka": 340,
	"./ka.js": 340,
	"./kk": 341,
	"./kk.js": 341,
	"./km": 342,
	"./km.js": 342,
	"./kn": 343,
	"./kn.js": 343,
	"./ko": 344,
	"./ko.js": 344,
	"./ky": 345,
	"./ky.js": 345,
	"./lb": 346,
	"./lb.js": 346,
	"./lo": 347,
	"./lo.js": 347,
	"./lt": 348,
	"./lt.js": 348,
	"./lv": 349,
	"./lv.js": 349,
	"./me": 350,
	"./me.js": 350,
	"./mi": 351,
	"./mi.js": 351,
	"./mk": 352,
	"./mk.js": 352,
	"./ml": 353,
	"./ml.js": 353,
	"./mn": 354,
	"./mn.js": 354,
	"./mr": 355,
	"./mr.js": 355,
	"./ms": 356,
	"./ms-my": 357,
	"./ms-my.js": 357,
	"./ms.js": 356,
	"./mt": 358,
	"./mt.js": 358,
	"./my": 359,
	"./my.js": 359,
	"./nb": 360,
	"./nb.js": 360,
	"./ne": 361,
	"./ne.js": 361,
	"./nl": 362,
	"./nl-be": 363,
	"./nl-be.js": 363,
	"./nl.js": 362,
	"./nn": 364,
	"./nn.js": 364,
	"./pa-in": 365,
	"./pa-in.js": 365,
	"./pl": 366,
	"./pl.js": 366,
	"./pt": 367,
	"./pt-br": 368,
	"./pt-br.js": 368,
	"./pt.js": 367,
	"./ro": 369,
	"./ro.js": 369,
	"./ru": 370,
	"./ru.js": 370,
	"./sd": 371,
	"./sd.js": 371,
	"./se": 372,
	"./se.js": 372,
	"./si": 373,
	"./si.js": 373,
	"./sk": 374,
	"./sk.js": 374,
	"./sl": 375,
	"./sl.js": 375,
	"./sq": 376,
	"./sq.js": 376,
	"./sr": 377,
	"./sr-cyrl": 378,
	"./sr-cyrl.js": 378,
	"./sr.js": 377,
	"./ss": 379,
	"./ss.js": 379,
	"./sv": 380,
	"./sv.js": 380,
	"./sw": 381,
	"./sw.js": 381,
	"./ta": 382,
	"./ta.js": 382,
	"./te": 383,
	"./te.js": 383,
	"./tet": 384,
	"./tet.js": 384,
	"./tg": 385,
	"./tg.js": 385,
	"./th": 386,
	"./th.js": 386,
	"./tl-ph": 387,
	"./tl-ph.js": 387,
	"./tlh": 388,
	"./tlh.js": 388,
	"./tr": 389,
	"./tr.js": 389,
	"./tzl": 390,
	"./tzl.js": 390,
	"./tzm": 391,
	"./tzm-latn": 392,
	"./tzm-latn.js": 392,
	"./tzm.js": 391,
	"./ug-cn": 393,
	"./ug-cn.js": 393,
	"./uk": 394,
	"./uk.js": 394,
	"./ur": 395,
	"./ur.js": 395,
	"./uz": 396,
	"./uz-latn": 397,
	"./uz-latn.js": 397,
	"./uz.js": 396,
	"./vi": 398,
	"./vi.js": 398,
	"./x-pseudo": 399,
	"./x-pseudo.js": 399,
	"./yo": 400,
	"./yo.js": 400,
	"./zh-cn": 401,
	"./zh-cn.js": 401,
	"./zh-hk": 402,
	"./zh-hk.js": 402,
	"./zh-tw": 403,
	"./zh-tw.js": 403
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
webpackContext.id = 521;

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubmapPage = (function () {
    function SubmapPage(navCtrl, navParams, nativeGeocoder, geolocation, launchNavigator, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.launchNavigator = launchNavigator;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.destination = navParams.get('mapviewData');
    }
    SubmapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubmapPage');
        this.loading = this.loadingCtrl.create({
            content: '',
            spinner: 'bubbles'
        });
        this.loading.present();
        this.viewMap();
    };
    SubmapPage.prototype.viewMap = function () {
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
            _this.loading.dismiss();
        }).catch(function (err) {
            _this.alertCtrl.create({
                subTitle: "Error!",
                message: err.message,
                buttons: ["OK"]
            }).present();
            _this.loading.dismiss();
        });
    };
    SubmapPage.prototype.navigation = function () {
        var options = {
            start: [this.current_lat, this.current_lng],
            app: this.launchNavigator.APP.GOOGLE_MAPS
        };
        this.launchNavigator.navigate(this.destination, options)
            .then(function (success) {
            console.log(success);
        }, function (error) {
            console.log(error);
        });
    };
    SubmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-submap',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\submap\submap.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Maps</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div id="map" style="height: 100%;width:100%;"></div>\n  <div class="nav-btn">\n    <button ion-button round full color="navbtn" (click)="navigation()">\n      <ion-icon name="map"></ion-icon> &nbsp;&nbsp;&nbsp; Navigation\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\submap\submap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SubmapPage);
    return SubmapPage;
}());

//# sourceMappingURL=submap.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weather_weather__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__savelater_savelater__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__explorehome_explorehome__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__faq_faq__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rescat_rescat__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__promotions_promotions__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upcomeevent_upcomeevent__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reservation_reservation__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__payment_payment__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rental_rental__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blog_blog__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__setting_setting__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_authservice_authservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__localattraction_localattraction__ = __webpack_require__(77);
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
    function SidemenuPage(navCtrl, navParams, alertCtrl, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.photoUrl = ".assets/imgs/empty_avatar.png";
        this.leaseData = {};
        this.guestData = {};
        this.pages = [];
        console.log('sidebar construct');
        this.getLocalStorageData();
    }
    SidemenuPage_1 = SidemenuPage;
    SidemenuPage.prototype.getLocalStorageData = function () {
        if (localStorage.getItem('user_id') !== null) {
            this.current_userData = localStorage.getItem("user_id");
        }
        if (localStorage.getItem('userType') == 'lease') {
            if (localStorage.getItem('leaseData') !== null) {
                this.leaseData = JSON.parse(localStorage.getItem('leaseData'));
                this.firstname = this.leaseData.profile.first_name;
                this.lastname = this.leaseData.profile.last_name;
            }
        }
        else if (localStorage.getItem('userType') == 'guest') {
            if (localStorage.getItem('guestData') !== null) {
                this.guestData = JSON.parse(localStorage.getItem('guestData'));
                this.firstname = this.guestData.GuestInfo.firstName;
                this.lastname = this.guestData.GuestInfo.lastName;
            }
        }
    };
    SidemenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SidemenuPage');
        this.loading = this.loadingCtrl.create({
            content: "Loading...",
            spinner: "bubbles"
        });
        this.loading.present();
        this.viewPage();
        this.getCurrentUserData();
    };
    SidemenuPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter');
        if (!this.current_userData) {
            this.openPage(this.pages[3]);
        }
    };
    SidemenuPage.prototype.getCurrentUserData = function () {
        var _this = this;
        this.authService.getcurrentUserData(this.current_userData).subscribe(function (snapshot) {
            console.log("resData", snapshot.val());
            if (snapshot.val() !== null) {
                _this.photoUrl = snapshot.val().photo;
                var userData = snapshot.val();
                // localStorage.setItem('current_user', JSON.stringify(userData));
                _this.loading.dismiss();
            }
            else {
                //          alert('There is no Data');
                _this.photoUrl = ".assets/imgs/empty_avatar.png";
                _this.loading.dismiss();
            }
        }, function (err) {
            console.log("error", err.message);
            _this.loading.dismiss();
        });
    };
    SidemenuPage.prototype.viewPage = function () {
        if (this.current_userData) {
            console.log('here1');
            this.pages = [
                { image: 'assets/imgs/menu/nav16.png', bgFlag: true, title: 'Saved for later', component: __WEBPACK_IMPORTED_MODULE_6__savelater_savelater__["a" /* SavelaterPage */] },
                { image: 'assets/imgs/menu/nav1.png', bgFlag: true, title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */] },
                { image: 'assets/imgs/menu/nav11.png', bgFlag: true, title: 'Browse Rentals', component: __WEBPACK_IMPORTED_MODULE_14__rental_rental__["a" /* RentalPage */] },
                { image: 'assets/imgs/menu/nav8.png', bgFlag: true, title: 'FAQ', component: __WEBPACK_IMPORTED_MODULE_8__faq_faq__["a" /* FaqPage */] },
                { image: '', title: 'Local Guide', bgFlag: false, component: "no" },
                { image: 'assets/imgs/menu/nav12.png', bgFlag: true, title: 'Resturants', component: __WEBPACK_IMPORTED_MODULE_9__rescat_rescat__["a" /* RescatPage */] },
                { image: 'assets/imgs/menu/nav9.png', bgFlag: true, title: 'Attractions', component: __WEBPACK_IMPORTED_MODULE_18__localattraction_localattraction__["a" /* LocalattractionPage */] },
                { image: 'assets/imgs/menu/nav10.png', bgFlag: true, title: 'Siebert Coupons', component: __WEBPACK_IMPORTED_MODULE_10__promotions_promotions__["a" /* PromotionsPage */] },
                { image: 'assets/imgs/menu/nav7.png', bgFlag: true, title: 'Upcoming Events', component: __WEBPACK_IMPORTED_MODULE_11__upcomeevent_upcomeevent__["a" /* UpcomeeventPage */] },
                { image: 'assets/imgs/menu/nav4.png', bgFlag: true, title: 'Sandbridge Weather', component: __WEBPACK_IMPORTED_MODULE_4__weather_weather__["a" /* WeatherPage */] },
                { image: '', title: 'Account Management', bgFlag: false, component: "no" },
                { image: 'assets/imgs/menu/nav15.png', bgFlag: true, title: 'My Reservations', component: __WEBPACK_IMPORTED_MODULE_12__reservation_reservation__["a" /* ReservationPage */] },
                { image: 'assets/imgs/menu/nav6.png', bgFlag: true, title: 'Make a Payment', component: __WEBPACK_IMPORTED_MODULE_13__payment_payment__["a" /* PaymentPage */] },
                { image: 'assets/imgs/menu/nav1.png', bgFlag: true, title: 'Explore my Home', component: __WEBPACK_IMPORTED_MODULE_7__explorehome_explorehome__["a" /* ExplorehomePage */] },
                { image: 'assets/imgs/menu/nav13.png', bgFlag: true, title: 'View Our Blog', component: __WEBPACK_IMPORTED_MODULE_15__blog_blog__["a" /* BlogPage */] },
                { image: 'assets/imgs/menu/nav5.png', bgFlag: true, title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_16__setting_setting__["a" /* SettingPage */] },
                { image: 'assets/imgs/menu/nav2.png', bgFlag: true, title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */] },
                { image: 'assets/imgs/menu/nav3.png', bgFlag: true, title: 'Log out', component: null }
            ];
        }
        else {
            console.log('here2');
            this.pages = [
                { image: 'assets/imgs/menu/nav33.png', bgFlag: true, title: 'Log In', component: __WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */] },
                { image: '', title: '', bgFlag: false, component: "no" },
                { image: 'assets/imgs/menu/nav1.png', bgFlag: true, title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */] },
                { image: 'assets/imgs/menu/nav11.png', bgFlag: true, title: 'Browse Rentals', component: __WEBPACK_IMPORTED_MODULE_14__rental_rental__["a" /* RentalPage */] },
                { image: 'assets/imgs/menu/nav8.png', bgFlag: true, title: 'FAQ', component: __WEBPACK_IMPORTED_MODULE_8__faq_faq__["a" /* FaqPage */] },
                { image: '', title: 'Local Guide', bgFlag: false, component: "no" },
                { image: 'assets/imgs/menu/nav12.png', bgFlag: true, title: 'Resturants', component: __WEBPACK_IMPORTED_MODULE_9__rescat_rescat__["a" /* RescatPage */] },
                { image: 'assets/imgs/menu/nav9.png', bgFlag: true, title: 'Attractions', component: __WEBPACK_IMPORTED_MODULE_18__localattraction_localattraction__["a" /* LocalattractionPage */] },
                { image: 'assets/imgs/menu/nav10.png', bgFlag: true, title: 'Siebert Coupons', component: __WEBPACK_IMPORTED_MODULE_10__promotions_promotions__["a" /* PromotionsPage */] },
                { image: 'assets/imgs/menu/nav7.png', bgFlag: true, title: 'Upcoming Events', component: __WEBPACK_IMPORTED_MODULE_11__upcomeevent_upcomeevent__["a" /* UpcomeeventPage */] },
                { image: 'assets/imgs/menu/nav4.png', bgFlag: true, title: 'Sandbridge Weather', component: __WEBPACK_IMPORTED_MODULE_4__weather_weather__["a" /* WeatherPage */] },
            ];
        }
    };
    SidemenuPage.prototype.openPage = function (page) {
        var _this = this;
        if (page.component === null) {
            this.alertCtrl.create({
                title: "Confirm?",
                message: "Are you sure you want to logout?",
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel',
                        handler: function () {
                            return;
                        }
                    },
                    {
                        text: "Ok",
                        handler: function () {
                            _this.authService.logout();
                            console.log('localStorage', localStorage);
                            localStorage.clear();
                            var active = _this.navCtrl.getActive(); // or getByIndex(int) if you know it
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                            _this.navCtrl.remove(active.index);
                            //                this.navCtrl.push(active.component);
                            _this.navCtrl.setRoot(SidemenuPage_1);
                        }
                    }
                ]
            }).present();
            return;
        }
        else if (page.component === "no") {
            return;
        }
        if (page.component === __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        else if (page.component === __WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */]) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */]);
        }
        else {
            this.nav.push(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], SidemenuPage.prototype, "nav", void 0);
    SidemenuPage = SidemenuPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sidemenu',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\sidemenu\sidemenu.html"*/'<ion-split-pane>\n  <ion-menu type="overlay" [content]="content">\n    <ion-content>\n      <div class="topInfo" [hidden]="!current_userData">\n        <div class="topProIcon"><img src="{{photoUrl}}" class="profilePhoto"></div>\n        <div class="proName">{{firstname}}&nbsp;{{lastname}}</div>\n      </div>\n      <ion-list>\n        <div *ngFor="let p of pages" (click)="openPage(p)" style="border-top: 1px solid #ddd;">\n\n          <button menuClose ion-item *ngIf="p.bgFlag == true" class="menebtn">\n            <img src="{{p.image}}" class="imgSize">\n            <span class="navTxt"> {{p.title}}</span>\n          </button>\n          <button menuClose ion-item *ngIf="p.bgFlag== false" class="menutitleBtn">\n            <img src="{{p.image}}" class="imgSize">\n            <span class="navTxt">{{p.title}}</span>\n          </button>\n        </div>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav [root]="rootPage" main #content></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\sidemenu\sidemenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_17__providers_authservice_authservice__["a" /* AuthserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], SidemenuPage);
    return SidemenuPage;
    var SidemenuPage_1;
}());

//# sourceMappingURL=sidemenu.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountrycodeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountrycodeProvider = (function () {
    function CountrycodeProvider(http) {
        this.http = http;
        console.log('Hello CountrycodeProvider Provider');
        this.countries = [
            {
                name: "United States",
                dial_code: "+1",
                code: "US"
            }, {
                name: "Israel",
                dial_code: "+972",
                code: "IL"
            }, {
                name: "Afghanistan",
                dial_code: "+93",
                code: "AF"
            }, {
                name: "Albania",
                dial_code: "+355",
                code: "AL"
            }, {
                name: "Algeria",
                dial_code: "+213",
                code: "DZ"
            }, {
                name: "AmericanSamoa",
                dial_code: "+1 684",
                code: "AS"
            }, {
                name: "Andorra",
                dial_code: "+376",
                code: "AD"
            }, {
                name: "Angola",
                dial_code: "+244",
                code: "AO"
            }, {
                name: "Anguilla",
                dial_code: "+1 264",
                code: "AI"
            }, {
                name: "Antigua and Barbuda",
                dial_code: "+1268",
                code: "AG"
            }, {
                name: "Argentina",
                dial_code: "+54",
                code: "AR"
            }, {
                name: "Armenia",
                dial_code: "+374",
                code: "AM"
            }, {
                name: "Aruba",
                dial_code: "+297",
                code: "AW"
            }, {
                name: "Australia",
                dial_code: "+61",
                code: "AU"
            }, {
                name: "Austria",
                dial_code: "+43",
                code: "AT"
            }, {
                name: "Azerbaijan",
                dial_code: "+994",
                code: "AZ"
            }, {
                name: "Bahamas",
                dial_code: "+1 242",
                code: "BS"
            }, {
                name: "Bahrain",
                dial_code: "+973",
                code: "BH"
            }, {
                name: "Bangladesh",
                dial_code: "+880",
                code: "BD"
            }, {
                name: "Barbados",
                dial_code: "+1 246",
                code: "BB"
            }, {
                name: "Belarus",
                dial_code: "+375",
                code: "BY"
            }, {
                name: "Belgium",
                dial_code: "+32",
                code: "BE"
            }, {
                name: "Belize",
                dial_code: "+501",
                code: "BZ"
            }, {
                name: "Benin",
                dial_code: "+229",
                code: "BJ"
            }, {
                name: "Bermuda",
                dial_code: "+1 441",
                code: "BM"
            }, {
                name: "Bhutan",
                dial_code: "+975",
                code: "BT"
            }, {
                name: "Bosnia and Herzegovina",
                dial_code: "+387",
                code: "BA"
            }, {
                name: "Botswana",
                dial_code: "+267",
                code: "BW"
            }, {
                name: "Brazil",
                dial_code: "+55",
                code: "BR"
            }, {
                name: "British Indian Ocean Territory",
                dial_code: "+246",
                code: "IO"
            }, {
                name: "Bulgaria",
                dial_code: "+359",
                code: "BG"
            }, {
                name: "Burkina Faso",
                dial_code: "+226",
                code: "BF"
            }, {
                name: "Burundi",
                dial_code: "+257",
                code: "BI"
            }, {
                name: "Cambodia",
                dial_code: "+855",
                code: "KH"
            }, {
                name: "Cameroon",
                dial_code: "+237",
                code: "CM"
            }, {
                name: "Canada",
                dial_code: "+1",
                code: "CA"
            }, {
                name: "Cape Verde",
                dial_code: "+238",
                code: "CV"
            }, {
                name: "Cayman Islands",
                dial_code: "+ 345",
                code: "KY"
            }, {
                name: "Central African Republic",
                dial_code: "+236",
                code: "CF"
            }, {
                name: "Chad",
                dial_code: "+235",
                code: "TD"
            }, {
                name: "Chile",
                dial_code: "+56",
                code: "CL"
            }, {
                name: "China",
                dial_code: "+86",
                code: "CN"
            }, {
                name: "Christmas Island",
                dial_code: "+61",
                code: "CX"
            }, {
                name: "Colombia",
                dial_code: "+57",
                code: "CO"
            }, {
                name: "Comoros",
                dial_code: "+269",
                code: "KM"
            }, {
                name: "Congo",
                dial_code: "+242",
                code: "CG"
            }, {
                name: "Cook Islands",
                dial_code: "+682",
                code: "CK"
            }, {
                name: "Costa Rica",
                dial_code: "+506",
                code: "CR"
            }, {
                name: "Croatia",
                dial_code: "+385",
                code: "HR"
            }, {
                name: "Cuba",
                dial_code: "+53",
                code: "CU"
            }, {
                name: "Cyprus",
                dial_code: "+537",
                code: "CY"
            }, {
                name: "Czech Republic",
                dial_code: "+420",
                code: "CZ"
            }, {
                name: "Denmark",
                dial_code: "+45",
                code: "DK"
            }, {
                name: "Djibouti",
                dial_code: "+253",
                code: "DJ"
            }, {
                name: "Dominica",
                dial_code: "+1 767",
                code: "DM"
            }, {
                name: "Dominican Republic",
                dial_code: "+1 849",
                code: "DO"
            }, {
                name: "Ecuador",
                dial_code: "+593",
                code: "EC"
            }, {
                name: "Egypt",
                dial_code: "+20",
                code: "EG"
            }, {
                name: "El Salvador",
                dial_code: "+503",
                code: "SV"
            }, {
                name: "Equatorial Guinea",
                dial_code: "+240",
                code: "GQ"
            }, {
                name: "Eritrea",
                dial_code: "+291",
                code: "ER"
            }, {
                name: "Estonia",
                dial_code: "+372",
                code: "EE"
            }, {
                name: "Ethiopia",
                dial_code: "+251",
                code: "ET"
            }, {
                name: "Faroe Islands",
                dial_code: "+298",
                code: "FO"
            }, {
                name: "Fiji",
                dial_code: "+679",
                code: "FJ"
            }, {
                name: "Finland",
                dial_code: "+358",
                code: "FI"
            }, {
                name: "France",
                dial_code: "+33",
                code: "FR"
            }, {
                name: "French Guiana",
                dial_code: "+594",
                code: "GF"
            }, {
                name: "French Polynesia",
                dial_code: "+689",
                code: "PF"
            }, {
                name: "Gabon",
                dial_code: "+241",
                code: "GA"
            }, {
                name: "Gambia",
                dial_code: "+220",
                code: "GM"
            }, {
                name: "Georgia",
                dial_code: "+995",
                code: "GE"
            }, {
                name: "Germany",
                dial_code: "+49",
                code: "DE"
            }, {
                name: "Ghana",
                dial_code: "+233",
                code: "GH"
            }, {
                name: "Gibraltar",
                dial_code: "+350",
                code: "GI"
            }, {
                name: "Greece",
                dial_code: "+30",
                code: "GR"
            }, {
                name: "Greenland",
                dial_code: "+299",
                code: "GL"
            }, {
                name: "Grenada",
                dial_code: "+1 473",
                code: "GD"
            }, {
                name: "Guadeloupe",
                dial_code: "+590",
                code: "GP"
            }, {
                name: "Guam",
                dial_code: "+1 671",
                code: "GU"
            }, {
                name: "Guatemala",
                dial_code: "+502",
                code: "GT"
            }, {
                name: "Guinea",
                dial_code: "+224",
                code: "GN"
            }, {
                name: "Guinea-Bissau",
                dial_code: "+245",
                code: "GW"
            }, {
                name: "Guyana",
                dial_code: "+595",
                code: "GY"
            }, {
                name: "Haiti",
                dial_code: "+509",
                code: "HT"
            }, {
                name: "Honduras",
                dial_code: "+504",
                code: "HN"
            }, {
                name: "Hungary",
                dial_code: "+36",
                code: "HU"
            }, {
                name: "Iceland",
                dial_code: "+354",
                code: "IS"
            }, {
                name: "India",
                dial_code: "+91",
                code: "IN"
            }, {
                name: "Indonesia",
                dial_code: "+62",
                code: "ID"
            }, {
                name: "Iraq",
                dial_code: "+964",
                code: "IQ"
            }, {
                name: "Ireland",
                dial_code: "+353",
                code: "IE"
            }, {
                name: "Israel",
                dial_code: "+972",
                code: "IL"
            }, {
                name: "Italy",
                dial_code: "+39",
                code: "IT"
            }, {
                name: "Jamaica",
                dial_code: "+1 876",
                code: "JM"
            }, {
                name: "Japan",
                dial_code: "+81",
                code: "JP"
            }, {
                name: "Jordan",
                dial_code: "+962",
                code: "JO"
            }, {
                name: "Kazakhstan",
                dial_code: "+7 7",
                code: "KZ"
            }, {
                name: "Kenya",
                dial_code: "+254",
                code: "KE"
            }, {
                name: "Kiribati",
                dial_code: "+686",
                code: "KI"
            }, {
                name: "Kuwait",
                dial_code: "+965",
                code: "KW"
            }, {
                name: "Kyrgyzstan",
                dial_code: "+996",
                code: "KG"
            }, {
                name: "Latvia",
                dial_code: "+371",
                code: "LV"
            }, {
                name: "Lebanon",
                dial_code: "+961",
                code: "LB"
            }, {
                name: "Lesotho",
                dial_code: "+266",
                code: "LS"
            }, {
                name: "Liberia",
                dial_code: "+231",
                code: "LR"
            }, {
                name: "Liechtenstein",
                dial_code: "+423",
                code: "LI"
            }, {
                name: "Lithuania",
                dial_code: "+370",
                code: "LT"
            }, {
                name: "Luxembourg",
                dial_code: "+352",
                code: "LU"
            }, {
                name: "Madagascar",
                dial_code: "+261",
                code: "MG"
            }, {
                name: "Malawi",
                dial_code: "+265",
                code: "MW"
            }, {
                name: "Malaysia",
                dial_code: "+60",
                code: "MY"
            }, {
                name: "Maldives",
                dial_code: "+960",
                code: "MV"
            }, {
                name: "Mali",
                dial_code: "+223",
                code: "ML"
            }, {
                name: "Malta",
                dial_code: "+356",
                code: "MT"
            }, {
                name: "Marshall Islands",
                dial_code: "+692",
                code: "MH"
            }, {
                name: "Martinique",
                dial_code: "+596",
                code: "MQ"
            }, {
                name: "Mauritania",
                dial_code: "+222",
                code: "MR"
            }, {
                name: "Mauritius",
                dial_code: "+230",
                code: "MU"
            }, {
                name: "Mayotte",
                dial_code: "+262",
                code: "YT"
            }, {
                name: "Mexico",
                dial_code: "+52",
                code: "MX"
            }, {
                name: "Monaco",
                dial_code: "+377",
                code: "MC"
            }, {
                name: "Mongolia",
                dial_code: "+976",
                code: "MN"
            }, {
                name: "Montenegro",
                dial_code: "+382",
                code: "ME"
            }, {
                name: "Montserrat",
                dial_code: "+1664",
                code: "MS"
            }, {
                name: "Morocco",
                dial_code: "+212",
                code: "MA"
            }, {
                name: "Myanmar",
                dial_code: "+95",
                code: "MM"
            }, {
                name: "Namibia",
                dial_code: "+264",
                code: "NA"
            }, {
                name: "Nauru",
                dial_code: "+674",
                code: "NR"
            }, {
                name: "Nepal",
                dial_code: "+977",
                code: "NP"
            }, {
                name: "Netherlands",
                dial_code: "+31",
                code: "NL"
            }, {
                name: "New Caledonia",
                dial_code: "+687",
                code: "NC"
            }, {
                name: "New Zealand",
                dial_code: "+64",
                code: "NZ"
            }, {
                name: "Nicaragua",
                dial_code: "+505",
                code: "NI"
            }, {
                name: "Niger",
                dial_code: "+227",
                code: "NE"
            }, {
                name: "Nigeria",
                dial_code: "+234",
                code: "NG"
            }, {
                name: "Niue",
                dial_code: "+683",
                code: "NU"
            }, {
                name: "Norfolk Island",
                dial_code: "+672",
                code: "NF"
            }, {
                name: "Northern Mariana Islands",
                dial_code: "+1 670",
                code: "MP"
            }, {
                name: "Norway",
                dial_code: "+47",
                code: "NO"
            }, {
                name: "Oman",
                dial_code: "+968",
                code: "OM"
            }, {
                name: "Pakistan",
                dial_code: "+92",
                code: "PK"
            }, {
                name: "Palau",
                dial_code: "+680",
                code: "PW"
            }, {
                name: "Panama",
                dial_code: "+507",
                code: "PA"
            }, {
                name: "Papua New Guinea",
                dial_code: "+675",
                code: "PG"
            }, {
                name: "Paraguay",
                dial_code: "+595",
                code: "PY"
            }, {
                name: "Peru",
                dial_code: "+51",
                code: "PE"
            }, {
                name: "Philippines",
                dial_code: "+63",
                code: "PH"
            }, {
                name: "Poland",
                dial_code: "+48",
                code: "PL"
            }, {
                name: "Portugal",
                dial_code: "+351",
                code: "PT"
            }, {
                name: "Puerto Rico",
                dial_code: "+1 939",
                code: "PR"
            }, {
                name: "Qatar",
                dial_code: "+974",
                code: "QA"
            }, {
                name: "Romania",
                dial_code: "+40",
                code: "RO"
            }, {
                name: "Rwanda",
                dial_code: "+250",
                code: "RW"
            }, {
                name: "Samoa",
                dial_code: "+685",
                code: "WS"
            }, {
                name: "San Marino",
                dial_code: "+378",
                code: "SM"
            }, {
                name: "Saudi Arabia",
                dial_code: "+966",
                code: "SA"
            }, {
                name: "Senegal",
                dial_code: "+221",
                code: "SN"
            }, {
                name: "Serbia",
                dial_code: "+381",
                code: "RS"
            }, {
                name: "Seychelles",
                dial_code: "+248",
                code: "SC"
            }, {
                name: "Sierra Leone",
                dial_code: "+232",
                code: "SL"
            }, {
                name: "Singapore",
                dial_code: "+65",
                code: "SG"
            }, {
                name: "Slovakia",
                dial_code: "+421",
                code: "SK"
            }, {
                name: "Slovenia",
                dial_code: "+386",
                code: "SI"
            }, {
                name: "Solomon Islands",
                dial_code: "+677",
                code: "SB"
            }, {
                name: "South Africa",
                dial_code: "+27",
                code: "ZA"
            }, {
                name: "South Georgia and the South Sandwich Islands",
                dial_code: "+500",
                code: "GS"
            }, {
                name: "Spain",
                dial_code: "+34",
                code: "ES"
            }, {
                name: "Sri Lanka",
                dial_code: "+94",
                code: "LK"
            }, {
                name: "Sudan",
                dial_code: "+249",
                code: "SD"
            }, {
                name: "Suriname",
                dial_code: "+597",
                code: "SR"
            }, {
                name: "Swaziland",
                dial_code: "+268",
                code: "SZ"
            }, {
                name: "Sweden",
                dial_code: "+46",
                code: "SE"
            }, {
                name: "Switzerland",
                dial_code: "+41",
                code: "CH"
            }, {
                name: "Tajikistan",
                dial_code: "+992",
                code: "TJ"
            }, {
                name: "Thailand",
                dial_code: "+66",
                code: "TH"
            }, {
                name: "Togo",
                dial_code: "+228",
                code: "TG"
            }, {
                name: "Tokelau",
                dial_code: "+690",
                code: "TK"
            }, {
                name: "Tonga",
                dial_code: "+676",
                code: "TO"
            }, {
                name: "Trinidad and Tobago",
                dial_code: "+1 868",
                code: "TT"
            }, {
                name: "Tunisia",
                dial_code: "+216",
                code: "TN"
            }, {
                name: "Turkey",
                dial_code: "+90",
                code: "TR"
            }, {
                name: "Turkmenistan",
                dial_code: "+993",
                code: "TM"
            }, {
                name: "Turks and Caicos Islands",
                dial_code: "+1 649",
                code: "TC"
            }, {
                name: "Tuvalu",
                dial_code: "+688",
                code: "TV"
            }, {
                name: "Uganda",
                dial_code: "+256",
                code: "UG"
            }, {
                name: "Ukraine",
                dial_code: "+380",
                code: "UA"
            }, {
                name: "United Arab Emirates",
                dial_code: "+971",
                code: "AE"
            }, {
                name: "United Kingdom",
                dial_code: "+44",
                code: "GB"
            }, {
                name: "Uruguay",
                dial_code: "+598",
                code: "UY"
            }, {
                name: "Uzbekistan",
                dial_code: "+998",
                code: "UZ"
            }, {
                name: "Vanuatu",
                dial_code: "+678",
                code: "VU"
            }, {
                name: "Wallis and Futuna",
                dial_code: "+681",
                code: "WF"
            }, {
                name: "Yemen",
                dial_code: "+967",
                code: "YE"
            }, {
                name: "Zambia",
                dial_code: "+260",
                code: "ZM"
            }, {
                name: "Zimbabwe",
                dial_code: "+263",
                code: "ZW"
            }, {
                name: "land Islands",
                dial_code: "",
                code: "AX"
            }, {
                name: "Antarctica",
                dial_code: null,
                code: "AQ"
            }, {
                name: "Bolivia, Plurinational State of",
                dial_code: "+591",
                code: "BO"
            }, {
                name: "Brunei Darussalam",
                dial_code: "+673",
                code: "BN"
            }, {
                name: "Cocos (Keeling) Islands",
                dial_code: "+61",
                code: "CC"
            }, {
                name: "Congo, The Democratic Republic of the",
                dial_code: "+243",
                code: "CD"
            }, {
                name: "Cote d'Ivoire",
                dial_code: "+225",
                code: "CI"
            }, {
                name: "Falkland Islands (Malvinas)",
                dial_code: "+500",
                code: "FK"
            }, {
                name: "Guernsey",
                dial_code: "+44",
                code: "GG"
            }, {
                name: "Holy See (Vatican City State)",
                dial_code: "+379",
                code: "VA"
            }, {
                name: "Hong Kong",
                dial_code: "+852",
                code: "HK"
            }, {
                name: "Iran, Islamic Republic of",
                dial_code: "+98",
                code: "IR"
            }, {
                name: "Isle of Man",
                dial_code: "+44",
                code: "IM"
            }, {
                name: "Jersey",
                dial_code: "+44",
                code: "JE"
            }, {
                name: "Korea, Democratic People's Republic of",
                dial_code: "+850",
                code: "KP"
            }, {
                name: "Korea, Republic of",
                dial_code: "+82",
                code: "KR"
            }, {
                name: "Lao People's Democratic Republic",
                dial_code: "+856",
                code: "LA"
            }, {
                name: "Libyan Arab Jamahiriya",
                dial_code: "+218",
                code: "LY"
            }, {
                name: "Macao",
                dial_code: "+853",
                code: "MO"
            }, {
                name: "Macedonia, The Former Yugoslav Republic of",
                dial_code: "+389",
                code: "MK"
            }, {
                name: "Micronesia, Federated States of",
                dial_code: "+691",
                code: "FM"
            }, {
                name: "Moldova, Republic of",
                dial_code: "+373",
                code: "MD"
            }, {
                name: "Mozambique",
                dial_code: "+258",
                code: "MZ"
            }, {
                name: "Palestinian Territory, Occupied",
                dial_code: "+970",
                code: "PS"
            }, {
                name: "Pitcairn",
                dial_code: "+872",
                code: "PN"
            }, {
                name: "Réunion",
                dial_code: "+262",
                code: "RE"
            }, {
                name: "Russia",
                dial_code: "+7",
                code: "RU"
            }, {
                name: "Saint Barthélemy",
                dial_code: "+590",
                code: "BL"
            }, {
                name: "Saint Helena, Ascension and Tristan Da Cunha",
                dial_code: "+290",
                code: "SH"
            }, {
                name: "Saint Kitts and Nevis",
                dial_code: "+1 869",
                code: "KN"
            }, {
                name: "Saint Lucia",
                dial_code: "+1 758",
                code: "LC"
            }, {
                name: "Saint Martin",
                dial_code: "+590",
                code: "MF"
            }, {
                name: "Saint Pierre and Miquelon",
                dial_code: "+508",
                code: "PM"
            }, {
                name: "Saint Vincent and the Grenadines",
                dial_code: "+1 784",
                code: "VC"
            }, {
                name: "Sao Tome and Principe",
                dial_code: "+239",
                code: "ST"
            }, {
                name: "Somalia",
                dial_code: "+252",
                code: "SO"
            }, {
                name: "Svalbard and Jan Mayen",
                dial_code: "+47",
                code: "SJ"
            }, {
                name: "Syrian Arab Republic",
                dial_code: "+963",
                code: "SY"
            }, {
                name: "Taiwan, Province of China",
                dial_code: "+886",
                code: "TW"
            }, {
                name: "Tanzania, United Republic of",
                dial_code: "+255",
                code: "TZ"
            }, {
                name: "Timor-Leste",
                dial_code: "+670",
                code: "TL"
            }, {
                name: "Venezuela, Bolivarian Republic of",
                dial_code: "+58",
                code: "VE"
            }, {
                name: "Viet Nam",
                dial_code: "+84",
                code: "VN"
            }, {
                name: "Virgin Islands, British",
                dial_code: "+1 284",
                code: "VG"
            }, {
                name: "Virgin Islands, U.S.",
                dial_code: "+1 340",
                code: "VI"
            }
        ];
    }
    CountrycodeProvider.prototype.getCountryCode = function (codeName) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            Object.keys(_this.countries).map(function (i) {
                if (_this.countries[i].code == codeName) {
                    console.log("countryCode", _this.countries[i]);
                    observer.next(_this.countries[i]);
                }
            });
        });
    };
    CountrycodeProvider.prototype.filterItems = function (searchTerm) {
        return this.countries.filter(function (country) {
            return country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    CountrycodeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CountrycodeProvider);
    return CountrycodeProvider;
}());

//# sourceMappingURL=countrycode.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushnotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
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
    function PushnotificationProvider(http, oneSignal, platform) {
        this.http = http;
        this.oneSignal = oneSignal;
        this.platform = platform;
        console.log('Hello PushnotificationProvider Provider');
    }
    PushnotificationProvider.prototype.init = function () {
        if (this.platform.is('core')) {
            return;
        }
        this.oneSignal.startInit('3823efc1-2c83-4c8d-9c11-67479c4143d1', '648371285185');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
        this.oneSignal.handleNotificationReceived().subscribe(function () {
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (noti) {
            console.log("Noti", noti);
        });
        this.oneSignal.endInit();
        if (localStorage.getItem('special') == 'true' || localStorage.getItem('deals') == 'true') {
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
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */]])
    ], PushnotificationProvider);
    return PushnotificationProvider;
}());

//# sourceMappingURL=pushnotification.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttractionSubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submap_submap__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__ = __webpack_require__(225);
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









var AttractionSubPage = (function () {
    function AttractionSubPage(navCtrl, navParams, loadingCtrl, alertCtrl, iab, platform, callNumber, socialSharing, toastCtrl, actionSheetController, file, transfer, base64) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.platform = platform;
        this.callNumber = callNumber;
        this.socialSharing = socialSharing;
        this.toastCtrl = toastCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.transfer = transfer;
        this.base64 = base64;
        this.currentData = {};
        this.currentData = navParams.get('subModalData');
        console.log("current_user_data", this.currentData);
    }
    AttractionSubPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttractionSubPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
        });
        this.loading.present();
        this.showData();
    };
    AttractionSubPage.prototype.showData = function () {
        this.loading.dismiss();
    };
    AttractionSubPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    AttractionSubPage.prototype.showMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__submap_submap__["a" /* SubmapPage */], { mapviewData: this.currentData.address });
    };
    AttractionSubPage.prototype.viewSite = function () {
        var _this = this;
        var url = this.currentData.link;
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
    AttractionSubPage.prototype.getPhoneCall = function () {
        var str = this.currentData.phone;
        var pstr = str.replace("-", "");
        var phstr = pstr.replace("(", "");
        var phoneNumber = phstr.replace(")", "");
        phoneNumber = phoneNumber.replace(" ", "");
        console.log("phoneNumber", phoneNumber);
        this.callNumber.callNumber(phoneNumber, true).then(function (res) {
            console.log("Launched Dialer!", res);
        }).catch(function (err) {
            console.log("Error Launching Dialer", err);
        });
    };
    AttractionSubPage.prototype.getShareContent = function () {
        var _this = this;
        var actionSheet = this.actionSheetController.create({
            title: "Share Option",
            buttons: [
                {
                    text: "Share with Instagram",
                    handler: function () {
                        _this.shareContent(0);
                    }
                },
                {
                    text: "Share with Facebook",
                    handler: function () {
                        _this.shareContent(1);
                    }
                },
                {
                    text: "Share with Twitter",
                    handler: function () {
                        _this.shareContent(2);
                    }
                },
                {
                    text: "Share with SMS",
                    handler: function () {
                        _this.shareContent(3);
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
    AttractionSubPage.prototype.shareContent = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var msg, img, url, dateTime, convertedimg, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("share_id", type);
                        msg = this.currentData.title;
                        img = this.currentData.image != '' ? this.currentData.image : "";
                        url = this.currentData.link;
                        dateTime = new Date();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 11, , 12]);
                        return [4 /*yield*/, this.downloadImageAndEncode(img, dateTime)];
                    case 2:
                        convertedimg = _a.sent();
                        if (!(type == 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.socialSharing.shareViaInstagram(msg, convertedimg)];
                    case 3:
                        _a.sent();
                        this.displayToastData("Shared via instagram");
                        return [3 /*break*/, 10];
                    case 4:
                        if (!(type == 1)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.socialSharing.shareViaFacebook(msg, convertedimg, url)];
                    case 5:
                        _a.sent();
                        this.displayToastData("Shared via facebook");
                        return [3 /*break*/, 10];
                    case 6:
                        if (!(type == 2)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.socialSharing.shareViaTwitter(msg, convertedimg, null)];
                    case 7:
                        _a.sent();
                        this.displayToastData("Shared via twitter");
                        return [3 /*break*/, 10];
                    case 8:
                        if (!(type == 3)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.socialSharing.shareViaSMS(msg, "")];
                    case 9:
                        _a.sent();
                        this.displayToastData("Shared via SMS");
                        _a.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        err_1 = _a.sent();
                        this.displayToastData(err_1.message);
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    AttractionSubPage.prototype.downloadImageAndEncode = function (url, fileid) {
        return __awaiter(this, void 0, void 0, function () {
            var fileTransfer, localurl, base64string, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileTransfer = this.transfer.create();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fileTransfer.download(url, this.file.dataDirectory + fileid + '.jpg')];
                    case 2:
                        localurl = _a.sent();
                        return [4 /*yield*/, this.base64.encodeFile(localurl.toURL())];
                    case 3:
                        base64string = _a.sent();
                        return [2 /*return*/, base64string];
                    case 4:
                        err_2 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AttractionSubPage.prototype.displayToastData = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        }).present();
    };
    AttractionSubPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-attraction-sub',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\attraction-sub\attraction-sub.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>{{currentData.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n    <div class="modal_top">\n        <img src="{{currentData.image}}" alt="">\n        <div class="modal_title">\n          <p>{{currentData.title}}</p>\n          <div class="modal_share">\n            <div class="sub_share" (click)="getPhoneCall()">\n                <i class="fa fa-phone" aria-hidden="true"></i>\n                <p>Call</p>\n            </div>\n            <div class="sub_share" (click)="showMap()">\n                <i class="fa fa-map-o" aria-hidden="true"></i>\n                <p>Directions</p>\n            </div>\n            <div class="sub_share" (click)="getShareContent()">\n                <i class="fa fa-share-alt" aria-hidden="true"></i>\n                <p>Share</p>\n            </div>\n            <div class="sub_share" (click)="viewSite()">\n                <i class="fa fa-globe" aria-hidden="true"></i>\n                <p>Website</p>\n            </div>\n          </div>\n        </div>\n    </div>\n    <div class="modal_content">{{currentData.desc}}</div>\n    <div class="modal_button">\n        <button ion-button round full color="mainbtn" (click)="close()"> OK</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\attraction-sub\attraction-sub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__["a" /* Base64 */]])
    ], AttractionSubPage);
    return AttractionSubPage;
}());

//# sourceMappingURL=attraction-sub.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogpostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogpostPage = (function () {
    function BlogpostPage(navCtrl, navParams, loadingCtrl, iab, platform, socialSharing, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.toastCtrl = toastCtrl;
        this.post = [];
        this.initial_size = 14;
        this.post = navParams.get("blogpostData");
        console.log("post_Data", this.post);
    }
    BlogpostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BlogpostPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.showDetail();
    };
    BlogpostPage.prototype.showDetail = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading.dismiss();
        }, 1000);
    };
    BlogpostPage.prototype.vationRent = function () {
    };
    BlogpostPage.prototype.biggerText = function () {
        this.initial_size += 2;
        var font_size = document.getElementsByClassName('post-text')[0];
        font_size.style.fontSize = this.initial_size + 'px';
    };
    BlogpostPage.prototype.smallerText = function () {
        this.initial_size -= 2;
        var font_size = document.getElementsByClassName('post-text')[0];
        font_size.style.fontSize = this.initial_size + 'px';
    };
    BlogpostPage.prototype.sharePost = function (url) {
        var _this = this;
        this.socialSharing.share("Share", "share this blog...", "", url).then(function () {
            _this.toastCtrl.create({
                message: "Sharing Sucessfully",
                duration: 3000,
                position: 'bottom'
            }).present();
        }).catch(function () {
            _this.toastCtrl.create({
                message: "Sharing failed",
                duration: 3000,
                position: 'bottom'
            }).present();
        });
    };
    BlogpostPage.prototype.setBookMark = function (url) {
        this.toastCtrl.create({
            message: 'Book Successfully..',
            duration: 3000,
            position: 'bottom'
        }).present();
        var temp_data = JSON.stringify(this.post);
        localStorage.setItem('bookMarked', temp_data);
    };
    BlogpostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-blogpost',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\blogpost\blogpost.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="post-head">\n    <h3 class="post-tile"> {{post.title}}</h3>\n    <p class="post-author">\n      By <span>{{post.author.nickname}}</span><span> {{post.date | amTimeAgo}}</span>\n    </p>\n  </div>\n  <div class="post-content">\n    <p class="post-text" style="font-size: 14px;" [innerHTML]="post.content"></p>\n  </div>\n  <div class="post-tags">\n    <span class="post-tags" *ngFor="let category of post.categories">\n      <button ion-button round full color="mainbtn" (click)="vationRent()">\n        {{category.title}}\n      </button>\n    </span>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class="row">\n    <div class="col col-20 col-center">\n      <a (click)="biggerText()">A<ion-icon name="add"></ion-icon></a>\n    </div>\n    <div class="col col-20 col-center">\n      <a (click)="smallerText()">A<ion-icon name="remove"></ion-icon></a>\n    </div>\n    <div class="col col-20 col-offset-20 col-center">\n      <a (click)="setBookMark(post.url)">\n        <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n      </a>\n    </div>\n    <div class="col col-20 col-center">\n      <a (click)="sharePost(post.url)">\n        <ion-icon ios="ios-share" md="md-share"></ion-icon>\n      </a>\n    </div>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\blogpost\blogpost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], BlogpostPage);
    return BlogpostPage;
}());

//# sourceMappingURL=blogpost.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpwd_forgotpwd__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidemenu_sidemenu__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authservice_authservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sim__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_countrycode_countrycode__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__phoneauth_phoneauth__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__phonelogin_phonelogin__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signupguest_signupguest__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// import * as firebase from 'firebase';
var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, mdlCtrl, loadingCtrl, alertCtrl, authService, cf, sim, countryService, firebase, apiService, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mdlCtrl = mdlCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.cf = cf;
        this.sim = sim;
        this.countryService = countryService;
        this.firebase = firebase;
        this.apiService = apiService;
        this.platform = platform;
        this.userInfo = {};
        this.tabs = 'lease';
        this.currentDialCode = "";
        this.leaseData = {};
        this.guest = {};
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
        this.getCurrentCode();
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "circles",
        });
    };
    SigninPage.prototype.segmentChanged = function () {
        this.cf.detectChanges();
    };
    SigninPage.prototype.signinUser = function () {
        var _this = this;
        if (this.userInfo.email == undefined || this.userInfo.pwd == undefined) {
            this.alertCtrl.create({
                subTitle: "Error!",
                message: "Invalid Credential.",
                cssClass: 'alertDanger',
                buttons: ["OK"]
            }).present();
        }
        else {
            this.loading.present();
            this.authService.login(this.userInfo).then(function (authData) {
                console.log("auto_login_data", authData);
                _this.authService.getcurrentUserData(authData.user.uid).subscribe(function (resData) {
                    if (resData.val().status !== 'success') {
                        alert("Your reservation verifiy failed, Can't Login now, Please sign up again...");
                        _this.loading.dismiss();
                    }
                    else {
                        console.log("user_id", authData.user.uid);
                        localStorage.setItem('user_id', authData.user.uid);
                        var guestId = resData.val().guest_id;
                        console.log("guest_id", guestId);
                        _this.apiService.getGuestUserIndexData(guestId).then(function (resData) {
                            console.log("result_lease_data", resData);
                            _this.leaseData = resData;
                            localStorage.setItem('leaseData', JSON.stringify(resData));
                            localStorage.setItem('userType', "lease");
                            _this.loading.dismiss();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__sidemenu_sidemenu__["a" /* SidemenuPage */]);
                        }).catch(function (err) {
                            console.log("Err", err.message);
                            _this.loading.dismiss();
                        });
                        // this.navCtrl.setRoot(SidemenuPage);
                    }
                });
            }, function (err) {
                _this.alertCtrl.create({
                    message: err.message,
                    buttons: ["OK"]
                }).present();
                _this.loading.dismiss();
            });
        }
    };
    SigninPage.prototype.gotoResetPage = function () {
        var forgot_mdl = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_3__forgotpwd_forgotpwd__["a" /* ForgotpwdPage */]);
        forgot_mdl.present();
    };
    SigninPage.prototype.registerUser = function () {
        var signup_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
        signup_modal.present();
    };
    SigninPage.prototype.getCountryCode = function (codeName) {
        var _this = this;
        this.countryService.getCountryCode(codeName).subscribe(function (res) {
            _this.currentDialCode = res.dial_code;
        });
    };
    SigninPage.prototype.getCurrentCode = function () {
        var _this = this;
        this.sim.getSimInfo().then(function (info) {
            console.log("sim info", info);
            var coutryname = info.countryCode.toUpperCase();
            _this.getCountryCode(coutryname);
        }, function (err) {
            console.log("Unble to get sim info", err.message);
        });
        this.sim.hasReadPermission().then(function (info) {
            console.log("Has permission", info);
        }).catch(function (err) {
            console.log("sim HasReadPermissionErr", err.message);
            _this.sim.requestReadPermission().then(function (info) {
                console.log("Permission granted issue");
            }, function (err) {
                console.log("Permission Denied");
            });
        });
    };
    SigninPage.prototype.signinUserWithPhone = function (data) {
        var _this = this;
        this.apiService.getGuestUserVerify(data.phone, data.shareCode, "phone").subscribe(function (guestResData) {
            console.log("result  guest verify data", guestResData);
            if (guestResData.status !== 'success') {
                alert(guestResData.status);
                _this.loading.dismiss();
            }
            else {
                _this.phoneRegister(guestResData);
            }
        }, function (err) {
            alert("Error" + err.message);
            _this.loading.dismiss();
        });
    };
    SigninPage.prototype.phoneRegister = function (guestData) {
        var _this = this;
        console.log("phone_number", this.currentDialCode + this.phone);
        this.firebase.verifyPhoneNumber(this.currentDialCode + this.phone, 60).then(function (credential) {
            var phone = _this.currentDialCode + _this.phone;
            console.log("credential", credential);
            if (_this.platform.is('android')) {
                _this.verificationId = credential.verificationId;
            }
            else if (_this.platform.is('ios')) {
                _this.verificationId = credential;
            }
            _this.loading.dismiss();
            if (credential.instantVerification == true) {
                _this.alertCtrl.create({
                    title: "InstantVerifcation",
                    subTitle: "There is no sms in this case.",
                    buttons: ["OK"]
                }).present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__sidemenu_sidemenu__["a" /* SidemenuPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__phoneauth_phoneauth__["a" /* PhoneauthPage */], { verificationId: _this.verificationId, phoneCode: _this.phone, guestInfo: guestData });
            }
        }).catch(function (error) {
            _this.alertCtrl.create({
                message: JSON.stringify(error),
                buttons: ["OK"]
            }).present();
        });
    };
    SigninPage.prototype.selectPhone = function () {
        var _this = this;
        var signup_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_11__phonelogin_phonelogin__["a" /* PhoneloginPage */]);
        signup_modal.onDidDismiss(function (data) {
            console.log("Modal_data", data);
            _this.phone = data.phone;
            _this.signinUserWithPhone(data);
        });
        signup_modal.present();
    };
    SigninPage.prototype.signUpGuest = function () {
        console.log("guest_Page");
        var sub_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_12__signupguest_signupguest__["a" /* SignupguestPage */]);
        sub_modal.present();
    };
    SigninPage.prototype.signInGuest = function () {
        var _this = this;
        if (this.guest.email == undefined || this.guest.pwd == undefined || this.guest.shareCode == undefined) {
            this.alertCtrl.create({
                subTitle: "Error!",
                message: "Invalid Credential.",
                cssClass: 'alertDanger',
                buttons: ["OK"]
            }).present();
        }
        else {
            this.loading = this.loadingCtrl.create({
                spinner: 'circles'
            });
            this.loading.present();
            this.authService.login(this.guest).then(function (authData) {
                console.log("auto_login_data", authData);
                _this.authService.getcurrentUserData(authData.user.uid).subscribe(function (resData) {
                    if (resData.val().status !== 'success') {
                        alert("Your reservation verifiy failed, Can't Login now, Please sign up again...");
                    }
                    else {
                        localStorage.setItem('user_id', authData.user.uid);
                        var guestId = resData.val().guest_id;
                        console.log("guest_id", guestId);
                        _this.apiService.getGuestUserIndexData(guestId).then(function (resData) {
                            console.log("result_lease_data", resData);
                            _this.leaseData = resData;
                            localStorage.setItem('leaseData', JSON.stringify(resData));
                        }).catch(function (err) {
                            console.log("Err", err.message);
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__sidemenu_sidemenu__["a" /* SidemenuPage */]);
                    }
                });
                _this.loading.dismiss();
            }, function (err) {
                _this.alertCtrl.create({
                    message: err.message,
                    buttons: ["OK"]
                }).present();
                _this.loading.dismiss();
            });
        }
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\signin\signin.html"*/'<ion-content no-padding>\n  <ion-segment [(ngModel)]="tabs" (ionChange)="segmentChanged()">\n    <ion-segment-button value="lease">\n      Lease Holder\n    </ion-segment-button>\n    <ion-segment-button value="guest">\n      Guest\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]="tabs" padding>\n    <div *ngSwitchCase="\'lease\'">\n      <div class="signin_container">\n        <p class="signin_title">\n          Sign In\n        </p>\n        <div class="main_cont">\n          <ion-input type="text" [(ngModel)]="userInfo.email" placeholder="User Email"></ion-input>\n          <ion-input type="password" [(ngModel)]="userInfo.pwd" placeholder="Password"></ion-input>\n        </div>\n        <div class="signin_signinbtn">\n          <button ion-button round full color="mainbtn" (click)="signinUser()">\n            Sign In\n          </button>\n        </div>\n        <div class="signin_signupbtn">\n          <span (click)="gotoResetPage()">\n            Forgot Password?/\n          </span>\n          <span (click)="registerUser()">\n            Sign Up\n          </span>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchCase="\'guest\'">\n      <div class="signin_container">\n        <p class="signin_title">\n          Sign In\n        </p>\n        <div class="main_cont">\n          <ion-input type="text" [(ngModel)]="guest.email" placeholder="User Email"></ion-input>\n          <ion-input type="password" [(ngModel)]="guest.pwd" placeholder="Password"></ion-input>\n          <ion-input type="tel" [(ngModel)]="guest.shareCode" placeholder="ShareCode"></ion-input>\n        </div>\n        <div class="signin_signinbtn">\n          <button ion-button round full color="mainbtn" (click)="signInGuest()">\n            Sign In\n          </button>\n          <button ion-button round block outline color="mainbtn" (click)="selectPhone()" style="border: none;">\n            <ion-icon name="call"></ion-icon> &nbsp;\n            With Phone Number\n          </button>\n        </div>\n        <div class="signin_signupbtn">\n          <span (click)="gotoResetPage()">\n            Forgot Password?/\n          </span>\n          <span (click)="signUpGuest()">\n            Sign Up\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authservice_authservice__["a" /* AuthserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_sim__["a" /* Sim */],
            __WEBPACK_IMPORTED_MODULE_7__providers_countrycode_countrycode__["a" /* CountrycodeProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_10__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
    // leaseId: any = "1161081";
    // unitId: any = "12760";
    function SignupPage(navCtrl, navParams, actionsheetCtrl, loadingCtrl, viewCtrl, alretCtrl, authService, toastCtrl, camera, apiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.alretCtrl = alretCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.apiService = apiService;
        this.userInfo = { photoURL: "assets/imgs/empty_avatar.png" };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.getAvatarOption = function () {
        var self = this;
        var actionSheet = this.actionsheetCtrl.create({
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
    SignupPage.prototype.selectPhoto = function (id) {
        var _this = this;
        if (id == 1) {
            this.phototype = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
        }
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.phototype,
            correctOrientation: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.photoImage = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.photoImage);
            _this.uploadImage();
        }, function (error) {
            console.log(error);
        });
    };
    SignupPage.prototype.uploadImage = function () {
        var self = this;
        if (self.photoImage) {
            var loadingView_1 = self.loadingCtrl.create({
                content: 'Uploading image...',
                spinner: 'bubbles',
            });
            loadingView_1.present();
            var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
            var d = new Date();
            var filename = d.getTime();
            var imageRef = storageRef.child('users/' + filename + '.png');
            imageRef.putString(self.photoImage, __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                console.log("OK");
                loadingView_1.dismiss();
                snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log("downloadURL", downloadURL);
                    self.userInfo.photoURL = downloadURL;
                    self.displayToast("Updated successfully");
                });
            }).catch(function (error) {
                console.log("Error_iamge", error.message);
            });
        }
    };
    SignupPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ message: message, duration: 3000, position: 'top' }).present();
    };
    SignupPage.prototype.registerUser = function () {
        var _this = this;
        if (this.userInfo.lease == undefined || this.userInfo.unit == undefined || this.userInfo.email == undefined || this.userInfo.pwd == undefined) {
            this.alretCtrl.create({
                subTitle: "Error!",
                message: "Invalid Credential",
                cssClass: 'alertDanger',
                buttons: ["OK"]
            }).present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: "Creating Account",
                spinner: "bubbles"
            });
            loading_1.present();
            this.userInfo.role = 0;
            this.authService.registerUser(this.userInfo).subscribe(function (resData) {
                console.log("user_info_result", resData);
                loading_1.dismiss();
                _this.verifyUserInfo(resData.user.uid);
            }, function (err) {
                loading_1.dismiss();
                console.log("error", err.message);
                _this.displayToast(err.message);
            });
        }
    };
    SignupPage.prototype.closeSignupModal = function () {
        this.viewCtrl.dismiss();
    };
    SignupPage.prototype.verifyUserInfo = function (uid) {
        var _this = this;
        this.verifyLoading = this.loadingCtrl.create({
            content: 'Verifing now...',
            spinner: 'bubbles'
        });
        this.verifyLoading.present();
        this.apiService.getLeaseUserVerify(this.userInfo.lease, this.userInfo.unit, "lease").subscribe(function (result) {
            console.log("result_verify_data", result);
            if (result.status !== "success") {
                alert(result.status);
                _this.verifyLoading.dismiss();
            }
            else {
                localStorage.setItem('current_lease', JSON.stringify(result));
                var self = _this;
                _this.authService.saveLeaseData(uid, result, self.userInfo.unit).then(function (verifyResultData) {
                    self.displayToast(result.message + result.lease_id + result.guest_id);
                    self.viewCtrl.dismiss();
                }).catch(function (err) {
                    alert("Error " + err.message);
                });
                self.verifyLoading.dismiss();
            }
        }, function (error) {
            console.log(error);
            _this.verifyLoading.dismiss();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\signup\signup.html"*/'<ion-header no-border>\n  <ion-navbar color="custom">\n    <ion-title color="white">Sign Up</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="signup_avatar">\n    <img src="{{userInfo.photoURL}}" (click)="getAvatarOption()" />\n  </div>\n  <div class="main_cont">\n    <ion-input type="email" [(ngModel)]="userInfo.email" placeholder="Email"></ion-input>\n    <ion-input type="password" [(ngModel)]="userInfo.pwd" placeholder="Password"></ion-input>\n  </div>\n  <div class="lease_cont">\n    <div class="sub_cont">\n      <ion-input type="tel" [(ngModel)]="userInfo.lease" placeholder="Lease Id"></ion-input>\n    </div>\n    <div class="sub_cont">\n      <ion-input type="tel" [(ngModel)]="userInfo.unit" placeholder="Unit Id"></ion-input>\n    </div>\n  </div>\n  <div class="signup_controllers">\n    <div>\n      <button ion-button round full color="mainbtn" (click)="registerUser()" class="confirm_btn">Register</button>\n    </div>\n    <div>\n      <button ion-button round full (click)="closeSignupModal()" class="confirm_btn">Cancel</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weathersub_weathersub__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WeatherPage = (function () {
    function WeatherPage(navCtrl, navParams, mdlCtrl, loadingCtrl, apiDataProvider, alertCtrl, nativeGeocoder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mdlCtrl = mdlCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiDataProvider = apiDataProvider;
        this.alertCtrl = alertCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.resData = {};
        this.weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];
        this.weatherInfo = {};
        this.currently = {};
        this.weekly = {};
        this.selectDay = {};
        this.lat = '';
        this.lng = '';
    }
    WeatherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WeatherPage');
        this.getPosition();
        // this.getWeatherData();
    };
    WeatherPage.prototype.getPosition = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        var options = {
            useLocale: true,
            maxResults: 5
        };
        var zipcode = "23456";
        this.nativeGeocoder.forwardGeocode(zipcode, options).then(function (coordinates) {
            console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
            _this.lat = coordinates[0].latitude;
            _this.lng = coordinates[0].longitude;
            _this.getWeatherData(_this.lat, _this.lng);
        }).catch(function (error) { return console.log("GeoGoder Error!", error); });
        if (this.loading !== undefined) {
            this.loading.dismiss();
        }
        // this.getWeatherData(36.7259474, -75.9727555);
    };
    WeatherPage.prototype.getWeatherData = function (lat, lng) {
        var _this = this;
        // var lat = 36.7259474;
        // var lng = -75.9727555;
        this.apiDataProvider.getCurrentWeatherData(lat, lng).then(function (data) {
            if (data) {
                console.log("Weather_data", data);
                _this.weatherInfo = data;
                _this.currently = data.currently;
                _this.weekly = data.daily;
            }
            else {
                _this.alertCtrl.create({
                    title: "Error",
                    message: "There is no Data",
                    buttons: ["OK"]
                }).present();
            }
            if (_this.loading !== undefined) {
                _this.loading.dismiss();
            }
        }).catch(function (err) {
            console.log("Reult_err", err.message);
            if (_this.loading !== undefined) {
                _this.loading.dismiss();
            }
        });
    };
    WeatherPage.prototype.getDayName = function (id) {
        var currentDay = new Date().getDay();
        console.log("GetDayName", id);
        var dayReturnIndex = +id;
        if (dayReturnIndex > 8) {
            dayReturnIndex -= 8;
            console.log("weekDay", this.weekDays[dayReturnIndex]);
        }
        return this.weekDays[dayReturnIndex];
    };
    WeatherPage.prototype.getDate = function (id) {
        return '';
    };
    WeatherPage.prototype.selectedDay = function (id) {
        this.selectDay = this.weekly.data[id];
        this.selectDay.dayName = this.getDayName(id);
        var weather_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_2__weathersub_weathersub__["a" /* WeathersubPage */], { modalDataInfo: this.selectDay, modalDataId: this.selectDay.dayName });
        weather_modal.present();
    };
    WeatherPage.prototype.changeTeamp = function (temp) {
        var ftemp = temp * 9 / 5 + 32;
        return Math.round(ftemp);
    };
    WeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-weather',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\weather\weather.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Weather</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-list>\n    <ion-item>\n      <div class="elencoImg"><img src="assets/imgs/weather/{{weekly.icon}}.png" alt=""></div>\n      <div class="elencoTxt">\n        <div class="restroName">Weekly Weather</div>\n        <div class="restroDes">{{weekly.summary}}</div>\n      </div>\n    </ion-item>\n    <ion-item *ngFor="let weather of weekly.data; let i=index" (click)="selectedDay(i)">\n      <div class="elencoImg"><img src="assets/imgs/weather/{{weather.icon}}.png" alt=""></div>\n      <div class="elencoTxt">\n        <div class="restroName">{{getDayName(i)}} {{getDate(weather.time)}}</div>\n        <div class="restroDes">{{weather.summary}}</div>\n        <div class="restroNum">Max: {{weather.temperatureMax.toFixed(1)}}°F</div>\n        <div class="restroNum">Min: {{weather.temperatureMin.toFixed(1)}}°F</div>\n      </div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\weather\weather.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], WeatherPage);
    return WeatherPage;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PromotionsPage = (function () {
    function PromotionsPage(navCtrl, navParams, iab, alertCtrl, platform, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.promotions = [];
    }
    PromotionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromotionsPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.getPromotionData();
    };
    PromotionsPage.prototype.getPromotionData = function () {
        this.promotions = [
            { "url": "http://golfvb.com/golf-courses/red-wing-lake/", "image": "https://guest.siebert-realty.com/img/SiebertSummerPromos-05.jpg" },
            { "url": "http://www.hellspoint.com/", "image": "https://guest.siebert-realty.com/img/SiebertSummerPromos-06.jpg" },
            { "url": "http://virginiabeachadventurepark.com/gift-ideas/", "image": "https://guest.siebert-realty.com/img/SiebertSummerPromos-07.jpg" },
            { "url": "https://www.iflyworld.com/virginia-beach/", "image": "https://guest.siebert-realty.com/img/SiebertSummerPromos-08.jpg" },
            { "url": "https://www.oceanbreezewaterpark.com/promo-code/", "image": "https://guest.siebert-realty.com/img/OceanBreeze2015-03.jpg" },
            { "url": "http://www.acolorfullifephoto.com/siebert-realty-guests", "image": "https://guest.siebert-realty.com/img/SiebertSummerPromos-04.jpg" }
        ];
        console.log("promotion_data", this.promotions);
        this.loading.dismiss();
    };
    PromotionsPage.prototype.goViewData = function (url) {
        var _this = this;
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
    PromotionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-promotions',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\promotions\promotions.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Siebert Coupons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-card *ngFor="let promo of promotions">\n    <ion-item >\n      <img src="{{promo.image}}">\n    </ion-item>\n    <div class="setting_btn">\n      <button ion-button round full color="promobtn" class="dealBtn" (click)="goViewData(promo.url)" >View Deal</button>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\promotions\promotions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], PromotionsPage);
    return PromotionsPage;
}());

//# sourceMappingURL=promotions.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomeeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upcomingmodal_upcomingmodal__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpcomeeventPage = (function () {
    function UpcomeeventPage(navCtrl, navParams, loadingCtrl, alertCtrl, apiDataProvider, mdlCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.apiDataProvider = apiDataProvider;
        this.mdlCtrl = mdlCtrl;
        this.resImage = './assets/imgs/event/business.jpg';
        this.resData = {};
        this.objectKeys = Object.keys;
        this.isHidden = false;
        this.modal_data = {};
    }
    UpcomeeventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpcomeeventPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
        });
        this.loading.present();
        this.getEventData();
    };
    UpcomeeventPage.prototype.getEventData = function () {
        var _this = this;
        this.apiDataProvider.getUpComingEventData().then(function (data) {
            if (data) {
                _this.resData = data;
                console.log("temp_data", _this.resData);
                _this.loading.dismiss();
            }
            else {
                _this.alertCtrl.create({
                    title: "Error",
                    message: "There is no Data",
                    buttons: ["OK"]
                }).present();
                _this.loading.dismiss();
            }
        }).catch(function (err) {
            console.log("Reult_err", err.message);
            _this.loading.dismiss();
        });
    };
    UpcomeeventPage.prototype.viewData = function (title, des, address, phone) {
        console.log("Click_data", title, address);
        this.modal_data.des = des;
        this.modal_data.title = title;
        this.modal_data.address = address;
        this.modal_data.phone = phone;
        var modalOptions = {
            cssClass: "subModal"
        };
        var sub_modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_3__upcomingmodal_upcomingmodal__["a" /* UpcomingmodalPage */], { subModalData: this.modal_data }, modalOptions);
        sub_modal.present();
    };
    UpcomeeventPage.prototype.confirm = function () {
        this.isHidden = false;
    };
    UpcomeeventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-upcomeevent',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\upcomeevent\upcomeevent.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Upcoming Events</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-list *ngFor="let menu of objectKeys(resData)">\n    <div class="content_tile">{{menu}}</div>\n    <ion-item *ngFor="let subMenu of  resData[menu]" (click)="viewData(subMenu.title, subMenu.desc, subMenu.address, subMenu.phone)">\n      <div class="elencoImg"><img src="https://www.siebert-realty.com/img/uploads/{{subMenu.image}}" alt=""></div>\n      <div class="elencoTxt">\n        <div class="restroName">{{subMenu.title}}</div>\n        <div class="restroNum"><a>{{subMenu.phone}}</a>\n          <div class="restoBtns"><a>CALL</a></div>\n        </div>\n        <div class="restroDes">{{subMenu.start}}</div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\upcomeevent\upcomeevent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], UpcomeeventPage);
    return UpcomeeventPage;
}());

//# sourceMappingURL=upcomeevent.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalattractionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attractions_attractions__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalattractionPage = (function () {
    function LocalattractionPage(navCtrl, navParams, apiDataProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiDataProvider = apiDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.resData = [];
        this.objectKeys = Object.keys;
        this.colors = ['rgba(200, 66, 244, 0.6)', 'rgba(27, 181, 83, 0.6)', 'rgba(239, 235, 9, 0.6)', 'rgba(196, 21, 1, 0.6)', 'rgba(0, 173, 196, 0.6)', 'rgba(119, 2, 106, 0.6)'];
    }
    LocalattractionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocalattractionPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
        });
        this.loading.present();
        this.getLocalData();
    };
    LocalattractionPage.prototype.getLocalData = function () {
        var _this = this;
        this.apiDataProvider.getLocalAtrractionData().then(function (data) {
            if (data) {
                _this.resData = data;
                console.log("temp_data", _this.resData);
                _this.loading.dismiss();
            }
            else {
                _this.alertCtrl.create({
                    title: "Error",
                    message: "There is no Data",
                    buttons: ["OK"]
                }).present();
                _this.loading.dismiss();
            }
        }).catch(function (err) {
            console.log("Reult_err", err.message);
            _this.loading.dismiss();
        });
    };
    LocalattractionPage.prototype.getBackground = function (id) {
        var resIdx = id % (this.colors.length);
        return this.colors[resIdx];
    };
    LocalattractionPage.prototype.viewCatData = function (id) {
        console.log("cateData", this.resData[id]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__attractions_attractions__["a" /* AttractionsPage */], { wholeAttractionData: this.resData, currentAttractionData: this.resData[id], currentId: id });
    };
    LocalattractionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-localattraction',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\localattraction\localattraction.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Local Attractions</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding class="card-background-page">\n  <ion-card *ngFor="let res of resData; let idx=index" (click)="viewCatData(idx)">\n    <img src="{{res.thumbnail}}" />\n    <div class="category-bg"></div>\n    <div class="card-title" [style.background]="getBackground(idx)">\n      <p>{{res.name}}<p>\n    </div>\n    <div class="card-subtitle" >VIEW\n      <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\localattraction\localattraction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LocalattractionPage);
    return LocalattractionPage;
}());

//# sourceMappingURL=localattraction.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RescatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurants_restaurants__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RescatPage = (function () {
    function RescatPage(navCtrl, navParams, apiDataProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiDataProvider = apiDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.resData = [];
        this.objectKeys = Object.keys;
        this.colors = ['rgba(200, 66, 244, 0.6)', 'rgba(27, 181, 83, 0.6)', 'rgba(239, 235, 9, 0.6)', 'rgba(196, 21, 1, 0.6)', 'rgba(0, 173, 196, 0.6)', 'rgba(119, 2, 106, 0.6)'];
    }
    RescatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RescatPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
        });
        this.loading.present();
        this.getResData();
    };
    RescatPage.prototype.getResData = function () {
        var _this = this;
        this.apiDataProvider.getResCatData().then(function (data) {
            if (data) {
                _this.resData = data;
                console.log("temp_data", _this.resData);
                _this.loading.dismiss();
            }
            else {
                _this.alertCtrl.create({
                    title: "Error",
                    message: "There is no Data",
                    buttons: ["OK"]
                }).present();
                _this.loading.dismiss();
            }
        }).catch(function (err) {
            console.log("Reult_err", err.message);
            _this.loading.dismiss();
        });
    };
    RescatPage.prototype.getBackground = function (id) {
        var resIdx = id % (this.colors.length);
        return this.colors[resIdx];
    };
    RescatPage.prototype.viewCatData = function (id) {
        console.log("cateData", this.resData[id]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__restaurants_restaurants__["a" /* RestaurantsPage */], { wholeAttractionData: this.resData, currentAttractionData: this.resData[id], currentId: id });
    };
    RescatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rescat',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rescat\rescat.html"*/'<ion-header>\n    <ion-navbar color="custom">\n      <ion-title>Resturants</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content no-padding class="card-background-page">\n    <ion-card *ngFor="let res of resData; let idx=index" (click)="viewCatData(idx)">\n      <img src="{{res.thumbnail}}" />\n      <div class="category-bg"></div>\n      <div class="card-title" [style.background]="getBackground(idx)">\n        <p>{{res.name}}<p>\n      </div>\n      <div class="card-subtitle">VIEW\n        <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon>\n      </div>\n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rescat\rescat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RescatPage);
    return RescatPage;
}());

//# sourceMappingURL=rescat.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_operator_api_operator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, iab, platform, loadingCtrl, apiService, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.authService = authService;
        this.paymentData = [];
        this.leaseData = {};
        this.guestData = {};
        if (localStorage.getItem('userType') == 'lease') {
            if (localStorage.getItem('leaseData') !== null) {
                this.leaseData = JSON.parse(localStorage.getItem('leaseData'));
                // this.current_user = this.leaseData.profile;
                this.firstName = this.leaseData.profile.first_name;
                this.lastName = this.leaseData.profile.last_name;
                this.address1 = this.leaseData.profile.address_1;
                this.address2 = this.leaseData.profile.address_2;
                this.city = this.leaseData.profile.city;
                this.state = this.leaseData.profile.state;
                this.zip = this.leaseData.profile.zip;
                this.country = this.leaseData.profile.country;
                this.phoneOne = this.leaseData.profile.phone_1;
                this.email = this.leaseData.profile.Email;
            }
        }
        else if (localStorage.getItem('userType') == 'guest') {
            if (localStorage.getItem('guestData') !== null) {
                this.guestData = localStorage.getItem('guestData');
                this.firstName = this.guestData.GuestInfo.firstName;
                this.lastName = this.guestData.GuestInfo.lastName;
                this.address1 = this.leaseData.GuestInfo.address1;
                this.address2 = this.leaseData.GuestInfo.address2;
                this.city = this.leaseData.GuestInfo.city;
                this.state = this.leaseData.GuestInfo.state;
                this.zip = this.leaseData.GuestInfo.zip;
                this.phoneOne = this.leaseData.GuestInfo.phoneOne;
                this.email = this.leaseData.GuestInfo.Email;
            }
        }
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.getPaymentData();
    };
    PaymentPage.prototype.getPaymentData = function () {
        this.paymentData = [
            {
                title: 'E-Check Payment',
                // link: 'https://swp.paymentsgateway.net/co/default.aspx?pg_api_login_id=3a3lFI58lU&pg_continue_url=http://www.siebert-realty.com&e_pg_billto_postal_postalcode=',
                link: 'https://swp.paymentsgateway.net/co/default.aspx?pg_api_login_id=3a3lFI58lU&pg_continue_url=http://www.siebert-realty.com&e_pg_billto_postal_postalcode=&pg_billto_postal_name_first=' + this.firstName + '&pg_billto_postal_name_last=' + this.lastName + '&pg_billto_postal_street_line1=' + this.address1 + '&pg_billto_postal_street_line2=' + this.address2 + '&pg_billto_postal_postalcode=' + this.zip + '&pg_billto_postal_city=' + this.state + '&pg_billto_telecom_phone_number=' + this.phoneOne + '&pg_billto_online_email=' + this.email,
                desc: 'Setup Auto-Pay , Bank Drafts or pay directly with a check',
                icon: './assets/imgs/payment/echeck.png'
            },
            {
                title: 'Credit Card Payment',
                link: 'https://www.erentpayer.com/pay/createLogin.html?acceptTerms=1&pc=505',
                desc: 'Pay online securly with your Credit / Debit Card',
                icon: './assets/imgs/payment/credit1.png'
            },
            {
                title: 'VACA-LAY-AWAY',
                link: 'https://www.siebert-realty.com/htmls/layaway.php',
                desc: 'Eager to plan your perfect vacation but need some time to pay for it? Siebert Realty offers a vacation layaway plan! Take advantage of a dream vacation, while still managing your budget. ',
                icon: './assets/imgs/payment/vacay.png'
            }
        ];
        this.loading.dismiss();
    };
    PaymentPage.prototype.getPayment = function (url) {
        var _this = this;
        console.log("paymentData", url);
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
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\payment\payment.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Payment Options</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="content_tile">Siebert Realty has several payment methods available to accommodate your budgeting needs.</div>\n  <ion-list *ngFor="let payment of paymentData" (click)="getPayment(payment.link)">\n    <ion-item>\n      <div class="elencoImg"><img src="{{payment.icon}}" alt=""></div>\n      <div class="elencoTxt">\n        <div class="restroName">{{payment.title}}</div>\n        <div class="restroDes">{{payment.desc}}</div>\n      </div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rentsub_rentsub__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_operator_api_operator__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RentalPage = (function () {
    function RentalPage(navCtrl, navParams, loadingCtrl, apiDataProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.apiDataProvider = apiDataProvider;
        this.alertCtrl = alertCtrl;
        this.resData = [];
        this.loadingAnimation = "./assets/imgs/loading.gif";
        this.tempImage = "./assets/imgs/resturant/food.png";
    }
    RentalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RentalPage');
        this.loading = this.loadingCtrl.create({
            content: '',
            spinner: "bubbles",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.getRentDate();
    };
    RentalPage.prototype.getRentDate = function () {
        var _this = this;
        this.apiDataProvider.getBrowseRentalData().then(function (data) {
            if (data) {
                console.log("result_data", data);
                _this.resData = data;
                _this.loading.dismiss();
            }
            else {
                _this.alertCtrl.create({
                    title: "Error",
                    message: "There is no Data",
                    buttons: ["OK"]
                }).present();
                _this.loading.dismiss();
            }
        }).catch(function (err) {
            console.log("Reult_err", err.message);
            _this.loading.dismiss();
        });
    };
    RentalPage.prototype.viewRentData = function (id, feed_data) {
        console.log("selected_data", id, feed_data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__rentsub_rentsub__["a" /* RentsubPage */], { rentpassData: feed_data, rentpassId: id });
    };
    RentalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rental',template:/*ion-inline-start:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rental\rental.html"*/'<ion-header>\n  <ion-navbar color="custom">\n    <ion-title>Browse Homes</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n\n  <div class="row categories-list">\n      <div  *ngFor="let category of resData" class="col col-50">\n        <a class="feed-category" (click)="viewRentData(category.id, category.feed_sources)">\n          <img class="category-image" src="{{category.image}} " alt=""/>\n          <div class="category-bg"></div>\n          <span class="category-title">{{category.title}}</span>\n        </a>\n      </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\2019\04\1Ionic\GuestApp\GuestApp\src\pages\rental\rental.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_operator_api_operator__["a" /* ApiOperatorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RentalPage);
    return RentalPage;
}());

//# sourceMappingURL=rental.js.map

/***/ })

},[417]);
//# sourceMappingURL=main.js.map