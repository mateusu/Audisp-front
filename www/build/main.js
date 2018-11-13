webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backend_service__ = __webpack_require__(33);
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
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, navParams, backend, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backend = backend;
        this.toastCtrl = toastCtrl;
        this.likesList = [];
        this.userId = parseInt(localStorage.getItem('user'));
        if (this.userId.toString() !== 'none') {
            this.logged = true;
            backend.getUserLikes({ userId: this.userId }).subscribe(function (data) {
                _this.likesList = data;
            });
            this.likesList.map(function (row) {
                row.nome = row.nome.charAt(0).toUpperCase() + row.nome.slice(1);
                row.score = row.score;
            });
        }
        else {
            this.logged = false;
        }
    }
    ConfigPage.prototype.ionViewDidLoad = function () {
    };
    ConfigPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ConfigPage.prototype.salvar = function () {
        var _this = this;
        var body = { userId: 0, pautas: [] };
        body.userId = this.userId;
        this.likesList.map(function (pauta) {
            body.pautas.push({
                id: pauta.id,
                score: pauta.score
            });
        });
        this.backend.updateUserLikes(body).subscribe(function (data) {
            if (data.status === 'ok') {
                _this.showToast(data.text);
                console.log(_this.likesList);
            }
            else {
                _this.showToast('Algo deu errado :(');
            }
        });
    };
    ConfigPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        toast.present();
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/config/config.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Configurações</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <h6>Defina seu nível de interesse nas pautas:</h6>\n        <ion-item *ngFor="let l of likesList">\n            <ion-label class="sliderLabel">{{l.nome}}</ion-label>\n            <ion-range min="0" max="100" pin="true" [(ngModel)]="l.score">\n                <ion-icon range-left name="md-thumbs-down"></ion-icon>\n                <ion-icon range-right name="md-thumbs-up"></ion-icon>\n            </ion-range>\n        </ion-item>\n    </ion-list>\n    <button (click)="salvar()" ion-button class="saveBtn submit-btn">Salvar</button>\n\n</ion-content>'/*ion-inline-end:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/config/config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backend_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, viewCtrl, navParams, backend, toastCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.backend = backend;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.register = false;
    };
    LoginPage.prototype.login = function (mail, password) {
        var _this = this;
        this.backend.getAuthorization(mail, password).subscribe(function (data) {
            if (data.status === 'ok') {
                _this.viewCtrl.dismiss();
                localStorage.setItem('logged', 'true');
                localStorage.setItem('user', data.user);
                location.reload();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Email ou senha inválidos',
                    duration: 3000
                });
                toast.present();
            }
        });
    };
    LoginPage.prototype.registrar = function (mail, pass, nome, nasc) {
        var _this = this;
        var user = {
            email: mail,
            senha: pass,
            nome: nome,
            nascimento: nasc
        };
        this.backend.registerUser(user).subscribe(function (data) {
            if (data.status === 'nok') {
                var toast = _this.toastCtrl.create({
                    message: data.text,
                    duration: 3000
                });
                toast.present();
            }
            else if (data.status === 'ok') {
                _this.login(mail, pass);
                _this.viewCtrl.dismiss();
            }
        });
    };
    LoginPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-img *ngIf="!register" class="logo" width="200px" height="200px" src="../../assets/imgs/logo.png" ion-img></ion-img>\n  <ion-row>\n    <ion-col>\n      <ion-list inset>\n        <ion-item [hidden]="!register">\n          <ion-input placeholder="Nome" type="text" #nome></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="Email" type="text" #mail></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="Senha" type="password" #password></ion-input>\n        </ion-item>\n        <ion-item [hidden]="!register">\n          <ion-input placeholder="Nascimento" type="date" #nasc></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button *ngIf="!register" ion-button class="buttons submit-btn" (click)="login(mail.value,password.value)" type="submit">Login\n      </button>\n      <button *ngIf="!register" ion-button color="danger" class="buttons" (click)="cancel()" type="submit">Cancelar\n      </button>\n      <button *ngIf="!register" ion-button class="buttons" (click)="register=true;" clear>Registrar</button>\n\n      <button *ngIf="register" ion-button class="buttons submit-btn" (click)="registrar(mail.value, password.value, nome.value, nasc.value)" type="submit">Registrar\n        </button>\n      <button *ngIf="register" ion-button color="danger" class="buttons" (click)="cancel()" type="submit">Cancelar\n        </button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/audiencia-bloco/audiencia-bloco.module": [
		284,
		2
	],
	"../pages/config/config.module": [
		285,
		1
	],
	"../pages/login/login.module": [
		286,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audiencias_audiencias__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendario_calendario__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__audiencias_audiencias__["a" /* AudienciasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__calendario_calendario__["a" /* CalendarioPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Início" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Audiências" tabIcon="md-list-box"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Calendário" tabIcon="calendar"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backend_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, backend) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.backend = backend;
        var user = localStorage.getItem('user');
        this.backend.getAudienciasSugeridas(user).subscribe(function (data) {
            _this.audiencias = data;
        });
    }
    HomePage.prototype.onInput = function (event) {
        console.log(event);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar placeholder="Buscar Audiência Pública" [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event.target.value)" (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n  <div *ngFor="let aud of audiencias">\n    <page-audiencia-bloco [local]="aud.local" [nome]="aud.nome" [data]="aud.data" [pauta]="aud.pauta" [pautaId]="aud.pautaId"></page-audiencia-bloco>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudienciasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backend_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AudienciasPage = /** @class */ (function () {
    function AudienciasPage(navCtrl, backend) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.backend = backend;
        this.backend.getListaAudiencas().subscribe(function (data) {
            _this.audiencias = data;
        });
    }
    AudienciasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-audiencias',template:/*ion-inline-start:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/audiencias/audiencias.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Audiências</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let aud of audiencias">\n      <h3>\n        <ion-icon name="calendar"></ion-icon> {{aud.local}} - {{aud.data}}\n      </h3>\n\n      <p>Pautas:</p>\n      <p><span *ngFor="let pauta of aud.pauta; let i = index">{{pauta.nome}}<span *ngIf="i!=aud.pauta.length -1">,\n          </span></span></p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/audiencias/audiencias.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */]])
    ], AudienciasPage);
    return AudienciasPage;
}());

//# sourceMappingURL=audiencias.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(navCtrl, calendar) {
        this.navCtrl = navCtrl;
        this.calendar = calendar;
        this.calendar.createCalendar('MyCalendar').then(function (msg) { console.log(msg); }, function (err) { console.log(err); });
    }
    CalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendario',template:/*ion-inline-start:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/calendario/calendario.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Calendário</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n\n<ion-content padding>\n</ion-content>\n'/*ion-inline-end:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/calendario/calendario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudienciaBlocoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backend_service__ = __webpack_require__(33);
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
 * Generated class for the AudienciaBlocoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AudienciaBlocoPage = /** @class */ (function () {
    function AudienciaBlocoPage(navCtrl, navParams, backend, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backend = backend;
        this.toastCtrl = toastCtrl;
        console.log(this.pauta);
    }
    AudienciaBlocoPage.prototype.ionViewDidLoad = function () {
    };
    AudienciaBlocoPage.prototype.likeAudiencia = function () {
        var userId = localStorage.getItem('user');
        if (userId !== 'none') {
            var body = { userId: userId, pautaId: this.pautaId };
            this.backend.likeAudiencia(body).subscribe(function (data) {
                console.log(data);
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Para curtir, é necessário logar',
                duration: 3000
            });
            toast.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AudienciaBlocoPage.prototype, "nome", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AudienciaBlocoPage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AudienciaBlocoPage.prototype, "pauta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AudienciaBlocoPage.prototype, "local", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AudienciaBlocoPage.prototype, "pautaId", void 0);
    AudienciaBlocoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-audiencia-bloco',template:/*ion-inline-start:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/audiencia-bloco/audiencia-bloco.html"*/'<ion-content class="page">\n\n  <ion-card class="bloco">\n\n    <ion-item>\n\n      <h2>{{nome}}</h2>\n      <div>\n        <p>\n          <ion-icon style="margin: 1vh 0 0 0" name="calendar"></ion-icon> {{local}} - {{data}}\n        </p>\n      </div>\n    </ion-item>\n\n\n    <ion-card-content>\n      <p><span *ngFor="let p of pauta; let i = index">{{p}}<span *ngIf="i!=pauta.length -1">,\n          </span></span></p> \n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button (click)="likeAudiencia()" ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>Like</div>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/pages/audiencia-bloco/audiencia-bloco.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object])
    ], AudienciaBlocoPage);
    return AudienciaBlocoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=audiencia-bloco.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_audiencias_audiencias__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_backend_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_calendario_calendario__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_audiencia_bloco_audiencia_bloco__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_config_config__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_local_notifications__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_calendar__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_audiencias_audiencias__["a" /* AudienciasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_audiencia_bloco_audiencia_bloco__["a" /* AudienciaBlocoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/audiencia-bloco/audiencia-bloco.module#AudienciaBlocoPageModule', name: 'AudienciaBlocoPage', segment: 'audiencia-bloco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_audiencias_audiencias__["a" /* AudienciasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_audiencia_bloco_audiencia_bloco__["a" /* AudienciaBlocoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__services_backend_service__["a" /* BackendService */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_config_config__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl, localNotifications) {
        this.modalCtrl = modalCtrl;
        this.localNotifications = localNotifications;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Configurações', component: __WEBPACK_IMPORTED_MODULE_6__pages_config_config__["a" /* ConfigPage */] }
        ];
        var checkNotif = localStorage.getItem('notifi');
        console.log(checkNotif);
        if (checkNotif === 'on')
            this.notifi = true;
        else {
            this.notifi = false;
        }
        var status = localStorage.getItem('logged');
        if (status !== 'none') {
            this.userLogged = true;
        }
        else {
            this.userLogged = false;
        }
    }
    MyApp.prototype.ionViewDidLoad = function () {
        this.nav.setRoot(this.rootPage);
    };
    MyApp.prototype.login = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
        profileModal.present();
        profileModal.onDidDismiss(function (data) {
            console.log(data);
        });
    };
    MyApp.prototype.logout = function () {
        localStorage.setItem('logged', 'none');
        localStorage.setItem('user', 'none');
        location.reload();
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    MyApp.prototype.setNotificacao = function (event) {
        if (event.value) {
            this.notifi = true;
            localStorage.setItem('notifi', 'on');
            this.localNotifications.schedule({
                id: 1,
                title: 'Oi',
                text: 'Notificacao teste',
                trigger: { firstAt: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay(), 12, 0, 0, 0) },
                every: 'day'
            });
        }
        else {
            this.notifi = false;
            localStorage.setItem('notifi', 'off');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <ion-item>\n                <ion-label>Notificações</ion-label>\n                <ion-toggle (ionChange)="setNotificacao($event)" [(ngModel)]="notifi"></ion-toggle>\n            </ion-item>\n            <div *ngIf="userLogged">\n                <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                    {{p.title}}\n                </button>\n            </div>\n            <button (click)="logout()" *ngIf="userLogged" menuClose ion-item>\n                Sair\n            </button>\n            <button (click)="login()" *ngIf="!userLogged" menuClose ion-item>\n                Entrar\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/matheus.leu@ibm.com/Documents/EACH/rp2/Audisp-front/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.http = http;
        this.url = "http://localhost:6005/";
    }
    BackendService.prototype.getListaAudiencas = function () {
        return this.http.get(this.url + 'aud/lista', {});
    };
    BackendService.prototype.getAudienciasSugeridas = function (user) {
        return this.http.post(this.url + 'aud/sugeridas', { id: user });
    };
    BackendService.prototype.getUserLikes = function (body) {
        return this.http.post(this.url + 'user/likes', body);
    };
    BackendService.prototype.updateUserLikes = function (body) {
        return this.http.put(this.url + 'user/updateLikes', body);
    };
    BackendService.prototype.getAuthorization = function (email, senha) {
        return this.http.post(this.url + 'auth/validate', { email: email, senha: senha });
    };
    BackendService.prototype.registerUser = function (userData) {
        return this.http.post(this.url + 'auth/register', userData);
    };
    BackendService.prototype.likeAudiencia = function (body) {
        return this.http.put(this.url + 'user/likeAud', body);
    };
    BackendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], BackendService);
    return BackendService;
    var _a;
}());

//# sourceMappingURL=backend-service.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map