import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import * as xml2js from 'xml2js';
import { RequestOptions } from '@angular/http';

@Injectable()
export class AuthServiceProvider {
  LOGINURL        = "https://api.siebert-realty.com/vendors/woVendorCheck.asp?vendor=";
  WORKINGHISTORY  = "https://api.siebert-realty.com/vendors/wovendor.asp?vendor=";
  FEEDCATEGORY    = "./assets/js/feeds-categories.json";
  WORKORDERDETAILS ="https://api.siebert-realty.com/vendors/woview.asp";
  WORKORDERUPDATE = "https://api.siebert-realty.com/vendors/updatework.asp";
  STARTJOB        = "https://api.siebert-realty.com/vendors/startjob.asp";
  ENDJOB          = "https://api.siebert-realty.com/vendors/endjob.asp";
UPLOADIMAGE       = "http://siebertguest.net/wip/api/upload_image.asp";

  xmlItems: any;

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  getLoginInfo(email, id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.LOGINURL + id).subscribe(res => {
        resolve(res);
      }, err => {
        console.log("Reject_err", err);
        reject(err);
      })
    });
  }

  // get curretn user working processing and history....
  getworkingHistory(userId, type) {
    return new Promise((resolve, reject) => {
      this.http.get(this.WORKINGHISTORY + userId + '&d=5&filter=' + type).subscribe(res => {
        resolve(res);
      }, err => {
        console.log("Reject_error", err.message);
        reject(err);
      })
    })
  }

  //  feeds and news categories....
  getFeedsInfo() {
    return new Promise((resolve, reject) => {
      this.http.get(this.FEEDCATEGORY).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

  getFeedsDetailsInfo(newsUrl) {
    return new Promise((resolve, reject) => {
      this.http.get(newsUrl, { responseType: 'text' }).subscribe(res => {
        this.xmlItems = res;
        //  console.log("Raw_news data", res);
        xml2js.parseString(this.xmlItems, function (err, result) {
          console.log("Result_Data", result);
          resolve(result);
        })
      }, err => {
        console.log("Error_news", err.message);
        reject(err);
      })
    })
  }

  // Workoreder details data...
  getWorkOrderDetails(orderId) {
    return new Promise((resolve, reject) => {
      this.http.get(this.WORKORDERDETAILS, { params: { "oi": orderId } }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  // update workorder notes content

  getWorkOrderUpdate(orderId, orderNeed, orderDone) {
    return new Promise((resovle, reject) => {
      this.http.get(this.WORKORDERUPDATE,
        {
          params:
          {
            "oi": orderId,
            "ref": (orderNeed ? "1" : "0"),
            "w": orderDone
          }
        }).subscribe(res => {
          resovle(res);
        }, err => {
          reject(err);
        })
    })
  }

  //  start the job

  getStartWorkOrder(workId) {
    return new Promise((resolve, reject) => {
      this.http.get(this.STARTJOB, { params: { "oi": workId } }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  // End the job

  getEndWorkOrder(workId) {
    return new Promise((resolve, reject) => {
      this.http.get(this.ENDJOB, { params: { "oi": workId } }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  getSaveImagesData(orderId, images) {
    console.log("upload_image_data", orderId, images);

    let postData = new URLSearchParams();
    postData.set('oi', orderId);
    postData.set('images', images);
    console.log("posData", postData);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }
    return this.http.post(this.UPLOADIMAGE, postData.toString(), options);
  }
}
