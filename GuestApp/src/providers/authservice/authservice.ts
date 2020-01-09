import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
@Injectable()
export class AuthserviceProvider {

  DEFAULT_AVATAR = './assets/img/default-dp.png';
  EMAIL_VERIFICATION_ENABLED: boolean = true;
  constructor(
    public http: HttpClient,
    public firebaseToken: Firebase,
    public platform: Platform
  ) {
    console.log('Hello AuthserviceProvider Provider');
  }

  logout() {
    return firebase.auth().signOut();
  }
  login(userData) {
    return firebase.auth().signInWithEmailAndPassword(userData.email, userData.pwd);
  }

  forgotPassword(useremail) {
    console.log("forgot_email", useremail);
    return firebase.auth().sendPasswordResetEmail(useremail)
  }

  getforgetPasswordData(forgetEmail) {
    return Observable.create(observer => {
      firebase.database().ref("users").orderByChild("email").equalTo(forgetEmail).once("value", snapshot => {
        observer.next(snapshot.val());
      }).catch((error: any) => {
        if (error) {
          4
          observer.error(error);
        }
      })
    })

  }
  registerUser(userData) {
    return Observable.create(observer => {
      firebase.auth().createUserWithEmailAndPassword(userData.email, userData.pwd).then((authData: any) => {
        console.log("authData", authData);
        userData.uid = authData.user.uid;
        userData.create_at = new Date();
        // this.emailVerification();
        this.updateUserProfile(userData);
        observer.next(authData);
      }).catch((error: any) => {
        if (error) {
          observer.error(error);
        }
      });
    });
  }
  updateUserProfile(user) {
    console.log("user_data_ts", user);
    firebase.database().ref('users/' + user.uid).update({
      email: user.email,
      photo: user.photoURL,
      created_at: user.create_at,
      role: user.role,
      device_token: localStorage.getItem('token')
    })
  }

  getcurrentUserData(userId) {
    return Observable.create(observer => {
      firebase.database().ref('users/' + userId).once('value').then(snap => {
        observer.next(snap);
      }).catch(err => {
        console.log("error", err);
        if (err) {
          observer.error(err)
        }
      })
    })
  }

  updateuserInfo(user) {
    console.log("user_data_ts", user);
    return firebase.database().ref('users/' + user.uid).update({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      photo: user.photoURL,
      phone: user.phone,
      created_at: user.create_at,
    })
  }
  savePhoneUser(user, guestData) {
    console.log("userData", user, guestData);
    return firebase.database().ref('users/' + user.uid).update({
      phone: user.phone,
      email: user.email,
      photo: user.photoURL,
      created_at: user.create_at,
      role: user.role,
      status: guestData.status,
      lease_id: guestData.lease_id,
      guest_id: guestData.guest_id
    });
  }

  emailVerification() {
    // return firebase.auth().currentUser.sendEmailVerification;
    let user = firebase.auth().currentUser;
    return user.sendEmailVerification();
  }

  // lease user data....
  saveLeaseData(uid, leaseData, unit) {
    return firebase.database().ref('users/' + uid).update({
      unit: unit,
      status: leaseData.status,
      lease_id: leaseData.lease_id,
      guest_id: leaseData.guest_id,
      verified_at: new Date()
    });
  }

  // Token part

  async getToken() {
    let token;
    if (this.platform.is('android')) {
      token = await this.firebaseToken.getToken();
    }
    if (this.platform.is('ios')) {
      token = await this.firebaseToken.getToken();
      await this.firebaseToken.grantPermission();
    }
    localStorage.setItem('token', token);
    console.log("user_token_data", token);
  }
  onNotification() {
    return this.firebaseToken.onNotificationOpen();
  }
}
