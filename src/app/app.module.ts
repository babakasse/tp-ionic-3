import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Camera} from '@ionic-native/camera'
import {File} from '@ionic-native/file';
import {FileChooser} from '@ionic-native/file-chooser';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthService } from '../services/auth.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { AjoutPage } from '../pages/ajout/ajout';
import { ModifierPage } from '../pages/modifier/modifier';
import { PhotoPage } from '../pages/photo/photo';
import { MapPage } from '../pages/map/map';
import {LoginPage} from '../pages/login/login';

import { Provider } from '../providers/provider/provider';
import { SignupPage } from '../pages/signup/signup';

export const firebaseConfig = {
  apiKey: "AIzaSyCY4yVLZp835ttX4sZPHok7UsaKbPy4a4E",
  authDomain: "tabsapp-338e7.firebaseapp.com",
  databaseURL: "https://tabsapp-338e7.firebaseio.com",
  projectId: "tabsapp-338e7",
  storageBucket: "tabsapp-338e7.appspot.com",
  messagingSenderId: "711426523994"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    AjoutPage,
    ModifierPage,
    PhotoPage,
    MapPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	  AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxErrorsModule 

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    AjoutPage,
    ModifierPage,
    PhotoPage,
    MapPage,
    LoginPage,
    SignupPage
  ],

  providers: [
    StatusBar,
    SplashScreen,FileChooser,File,Geolocation,AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider,
    Camera
    ]
})
export class AppModule {}
