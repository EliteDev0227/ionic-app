// Ionic Starter App

angular.module('underscore', [])
.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('owner_app', [
  'ionic',
  'angularMoment',
  'owner_app.controllers',
  'owner_app.directives',
  'owner_app.filters',
  'owner_app.services',
  'owner_app.factories',
  'owner_app.config',
  // 'owner_app.views',
  'underscore',
  'ngMap',
  'ngResource',
  'ngCordova',
  'slugifier',
  'ionic.contrib.ui.tinderCards',
  'youtube-embed',
  'ngStorage',
    'ionic-datepicker'
])

.run(function($ionicPlatform, PushNotificationsService, $rootScope, $ionicConfig, $timeout) {

  $ionicPlatform.on("deviceready", function(){

    //99381564-956e-404d-8ac9-257c08fda473
    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

    var notificationOpenedCallback = function(jsonData) {
      console.log('handleNotificationReceived: ' + JSON.stringify(jsonData));
    };
   var notificationReceivedCallback = function(jsonData) {
      console.log('handleNotificationReceived: ' + JSON.stringify(jsonData));
    };

    window.plugins.OneSignal
        .startInit("99381564-956e-404d-8ac9-257c08fda473")
        .handleNotificationOpened(notificationOpenedCallback)
        .handleNotificationReceived(notificationReceivedCallback)
        .endInit();

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    PushNotificationsService.register();
  });

  // This fixes transitions for transparent background views
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if(toState.name.indexOf('auth.walkthrough') > -1)
    {
      // set transitions to android to avoid weird visual effect in the walkthrough transitions
      $timeout(function(){
        $ionicConfig.views.transition('android');
        $ionicConfig.views.swipeBackEnabled(false);
      	console.log("setting transition to android and disabling swipe back");
      }, 0);
    }
  });
  $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){
    if(toState.name.indexOf('app.feeds-categories') > -1)
    {
      // Restore platform default transition. We are just hardcoding android transitions to auth views.
      $ionicConfig.views.transition('platform');
      // If it's ios, then enable swipe back again
      if(ionic.Platform.isIOS())
      {
        $ionicConfig.views.swipeBackEnabled(true);
      }
    	console.log("enabling swipe back and restoring transition to platform default", $ionicConfig.views.transition());
    }
  });

  $ionicPlatform.on("resume", function(){
    PushNotificationsService.register();
  });

})


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

  //INTRO
  .state('auth', {
    url: "/auth",
    templateUrl: "views/auth/auth.html",
    abstract: true,
    controller: 'AuthCtrl'
  })

  .state('auth.walkthrough', {
    url: '/walkthrough',
    templateUrl: "views/auth/walkthrough.html"
  })

  .state('auth.login', {
    url: '/login',
    templateUrl: "views/auth/login.html",
    controller: 'LoginCtrl'
  })

  .state('auth.signup', {
    url: '/signup',
    templateUrl: "views/auth/signup.html",
    controller: 'SignupCtrl'
  })

  .state('auth.forgot-password', {
    url: "/forgot-password",
    templateUrl: "views/auth/forgot-password.html",
    controller: 'ForgotPasswordCtrl'
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "views/app/side-menu.html",
    controller: 'AppCtrl'
  })

  //MISCELLANEOUS
  .state('app.miscellaneous', {
    url: "/miscellaneous",
    views: {
      'menuContent': {
        templateUrl: "views/app/miscellaneous/miscellaneous.html"
      }
    }
  })

  .state('app.maps', {
    url: "/miscellaneous/maps",
    views: {
      'menuContent': {
        templateUrl: "views/app/miscellaneous/maps.html",
        controller: 'MapsCtrl'
      }
    }
  })

  .state('app.notifications', {
    url: "/notifications",
    views: {
      'menuContent': {
        templateUrl: "views/app/layouts/notifications.html",
        controller: 'NotificationCtrl'
      }
    }
  }) .state('app.image-picker', {
    url: "/miscellaneous/image-picker",
    views: {
      'menuContent': {
        templateUrl: "views/app/miscellaneous/image-picker.html",
        controller: 'ImagePickerCtrl'
      }
    }
  })

  //LAYOUTS
  .state('app.layouts', {
    url: "/layouts",
    views: {
      'menuContent': {
        templateUrl: "views/app/layouts/layouts.html"
      }
    }
  })

  .state('app.tinder-cards', {
    url: "/layouts/tinder-cards",
    views: {
      'menuContent': {
        templateUrl: "views/app/layouts/tinder-cards.html",
        controller: 'TinderCardsCtrl'
      }
    }
  })

  .state('app.slider', {
    url: "/layouts/slider",
    views: {
      'menuContent': {
        templateUrl: "views/app/layouts/slider.html"
      }
    }
  })

  //FEEDS
  .state('app.feeds-categories', {
    url: "/feeds-categories",
    views: {
      'menuContent': {
        templateUrl: "views/app/feeds/feeds-categories.html",
        controller: 'FeedsCategoriesCtrl'
      }
    }
  })

  .state('app.category-feeds', {
    url: "/category-feeds/:categoryId",
    views: {
      'menuContent': {
        templateUrl: "views/app/feeds/category-feeds.html",
        controller: 'CategoryFeedsCtrl'
      }
    }
  })

  .state('app.feed-entries', {
    url: "/feed-entries/:categoryId/:sourceId",
    views: {
      'menuContent': {
        templateUrl: "views/app/feeds/feed-entries.html",
        controller: 'FeedEntriesCtrl'
      }
    }
  })

  //WORDPRESS
  .state('app.wordpress', {
    url: "/wordpress",
    views: {
      'menuContent': {
        templateUrl: "views/app/wordpress/wordpress.html",
        controller: 'WordpressCtrl'
      }
    }
  })

  .state('app.post', {
    url: "/wordpress/:postId",
    views: {
      'menuContent': {
        templateUrl: "views/app/wordpress/wordpress_post.html",
        controller: 'WordpressPostCtrl'
      }
    },
    resolve: {
      post_data: function(PostService, $ionicLoading, $stateParams) {
        $ionicLoading.show({
      		template: 'Loading post ...'
      	});

        var postId = $stateParams.postId;
        return PostService.getPost(postId);
      }
    }
  })

  //OTHERS
 .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "views/app/settings.html",
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('app.staff', {
    url: "/staff",
    views: {
      'menuContent': {
        templateUrl: "views/app/staff.html",
        controller: "StaffCtrl"
      }
    }
  })
  .state('app.forms', {
    url: "/forms",
    views: {
      'menuContent': {
        templateUrl: "views/app/forms.html"
      }
    }
  })

  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "views/app/profile.html",
        controller: "ProfileCtrl"
      }
    }
  })

  .state('app.bookmarks', {
    url: "/bookmarks",
    views: {
      'menuContent': {
        templateUrl: "views/app/bookmarks.html",
        controller: 'BookMarksCtrl'
      }
    }
  })
      .state('app.document-archive', {
        url: "/document-archive",
        views: {
          'menuContent': {
            templateUrl: "views/app/document-archive.html",
            controller: 'DocumentArchiveCtrl'
          }
        }
      })
.state('app.workorders-main', {
        url: "/workorders-main",
        views: {
          'menuContent': {
            templateUrl: "views/app/workorders/workorders-main.html",
            controller: 'WorkorderCtrl'
          }
        }
      })

.state('app.workorders-list', {
        url: "/workorders-list/:UnitID/:UnitName",
        views: {
          'menuContent': {
            templateUrl: "views/app/workorders/workorders-list.html",
            controller: 'WorkorderCtrl'
          }
        }
      })
      .state('reservations', {
        url: "/reservations",
        abstract: true,
        templateUrl: "views/app/reservation-menu.html",
        controller: 'ReservationsCtrl'
      })
      .state('reservations.units', {
        url: "/units",
        views: {
          'reservationMenu': {
            templateUrl: "views/app/reservations/reservations-main.html",
            controller: 'ReservationsCtrl'
          }
        }
      })
      .state('reservations.reservation', {
        url: "/reservation/:UnitID/:UnitName/:id",
        views: {
          'reservationMenu': {
            templateUrl: "views/app/reservations/reservations.html",
            controller: 'ReservationsCtrl'
          }
        }
      })
      .state('units', {
        url: "/units",
        abstract: true,
        templateUrl: "views/app/side-menu.html",
        controller: 'UnitCtrl'
      })
      .state('units.home', {
        url: "/home",
        views: {
          'menuContent': {
            templateUrl: "views/app/unit/home.html",
            controller: 'UnitCtrl'
          }
        }
      }) .state('units.statements', {
        url: "/statements",
        views: {
          'menuContent': {
            templateUrl: "views/app/unit/owner-statements.html",
            controller: 'UnitCtrl'
          }
        }
      }) .state('units.reservations', {
        url: "/reservations",
        views: {
          'menuContent': {
            templateUrl: "views/app/reservations/reservation-list.html",
            controller: 'ReservationsCtrl'
          }
        }
      })
      .state('units.workorders', {
        url: "/workorders",
        views: {
          'menuContent': {
            templateUrl: "views/app/workorders/workorders-list.html",
            controller: 'WorkorderCtrl'
          }
        }
      })
      .state('app.dashboard', {
        url: "/app/dashboard",
        views: {
          'menuContent': {
            templateUrl: "views/app/dashboard/dashboard.html",
            controller: 'DashboardCtrl'
          }
        }
      })
      .state('app.property-management', {
        url: "/property-management/home",
        views: {
          'menuContent': {
            templateUrl: "views/app/property-management/home.html",
            controller: 'PropertyManagementCtrl'
          }
        }
      }).state('app.property-wiki', {
        url: "/property-management/wiki",
        views: {
          'menuContent': {
            templateUrl: "views/app/property-management/wiki.html",
            controller: 'PropertyWikiCtrl'
          }
        }
      }).state('app.property-improvements', {
        url: "/property-management/improvements",
        views: {
          'menuContent': {
            templateUrl: "views/app/property-improvements/home.html",
            controller: 'PropertyImprovementsCtrl'
          }
        }
      })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/auth/walkthrough');
});
