 var app = angular.module('owner_app.controllers', [])

.controller('AuthCtrl', function($scope, $ionicConfig) {

})

// APP
.controller('AppCtrl', function($scope, $ionicConfig,$ionicActionSheet,$state,$localStorage) {
	$scope.showLogOutMenu = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			// buttons: [
			// { text: '<b>Share</b> This' },
			// { text: 'Move' }
			// ],
			destructiveText: 'Logout',
			titleText: 'Are you sure you want to logout? ',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			buttonClicked: function(index) {
				//Called when one of the non-destructive buttons is clicked,
				//with the index of the button that was clicked and the button object.
				//Return true to close the action sheet, or false to keep it opened.
				return true;
			},
			destructiveButtonClicked: function(){
				//Called when the destructive button is clicked.
				//Return true to close the action sheet, or false to keep it opened.
                $localStorage.$reset();

                $state.go('auth.login');
			}
		});

	};
    $scope.$storage = $localStorage;


})

.controller('ProfileCtrl', function($scope,$localStorage) {
	$scope.image = 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg';
	$scope.$storage = $localStorage;
	$scope.profile = $scope.$storage.profile;


})

//LOGIN
.controller('LoginCtrl', function($scope, $state, $templateCache, $q, $rootScope,$localStorage,$http,$ionicLoading) {

	$scope.user = {};
    $scope.$storage = $localStorage;

	$scope.user.email = "john@doe.com";
	$scope.user.pin = "12345";
	$scope.user.password = "306";
	$scope.doLogIn = function(){


        $scope.$storage.user_id = $scope.user.password;
        $http.get('https://api.siebert-realty.com/owner/owner_login.asp',{ params: { user_id: $scope.user.password }}).success(function(response) {

            $ionicLoading.show({
                template: 'Syncing your app...'
            });

            $scope.$storage.units = response.units;
            $scope.$storage.profile = response.profile;




        }).then(function (result) {
            $scope.feed = result;
            $state.go('app.dashboard');

            $ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');
        }, function (reason) {
            $ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');
        });
	};

	// We need this for the form validation
	$scope.selected_tab = "";

	$scope.$on('my-tabs-changed', function (event, data) {
		$scope.selected_tab = data.title;
	});

})

.controller('SignupCtrl', function($scope, $state) {
	$scope.user = {};

	$scope.user.email = "john@doe.com";

	$scope.doSignUp = function(){
		$state.go('app.feeds-categories');
	};
})

.controller('ForgotPasswordCtrl', function($scope, $state) {
	$scope.recoverPassword = function(){
		$state.go('app.feeds-categories');
	};

	$scope.user = {};
})


.controller('RateApp', function($scope) {
	$scope.rateApp = function(){
		if(ionic.Platform.isIOS()){
			//you need to set your own ios app id
			AppRate.preferences.storeAppURL.ios = '1234555553>';
			AppRate.promptForRating(true);
		}else if(ionic.Platform.isAndroid()){
			//you need to set your own android app id
			AppRate.preferences.storeAppURL.android = 'market://details?id=ionFB';
			AppRate.promptForRating(true);
		}
	};
})


.controller('SendMailCtrl', function($scope, $cordovaEmailComposer, $ionicPlatform) {
  //we use email composer cordova plugin, see the documentation for mor options: http://ngcordova.com/docs/plugins/emailComposer/
  $scope.sendMail = function(){
    $ionicPlatform.ready(function() {
      $cordovaEmailComposer.isAvailable().then(function() {
        // is available
        console.log("Is available");
        $cordovaEmailComposer.open({
          to: 'hi@startapplabs.com',
          subject: 'Nice Theme!',
  				body:    'How are you? Nice greetings from IonFullApp'
        }).then(null, function () {
          // user cancelled email
        });
      }, function () {
        // not available
        console.log("Not available");
      });
    });
  };
})

.controller('NotificationCtrl', function($scope,$http, $ionicLoading,$ionicModal) {
	$scope.notifications = [];
	$scope.loadNotifications =function(){

		$http.get('https://api.siebert-realty.com/units/reviews/index.asp',{
			params: { 'endpoint': 'reviews', 'id' : 12756 }
		}).success(function(response) {

			$ionicLoading.show({
				template: 'Loading...'
			});

			$scope.notifications = response.reviews;


		}).then(function (result) {
			console.log(result);

			$ionicLoading.hide();
			$scope.$broadcast('scroll.refreshComplete');

		}, function (reason) {
			$ionicLoading.hide();
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.loadNotifications();

})
.controller('MapsCtrl', function($scope, $ionicLoading) {

	$scope.info_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.center_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.my_location = "";

	$scope.$on('mapInitialized', function(event, map) {
		$scope.map = map;
	});

	$scope.centerOnMe= function(){

		$scope.positions = [];

		$ionicLoading.show({
			template: 'Loading...'
		});

		// with this function you can get the user’s current position
		// we use this plugin: https://github.com/apache/cordova-plugin-geolocation/
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			$scope.current_position = {lat: position.coords.latitude, lng: position.coords.longitude};
			$scope.my_location = position.coords.latitude + ", " + position.coords.longitude;
			$scope.map.setCenter(pos);
			$ionicLoading.hide();
		}, function(err) {
				 // error
				$ionicLoading.hide();
		});
	};
})

.controller('AdsCtrl', function($scope, $ionicActionSheet, AdMob, iAd) {

	$scope.manageAdMob = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			buttons: [
				{ text: 'Show Banner' },
				{ text: 'Show Interstitial' }
			],
			destructiveText: 'Remove Ads',
			titleText: 'Choose the ad to show',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			destructiveButtonClicked: function() {
				console.log("removing ads");
				AdMob.removeAds();
				return true;
			},
			buttonClicked: function(index, button) {
				if(button.text == 'Show Banner')
				{
					console.log("show banner");
					AdMob.showBanner();
				}

				if(button.text == 'Show Interstitial')
				{
					console.log("show interstitial");
					AdMob.showInterstitial();
				}

				return true;
			}
		});
	};

	$scope.manageiAd = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			buttons: [
			{ text: 'Show iAd Banner' },
			{ text: 'Show iAd Interstitial' }
			],
			destructiveText: 'Remove Ads',
			titleText: 'Choose the ad to show - Interstitial only works in iPad',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			destructiveButtonClicked: function() {
				console.log("removing ads");
				iAd.removeAds();
				return true;
			},
			buttonClicked: function(index, button) {
				if(button.text == 'Show iAd Banner')
				{
					console.log("show iAd banner");
					iAd.showBanner();
				}
				if(button.text == 'Show iAd Interstitial')
				{
					console.log("show iAd interstitial");
					iAd.showInterstitial();
				}
				return true;
			}
		});
	};
})

// FEED
//brings all feed categories
.controller('FeedsCategoriesCtrl', function($scope, $http) {
	$scope.feeds_categories = [];

	$http.get('feeds-categories.json').success(function(response) {
		$scope.feeds_categories = response;
	});
})

//bring specific category providers
.controller('CategoryFeedsCtrl', function($scope, $http, $stateParams) {
	$scope.category_sources = [];

	$scope.categoryId = $stateParams.categoryId;

	$http.get('feeds-categories.json').success(function(response) {
		var category = _.find(response, {id: $scope.categoryId});
		$scope.categoryTitle = category.title;
		$scope.category_sources = category.feed_sources;
	});
})

//this method brings posts for a source provider
.controller('FeedEntriesCtrl', function($scope, $stateParams, $http, FeedList, $q, $ionicLoading, BookMarkService) {
	$scope.feed = [];

	var categoryId = $stateParams.categoryId,
			sourceId = $stateParams.sourceId;

	$scope.doRefresh = function() {

		$http.get('feeds-categories.json').success(function(response) {

			$ionicLoading.show({
				template: 'Loading entries...'
			});

			var category = _.find(response, {id: categoryId }),
					source = _.find(category.feed_sources, {id: sourceId });

			$scope.sourceTitle = source.title;

			FeedList.get(source.url)
			.then(function (result) {
				$scope.feed = result;
				$ionicLoading.hide();
				$scope.$broadcast('scroll.refreshComplete');
			}, function (reason) {
				$ionicLoading.hide();
				$scope.$broadcast('scroll.refreshComplete');
			});
		});
	};

	$scope.doRefresh();

	$scope.bookmarkPost = function(post){
		$ionicLoading.show({ template: 'Post Saved!', noBackdrop: true, duration: 1000 });
		BookMarkService.bookmarkFeedPost(post);
	};
})

// SETTINGS
.controller('SettingsCtrl', function($scope, $ionicActionSheet, $state,$localStorage) {
	$scope.$storage = $localStorage;
	$scope.airplaneMode = $scope.$storage.airplaneMode || false;
	$scope.wifi = $scope.$storage.wifi;
	$scope.bluetooth = $scope.$storage.bluetooth;
	$scope.personalHotspot = $scope.$storage.personalHotspot;

	$scope.checkOpt1 = $scope.$storage.checkOpt1;
	$scope.checkOpt2 = $scope.$storage.checkOpt2;
	$scope.checkOpt3 = $scope.$storage.checkOpt3;

	$scope.radioChoice = $scope.$storage.radioChoice;

	// Triggered on a the logOut button click
	$scope.showLogOutMenu = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			// buttons: [
			// { text: '<b>Share</b> This' },
			// { text: 'Move' }
			// ],
			destructiveText: 'Logout',
			titleText: 'Are you sure you want to logout? This app is awsome so I recommend you to stay.',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			buttonClicked: function(index) {
				//Called when one of the non-destructive buttons is clicked,
				//with the index of the button that was clicked and the button object.
				//Return true to close the action sheet, or false to keep it opened.
				return true;
			},
			destructiveButtonClicked: function(){
				//Called when the destructive button is clicked.
				//Return true to close the action sheet, or false to keep it opened.
                $localStorage.$reset();

                $state.go('auth.walkthrough');

			}
		});

	};
})

// TINDER CARDS
.controller('TinderCardsCtrl', function($scope, $http) {

	$scope.cards = [];


	$scope.addCard = function(img, name) {
		var newCard = {image: img, name: name};
		newCard.id = Math.random();
		$scope.cards.unshift(angular.extend({}, newCard));
	};

	$scope.addCards = function(count) {
		$http.get('http://api.randomuser.me/?results=' + count).then(function(value) {
			angular.forEach(value.data.results, function (v) {
				$scope.addCard(v.picture.large, v.name.first + " " + v.name.last);
			});
		});
	};

	$scope.addFirstCards = function() {
		$scope.addCard("https://dl.dropboxusercontent.com/u/30675090/envato/tinder-cards/left.png","Nope");
		$scope.addCard("https://dl.dropboxusercontent.com/u/30675090/envato/tinder-cards/right.png", "Yes");
	};

	$scope.addFirstCards();
	$scope.addCards(5);

	$scope.cardDestroyed = function(index) {
		$scope.cards.splice(index, 1);
		$scope.addCards(1);
	};

	$scope.transitionOut = function(card) {
		console.log('card transition out');
	};

	$scope.transitionRight = function(card) {
		console.log('card removed to the right');
		console.log(card);
	};

	$scope.transitionLeft = function(card) {
		console.log('card removed to the left');
		console.log(card);
	};
})


// BOOKMARKS
.controller('BookMarksCtrl', function($scope, $rootScope, BookMarkService, $state) {

	$scope.bookmarks = BookMarkService.getBookmarks();

	// When a new post is bookmarked, we should update bookmarks list
	$rootScope.$on("new-bookmark", function(event){
		$scope.bookmarks = BookMarkService.getBookmarks();
	});

	$scope.goToFeedPost = function(link){
		window.open(link, '_blank', 'location=yes');
	};
	$scope.goToWordpressPost = function(postId){
		$state.go('app.post', {postId: postId});
	};
})

// WORDPRESS
.controller('WordpressCtrl', function($scope, $http, $ionicLoading, PostService, BookMarkService) {
	$scope.posts = [];
	$scope.page = 1;
	$scope.totalPages = 1;

	$scope.doRefresh = function() {
		$ionicLoading.show({
			template: 'Loading posts...'
		});

		//Always bring me the latest posts => page=1
		PostService.getRecentPosts(1)
		.then(function(data){
			$scope.totalPages = data.pages;
			$scope.posts = PostService.shortenPosts(data.posts);

			$ionicLoading.hide();
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

	$scope.loadMoreData = function(){
		$scope.page += 1;

		PostService.getRecentPosts($scope.page)
		.then(function(data){
			//We will update this value in every request because new posts can be created
			$scope.totalPages = data.pages;
			var new_posts = PostService.shortenPosts(data.posts);
			$scope.posts = $scope.posts.concat(new_posts);

			$scope.$broadcast('scroll.infiniteScrollComplete');
		});
	};

	$scope.moreDataCanBeLoaded = function(){
		return $scope.totalPages > $scope.page;
	};

	$scope.bookmarkPost = function(post){
		$ionicLoading.show({ template: 'Post Saved!', noBackdrop: true, duration: 1000 });
		BookMarkService.bookmarkWordpressPost(post);
	};

	$scope.doRefresh();
})

// WORDPRESS POST
.controller('WordpressPostCtrl', function($scope, post_data, $ionicLoading) {

	$scope.post = post_data.post;
	$ionicLoading.hide();

	$scope.sharePost = function(link){
		window.plugins.socialsharing.share('Check this post here: ', null, null, link);
	};
})


.controller('ImagePickerCtrl', function($scope, $rootScope, $ionicPlatform, $cordovaCamera) {

	$scope.images = [];
	// $scope.image = {};

	// $scope.openImagePicker = function() {
	//
	// 	//We use image picker plugin: http://ngcordova.com/docs/plugins/imagePicker/
  //   //implemented for iOS and Android 4.0 and above.
	//
  //   $ionicPlatform.ready(function() {
  //     $cordovaImagePicker.getPictures()
  //      .then(function (results) {
  //         for (var i = 0; i < results.length; i++) {
  //           console.log('Image URI: ' + results[i]);
  //           $scope.images.push(results[i]);
  //         }
  //       }, function(error) {
  //         // error getting photos
  //       });
  //   });
	// };

	$scope.openImagePicker = function(){
    //We use image picker plugin: http://ngcordova.com/docs/plugins/imagePicker/
    //implemented for iOS and Android 4.0 and above.

    $ionicPlatform.ready(function() {
      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 350,
        targetHeight: 350,
        saveToPhotoAlbum: false
      };
      $cordovaCamera.getPicture(options)
       .then(function (imageData) {
          var image = "data:image/jpeg;base64," + imageData;
          $scope.images.push(image);
        }, function(error) {
          console.log(error);
        });
    });
  };

	$scope.removeImage = function(image) {
		$scope.images = _.without($scope.images, image);
	};

	$scope.shareImage = function(image) {
		window.plugins.socialsharing.share(null, null, image);
	};

	$scope.shareAll = function() {
		window.plugins.socialsharing.share(null, null, $scope.images);
	};
}).controller('DocumentArchiveCtrl', function($scope, $ionicLoading,$http) {


	$scope.forms = [
		{"title":"2019 Owner Statement Schedule","link":"#"},
		{"title":"Electronic Funds Transfer Authorization","link":"#"},
		{"title":"Unit Inventory Requirements ","link":"#"},
		{"title":"Contractor List ","link":"#"},
		{"title":"Service Programs Descriptions","link":"#"},
		{"title":"IRS Information form W9","link":"#"},
		{"title":"Siebert Offices","link":"#"},
	];
    $http.get('https://api.siebert-realty.com/owner/documents.asp',{ params: {  }}).success(function(response) {


        $ionicLoading.show({
            template: 'Checking for documents...'
        });

        $scope.$storage.documents = response;
         $scope.Newsletters = response.Newsletters;




    }).then(function (result) {

        $ionicLoading.hide();
        $scope.$broadcast('scroll.refreshComplete');
    }, function (reason) {
        $ionicLoading.hide();
        $scope.$broadcast('scroll.refreshComplete');
    });

})
.controller('PropertyManagementCtrl', function($scope, $ionicLoading) {


}).controller('PropertyImprovementsCtrl', function($scope, $ionicLoading) {


})
	.controller('PropertyWikiCtrl', function($http,$scope, $ionicLoading) {

		$scope.wiki = [];


$http.get('https://api2.siebert-realty.com/units/12756').success(function (data) {
	$scope.wiki =data;

});
		$scope.toggleGroup = function(group) {
			if ($scope.isGroupShown(group)) {
				$scope.shownGroup = null;
			} else {
				$scope.shownGroup = group;
			}
		};
		$scope.isGroupShown = function(group) {
			return $scope.shownGroup === group;
		};

	})
.controller('StaffCtrl', function($http,$scope, $ionicModal,$ionicLoading) {

		$scope.staff = [];


$http.get('https://api.siebert-realty.com/owner/staff.asp').success(function (data) {
	$scope.staff =data;

});

			 $scope.sendMessage = function($user_id){
                 $scope.staff_member = _.find($scope.staff, {id: $user_id });


				 $scope.modal = $ionicModal.fromTemplateUrl('views/app/send_message.html', {
					 scope: $scope,
					 animation: 'slide-in-up'
				 }).then(function(modal) {
					 $scope.reservationSearchModal = modal;
					 $scope.reservationSearchModal.show();
				 });

			 }



	})
;
