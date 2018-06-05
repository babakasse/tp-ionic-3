webpackJsonp([7],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ajout_ajout__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__photo_photo__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(204);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function HomePage(navCtrl, db) {
        this.navCtrl = navCtrl;
        this.itemsCollection = db.collection('advertisements'); //ref()
        this.items = this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                /*affichage de l'id du document*/
                console.log(a.payload.doc.id);
                console.log("test" + a.payload.doc.data());
                return __assign({ id: id }, data);
            });
        });
    }
    HomePage.prototype.itemSelected = function (item) {
        console.log("click" + item.get);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], { item: item });
    };
    HomePage.prototype.ajouter = function (num) {
        console.log("ajout" + num);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ajout_ajout__["a" /* AjoutPage */], { num: num });
    };
    HomePage.prototype.photo = function (num) {
        console.log("photo" + num);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__photo_photo__["a" /* PhotoPage */], { num: num });
    };
    HomePage.prototype.map = function (num) {
        console.log("map" + num);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */], { num: num });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      LYON-BUY-&-SELL\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card padding-top>\n    <ion-card-content>\n      <ion-item>\n        <h3 text-center>Liste des annonces</h3>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <p>\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items | async" (click)="itemSelected(item)">\n      {{ item.title }} : {{ item.category}}\n      Description : {{ item.description }}\n    </button>\n\n    <ion-fab center middle>\n      <button ion-fab mini (click)="ajouter(this)"><ion-icon name="add"></ion-icon></button>\n      <button ion-fab mini (click)="photo(this)"><ion-icon name="camera"></ion-icon></button>\n      <button ion-fab mini (click)="map(this)"><ion-icon name="map"></ion-icon></button>\n    </ion-fab>\n\n\n</ion-list>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.signInWithGoogle = function () {
        console.log('Sign in with google');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.oauthSignIn = function (provider) {
        var _this = this;
        if (!window.cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        }
        else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.afAuth.auth.getRedirectResult().then(function (result) {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(token, user);
                }).catch(function (error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_provider__ = __webpack_require__(84);
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
 * Generated class for the AjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjoutPage = (function () {
    //item:string;
    function AjoutPage(navCtrl, navParams, requettes_service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requettes_service = requettes_service;
        this.todo = {};
        // let item = this.navParams.get('item');
        // console.log(item)
        // this.item=item;
    }
    AjoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjoutPage');
    };
    AjoutPage.prototype.logForm = function () {
        /*
        console.log(this.todo.category);
        console.log(this.todo.title);
        console.log(this.todo.description);
        console.log(this.todo.author); */
        this.requettes_service.ajouter_global(this.todo);
    };
    AjoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajout',template:/*ion-inline-start:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/ajout/ajout.html"*/'<!--\n  Generated template for the AjoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ajout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card padding-top>\n    <ion-card-content>\n      <ion-item>\n        <h3 text-center>Ajout d\'une annonce</h3>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <p>\n\n  <form (ngSubmit)="logForm()">\n\n      <ion-item>\n        <ion-label>Catégorie</ion-label>\n        <ion-select [(ngModel)]="todo.category" name="category">\n          <ion-option value="informatique">Informatique</ion-option>\n          <ion-option value="immobilier">Immobilier</ion-option>\n          <ion-option value="automobile">Automobile</ion-option>\n          <ion-option value="maison">Maison</ion-option>\n        </ion-select>\n      </ion-item>\n\n    <ion-item>\n      <ion-label>Titre</ion-label>\n      <ion-textarea [(ngModel)]="todo.title" name="title"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-textarea [(ngModel)]="todo.description" name="description" default></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Auteur</ion-label>\n      <ion-textarea [(ngModel)]="todo.author" name="author"></ion-textarea>\n    </ion-item>\n    <button ion-button type="submit" block>Ajouter </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/ajout/ajout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_provider_provider__["a" /* Provider */]])
    ], AjoutPage);
    return AjoutPage;
}());

//# sourceMappingURL=ajout.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_provider__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifier_modifier__ = __webpack_require__(201);
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
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, requettes_service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requettes_service = requettes_service;
        var item = this.navParams.get('item');
        console.log("ok page tranfere " + item.title);
        this.item = item;
    }
    DetailsPage.prototype.supprimer = function (item) {
        console.log("suppression" + item.id);
        this.requettes_service.supprimer_global(item);
        //this.requette.supprimer_global(item)
    };
    DetailsPage.prototype.modifier = function (item) {
        console.log("modif" + item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modifier_modifier__["a" /* ModifierPage */], { item: item });
    };
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/details/details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card padding-top>\n    <ion-card-content>\n      <ion-card-title>\n        Catégorie : {{item.category}} <br>\n        Titre : {{item.title}} <br>\n        Description : {{item.description}}<br>\n        Auteur : {{item.author}}\n      </ion-card-title>\n      <p>\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab center middle>\n    <button ion-fab mini (click)="supprimer(item)"><ion-icon name="trash"></ion-icon>\n    </button>\n    <button ion-fab mini (click)="modifier(item)"><ion-icon name="create"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_provider_provider__["a" /* Provider */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_provider__ = __webpack_require__(84);
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
 * Generated class for the ModifierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifierPage = (function () {
    function ModifierPage(navCtrl, navParams, requettes_service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requettes_service = requettes_service;
        var item = this.navParams.get('item');
        console.log("item " + item.id);
        this.item = item;
    }
    ModifierPage.prototype.modifierForm = function () {
        console.log('modification ' + this.item.title);
        this.requettes_service.modifier_global(this.item);
        //this.requette.modifier_global(item)
    };
    ModifierPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifierPage');
    };
    ModifierPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifier',template:/*ion-inline-start:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/modifier/modifier.html"*/'<!--\n  Generated template for the ModifierPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>modifier</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card padding-top>\n    <ion-card-content>\n      <ion-item>\n        <h3 text-center>Modification de l\'annonce </h3>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <p>\n    <form (ngSubmit)="modifierForm()">\n      <ion-item>\n        <ion-label>Catégorie</ion-label>\n        <ion-input type="text" [(ngModel)]="item.category" name="category"\n        value={{item.category}}></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Titre</ion-label>\n        <ion-input [(ngModel)]="item.title" name="title"\n        value={{item.title}}></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Description</ion-label>\n        <ion-textarea [(ngModel)]="item.description" name="description"\n        value={{item.description}}></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Auteur</ion-label>\n        <ion-input [(ngModel)]="item.author" name="author"\n        value={{item.author}}></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Modifier</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/modifier/modifier.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_provider_provider__["a" /* Provider */]])
    ], ModifierPage);
    return ModifierPage;
}());

//# sourceMappingURL=modifier.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(322);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, auth, fb) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogle()
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return console.log(error.message); });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/login/login.html"*/'<!--\nGenerated template for the LoginPage page.\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n  <button ion-button menuToggle>\n  <ion-icon name="menu"></ion-icon>\n  </button>\n    <ion-title color-primary>Connexion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src="http://www.efresh.com.pl/blog/wp-content/uploads/2016/07/dddd.jpg" width="" height=""/>\n\n    <ion-card-content>\n      <ion-card-title text-center>\n        <ion-icon name="basket"></ion-icon>  LYON BUY-&-SELL  <ion-icon name="basket"></ion-icon>\n      </ion-card-title>\n    </ion-card-content>\n  </ion-card>\n\n<form (ngSubmit)="login()" [formGroup]="loginForm">\n  <ion-list inset>\n    <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\',\n    \'dirty\']) }">\n    <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n    </ion-item>\n      <div ngxErrors="email" #emailErrors="ngxErrors">\n      <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">Entrez un mot de passe valide</div>\n      </div>\n    <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n      <ion-input type="password" placeholder="Password"\n      formControlName="password"></ion-input>\n    </ion-item>\n    <div ngxErrors="password" #passwordErrors="ngxErrors">\n    <div [ngxError]="[\'minlength\',\'required\']"[when]="[\'touched\']">5 caractères minimum</div>\n    </div>\n    </ion-list>\n      <div padding-horizontal>\n        <div class="form-error">{{loginError}}</div>\n        <button ion-button color="secondary" full type="submit" [disabled]="!loginForm.valid">Login</button>\n        <div class="login-footer">\n        <p text-center="">\n        <a href="#"> <ion-icon name="lock"></ion-icon> Mot de passe oublié </a>\n        </p>\n      </div>\n    <ion-list>\n    <button ion-button icon-left block clear (click)="loginWithGoogle()">\n    <ion-icon name="logo-google"></ion-icon>\n    Se connecter avec Google\n    </button>\n    <button ion-button icon-left block clear (click)="signup()">\n    <ion-icon name="person-add"></ion-icon>\n    S\'inscrire\n    </button>\n  </ion-list>\n  </div>\n</form>\n</ion-content>'/*ion-inline-end:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_provider_provider__ = __webpack_require__(84);
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







//import { AjoutPage } from '../../pages/ajout/ajout';
/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhotoPage = (function () {
    function PhotoPage(navCtrl, navParams, camera, file, fileChooser, loadingCtrl, requettes_service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.file = file;
        this.fileChooser = fileChooser;
        this.loadingCtrl = loadingCtrl;
        this.requettes_service = requettes_service;
        this.onSuccess = function (snapshot) {
            _this.currentImage = snapshot.downloadURL;
            console.log(_this.currentImage);
            _this.loading.dismiss();
            _this.requettes_service.modifier_photo(_this.item, _this.currentImage);
        };
        this.onError = function (error) {
            console.log('error', error);
            _this.loading.dismiss();
        };
        var item = this.navParams.get('item');
        this.item = item;
    }
    PhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhotoPage');
    };
    PhotoPage.prototype.dataURItoBlob = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    PhotoPage.prototype.takePhoto = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options;
            return __generator(this, function (_a) {
                options = {
                    quality: 50,
                    targetHeight: 600,
                    targetWidth: 600,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE,
                    correctOrientation: true
                };
                this.camera.getPicture(options).then(function (imageData) {
                    _this.loading = _this.loadingCtrl.create({
                        content: 'Please wait...'
                    });
                    _this.loading.present();
                    _this.selectedPhoto = _this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
                    console.log(_this.selectedPhoto);
                    _this.upload();
                }, function (err) {
                    console.log('error', err);
                });
                return [2 /*return*/];
            });
        });
    };
    PhotoPage.prototype.upload = function () {
        if (this.selectedPhoto) {
            this.randomId = Math.random().toString(36).substring(2);
            // this.item["photo"] ='images/'+randomId+'.png'
            var uploadTask = Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref().child('images/' + this.randomId + '.jpg').put(this.selectedPhoto);
            uploadTask.then(this.onSuccess, this.onError);
        }
    };
    /*const result = await this.camera.getPicture(options)
const image = 'data:image/jpeg;base64,${result}';
const pictures = storage().ref('pictures/photos');
//old pictures.putString(image,'data_url');
pictures.putString(image)


    }catch(e){
      console.error(e)
    }
  }*/
    //-------------fin take photo
    PhotoPage.prototype.Choisir_image = function () {
        var _this = this;
        this.fileChooser.open().then(function (uri) {
            alert(uri);
            _this.file.resolveLocalFilesystemUrl(uri).then(function (newUrl) {
                alert(JSON.stringify(newUrl));
                var dirPath = newUrl.nativeURL;
                var dirPathSegments = dirPath.split('/'); //casse la chaine de caractère dans un tableau
                dirPathSegments.pop(); //supprime le dernier élément
                dirPath = dirPathSegments.join('/');
                _this.file.readAsArrayBuffer(dirPath, newUrl.name).then(function (buffer) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.upload_fc(buffer, newUrl.name)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        });
    }; //----------------fin cfonction choisir image
    PhotoPage.prototype.upload_fc = function (buffer, name) {
        return __awaiter(this, void 0, void 0, function () {
            var blob, storage;
            return __generator(this, function (_a) {
                blob = new Blob([buffer], { type: "image/jpeg" });
                storage = firebase.storage();
                storage.ref('images/' + name).put(blob).then(function (d) {
                    alert("image tranférée");
                }).catch(function (error) {
                    alert(JSON.stringify(error));
                });
                return [2 /*return*/];
            });
        });
    }; //-----------------fin fonction upload
    PhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-photo',template:/*ion-inline-start:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/photo/photo.html"*/'<!--\n  Generated template for the PhotoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>photo et Firebase storage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<button ion-button (click)="takePhoto()">Prendre une photo</button>\n<!--><button ion-button (click)="Choisir_image()">Transferer une image</button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/photo/photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_provider_provider__["a" /* Provider */]])
    ], PhotoPage);
    return PhotoPage;
}());

//# sourceMappingURL=photo.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(321);
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
* Generated class for the MapPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on

* Ionic pages and navigation.
*/
var MapPage = (function () {
    function MapPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        this.carte();
    };
    MapPage.prototype.carte = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log("lattitude" + position.coords.latitude + "longitude" + position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    MapPage.prototype.addMarker = function () {
        console.log(this.map);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    MapPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/map/map.html"*/'<!--\nGenerated template for the MapPage page.\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n  <ion-buttons end>\n  <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Ma position</button>\n  </ion-buttons>\n  <ion-navbar>\n  <ion-title>Map</ion-title>\n  </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n  <div #map id="map"></div>\n  </ion-content>'/*ion-inline-end:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 214:
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
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajout/ajout.module": [
		591,
		6
	],
	"../pages/details/details.module": [
		592,
		5
	],
	"../pages/login/login.module": [
		593,
		4
	],
	"../pages/map/map.module": [
		595,
		3
	],
	"../pages/modifier/modifier.module": [
		594,
		2
	],
	"../pages/photo/photo.module": [
		596,
		1
	],
	"../pages/slogan/slogan.module": [
		597,
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
webpackAsyncContext.id = 279;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(113);
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
    function SignupPage(fb, navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return _this.signupError = error.message; });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'as-page-signup',template:/*ion-inline-start:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n  <ion-title>Sign up</ion-title>\n  </ion-navbar>\n  </ion-header>\n\n\n  <ion-content>\n    <form (ngSubmit)="signup()" [formGroup]="form">\n    <ion-list inset>\n    <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n    <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n    </ion-item>\n    <div ngxErrors="email" #emailErrors="ngxErrors">\n    <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be avalid email</div>\n  </div>\n  <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n  <ion-input type="password" placeholder="Password"\n  formControlName="password"></ion-input>\n  </ion-item>\n  <div ngxErrors="password" #passwordErrors="ngxErrors">\n  <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should beat least 6 characters</div>\n  </div>\n  </ion-list>\n  <div padding-horizontal>\n  <div class="form-error">{{signupError}}</div>\n  <button ion-button full type="submit" [disabled]="!form.valid">Sign up</button>\n  </div>\n  </form>\n  </ion-content>\n'/*ion-inline-end:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(383);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ultimate_ngxerrors__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_details_details__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ajout_ajout__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modifier_modifier__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_photo_photo__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_map_map__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_provider_provider__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_signup_signup__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var firebaseConfig = {
    apiKey: "AIzaSyCY4yVLZp835ttX4sZPHok7UsaKbPy4a4E",
    authDomain: "tabsapp-338e7.firebaseapp.com",
    databaseURL: "https://tabsapp-338e7.firebaseio.com",
    projectId: "tabsapp-338e7",
    storageBucket: "tabsapp-338e7.appspot.com",
    messagingSenderId: "711426523994"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_ajout_ajout__["a" /* AjoutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modifier_modifier__["a" /* ModifierPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_photo_photo__["a" /* PhotoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajout/ajout.module#AjoutPageModule', name: 'AjoutPage', segment: 'ajout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifier/modifier.module#ModifierPageModule', name: 'ModifierPage', segment: 'modifier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#AjoutPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photo/photo.module#PhotoPageModule', name: 'PhotoPage', segment: 'photo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slogan/slogan.module#SloganPageModule', name: 'SloganPage', segment: 'slogan', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13__ultimate_ngxerrors__["a" /* NgxErrorsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_ajout_ajout__["a" /* AjoutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modifier_modifier__["a" /* ModifierPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_photo_photo__["a" /* PhotoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_provider_provider__["a" /* Provider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(113);
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
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        //rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.auth.afAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
        }, function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        });
    }
    MyApp.prototype.login = function () {
        //this.menu.close();
        this.auth.signOut();
        //this.nav.setRoot(LoginPage);
    };
    MyApp.prototype.logout = function () {
        //this.menu.close();
        this.auth.signOut();
        //this.nav.setRoot(HomePage);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n<ion-list-header *ngIf="auth.getEmail()"></ion-list-header>\n<ion-item (click)="logout()" *ngIf="auth.authenticated">\n    <ion-icon name="log-out" item-left></ion-icon>\n    Log out\n\n    <ion-icon name="user" item-right></ion-icon>\n    {{auth.getEmail()}}\n</ion-item>\n    <ion-item (click)="login()" *ngIf="!auth.authenticated">\n    <ion-icon name="log-in" item-left></ion-icon>\n    Log in\n</ion-item>\n'/*ion-inline-end:"/Users/babakasse/Projects/ionic/tp-ionic-3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Provider = (function () {
    function Provider(db) {
        this.db = db;
        this.requettesProvider = [];
        this.itemsCollection = db.collection('advertisements'); //ref()
        console.log('Hello Requettes Provider Provider');
    }
    Provider.prototype.ajouter_global = function (item) {
        console.log("ajout de la page requette " + item.id);
        this.db.collection("advertisements").add({
            category: item.category,
            title: item.title,
            description: item.description,
            author: item.author
        })
            .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
            .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    };
    Provider.prototype.supprimer_global = function (item) {
        console.log("de la page requette" + item.id);
        this.db.collection('advertisements').doc(item.id).delete();
    };
    Provider.prototype.modifier_global = function (item) {
        console.log("modificatoin de la page requette" + item.id);
        console.log("ajout de la page requette" + item.id);
        this.db.collection("advertisements").doc(item.id).update({
            category: item.category,
            title: item.title,
            description: item.description,
            author: item.author
        })
            .then(function (docRef) {
            console.log("Document written with ID: ", docRef);
        })
            .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    };
    Provider.prototype.modifier_photo = function (item, nom_photo) {
        console.log("modificatoin photo" + item.id);
        console.log("ajout de la page requette" + item.id);
        console.log("nom photo " + nom_photo);
        this.db.collection("advertisements").doc(item.id).update({
            photo: nom_photo
        })
            .then(function (docRef) {
            console.log("Document written with ID: ", docRef);
            console.log("Photo ajoutée");
        })
            .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    };
    Provider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], Provider);
    return Provider;
}());

//# sourceMappingURL=provider.js.map

/***/ })

},[366]);
//# sourceMappingURL=main.js.map