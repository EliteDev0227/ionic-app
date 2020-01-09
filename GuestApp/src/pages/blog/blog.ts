import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { BlogpostPage } from "../blogpost/blogpost";
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import _ from 'underscore';


@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  loading: any;
  resData: any = [];
  blogData: any = [];
  page: any = 1;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public apiDataProvider: ApiOperatorProvider,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.getBlogData(this.page);
  }
  getBlogData(page) {
    this.apiDataProvider.getWordPressBlogData(page).then((data: any) => {
      if (data) {
        this.resData = data.posts;
        console.log("raw_res_data", data.posts);
        this.blogData = this.parseData(data.posts);
        console.log("blog_data", this.blogData);
        this.loading.dismiss();
      } else {
        this.alertCtrl.create({
          title: "Error",
          message: "There is no Data",
          buttons: ["OK"]
        }).present();
        this.loading.dismiss();
      }
    }).catch(err => {
      console.log("Reult_err", err.message);
      this.loading.dismiss();
    });
  }
  doInfinite(inifiniteScroll) {
    console.log("Begin async operation");
    setTimeout(() => {
      this.page += 1;
      this.getContineBlogData(this.page);
      inifiniteScroll.complete();
    }, 500);
  }
  // infinite scroll data..
  getContineBlogData(page) {
    console.log("page_count", page);
    this.apiDataProvider.getWordPressBlogData(page).then((data: any) => {
      if (data.posts.length == 0) {
      } else {
        console.log("continue_data", data.posts);
        this.resData = data.posts;
        var new_posts = this.parseData(this.resData);
        this.blogData =  this.blogData.concate(new_posts);
        console.log("Continue_result_data", this.resData);

      }
    }).catch(err => {
      console.log("Continue_err", err.message);
    });
  }

  bookmarkPost(blog_data) {
    let toast = this.toastCtrl.create({
      message: "Post Saved ....",
      duration: 3000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    })
    toast.present();
  }

  viewPostData(blog) {

    this.navCtrl.push(BlogpostPage, {blogpostData: blog});
  }

  // filter pages...
  parseData(posts) {
    var maxLength = 500;
		return _.map(posts, function(post: any){
			if(post.content.length > maxLength){
				//trim the string to the maximum length
				var trimmedString = post.content.substr(0, maxLength);
				//re-trim if we are in the middle of a word
				trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf("</p>")));
        post.shortContent =  trimmedString;
			}
			return post;
		});
  }
}
