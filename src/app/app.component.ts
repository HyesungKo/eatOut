import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp({
      apiKey: "AIzaSyCCTz18pOCFas927e8LMp3cgIJNiXRh8FY",
      authDomain: "myproject-3680e.firebaseapp.com",
      databaseURL: "https://myproject-3680e.firebaseio.com",
      projectId: "myproject-3680e",
      storageBucket: "myproject-3680e.appspot.com",
      messagingSenderId: "995057306635"
    });
  }
}
