(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_user_radio_user_radio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-radio/user-radio.component */ "./src/app/components/user-radio/user-radio.component.ts");
/* harmony import */ var _components_user_subscription_user_subscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-subscription/user-subscription.component */ "./src/app/components/user-subscription/user-subscription.component.ts");
/* harmony import */ var _components_user_radio_rock_rock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-radio/rock/rock.component */ "./src/app/components/user-radio/rock/rock.component.ts");
/* harmony import */ var _components_user_radio_metal_metal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-radio/metal/metal.component */ "./src/app/components/user-radio/metal/metal.component.ts");
/* harmony import */ var _components_user_radio_edm_edm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-radio/edm/edm.component */ "./src/app/components/user-radio/edm/edm.component.ts");
/* harmony import */ var _components_user_radio_country_country_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-radio/country/country.component */ "./src/app/components/user-radio/country/country.component.ts");
/* harmony import */ var _components_user_radio_rap_rap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-radio/rap/rap.component */ "./src/app/components/user-radio/rap/rap.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_user_unsubscribe_user_unsubscribe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user-unsubscribe/user-unsubscribe.component */ "./src/app/components/user-unsubscribe/user-unsubscribe.component.ts");
/* harmony import */ var _components_user_unsubpage1_user_unsubpage1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user-unsubpage1/user-unsubpage1.component */ "./src/app/components/user-unsubpage1/user-unsubpage1.component.ts");
/* harmony import */ var _components_user_unsubpage2_user_unsubpage2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user-unsubpage2/user-unsubpage2.component */ "./src/app/components/user-unsubpage2/user-unsubpage2.component.ts");
/* harmony import */ var _components_freeradio_freeradio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/freeradio/freeradio.component */ "./src/app/components/freeradio/freeradio.component.ts");
















var routes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'userradio',
        component: _components_user_radio_user_radio_component__WEBPACK_IMPORTED_MODULE_4__["UserRadioComponent"]
    },
    {
        path: 'userradio/rock',
        component: _components_user_radio_rock_rock_component__WEBPACK_IMPORTED_MODULE_6__["RockComponent"]
    },
    {
        path: 'userradio/metal',
        component: _components_user_radio_metal_metal_component__WEBPACK_IMPORTED_MODULE_7__["MetalComponent"]
    },
    {
        path: 'userradio/edm',
        component: _components_user_radio_edm_edm_component__WEBPACK_IMPORTED_MODULE_8__["EdmComponent"]
    },
    {
        path: 'userradio/country',
        component: _components_user_radio_country_country_component__WEBPACK_IMPORTED_MODULE_9__["CountryComponent"]
    },
    {
        path: 'userradio/rap',
        component: _components_user_radio_rap_rap_component__WEBPACK_IMPORTED_MODULE_10__["RapComponent"]
    },
    {
        path: 'usersubscription',
        component: _components_user_subscription_user_subscription_component__WEBPACK_IMPORTED_MODULE_5__["UserSubscriptionComponent"]
    },
    {
        path: 'signup',
        component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"]
    },
    {
        path: 'userunsubbing',
        component: _components_user_unsubscribe_user_unsubscribe_component__WEBPACK_IMPORTED_MODULE_12__["UserUnsubscribeComponent"]
    },
    {
        path: 'userunsubbingchance',
        component: _components_user_unsubpage1_user_unsubpage1_component__WEBPACK_IMPORTED_MODULE_13__["UserUnsubpage1Component"]
    },
    {
        path: 'userunsubchance2',
        component: _components_user_unsubpage2_user_unsubpage2_component__WEBPACK_IMPORTED_MODULE_14__["UserUnsubpage2Component"]
    },
    {
        path: 'freeradio',
        component: _components_freeradio_freeradio_component__WEBPACK_IMPORTED_MODULE_15__["FreeradioComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'music-app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.refresh = function () {
        window.location.href = 'http://localhost:8080/';
    };
    AppComponent.prototype.getUser = function () {
        console.log(JSON.parse(localStorage.getItem("authToken")).firstName),
            console.log(JSON.parse(localStorage.getItem("authToken")).lastName);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_user_radio_user_radio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-radio/user-radio.component */ "./src/app/components/user-radio/user-radio.component.ts");
/* harmony import */ var _components_user_subscription_user_subscription_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-subscription/user-subscription.component */ "./src/app/components/user-subscription/user-subscription.component.ts");
/* harmony import */ var _components_user_radio_country_country_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-radio/country/country.component */ "./src/app/components/user-radio/country/country.component.ts");
/* harmony import */ var _components_user_radio_edm_edm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-radio/edm/edm.component */ "./src/app/components/user-radio/edm/edm.component.ts");
/* harmony import */ var _components_user_radio_metal_metal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-radio/metal/metal.component */ "./src/app/components/user-radio/metal/metal.component.ts");
/* harmony import */ var _components_user_radio_rap_rap_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user-radio/rap/rap.component */ "./src/app/components/user-radio/rap/rap.component.ts");
/* harmony import */ var _components_user_radio_rock_rock_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user-radio/rock/rock.component */ "./src/app/components/user-radio/rock/rock.component.ts");
/* harmony import */ var _components_freeradio_freeradio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/freeradio/freeradio.component */ "./src/app/components/freeradio/freeradio.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_user_unsubpage1_user_unsubpage1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-unsubpage1/user-unsubpage1.component */ "./src/app/components/user-unsubpage1/user-unsubpage1.component.ts");
/* harmony import */ var _components_user_unsubpage2_user_unsubpage2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user-unsubpage2/user-unsubpage2.component */ "./src/app/components/user-unsubpage2/user-unsubpage2.component.ts");
/* harmony import */ var _components_user_unsubscribe_user_unsubscribe_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user-unsubscribe/user-unsubscribe.component */ "./src/app/components/user-unsubscribe/user-unsubscribe.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _components_user_radio_user_radio_component__WEBPACK_IMPORTED_MODULE_7__["UserRadioComponent"],
                _components_user_subscription_user_subscription_component__WEBPACK_IMPORTED_MODULE_8__["UserSubscriptionComponent"],
                _components_user_radio_country_country_component__WEBPACK_IMPORTED_MODULE_9__["CountryComponent"],
                _components_user_radio_edm_edm_component__WEBPACK_IMPORTED_MODULE_10__["EdmComponent"],
                _components_user_radio_metal_metal_component__WEBPACK_IMPORTED_MODULE_11__["MetalComponent"],
                _components_user_radio_rap_rap_component__WEBPACK_IMPORTED_MODULE_12__["RapComponent"],
                _components_user_radio_rock_rock_component__WEBPACK_IMPORTED_MODULE_13__["RockComponent"],
                _components_freeradio_freeradio_component__WEBPACK_IMPORTED_MODULE_14__["FreeradioComponent"],
                _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__["SignUpComponent"],
                _components_user_unsubpage1_user_unsubpage1_component__WEBPACK_IMPORTED_MODULE_16__["UserUnsubpage1Component"],
                _components_user_unsubpage2_user_unsubpage2_component__WEBPACK_IMPORTED_MODULE_17__["UserUnsubpage2Component"],
                _components_user_unsubscribe_user_unsubscribe_component__WEBPACK_IMPORTED_MODULE_18__["UserUnsubscribeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"]
            ],
            providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_22__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_22__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/freeradio/freeradio.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/freeradio/freeradio.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: 'Allerta', arial, Tahoma;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: linear-gradient(to left, #7700aa, #8800ff);\r\n  text-align:center;\r\n  color:#fff;\r\n}\r\nh3{\r\n  text-shadow:1px 1px 1px #fff;\r\n}\r\n.container-audio {\r\n  width: 46%;\r\n  /* height: auto; */\r\n  /* padding: 20px; */\r\n  border-radius: 5px;\r\n  background-color: #eee;\r\n  color: #444;\r\n  margin: 20px auto;\r\n  overflow: hidden;\r\n}\r\naudio {\r\n  width:50%;\r\n}\r\naudio:nth-child(2), audio:nth-child(4), audio:nth-child(6) {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 {\r\n  width: 23px;\r\n  height: 5em;\r\n  border-radius: 5px;\r\n  margin: 0 10px 0 0;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.container-audio .colum1:last-child {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 .row {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  background: linear-gradient(to up, #7700aa, #8800ff);\r\n  position: absolute;\r\n  -webkit-animation: Rofa 10s infinite ease-in-out;\r\n  animation: Rofa 10s infinite ease-in-out;\r\n  bottom: 0;\r\n}\r\n.container-audio .colum1:nth-of-type(1) .row {\r\n  -webkit-animation-delay: 3.99s;\r\n  animation-delay: 3.99s;\r\n}\r\n.container-audio .colum1:nth-of-type(2) .row {\r\n  -webkit-animation-delay: 3.80s;\r\n  animation-delay: 3.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(3) .row {\r\n  -webkit-animation-delay: 3.70s;\r\n  animation-delay: 3.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(4) .row {\r\n  -webkit-animation-delay: 3.60s;\r\n  animation-delay: 3.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(5) .row {\r\n  -webkit-animation-delay: 3.50s;\r\n  animation-delay: 3.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(6) .row {\r\n  -webkit-animation-delay: 3.40s;\r\n  animation-delay: 3.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(7) .row {\r\n  -webkit-animation-delay: 3.30s;\r\n  animation-delay: 3.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(8) .row {\r\n  -webkit-animation-delay: 3.20s;\r\n  animation-delay: 3.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(9) .row {\r\n  -webkit-animation-delay: 3.10s;\r\n  animation-delay: 3.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(10) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(11) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(12) .row {\r\n  -webkit-animation-delay: 2.10s;\r\n  animation-delay: 2.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(13) .row {\r\n  -webkit-animation-delay: 2.20s;\r\n  animation-delay: 2.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(14) .row {\r\n  -webkit-animation-delay: 1.30s;\r\n  animation-delay: 1.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(15) .row {\r\n  -webkit-animation-delay: 1.40s;\r\n  animation-delay: 1.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(16) .row {\r\n  -webkit-animation-delay: 1.50s;\r\n  animation-delay: 1.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(17) .row {\r\n  -webkit-animation-delay: 1.60s;\r\n  animation-delay: 1.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(18) .row {\r\n  -webkit-animation-delay: 1.70s;\r\n  animation-delay: 1.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(19) .row {\r\n  -webkit-animation-delay: 1.80s;\r\n  animation-delay: 1.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(20) .row {\r\n  -webkit-animation-delay: 2s;\r\n  animation-delay: 2s;\r\n}\r\n@-webkit-keyframes Rofa {\r\n  0% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: yellow;\r\n  }\r\n\r\n  5% {\r\n    height: 100%;\r\n    -webkit-transform: translatey(15px);\r\n    transform: translatey(15px);\r\n    background-color: fuchsia;\r\n  }\r\n  10% {\r\n    height: 90%;\r\n    transform: translatey(0);\r\n    -webkit-transform: translatey(0);\r\n    background-color: bisque;\r\n  }\r\n\r\n  15% {\r\n    height: 80%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  20% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  25% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  30% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  35% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  40% {\r\n    height: 60%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  45% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  50% {\r\n    height: 50%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  55% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  60% {\r\n    height: 40%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  65% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  70% {\r\n    height: 30%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  75% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  80% {\r\n    height: 20%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  85% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  90% {\r\n    height: 10%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  95% {\r\n    height: 5%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  100% {\r\n    height: 0;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n}\r\nh2\r\n{\r\n  text-align: center;\r\n}\r\nul{\r\n  text-align: center;\r\n}\r\n.arrow-right {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-left: 25px solid black;\r\n  background-color:transparent;\r\n}\r\n.arrow-left {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-right: 25px solid black;\r\n}\r\nbutton{\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmVlcmFkaW8vZnJlZXJhZGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzREFBc0Q7RUFDdEQsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0RBQW9EO0VBQ3BELGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsd0NBQXdDO0VBQ3hDLFNBQVM7QUFDWDtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNkJB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QVE7RUFDUixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mcmVlcmFkaW8vZnJlZXJhZGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogJ0FsbGVydGEnLCBhcmlhbCwgVGFob21hO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NzAwYWEsICM4ODAwZmYpO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuaDN7XHJcbiAgdGV4dC1zaGFkb3c6MXB4IDFweCAxcHggI2ZmZjtcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIHtcclxuICB3aWR0aDogNDYlO1xyXG4gIC8qIGhlaWdodDogYXV0bzsgKi9cclxuICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuYXVkaW8ge1xyXG4gIHdpZHRoOjUwJTtcclxufVxyXG5cclxuYXVkaW86bnRoLWNoaWxkKDIpLCBhdWRpbzpudGgtY2hpbGQoNCksIGF1ZGlvOm50aC1jaGlsZCg2KSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMSB7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgaGVpZ2h0OiA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xIC5yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHVwLCAjNzcwMGFhLCAjODgwMGZmKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IFJvZmEgMTBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogUm9mYSAxMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy45OXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjk5cztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMikgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuODBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy44MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDMpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjcwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuNzBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg0KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy42MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjYwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoNSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuNTBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy41MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDYpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjQwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuNDBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg3KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy4zMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjMwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoOCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuMjBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy4yMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDkpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjEwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuMTBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxMCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxMSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxMikgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMTBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4xMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDEzKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi4yMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjIwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTQpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjMwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMzBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxNSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNDBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS40MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE2KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS41MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjUwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTcpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjYwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuNjBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxOCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNzBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS43MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE5KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS44MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjgwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMjApIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgUm9mYSB7XHJcbiAgMCUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIH1cclxuXHJcbiAgNSUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMTVweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMTVweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmdWNoc2lhO1xyXG4gIH1cclxuICAxMCUge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICB9XHJcblxyXG4gIDE1JSB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDMwJSB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDM1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNTUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDY1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgODUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgOTAlIHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDk1JSB7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5oMlxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG51bHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdy1yaWdodCB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItbGVmdDogMjVweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYXJyb3ctbGVmdCB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/freeradio/freeradio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/freeradio/freeradio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href='https://fonts.googleapis.com/css?family=Allerta' rel='stylesheet'>\n<ul>\n  <h2>Free Radio</h2>\n  <h2>Now playing</h2>\n  <div *ngFor = \"let song of songs\">\n      <div *ngIf = \"song.song_id === currentSong\">\n        {{ song.song_title }} <br>\n        {{ song.artist_name }} <br>\n        <div id=\"buttons\">\n        </div>\n        <div>\n        <span>\n          <audio autoplay controls preload=\"auto\" (ended)=\"next()\">\n            <source src=\"{{ song.song_link }}\" type=\"audio/mp3\">\n            Your browser dose not Support the audio Tag\n          </audio>\n        </span>\n        </div>\n      </div>\n    </div>\n</ul>\n\n<!--The bottom with the columns-->\n<div class=\"container-audio\">\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n</div>\n\n\n<h2><a routerLink = \"/signup\" routerLinkActive=\"active\">Sign up Today!</a></h2>\n"

/***/ }),

/***/ "./src/app/components/freeradio/freeradio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/freeradio/freeradio.component.ts ***!
  \*************************************************************/
/*! exports provided: FreeradioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeradioComponent", function() { return FreeradioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_songs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/songs.service */ "./src/app/services/songs.service.ts");



var FreeradioComponent = /** @class */ (function () {
    function FreeradioComponent(songsService) {
        this.songsService = songsService;
    }
    FreeradioComponent.prototype.next = function () {
        this.currentSong = this.songs[this.currentSong].song_id + 3;
        if (this.currentSong > 9) {
            this.currentSong = 1;
        }
    };
    FreeradioComponent.prototype.previous = function () {
        this.currentSong = this.songs[this.currentSong].song_id - 5;
        if (this.currentSong < 1) {
            this.currentSong = 9;
        }
    };
    // getMockSongs(): void {
    //   this.songsService.getMockSongs()
    //     .subscribe(songs => this.songs = songs);
    // }
    FreeradioComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getMockSongs();
        this.currentSong = 1;
        console.log('all songs are soon to be displayed.. from the backend.. maybe..');
        this.songsService.getAllSongs()
            .subscribe(function (songs) {
            _this.songs = songs;
        });
    };
    FreeradioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freeradio',
            template: __webpack_require__(/*! ./freeradio.component.html */ "./src/app/components/freeradio/freeradio.component.html"),
            styles: [__webpack_require__(/*! ./freeradio.component.css */ "./src/app/components/freeradio/freeradio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_songs_service__WEBPACK_IMPORTED_MODULE_2__["SongsService"]])
    ], FreeradioComponent);
    return FreeradioComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*,\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  overflow-y: scroll;\r\n}\r\n\r\nbody {\r\n  background: #c1bdba;\r\n  font-family: \"Titillium Web\", sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #1ab188;\r\n  transition: 0.5s ease;\r\n}\r\n\r\na:hover {\r\n  color: #179b77;\r\n}\r\n\r\n.form {\r\n  background: rgba(19, 35, 47, 0.9);\r\n  padding: 40px;\r\n  max-width: 600px;\r\n  margin: 40px auto;\r\n  border-radius: 4px;\r\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);\r\n}\r\n\r\n.tab-group {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0 0 40px 0;\r\n}\r\n\r\n.tab-group:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.tab-group li a {\r\n  display: block;\r\n  text-decoration: none;\r\n  padding: 15px;\r\n  background: rgba(160, 179, 176, 0.25);\r\n  color: #a0b3b0;\r\n  font-size: 20px;\r\n  float: left;\r\n  width: 50%;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: 0.5s ease;\r\n}\r\n\r\n.tab-group li a:hover {\r\n  background: #179b77;\r\n  color: #ffffff;\r\n}\r\n\r\n.tab-group .active a {\r\n  background: #1ab188;\r\n  color: #ffffff;\r\n}\r\n\r\n.tab-content > div:last-child {\r\n  display: none;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-weight: 300;\r\n  margin: 0 0 40px;\r\n}\r\n\r\nlabel {\r\n  -webkit-transform: translateY(6px);\r\n  transform: translateY(6px);\r\n  left: 13px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  transition: all 0.25s ease;\r\n  -webkit-backface-visibility: hidden;\r\n  pointer-events: none;\r\n  font-size: 22px;\r\n}\r\n\r\nlabel .req {\r\n  margin: 2px;\r\n  color: #1ab188;\r\n}\r\n\r\nlabel.active {\r\n  -webkit-transform: translateY(50px);\r\n  transform: translateY(50px);\r\n  left: 2px;\r\n  font-size: 14px;\r\n}\r\n\r\nlabel.active .req {\r\n  opacity: 0;\r\n}\r\n\r\nlabel.highlight {\r\n  color: #ffffff;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-size: 22px;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5px 10px;\r\n  background: none;\r\n  background-image: none;\r\n  border: 1px solid #a0b3b0;\r\n  color: #ffffff;\r\n  border-radius: 0;\r\n  transition: border-color 0.25s ease, box-shadow 0.25s ease;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  outline: 0;\r\n  border-color: #1ab188;\r\n}\r\n\r\ntextarea {\r\n  border: 2px solid #a0b3b0;\r\n  resize: vertical;\r\n}\r\n\r\n.field-wrap {\r\n  position: relative;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.top-row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.top-row > div {\r\n  float: left;\r\n  width: 48%;\r\n  margin-right: 4%;\r\n}\r\n\r\n.top-row > div:last-child {\r\n  margin: 0;\r\n}\r\n\r\n.button {\r\n  border: 0;\r\n  outline: none;\r\n  border-radius: 0;\r\n  padding: 15px 0;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  background: #1ab188;\r\n  color: #ffffff;\r\n  transition: all 0.5s ease;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.button:hover, .button:focus {\r\n  background: #179b77;\r\n}\r\n\r\n.button-block {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\nh3{\r\n  color: rgba(255, 255, 255, 0.5);\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBEQUEwRDtBQUM1RDs7QUFDQTs7RUFFRSxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKixcclxuKjpiZWZvcmUsXHJcbio6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogI2MxYmRiYTtcclxuICBmb250LWZhbWlseTogXCJUaXRpbGxpdW0gV2ViXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzFhYjE4ODtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbn1cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxNzliNzc7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE5LCAzNSwgNDcsIDAuOSk7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IDRweCByZ2JhKDE5LCAzNSwgNDcsIDAuMyk7XHJcbn1cclxuXHJcbi50YWItZ3JvdXAge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMCA0MHB4IDA7XHJcbn1cclxuLnRhYi1ncm91cDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4udGFiLWdyb3VwIGxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTYwLCAxNzksIDE3NiwgMC4yNSk7XHJcbiAgY29sb3I6ICNhMGIzYjA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbn1cclxuLnRhYi1ncm91cCBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMTc5Yjc3O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi50YWItZ3JvdXAgLmFjdGl2ZSBhIHtcclxuICBiYWNrZ3JvdW5kOiAjMWFiMTg4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbjogMCAwIDQwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xyXG4gIGxlZnQ6IDEzcHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxubGFiZWwgLnJlcSB7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgY29sb3I6ICMxYWIxODg7XHJcbn1cclxuXHJcbmxhYmVsLmFjdGl2ZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gIGxlZnQ6IDJweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxubGFiZWwuYWN0aXZlIC5yZXEge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbmxhYmVsLmhpZ2hsaWdodCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwYjNiMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLCBib3gtc2hhZG93IDAuMjVzIGVhc2U7XHJcbn1cclxuaW5wdXQ6Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJvcmRlci1jb2xvcjogIzFhYjE4ODtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNhMGIzYjA7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLmZpZWxkLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4udG9wLXJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4udG9wLXJvdyA+IGRpdiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDQ4JTtcclxuICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG59XHJcbi50b3Atcm93ID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgYmFja2dyb3VuZDogIzFhYjE4ODtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG4uYnV0dG9uOmhvdmVyLCAuYnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjMTc5Yjc3O1xyXG59XHJcblxyXG4uYnV0dG9uLWJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDN7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n    <ul class=\"tab-group\">\n      <li class=\"tab\"><a routerLink=\"/signup\">Sign Up</a></li>\n      <li class=\"tab active\"><a routerLink=\"/login\">Log In</a></li>\n    </ul>\n\n    <div id=\"login\">\n      <h1>Welcome Back!</h1>\n\n      <form #loginForm = \"ngForm\" (ngSubmit)=\"loginSubmit()\">\n\n        <div class=\"field-wrap\">\n          <label>\n            Email Address<span class=\"req\">*</span>\n          </label>\n          <input type=\"email\"\n                 required=\"required\"\n                 name = \"email\"\n                 [(ngModel)] = \"email\" >\n        </div>\n\n        <div class=\"field-wrap\">\n          <label>\n            Password<span class=\"req\">*</span>\n          </label>\n          <input type=\"password\"\n                 name=\"password\"\n                 id=\"password\"\n                 name = \"ngModel\"\n                 required\n                 [(ngModel)] = \"password\">\n        </div>\n        <!--<button class=\"button button-block\" routerLink=\"/userradio\">Log In</button>-->\n        <button class = \"button button-block\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\n      </form>\n      <h3>Or listen to our free radio <a routerLink=\"/freeradio\" routerLinkActive=\"active\">here</a></h3>\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/userradio';
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.authService.authenticate(this.email, this.password, function () { return _this.router.navigate([_this.returnUrl]); }, function (err) {
            console.log(err);
            console.log('not logged in');
        });
        console.log(this.email);
        console.log(this.password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #333;\r\n}\r\nli {\r\n  float: left;\r\n}\r\nli a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n/* Change the link color to #111 (black) on hover */\r\nli a:hover {\r\n  background-color: #111;\r\n}\r\nbutton{\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n  height: 50px;\r\n  width: 100px;\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 100%;\r\n  font-weight: bold;\r\n}\r\nbutton:hover{\r\n  background-color: #111;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFDQSxtREFBbUQ7QUFDbkQ7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbn1cclxubGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbmxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4vKiBDaGFuZ2UgdGhlIGxpbmsgY29sb3IgdG8gIzExMSAoYmxhY2spIG9uIGhvdmVyICovXHJcbmxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbn1cclxuYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul class=\"nav navbar-nav\">\n    <li class=\"nav-item\" *ngFor=\"let item of navItems\">\n      <a class=\"nav-link\" [routerLink]=\"['/', item.link]\"> {{item.title}} </a>\n    </li>\n    <li>\n      <a class=\"nav-link\" type=\"submit\" (click)=\"Logout()\">Logout</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
    };
    NavComponent.prototype.Logout = function () {
        localStorage.removeItem('authToken');
        this.router.navigate([this.returnUrl]);
        // window.location.reload();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NavComponent.prototype, "navItems", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*,\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  overflow-y: scroll;\r\n}\r\n\r\nbody {\r\n  background: #c1bdba;\r\n  font-family: \"Titillium Web\", sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #1ab188;\r\n  transition: 0.5s ease;\r\n}\r\n\r\na:hover {\r\n  color: #179b77;\r\n}\r\n\r\n.form {\r\n  background: rgba(19, 35, 47, 0.9);\r\n  padding: 40px;\r\n  max-width: 600px;\r\n  margin: 40px auto;\r\n  border-radius: 4px;\r\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);\r\n}\r\n\r\n.tab-group {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0 0 40px 0;\r\n}\r\n\r\n.tab-group:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.tab-group li a {\r\n  display: block;\r\n  text-decoration: none;\r\n  padding: 15px;\r\n  background: rgba(160, 179, 176, 0.25);\r\n  color: #a0b3b0;\r\n  font-size: 20px;\r\n  float: left;\r\n  width: 50%;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: 0.5s ease;\r\n}\r\n\r\n.tab-group li a:hover {\r\n  background: #179b77;\r\n  color: #ffffff;\r\n}\r\n\r\n.tab-group .active a {\r\n  background: #1ab188;\r\n  color: #ffffff;\r\n}\r\n\r\n.tab-content > div:last-child {\r\n  display: none;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-weight: 300;\r\n  margin: 0 0 40px;\r\n}\r\n\r\nh3{\r\n  color: rgba(255, 255, 255, 0.5);\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\nlabel {\r\n  -webkit-transform: translateY(6px);\r\n  transform: translateY(6px);\r\n  left: 13px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  transition: all 0.25s ease;\r\n  -webkit-backface-visibility: hidden;\r\n  pointer-events: none;\r\n  font-size: 22px;\r\n}\r\n\r\nlabel .req {\r\n  margin: 2px;\r\n  color: #1ab188;\r\n}\r\n\r\nlabel.active {\r\n  -webkit-transform: translateY(50px);\r\n  transform: translateY(50px);\r\n  left: 2px;\r\n  font-size: 14px;\r\n}\r\n\r\nlabel.active .req {\r\n  opacity: 0;\r\n}\r\n\r\nlabel.highlight {\r\n  color: #ffffff;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-size: 22px;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5px 10px;\r\n  background: none;\r\n  background-image: none;\r\n  border: 1px solid #a0b3b0;\r\n  color: #ffffff;\r\n  border-radius: 0;\r\n  transition: border-color 0.25s ease, box-shadow 0.25s ease;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  outline: 0;\r\n  border-color: #1ab188;\r\n}\r\n\r\ntextarea {\r\n  border: 2px solid #a0b3b0;\r\n  resize: vertical;\r\n}\r\n\r\n.field-wrap {\r\n  position: relative;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.top-row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.top-row > div {\r\n  float: left;\r\n  width: 48%;\r\n  margin-right: 4%;\r\n}\r\n\r\n.top-row > div:last-child {\r\n  margin: 0;\r\n}\r\n\r\n.button {\r\n  border: 0;\r\n  outline: none;\r\n  border-radius: 0;\r\n  padding: 15px 0;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  background: #1ab188;\r\n  color: #ffffff;\r\n  transition: all 0.5s ease;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.button:hover, .button:focus {\r\n  background: #179b77;\r\n}\r\n\r\n.button-block {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.forgot {\r\n  margin-top: -20px;\r\n  text-align: right;\r\n}\r\n\r\nh2{\r\n  color: rgba(255, 255, 255, 0.5);\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwREFBMEQ7QUFDNUQ7O0FBQ0E7O0VBRUUsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKixcclxuKjpiZWZvcmUsXHJcbio6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogI2MxYmRiYTtcclxuICBmb250LWZhbWlseTogXCJUaXRpbGxpdW0gV2ViXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzFhYjE4ODtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbn1cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxNzliNzc7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE5LCAzNSwgNDcsIDAuOSk7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IDRweCByZ2JhKDE5LCAzNSwgNDcsIDAuMyk7XHJcbn1cclxuXHJcbi50YWItZ3JvdXAge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMCA0MHB4IDA7XHJcbn1cclxuLnRhYi1ncm91cDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4udGFiLWdyb3VwIGxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTYwLCAxNzksIDE3NiwgMC4yNSk7XHJcbiAgY29sb3I6ICNhMGIzYjA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbn1cclxuLnRhYi1ncm91cCBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMTc5Yjc3O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi50YWItZ3JvdXAgLmFjdGl2ZSBhIHtcclxuICBiYWNrZ3JvdW5kOiAjMWFiMTg4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbjogMCAwIDQwcHg7XHJcbn1cclxuaDN7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xyXG4gIGxlZnQ6IDEzcHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxubGFiZWwgLnJlcSB7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgY29sb3I6ICMxYWIxODg7XHJcbn1cclxuXHJcbmxhYmVsLmFjdGl2ZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gIGxlZnQ6IDJweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxubGFiZWwuYWN0aXZlIC5yZXEge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbmxhYmVsLmhpZ2hsaWdodCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwYjNiMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLCBib3gtc2hhZG93IDAuMjVzIGVhc2U7XHJcbn1cclxuaW5wdXQ6Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJvcmRlci1jb2xvcjogIzFhYjE4ODtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNhMGIzYjA7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLmZpZWxkLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4udG9wLXJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4udG9wLXJvdyA+IGRpdiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDQ4JTtcclxuICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG59XHJcbi50b3Atcm93ID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgYmFja2dyb3VuZDogIzFhYjE4ODtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG4uYnV0dG9uOmhvdmVyLCAuYnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjMTc5Yjc3O1xyXG59XHJcblxyXG4uYnV0dG9uLWJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcmdvdCB7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmgye1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\" [hidden] = \"submitted\">\n    <ul class=\"tab-group\">\n      <li class=\"tab active\"><a routerLink=\"/signup\">Sign Up</a></li>\n      <li class=\"tab\"><a routerLink=\"/login\">Log In</a></li>\n    </ul>\n\n    <div class=\"tab-content\">\n      <div id=\"signup\">\n        <div class = \"field-wrap\">\n        <h1>Sign Up for Free</h1>\n\n        <form action=\"/\" method=\"post\" (ngSubmit) = \"signUp(signupForm)\" #signupForm=\"ngForm\">\n          <div class=\"top-row\">\n            <div class=\"field-wrap\">\n              <label>\n                First Name<span class=\"req\">*</span>\n              </label>\n              <input type=\"text\" ngModel name=\"firstname\" required autocomplete=\"off\" />\n            </div>\n\n            <div class=\"field-wrap\">\n              <label>\n                Last Name<span class=\"req\">*</span>\n              </label>\n              <input ngModel name=\"lastname\" type=\"text\"required autocomplete=\"off\"/>\n            </div>\n          </div>\n\n          <div class=\"field-wrap\">\n            <label>\n              Email Address<span class=\"req\">*</span>\n            </label>\n            <input ngModel name=\"email\" type=\"email\"required autocomplete=\"off\"/>\n          </div>\n\n          <div class=\"field-wrap\">\n            <label>\n              Set A Password<span class=\"req\">*</span>\n            </label>\n            <input ngModel name=\"password\" type=\"password\"required autocomplete=\"off\"/>\n          </div>\n          <button type=\"submit\" class=\"button button-block\" [disabled] = \"!signupForm.valid\">Get Started</button>\n        </form>\n        <h3>Or listen to our free raido <a routerLink=\"/freeradio\" routerLinkActive=\"active\">here</a></h3>\n      </div>\n    </div>\n\n      <div id=\"login\">\n        <h1>Welcome Back!</h1>\n        <form action=\"/\" method=\"post\">\n          <div class=\"field-wrap\">\n            <label>\n              Email Address<span class=\"req\">*</span>\n            </label>\n            <input type=\"email\"required autocomplete=\"off\"/>\n          </div>\n          <div class=\"field-wrap\">\n            <label>\n              Password<span class=\"req\">*</span>\n            </label>\n            <input type=\"password\"required autocomplete=\"off\"/>\n          </div>\n          <p class=\"forgot\"><a href=\"#\">Forgot Password?</a></p>\n          <button class=\"button button-block\">Log In</button>\n        </form>\n        <h2>Or listen to our free raido <a routerLink=\"/freeradio\" routerLinkActive=\"active\">here</a></h2>\n      </div>\n    </div><!-- tab-content -->\n  </div>\n\n  <div class=\"form\" *ngIf=\"submitted\">\n    <div class=\"tab-content\">\n    <h3>Thanks for signing up. <br> click <a routerLink=\"/login\">here</a> to log into your new account</h3>\n    </div>\n  </div>\n\n<!-- <h2>Or listen to our free raido <a routerLink=\"/freeradio\" routerLinkActive=\"active\">here</a></h2> -->\n\n  <!--<h1>Welcome to Gittunes!</h1>-->\n  <!--<form>-->\n    <!--<h3>Please enter in the following information for our services</h3>-->\n    <!--<div>-->\n      <!--<input type=\"text\" name=\"firsname\" placeholder=\"First Name\" required/>-->\n    <!--</div>-->\n    <!--<div>-->\n      <!--<input type=\"text\" name=\"lastname\" placeholder=\"Last Name\" required/>-->\n    <!--</div>-->\n    <!--<div>-->\n      <!--<input type=\"email\" name=\"email\" placeholder=\"E-mail\" required/>-->\n    <!--</div>-->\n    <!--<div>-->\n      <!--<input type=\"password\" name=\"password\" placeholder=\"Password\" required/>-->\n    <!--</div>-->\n    <!--<div>-->\n      <!--<button type=\"submit\" routerLink=\"/userradio\" routerLinkActive=\"active\">Continue</button>-->\n    <!--</div>-->\n  <!--</form>-->\n"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/User */ "./src/app/model/User.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService) {
        this.userService = userService;
        this.submitted = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.signUp = function (form) {
        var user = new _model_User__WEBPACK_IMPORTED_MODULE_2__["User"];
        user.firstname = form.value['firstname'];
        user.lastname = form.value['lastname'];
        user.email = form.value['email'];
        user.password = form.value['password'];
        user.subscription_id = 2;
        this.userService.addUser(user)
            .subscribe(function () { return console.log('success'); }, function () { return console.log('failure'); });
        this.submitted = true;
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/components/user-radio/country/country.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-radio/country/country.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: 'Allerta', arial, Tahoma;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: linear-gradient(to left, #7700aa, #8800ff);\r\n  text-align:center;\r\n  color:#fff;\r\n}\r\nh3{\r\n  text-shadow:1px 1px 1px #fff;\r\n}\r\n.container-audio {\r\n  width: 46%;\r\n  /* height: auto; */\r\n  /* padding: 20px; */\r\n  border-radius: 5px;\r\n  background-color: #eee;\r\n  color: #444;\r\n  margin: 20px auto;\r\n  overflow: hidden;\r\n}\r\naudio {\r\n  width:50%;\r\n}\r\naudio:nth-child(2), audio:nth-child(4), audio:nth-child(6) {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 {\r\n  width: 23px;\r\n  height: 5em;\r\n  border-radius: 5px;\r\n  margin: 0 10px 0 0;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.container-audio .colum1:last-child {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 .row {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  background: linear-gradient(to up, #7700aa, #8800ff);\r\n  position: absolute;\r\n  -webkit-animation: Rofa 10s infinite ease-in-out;\r\n  animation: Rofa 10s infinite ease-in-out;\r\n  bottom: 0;\r\n}\r\n.container-audio .colum1:nth-of-type(1) .row {\r\n  -webkit-animation-delay: 3.99s;\r\n  animation-delay: 3.99s;\r\n}\r\n.container-audio .colum1:nth-of-type(2) .row {\r\n  -webkit-animation-delay: 3.80s;\r\n  animation-delay: 3.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(3) .row {\r\n  -webkit-animation-delay: 3.70s;\r\n  animation-delay: 3.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(4) .row {\r\n  -webkit-animation-delay: 3.60s;\r\n  animation-delay: 3.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(5) .row {\r\n  -webkit-animation-delay: 3.50s;\r\n  animation-delay: 3.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(6) .row {\r\n  -webkit-animation-delay: 3.40s;\r\n  animation-delay: 3.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(7) .row {\r\n  -webkit-animation-delay: 3.30s;\r\n  animation-delay: 3.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(8) .row {\r\n  -webkit-animation-delay: 3.20s;\r\n  animation-delay: 3.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(9) .row {\r\n  -webkit-animation-delay: 3.10s;\r\n  animation-delay: 3.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(10) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(11) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(12) .row {\r\n  -webkit-animation-delay: 2.10s;\r\n  animation-delay: 2.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(13) .row {\r\n  -webkit-animation-delay: 2.20s;\r\n  animation-delay: 2.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(14) .row {\r\n  -webkit-animation-delay: 1.30s;\r\n  animation-delay: 1.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(15) .row {\r\n  -webkit-animation-delay: 1.40s;\r\n  animation-delay: 1.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(16) .row {\r\n  -webkit-animation-delay: 1.50s;\r\n  animation-delay: 1.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(17) .row {\r\n  -webkit-animation-delay: 1.60s;\r\n  animation-delay: 1.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(18) .row {\r\n  -webkit-animation-delay: 1.70s;\r\n  animation-delay: 1.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(19) .row {\r\n  -webkit-animation-delay: 1.80s;\r\n  animation-delay: 1.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(20) .row {\r\n  -webkit-animation-delay: 2s;\r\n  animation-delay: 2s;\r\n}\r\n@-webkit-keyframes Rofa {\r\n  0% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: yellow;\r\n  }\r\n\r\n  5% {\r\n    height: 100%;\r\n    -webkit-transform: translatey(15px);\r\n    transform: translatey(15px);\r\n    background-color: fuchsia;\r\n  }\r\n  10% {\r\n    height: 90%;\r\n    transform: translatey(0);\r\n    -webkit-transform: translatey(0);\r\n    background-color: bisque;\r\n  }\r\n\r\n  15% {\r\n    height: 80%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  20% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  25% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  30% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  35% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  40% {\r\n    height: 60%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  45% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  50% {\r\n    height: 50%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  55% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  60% {\r\n    height: 40%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  65% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  70% {\r\n    height: 30%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  75% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  80% {\r\n    height: 20%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  85% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  90% {\r\n    height: 10%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  95% {\r\n    height: 5%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  100% {\r\n    height: 0;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n}\r\nh2\r\n{\r\n  text-align: center;\r\n}\r\nul{\r\n  text-align: center;\r\n}\r\n.arrow-right {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-left: 25px solid black;\r\n  background-color:transparent;\r\n}\r\n.arrow-left {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-right: 25px solid black;\r\n}\r\nbutton{\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJhZGlvL2NvdW50cnkvY291bnRyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0RBQXNEO0VBQ3RELGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9EQUFvRDtFQUNwRCxrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELHdDQUF3QztFQUN4QyxTQUFTO0FBQ1g7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtF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RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsV0FBVztFQUNYLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yYWRpby9jb3VudHJ5L2NvdW50cnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiAnQWxsZXJ0YScsIGFyaWFsLCBUYWhvbWE7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc3MDBhYSwgIzg4MDBmZik7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6I2ZmZjtcclxufVxyXG5oM3tcclxuICB0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCAjZmZmO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8ge1xyXG4gIHdpZHRoOiA0NiU7XHJcbiAgLyogaGVpZ2h0OiBhdXRvOyAqL1xyXG4gIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5hdWRpbyB7XHJcbiAgd2lkdGg6NTAlO1xyXG59XHJcblxyXG5hdWRpbzpudGgtY2hpbGQoMiksIGF1ZGlvOm50aC1jaGlsZCg0KSwgYXVkaW86bnRoLWNoaWxkKDYpIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xIHtcclxuICB3aWR0aDogMjNweDtcclxuICBoZWlnaHQ6IDVlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTEgLnJvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdXAsICM3NzAwYWEsICM4ODAwZmYpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogUm9mYSAxMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBSb2ZhIDEwcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICBib3R0b206IDA7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDEpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjk5cztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuOTlzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgyKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy44MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjgwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMykgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuNzBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy43MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDQpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjYwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuNjBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg1KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy41MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjUwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoNikgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuNDBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy40MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDcpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjMwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuMzBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg4KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy4yMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjIwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoOSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuMTBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy4xMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDEwKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi4xcztcclxuICBhbmltYXRpb24tZGVsYXk6IDIuMXM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDExKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi4xcztcclxuICBhbmltYXRpb24tZGVsYXk6IDIuMXM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDEyKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi4xMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjEwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTMpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjIwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDIuMjBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxNCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMzBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS4zMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE1KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS40MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjQwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTYpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjUwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuNTBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxNykgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNjBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS42MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE4KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS43MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjcwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTkpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjgwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuODBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgyMCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBSb2ZhIHtcclxuICAwJSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG5cclxuICA1JSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgxNXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgxNXB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGZ1Y2hzaWE7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gIH1cclxuXHJcbiAgMTUlIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA1NSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNjUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNzAlIHtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA4NSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA5MCUge1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgOTUlIHtcclxuICAgIGhlaWdodDogNSU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmgyXHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnVse1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFycm93LXJpZ2h0IHtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hcnJvdy1sZWZ0IHtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yaWdodDogMjVweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user-radio/country/country.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/user-radio/country/country.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav [navItems]=\"userNavs\"></app-nav>\n<link href='https://fonts.googleapis.com/css?family=Allerta' rel='stylesheet'>\n<ul>\n  <div *ngIf = \"subid === 2\"><h2>To skip songs, subscribe today... only $9.99 a month</h2></div>\n  <a routerLink=\"/userradio\" routerLinkActive=\"active\"><h3>Go back to radios</h3></a>\n  <h2>Country Radio</h2>\n  <h2>Now playing</h2>\n  <div *ngFor = \"let song of songs\">\n      <div *ngIf = \"song.song_id === currentSong\">\n        {{ song.song_title }} <br>\n        {{ song.artist_name }} <br>\n        <div id=\"buttons\">\n        </div>\n        <div>\n        <span>\n            <button *ngIf = \"subid === 1\" (click) = \"previous()\">\n              <div class=\"arrow-left\"></div>\n              <div class=\"arrow-left\"></div>\n            </button>\n          <audio autoplay controls preload=\"auto\" (ended)=\"next()\">\n            <source src=\"{{ song.song_link }}\" type=\"audio/mp3\">\n            Your browser dose not Support the audio Tag\n          </audio>\n          <button *ngIf = \"subid === 1\" (click) = \"next()\">\n            <div class=\"arrow-right\"></div>\n            <div class=\"arrow-right\"></div>\n          </button>\n          </span>\n        </div>\n      </div>\n    </div>\n</ul>\n\n<!--The bottom with the columns-->\n<div class=\"container-audio\">\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-radio/country/country.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/user-radio/country/country.component.ts ***!
  \********************************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_songs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/songs.service */ "./src/app/services/songs.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");





var CountryComponent = /** @class */ (function () {
    function CountryComponent(songsService, authService) {
        this.songsService = songsService;
        this.authService = authService;
    }
    CountryComponent.prototype.next = function () {
        this.currentSong = this.songs[this.currentSong].song_id;
        if (this.currentSong > 12) {
            this.currentSong = 10;
        }
    };
    CountryComponent.prototype.previous = function () {
        this.currentSong = this.songs[this.currentSong].song_id - 2;
        if (this.currentSong < 10) {
            this.currentSong = 12;
        }
    };
    CountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.hasRoles(1)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].UserNav;
            this.subid = 1;
        }
        else if (this.authService.hasRoles(2)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NonSubNav;
            this.subid = 2;
        }
        this.currentSong = 10;
        this.songsService.getAllSongs()
            .subscribe(function (songs) {
            _this.songs = songs;
        });
    };
    CountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/components/user-radio/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.css */ "./src/app/components/user-radio/country/country.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_songs_service__WEBPACK_IMPORTED_MODULE_2__["SongsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/components/user-radio/edm/edm.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/user-radio/edm/edm.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: 'Allerta', arial, Tahoma;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: linear-gradient(to left, #7700aa, #8800ff);\r\n  text-align:center;\r\n  color:#fff;\r\n}\r\nh3{\r\n  text-shadow:1px 1px 1px #fff;\r\n}\r\n.container-audio {\r\n  width: 46%;\r\n  /* height: auto; */\r\n  /* padding: 20px; */\r\n  border-radius: 5px;\r\n  background-color: #eee;\r\n  color: #444;\r\n  margin: 20px auto;\r\n  overflow: hidden;\r\n}\r\naudio {\r\n  width:50%;\r\n}\r\naudio:nth-child(2), audio:nth-child(4), audio:nth-child(6) {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 {\r\n  width: 23px;\r\n  height: 5em;\r\n  border-radius: 5px;\r\n  margin: 0 10px 0 0;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.container-audio .colum1:last-child {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 .row {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  background: linear-gradient(to up, #7700aa, #8800ff);\r\n  position: absolute;\r\n  -webkit-animation: Rofa 10s infinite ease-in-out;\r\n  animation: Rofa 10s infinite ease-in-out;\r\n  bottom: 0;\r\n}\r\n.container-audio .colum1:nth-of-type(1) .row {\r\n  -webkit-animation-delay: 3.99s;\r\n  animation-delay: 3.99s;\r\n}\r\n.container-audio .colum1:nth-of-type(2) .row {\r\n  -webkit-animation-delay: 3.80s;\r\n  animation-delay: 3.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(3) .row {\r\n  -webkit-animation-delay: 3.70s;\r\n  animation-delay: 3.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(4) .row {\r\n  -webkit-animation-delay: 3.60s;\r\n  animation-delay: 3.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(5) .row {\r\n  -webkit-animation-delay: 3.50s;\r\n  animation-delay: 3.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(6) .row {\r\n  -webkit-animation-delay: 3.40s;\r\n  animation-delay: 3.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(7) .row {\r\n  -webkit-animation-delay: 3.30s;\r\n  animation-delay: 3.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(8) .row {\r\n  -webkit-animation-delay: 3.20s;\r\n  animation-delay: 3.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(9) .row {\r\n  -webkit-animation-delay: 3.10s;\r\n  animation-delay: 3.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(10) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(11) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(12) .row {\r\n  -webkit-animation-delay: 2.10s;\r\n  animation-delay: 2.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(13) .row {\r\n  -webkit-animation-delay: 2.20s;\r\n  animation-delay: 2.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(14) .row {\r\n  -webkit-animation-delay: 1.30s;\r\n  animation-delay: 1.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(15) .row {\r\n  -webkit-animation-delay: 1.40s;\r\n  animation-delay: 1.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(16) .row {\r\n  -webkit-animation-delay: 1.50s;\r\n  animation-delay: 1.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(17) .row {\r\n  -webkit-animation-delay: 1.60s;\r\n  animation-delay: 1.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(18) .row {\r\n  -webkit-animation-delay: 1.70s;\r\n  animation-delay: 1.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(19) .row {\r\n  -webkit-animation-delay: 1.80s;\r\n  animation-delay: 1.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(20) .row {\r\n  -webkit-animation-delay: 2s;\r\n  animation-delay: 2s;\r\n}\r\n@-webkit-keyframes Rofa {\r\n  0% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: yellow;\r\n  }\r\n\r\n  5% {\r\n    height: 100%;\r\n    -webkit-transform: translatey(15px);\r\n    transform: translatey(15px);\r\n    background-color: fuchsia;\r\n  }\r\n  10% {\r\n    height: 90%;\r\n    transform: translatey(0);\r\n    -webkit-transform: translatey(0);\r\n    background-color: bisque;\r\n  }\r\n\r\n  15% {\r\n    height: 80%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  20% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  25% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  30% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  35% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  40% {\r\n    height: 60%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  45% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  50% {\r\n    height: 50%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  55% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  60% {\r\n    height: 40%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  65% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  70% {\r\n    height: 30%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  75% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  80% {\r\n    height: 20%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  85% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  90% {\r\n    height: 10%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  95% {\r\n    height: 5%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  100% {\r\n    height: 0;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n}\r\nh2\r\n{\r\n  text-align: center;\r\n}\r\nul{\r\n  text-align: center;\r\n}\r\n.arrow-right {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-left: 25px solid black;\r\n  background-color:transparent;\r\n}\r\n.arrow-left {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-right: 25px solid black;\r\n}\r\nbutton{\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJhZGlvL2VkbS9lZG0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFxQztFQUNyQyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNEQUFzRDtFQUN0RCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvREFBb0Q7RUFDcEQsa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUNoRCx3Q0FBd0M7RUFDeEMsU0FBUztBQUNYO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw2QkFB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UTtFQUNSLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItcmFkaW8vZWRtL2VkbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdBbGxlcnRhJywgYXJpYWwsIFRhaG9tYTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzcwMGFhLCAjODgwMGZmKTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcbmgze1xyXG4gIHRleHQtc2hhZG93OjFweCAxcHggMXB4ICNmZmY7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyB7XHJcbiAgd2lkdGg6IDQ2JTtcclxuICAvKiBoZWlnaHQ6IGF1dG87ICovXHJcbiAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogIzQ0NDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmF1ZGlvIHtcclxuICB3aWR0aDo1MCU7XHJcbn1cclxuXHJcbmF1ZGlvOm50aC1jaGlsZCgyKSwgYXVkaW86bnRoLWNoaWxkKDQpLCBhdWRpbzpudGgtY2hpbGQoNikge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTEge1xyXG4gIHdpZHRoOiAyM3B4O1xyXG4gIGhlaWdodDogNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDAgMTBweCAwIDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMSAucm93IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB1cCwgIzc3MDBhYSwgIzg4MDBmZik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBSb2ZhIDEwcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb246IFJvZmEgMTBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuOTlzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy45OXM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDIpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjgwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuODBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgzKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy43MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjcwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoNCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuNjBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy42MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDUpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjUwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuNTBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg2KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy40MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjQwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoNykgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuMzBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy4zMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDgpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjIwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuMjBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg5KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy4xMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjEwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTApIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4xcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTEpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4xcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTIpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjEwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDIuMTBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxMykgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMjBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4yMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE0KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4zMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjMwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTUpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjQwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuNDBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxNikgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNTBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS41MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE3KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS42MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjYwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTgpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjcwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuNzBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxOSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuODBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS44MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDIwKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIFJvZmEge1xyXG4gIDAlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICB9XHJcblxyXG4gIDUlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDE1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDE1cHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZnVjaHNpYTtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgfVxyXG5cclxuICAxNSUge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICAzNSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDU1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA2NSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDg1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA5NSUge1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxufVxyXG5cclxuaDJcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudWx7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXJyb3ctcmlnaHQge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDI1cHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmFycm93LWxlZnQge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAyNXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user-radio/edm/edm.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/user-radio/edm/edm.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav [navItems]=\"userNavs\"></app-nav>\n<link href='https://fonts.googleapis.com/css?family=Allerta' rel='stylesheet'>\n<ul>\n    <div *ngIf = \"subid === 2\"><h2>To skip songs, subscribe today... only $9.99 a month</h2></div>\n  <a routerLink=\"/userradio\" routerLinkActive=\"active\"><h3>Go back to radios</h3></a>\n  <h2>EDM Radio</h2>\n  <h2>Now playing</h2>\n  <div *ngFor = \"let song of songs\">\n      <div *ngIf = \"song.song_id === currentSong\">\n        {{ song.song_title }} <br>\n        {{ song.artist_name }} <br>\n        <div id=\"buttons\">\n        </div>\n        <div>\n        <span>\n            <button *ngIf = \"subid === 1\" (click) = \"previous()\">\n              <div class=\"arrow-left\"></div>\n              <div class=\"arrow-left\"></div>\n            </button>\n          <audio autoplay controls preload=\"auto\" (ended)=\"next()\">\n            <source src=\"{{ song.song_link }}\" type=\"audio/mp3\">\n            Your browser dose not Support the audio Tag\n          </audio>\n          <button *ngIf = \"subid === 1\" (click) = \"next()\">\n            <div class=\"arrow-right\"></div>\n            <div class=\"arrow-right\"></div>\n          </button>\n          </span>\n        </div>\n      </div>\n    </div>\n</ul>\n\n<!--The bottom with the columns-->\n<div class=\"container-audio\">\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-radio/edm/edm.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/user-radio/edm/edm.component.ts ***!
  \************************************************************/
/*! exports provided: EdmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdmComponent", function() { return EdmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_songs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/songs.service */ "./src/app/services/songs.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");





var EdmComponent = /** @class */ (function () {
    function EdmComponent(songsService, authService) {
        this.songsService = songsService;
        this.authService = authService;
    }
    EdmComponent.prototype.next = function () {
        this.currentSong = this.songs[this.currentSong].song_id;
        if (this.currentSong > 9) {
            this.currentSong = 7;
        }
    };
    EdmComponent.prototype.previous = function () {
        this.currentSong = this.songs[this.currentSong].song_id - 2;
        if (this.currentSong < 7) {
            this.currentSong = 9;
        }
    };
    EdmComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.hasRoles(1)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].UserNav;
            this.subid = 1;
        }
        else if (this.authService.hasRoles(2)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NonSubNav;
            this.subid = 2;
        }
        this.currentSong = 7;
        console.log('all songs are soon to be displayed.. from the backend.. maybe..');
        this.songsService.getAllSongs()
            .subscribe(function (songs) {
            _this.songs = songs;
        });
    };
    EdmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edm',
            template: __webpack_require__(/*! ./edm.component.html */ "./src/app/components/user-radio/edm/edm.component.html"),
            styles: [__webpack_require__(/*! ./edm.component.css */ "./src/app/components/user-radio/edm/edm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_songs_service__WEBPACK_IMPORTED_MODULE_2__["SongsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], EdmComponent);
    return EdmComponent;
}());



/***/ }),

/***/ "./src/app/components/user-radio/metal/metal.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-radio/metal/metal.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: 'Allerta', arial, Tahoma;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: linear-gradient(to left, #7700aa, #8800ff);\r\n  text-align:center;\r\n  color:#fff;\r\n}\r\nh3{\r\n  text-shadow:1px 1px 1px #fff;\r\n}\r\n.container-audio {\r\n  width: 46%;\r\n  /* height: auto; */\r\n  /* padding: 20px; */\r\n  border-radius: 5px;\r\n  background-color: #eee;\r\n  color: #444;\r\n  margin: 20px auto;\r\n  overflow: hidden;\r\n}\r\naudio {\r\n  width:50%;\r\n}\r\naudio:nth-child(2), audio:nth-child(4), audio:nth-child(6) {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 {\r\n  width: 23px;\r\n  height: 5em;\r\n  border-radius: 5px;\r\n  margin: 0 10px 0 0;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.container-audio .colum1:last-child {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 .row {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  background: linear-gradient(to up, #7700aa, #8800ff);\r\n  position: absolute;\r\n  -webkit-animation: Rofa 10s infinite ease-in-out;\r\n  animation: Rofa 10s infinite ease-in-out;\r\n  bottom: 0;\r\n}\r\n.container-audio .colum1:nth-of-type(1) .row {\r\n  -webkit-animation-delay: 3.99s;\r\n  animation-delay: 3.99s;\r\n}\r\n.container-audio .colum1:nth-of-type(2) .row {\r\n  -webkit-animation-delay: 3.80s;\r\n  animation-delay: 3.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(3) .row {\r\n  -webkit-animation-delay: 3.70s;\r\n  animation-delay: 3.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(4) .row {\r\n  -webkit-animation-delay: 3.60s;\r\n  animation-delay: 3.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(5) .row {\r\n  -webkit-animation-delay: 3.50s;\r\n  animation-delay: 3.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(6) .row {\r\n  -webkit-animation-delay: 3.40s;\r\n  animation-delay: 3.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(7) .row {\r\n  -webkit-animation-delay: 3.30s;\r\n  animation-delay: 3.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(8) .row {\r\n  -webkit-animation-delay: 3.20s;\r\n  animation-delay: 3.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(9) .row {\r\n  -webkit-animation-delay: 3.10s;\r\n  animation-delay: 3.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(10) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(11) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(12) .row {\r\n  -webkit-animation-delay: 2.10s;\r\n  animation-delay: 2.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(13) .row {\r\n  -webkit-animation-delay: 2.20s;\r\n  animation-delay: 2.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(14) .row {\r\n  -webkit-animation-delay: 1.30s;\r\n  animation-delay: 1.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(15) .row {\r\n  -webkit-animation-delay: 1.40s;\r\n  animation-delay: 1.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(16) .row {\r\n  -webkit-animation-delay: 1.50s;\r\n  animation-delay: 1.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(17) .row {\r\n  -webkit-animation-delay: 1.60s;\r\n  animation-delay: 1.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(18) .row {\r\n  -webkit-animation-delay: 1.70s;\r\n  animation-delay: 1.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(19) .row {\r\n  -webkit-animation-delay: 1.80s;\r\n  animation-delay: 1.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(20) .row {\r\n  -webkit-animation-delay: 2s;\r\n  animation-delay: 2s;\r\n}\r\n@-webkit-keyframes Rofa {\r\n  0% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: yellow;\r\n  }\r\n\r\n  5% {\r\n    height: 100%;\r\n    -webkit-transform: translatey(15px);\r\n    transform: translatey(15px);\r\n    background-color: fuchsia;\r\n  }\r\n  10% {\r\n    height: 90%;\r\n    transform: translatey(0);\r\n    -webkit-transform: translatey(0);\r\n    background-color: bisque;\r\n  }\r\n\r\n  15% {\r\n    height: 80%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  20% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  25% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  30% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  35% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  40% {\r\n    height: 60%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  45% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  50% {\r\n    height: 50%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  55% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  60% {\r\n    height: 40%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  65% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  70% {\r\n    height: 30%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  75% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  80% {\r\n    height: 20%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  85% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  90% {\r\n    height: 10%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  95% {\r\n    height: 5%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  100% {\r\n    height: 0;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n}\r\nh2\r\n{\r\n  text-align: center;\r\n}\r\nul{\r\n  text-align: center;\r\n}\r\n.arrow-right {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-left: 25px solid black;\r\n  background-color:transparent;\r\n}\r\n.arrow-left {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-right: 25px solid black;\r\n}\r\nbutton{\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJhZGlvL21ldGFsL21ldGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzREFBc0Q7RUFDdEQsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0RBQW9EO0VBQ3BELGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsd0NBQXdDO0VBQ3hDLFNBQVM7QUFDWDtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsd0JBQXdCOztJQUV4QixnQ0FBZ0M7RUFDbEM7QUFDRjtBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsV0FBVztFQUNYLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJhZGlvL21ldGFsL21ldGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogJ0FsbGVydGEnLCBhcmlhbCwgVGFob21hO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NzAwYWEsICM4ODAwZmYpO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuaDN7XHJcbiAgdGV4dC1zaGFkb3c6MXB4IDFweCAxcHggI2ZmZjtcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIHtcclxuICB3aWR0aDogNDYlO1xyXG4gIC8qIGhlaWdodDogYXV0bzsgKi9cclxuICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuYXVkaW8ge1xyXG4gIHdpZHRoOjUwJTtcclxufVxyXG5cclxuYXVkaW86bnRoLWNoaWxkKDIpLCBhdWRpbzpudGgtY2hpbGQoNCksIGF1ZGlvOm50aC1jaGlsZCg2KSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMSB7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgaGVpZ2h0OiA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xIC5yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHVwLCAjNzcwMGFhLCAjODgwMGZmKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IFJvZmEgMTBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogUm9mYSAxMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy45OXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjk5cztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMikgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuODBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy44MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDMpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjcwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuNzBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg0KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy42MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjYwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoNSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuNTBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy41MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDYpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjQwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuNDBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg3KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy4zMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjMwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoOCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuMjBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy4yMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDkpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjEwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuMTBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxMCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxMSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxMikgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMTBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4xMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDEzKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi4yMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjIwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTQpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjMwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMzBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxNSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNDBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS40MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE2KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS41MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjUwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTcpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjYwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuNjBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxOCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNzBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS43MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE5KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS44MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjgwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMjApIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgUm9mYSB7XHJcbiAgMCUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIH1cclxuXHJcbiAgNSUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMTVweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMTVweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmdWNoc2lhO1xyXG4gIH1cclxuICAxMCUge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICB9XHJcblxyXG4gIDE1JSB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDMwJSB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDM1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNTUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDY1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgODUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgOTAlIHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDk1JSB7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5oMlxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG51bHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdy1yaWdodCB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItbGVmdDogMjVweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYXJyb3ctbGVmdCB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user-radio/metal/metal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user-radio/metal/metal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav [navItems]=\"userNavs\"></app-nav>\n<link href='https://fonts.googleapis.com/css?family=Allerta' rel='stylesheet'>\n<ul>\n    <div *ngIf = \"subid === 2\"><h2>To skip songs, subscribe today... only $9.99 a month</h2></div>\n  <a routerLink=\"/userradio\" routerLinkActive=\"active\"><h3>Go back to radios</h3></a>\n  <h2>Metal Radio</h2>\n  <h2>Now playing</h2>\n  <div *ngFor = \"let song of songs\">\n      <div *ngIf = \"song.song_id === currentSong\">\n        {{ song.song_title }} <br>\n        {{ song.artist_name }} <br>\n        <div id=\"buttons\">\n        </div>\n        <div>\n        <span>\n            <button *ngIf = \"subid === 1\" (click) = \"previous()\">\n              <div class=\"arrow-left\"></div>\n              <div class=\"arrow-left\"></div>\n            </button>\n          <audio autoplay controls preload=\"auto\" (ended)=\"next()\">\n            <source src=\"{{ song.song_link }}\" type=\"audio/mp3\">\n            Your browser dose not Support the audio Tag\n          </audio>\n          <button *ngIf = \"subid === 1\" (click) = \"next()\">\n            <div class=\"arrow-right\"></div>\n            <div class=\"arrow-right\"></div>\n          </button>\n          </span>\n        </div>\n      </div>\n    </div>\n</ul>\n\n<!--The bottom with the columns-->\n<div class=\"container-audio\">\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-radio/metal/metal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user-radio/metal/metal.component.ts ***!
  \****************************************************************/
/*! exports provided: MetalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetalComponent", function() { return MetalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_songs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/songs.service */ "./src/app/services/songs.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");





var MetalComponent = /** @class */ (function () {
    function MetalComponent(songsService, authService) {
        this.songsService = songsService;
        this.authService = authService;
    }
    MetalComponent.prototype.next = function () {
        this.currentSong = this.songs[this.currentSong].song_id;
        if (this.currentSong > 6) {
            this.currentSong = 4;
        }
    };
    MetalComponent.prototype.previous = function () {
        this.currentSong = this.songs[this.currentSong].song_id - 2;
        if (this.currentSong < 4) {
            this.currentSong = 6;
        }
    };
    MetalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.hasRoles(1)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].UserNav;
            this.subid = 1;
        }
        else if (this.authService.hasRoles(2)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NonSubNav;
            this.subid = 2;
        }
        this.currentSong = 4;
        console.log('all songs are soon to be displayed.. from the backend.. maybe..');
        this.songsService.getAllSongs()
            .subscribe(function (songs) {
            _this.songs = songs;
        });
    };
    MetalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-metal',
            template: __webpack_require__(/*! ./metal.component.html */ "./src/app/components/user-radio/metal/metal.component.html"),
            styles: [__webpack_require__(/*! ./metal.component.css */ "./src/app/components/user-radio/metal/metal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_songs_service__WEBPACK_IMPORTED_MODULE_2__["SongsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], MetalComponent);
    return MetalComponent;
}());



/***/ }),

/***/ "./src/app/components/user-radio/rap/rap.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/user-radio/rap/rap.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: 'Allerta', arial, Tahoma;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: linear-gradient(to left, #7700aa, #8800ff);\r\n  text-align:center;\r\n  color:#fff;\r\n}\r\nh3{\r\n  text-shadow:1px 1px 1px #fff;\r\n}\r\n.container-audio {\r\n  width: 46%;\r\n  /* height: auto; */\r\n  /* padding: 20px; */\r\n  border-radius: 5px;\r\n  background-color: #eee;\r\n  color: #444;\r\n  margin: 20px auto;\r\n  overflow: hidden;\r\n}\r\naudio {\r\n  width:50%;\r\n}\r\naudio:nth-child(2), audio:nth-child(4), audio:nth-child(6) {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 {\r\n  width: 23px;\r\n  height: 5em;\r\n  border-radius: 5px;\r\n  margin: 0 10px 0 0;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.container-audio .colum1:last-child {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 .row {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  background: linear-gradient(to up, #7700aa, #8800ff);\r\n  position: absolute;\r\n  -webkit-animation: Rofa 10s infinite ease-in-out;\r\n  animation: Rofa 10s infinite ease-in-out;\r\n  bottom: 0;\r\n}\r\n.container-audio .colum1:nth-of-type(1) .row {\r\n  -webkit-animation-delay: 3.99s;\r\n  animation-delay: 3.99s;\r\n}\r\n.container-audio .colum1:nth-of-type(2) .row {\r\n  -webkit-animation-delay: 3.80s;\r\n  animation-delay: 3.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(3) .row {\r\n  -webkit-animation-delay: 3.70s;\r\n  animation-delay: 3.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(4) .row {\r\n  -webkit-animation-delay: 3.60s;\r\n  animation-delay: 3.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(5) .row {\r\n  -webkit-animation-delay: 3.50s;\r\n  animation-delay: 3.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(6) .row {\r\n  -webkit-animation-delay: 3.40s;\r\n  animation-delay: 3.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(7) .row {\r\n  -webkit-animation-delay: 3.30s;\r\n  animation-delay: 3.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(8) .row {\r\n  -webkit-animation-delay: 3.20s;\r\n  animation-delay: 3.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(9) .row {\r\n  -webkit-animation-delay: 3.10s;\r\n  animation-delay: 3.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(10) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(11) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(12) .row {\r\n  -webkit-animation-delay: 2.10s;\r\n  animation-delay: 2.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(13) .row {\r\n  -webkit-animation-delay: 2.20s;\r\n  animation-delay: 2.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(14) .row {\r\n  -webkit-animation-delay: 1.30s;\r\n  animation-delay: 1.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(15) .row {\r\n  -webkit-animation-delay: 1.40s;\r\n  animation-delay: 1.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(16) .row {\r\n  -webkit-animation-delay: 1.50s;\r\n  animation-delay: 1.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(17) .row {\r\n  -webkit-animation-delay: 1.60s;\r\n  animation-delay: 1.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(18) .row {\r\n  -webkit-animation-delay: 1.70s;\r\n  animation-delay: 1.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(19) .row {\r\n  -webkit-animation-delay: 1.80s;\r\n  animation-delay: 1.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(20) .row {\r\n  -webkit-animation-delay: 2s;\r\n  animation-delay: 2s;\r\n}\r\n@-webkit-keyframes Rofa {\r\n  0% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: yellow;\r\n  }\r\n\r\n  5% {\r\n    height: 100%;\r\n    -webkit-transform: translatey(15px);\r\n    transform: translatey(15px);\r\n    background-color: fuchsia;\r\n  }\r\n  10% {\r\n    height: 90%;\r\n    transform: translatey(0);\r\n    -webkit-transform: translatey(0);\r\n    background-color: bisque;\r\n  }\r\n\r\n  15% {\r\n    height: 80%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  20% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  25% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  30% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  35% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  40% {\r\n    height: 60%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  45% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  50% {\r\n    height: 50%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  55% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  60% {\r\n    height: 40%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  65% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  70% {\r\n    height: 30%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  75% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  80% {\r\n    height: 20%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  85% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  90% {\r\n    height: 10%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  95% {\r\n    height: 5%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  100% {\r\n    height: 0;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n}\r\nh2\r\n{\r\n  text-align: center;\r\n}\r\nul{\r\n  text-align: center;\r\n}\r\n.arrow-right {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-left: 25px solid black;\r\n  background-color:transparent;\r\n}\r\n.arrow-left {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-right: 25px solid black;\r\n}\r\nbutton{\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJhZGlvL3JhcC9yYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFxQztFQUNyQyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNEQUFzRDtFQUN0RCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvREFBb0Q7RUFDcEQsa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUNoRCx3Q0FBd0M7RUFDeEMsU0FBUztBQUNYO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw2QkFB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UTtFQUNSLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItcmFkaW8vcmFwL3JhcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdBbGxlcnRhJywgYXJpYWwsIFRhaG9tYTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzcwMGFhLCAjODgwMGZmKTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcbmgze1xyXG4gIHRleHQtc2hhZG93OjFweCAxcHggMXB4ICNmZmY7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyB7XHJcbiAgd2lkdGg6IDQ2JTtcclxuICAvKiBoZWlnaHQ6IGF1dG87ICovXHJcbiAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogIzQ0NDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmF1ZGlvIHtcclxuICB3aWR0aDo1MCU7XHJcbn1cclxuXHJcbmF1ZGlvOm50aC1jaGlsZCgyKSwgYXVkaW86bnRoLWNoaWxkKDQpLCBhdWRpbzpudGgtY2hpbGQoNikge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTEge1xyXG4gIHdpZHRoOiAyM3B4O1xyXG4gIGhlaWdodDogNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDAgMTBweCAwIDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMSAucm93IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB1cCwgIzc3MDBhYSwgIzg4MDBmZik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBSb2ZhIDEwcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb246IFJvZmEgMTBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuOTlzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy45OXM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDIpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjgwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuODBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgzKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy43MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjcwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoNCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuNjBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy42MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDUpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjUwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuNTBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg2KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy40MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjQwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoNykgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuMzBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy4zMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDgpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjIwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuMjBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg5KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy4xMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjEwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTApIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4xcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTEpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4xcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTIpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjEwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDIuMTBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxMykgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMjBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4yMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE0KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4zMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjMwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTUpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjQwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuNDBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxNikgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNTBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS41MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE3KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS42MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjYwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTgpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjcwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuNzBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxOSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuODBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS44MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDIwKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIFJvZmEge1xyXG4gIDAlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICB9XHJcblxyXG4gIDUlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDE1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDE1cHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZnVjaHNpYTtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgfVxyXG5cclxuICAxNSUge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICAzNSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDU1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA2NSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDg1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA5NSUge1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxufVxyXG5cclxuaDJcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudWx7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXJyb3ctcmlnaHQge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDI1cHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmFycm93LWxlZnQge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAyNXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user-radio/rap/rap.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/user-radio/rap/rap.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav [navItems]=\"userNavs\"></app-nav>\n<link href='https://fonts.googleapis.com/css?family=Allerta' rel='stylesheet'>\n<ul>\n    <div *ngIf = \"subid === 2\"><h2>To skip songs, subscribe today... only $9.99 a month</h2></div>\n  <a routerLink=\"/userradio\" routerLinkActive=\"active\"><h3>Go back to radios</h3></a>\n  <h2>Rap Radio</h2>\n  <h2>Now playing</h2>\n  <div *ngFor = \"let song of songs\">\n      <div *ngIf = \"song.song_id === currentSong\">\n        {{ song.song_title }} <br>\n        {{ song.artist_name }} <br>\n        <div id=\"buttons\">\n        </div>\n        <div>\n        <span>\n            <button *ngIf = \"subid === 1\" (click) = \"previous()\">\n              <div class=\"arrow-left\"></div>\n              <div class=\"arrow-left\"></div>\n            </button>\n          <audio autoplay controls preload=\"auto\" (ended)=\"next()\">\n            <source src=\"{{ song.song_link }}\" type=\"audio/mp3\">\n            Your browser dose not Support the audio Tag\n          </audio>\n          <button *ngIf = \"subid === 1\" (click) = \"next()\">\n            <div class=\"arrow-right\"></div>\n            <div class=\"arrow-right\"></div>\n          </button>\n          </span>\n        </div>\n      </div>\n    </div>\n</ul>\n\n<!--The bottom with the columns-->\n<div class=\"container-audio\">\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-radio/rap/rap.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/user-radio/rap/rap.component.ts ***!
  \************************************************************/
/*! exports provided: RapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapComponent", function() { return RapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_songs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/songs.service */ "./src/app/services/songs.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");





var RapComponent = /** @class */ (function () {
    function RapComponent(songsService, authService) {
        this.songsService = songsService;
        this.authService = authService;
    }
    RapComponent.prototype.next = function () {
        this.currentSong = this.songs[this.currentSong].song_id;
        if (this.currentSong > 15) {
            this.currentSong = 12;
            console.log(this.currentSong);
        }
    };
    RapComponent.prototype.previous = function () {
        this.currentSong = this.songs[this.currentSong].song_id - 2;
        if (this.currentSong < 13) {
            this.currentSong = 15;
        }
    };
    RapComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.hasRoles(1)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].UserNav;
            this.subid = 1;
        }
        else if (this.authService.hasRoles(2)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].NonSubNav;
            this.subid = 2;
        }
        this.currentSong = 13;
        console.log('all songs are soon to be displayed.. from the backend.. maybe..');
        this.songsService.getAllSongs()
            .subscribe(function (songs) {
            _this.songs = songs;
        });
    };
    RapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rap',
            template: __webpack_require__(/*! ./rap.component.html */ "./src/app/components/user-radio/rap/rap.component.html"),
            styles: [__webpack_require__(/*! ./rap.component.css */ "./src/app/components/user-radio/rap/rap.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_songs_service__WEBPACK_IMPORTED_MODULE_3__["SongsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RapComponent);
    return RapComponent;
}());



/***/ }),

/***/ "./src/app/components/user-radio/rock/rock.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user-radio/rock/rock.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: 'Allerta', arial, Tahoma;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: linear-gradient(to left, #7700aa, #8800ff);\r\n  text-align:center;\r\n  color:#fff;\r\n}\r\nh3{\r\n  text-shadow:1px 1px 1px #fff;\r\n}\r\n.container-audio {\r\n  width: 46%;\r\n  /* height: auto; */\r\n  /* padding: 20px; */\r\n  border-radius: 5px;\r\n  background-color: #eee;\r\n  color: #444;\r\n  margin: 20px auto;\r\n  overflow: hidden;\r\n}\r\naudio {\r\n  width:50%;\r\n}\r\naudio:nth-child(2), audio:nth-child(4), audio:nth-child(6) {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 {\r\n  width: 23px;\r\n  height: 5em;\r\n  border-radius: 5px;\r\n  margin: 0 10px 0 0;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.container-audio .colum1:last-child {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 .row {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  background: linear-gradient(to up, #7700aa, #8800ff);\r\n  position: absolute;\r\n  -webkit-animation: Rofa 10s infinite ease-in-out;\r\n  animation: Rofa 10s infinite ease-in-out;\r\n  bottom: 0;\r\n}\r\n.container-audio .colum1:nth-of-type(1) .row {\r\n  -webkit-animation-delay: 3.99s;\r\n  animation-delay: 3.99s;\r\n}\r\n.container-audio .colum1:nth-of-type(2) .row {\r\n  -webkit-animation-delay: 3.80s;\r\n  animation-delay: 3.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(3) .row {\r\n  -webkit-animation-delay: 3.70s;\r\n  animation-delay: 3.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(4) .row {\r\n  -webkit-animation-delay: 3.60s;\r\n  animation-delay: 3.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(5) .row {\r\n  -webkit-animation-delay: 3.50s;\r\n  animation-delay: 3.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(6) .row {\r\n  -webkit-animation-delay: 3.40s;\r\n  animation-delay: 3.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(7) .row {\r\n  -webkit-animation-delay: 3.30s;\r\n  animation-delay: 3.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(8) .row {\r\n  -webkit-animation-delay: 3.20s;\r\n  animation-delay: 3.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(9) .row {\r\n  -webkit-animation-delay: 3.10s;\r\n  animation-delay: 3.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(10) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(11) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(12) .row {\r\n  -webkit-animation-delay: 2.10s;\r\n  animation-delay: 2.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(13) .row {\r\n  -webkit-animation-delay: 2.20s;\r\n  animation-delay: 2.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(14) .row {\r\n  -webkit-animation-delay: 1.30s;\r\n  animation-delay: 1.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(15) .row {\r\n  -webkit-animation-delay: 1.40s;\r\n  animation-delay: 1.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(16) .row {\r\n  -webkit-animation-delay: 1.50s;\r\n  animation-delay: 1.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(17) .row {\r\n  -webkit-animation-delay: 1.60s;\r\n  animation-delay: 1.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(18) .row {\r\n  -webkit-animation-delay: 1.70s;\r\n  animation-delay: 1.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(19) .row {\r\n  -webkit-animation-delay: 1.80s;\r\n  animation-delay: 1.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(20) .row {\r\n  -webkit-animation-delay: 2s;\r\n  animation-delay: 2s;\r\n}\r\n@-webkit-keyframes Rofa {\r\n  0% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: yellow;\r\n  }\r\n\r\n  5% {\r\n    height: 100%;\r\n    -webkit-transform: translatey(15px);\r\n    transform: translatey(15px);\r\n    background-color: fuchsia;\r\n  }\r\n  10% {\r\n    height: 90%;\r\n    transform: translatey(0);\r\n    -webkit-transform: translatey(0);\r\n    background-color: bisque;\r\n  }\r\n\r\n  15% {\r\n    height: 80%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  20% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  25% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  30% {\r\n    height: 70%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n    background-color: cornflowerblue;\r\n  }\r\n  35% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  40% {\r\n    height: 60%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  45% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  50% {\r\n    height: 50%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  55% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  60% {\r\n    height: 40%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  65% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  70% {\r\n    height: 30%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  75% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  80% {\r\n    height: 20%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  85% {\r\n    height: 0%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  90% {\r\n    height: 10%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  95% {\r\n    height: 5%;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n  100% {\r\n    height: 0;\r\n    -webkit-transform: translatey(0);\r\n    transform: translatey(0);\r\n\r\n    background-color: cornflowerblue;\r\n  }\r\n}\r\nh2\r\n{\r\n  text-align: center;\r\n}\r\nul{\r\n  text-align: center;\r\n}\r\n.arrow-right {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-left: 25px solid black;\r\n  background-color:transparent;\r\n}\r\n.arrow-left {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 25px solid transparent;\r\n  border-bottom: 25px solid transparent;\r\n  float: left;\r\n  border-right: 25px solid black;\r\n}\r\nbutton{\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJhZGlvL3JvY2svcm9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0RBQXNEO0VBQ3RELGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9EQUFvRDtFQUNwRCxrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELHdDQUF3QztFQUN4QyxTQUFTO0FBQ1g7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDZC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QUFRO0VBQ1IsU0FBUztFQUNULGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsV0FBVztFQUNYLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yYWRpby9yb2NrL3JvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiAnQWxsZXJ0YScsIGFyaWFsLCBUYWhvbWE7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc3MDBhYSwgIzg4MDBmZik7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6I2ZmZjtcclxufVxyXG5oM3tcclxuICB0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCAjZmZmO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8ge1xyXG4gIHdpZHRoOiA0NiU7XHJcbiAgLyogaGVpZ2h0OiBhdXRvOyAqL1xyXG4gIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5hdWRpbyB7XHJcbiAgd2lkdGg6NTAlO1xyXG59XHJcblxyXG5hdWRpbzpudGgtY2hpbGQoMiksIGF1ZGlvOm50aC1jaGlsZCg0KSwgYXVkaW86bnRoLWNoaWxkKDYpIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xIHtcclxuICB3aWR0aDogMjNweDtcclxuICBoZWlnaHQ6IDVlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTEgLnJvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdXAsICM3NzAwYWEsICM4ODAwZmYpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogUm9mYSAxMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBSb2ZhIDEwcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICBib3R0b206IDA7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDEpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjk5cztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuOTlzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgyKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy44MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjgwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMykgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuNzBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy43MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDQpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjYwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuNjBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg1KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy41MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjUwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoNikgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuNDBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy40MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDcpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjMwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuMzBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg4KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy4yMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjIwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoOSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuMTBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy4xMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDEwKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi4xcztcclxuICBhbmltYXRpb24tZGVsYXk6IDIuMXM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDExKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi4xcztcclxuICBhbmltYXRpb24tZGVsYXk6IDIuMXM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDEyKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi4xMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjEwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTMpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjIwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDIuMjBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxNCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMzBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS4zMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE1KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS40MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjQwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTYpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjUwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuNTBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxNykgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNjBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS42MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE4KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS43MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjcwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTkpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjgwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuODBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgyMCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBSb2ZhIHtcclxuICAwJSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG5cclxuICA1JSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgxNXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgxNXB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGZ1Y2hzaWE7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gIH1cclxuXHJcbiAgMTUlIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA1NSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNjUlIHtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNzAlIHtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA4NSUge1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA5MCUge1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgOTUlIHtcclxuICAgIGhlaWdodDogNSU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmgyXHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnVse1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFycm93LXJpZ2h0IHtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hcnJvdy1sZWZ0IHtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yaWdodDogMjVweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user-radio/rock/rock.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user-radio/rock/rock.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav [navItems]=\"userNavs\"></app-nav>\n<link href='https://fonts.googleapis.com/css?family=Allerta' rel='stylesheet'>\n<ul>\n    <div *ngIf = \"subid === 2\"><h2>To skip songs, subscribe today... only $9.99 a month</h2></div>\n  <a routerLink=\"/userradio\" routerLinkActive=\"active\"><h3>Go back to radios</h3></a>\n  <h2>Rock Radio</h2>\n  <h2>Now playing</h2>\n  <div *ngFor = \"let song of songs\">\n      <div *ngIf = \"song.song_id === currentSong\">\n        {{ song.song_title }} <br>\n        {{ song.artist_name }} <br>\n        <div id=\"buttons\">\n        </div>\n        <div>\n        <span>\n            <button *ngIf = \"subid === 1\" (click) = \"previous()\">\n              <div class=\"arrow-left\"></div>\n              <div class=\"arrow-left\"></div>\n            </button>\n          <audio autoplay controls preload=\"auto\" (ended)=\"next()\">\n            <source src=\"{{ song.song_link }}\" type=\"audio/mp3\">\n            Your browser dose not Support the audio Tag\n          </audio>\n          <button *ngIf = \"subid === 1\" (click) = \"next()\">\n            <div class=\"arrow-right\"></div>\n            <div class=\"arrow-right\"></div>\n          </button>\n          </span>\n        </div>\n      </div>\n    </div>\n</ul>\n\n<!--The bottom with the columns-->\n<div class=\"container-audio\">\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n  <div class=\"colum1\">\n    <div class=\"row\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-radio/rock/rock.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user-radio/rock/rock.component.ts ***!
  \**************************************************************/
/*! exports provided: RockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RockComponent", function() { return RockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_songs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/songs.service */ "./src/app/services/songs.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");





var RockComponent = /** @class */ (function () {
    function RockComponent(songsService, authService) {
        this.songsService = songsService;
        this.authService = authService;
    }
    RockComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('test');
        if (this.authService.hasRoles(1)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].UserNav;
            this.subid = 1;
        }
        else if (this.authService.hasRoles(2)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].NonSubNav;
            this.subid = 2;
        }
        // this.currentSong = 1;
        this.songsService.getRockSongs()
            .subscribe(function (songs) {
            _this.songs = songs;
            _this.currentSong = _this.songs[0].song_id;
        });
        // this.currentSong = this.songs[0].song_id;
    };
    RockComponent.prototype.next = function () {
        this.currentSong = this.songs[this.currentSong].song_id;
        if (this.currentSong > 3) {
            this.currentSong = 1;
        }
    };
    RockComponent.prototype.previous = function () {
        this.currentSong = this.songs[this.currentSong].song_id - 2;
        if (this.currentSong < 1) {
            this.currentSong = 3;
        }
    };
    RockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rock',
            template: __webpack_require__(/*! ./rock.component.html */ "./src/app/components/user-radio/rock/rock.component.html"),
            styles: [__webpack_require__(/*! ./rock.component.css */ "./src/app/components/user-radio/rock/rock.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_songs_service__WEBPACK_IMPORTED_MODULE_3__["SongsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RockComponent);
    return RockComponent;
}());



/***/ }),

/***/ "./src/app/components/user-radio/user-radio.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/user-radio/user-radio.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: 'Allerta', arial, Tahoma;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: linear-gradient(to left, #7700aa, #8800ff);\r\n  text-align:center;\r\n  color:#fff;\r\n}\r\nh3{\r\n  text-shadow:1px 1px 1px #fff;\r\n}\r\n/* Start  styling the page */\r\n.container-audio {\r\n  width: 66%;\r\n  height: auto;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  background-color: #eee;\r\n  color: #444;\r\n  margin: 20px auto;\r\n  overflow: hidden;\r\n}\r\nul{\r\n  text-align: center;\r\n}\r\naudio {\r\nwidth:100%;\r\n}\r\naudio:nth-child(2), audio:nth-child(4), audio:nth-child(6) {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 {\r\n  width: 23px;\r\n  height: 5em;\r\n  border-radius: 5px;\r\n  margin: 0 10px 0 0;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.container-audio .colum1:last-child {\r\n  margin: 0;\r\n}\r\n.container-audio .colum1 .row {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  background: linear-gradient(to up, #7700aa, #8800ff);\r\n  position: absolute;\r\n  -webkit-animation: Rofa 10s infinite ease-in-out;\r\n  animation: Rofa 10s infinite ease-in-out;\r\n  bottom: 0;\r\n}\r\n.container-audio .colum1:nth-of-type(1) .row {\r\n  -webkit-animation-delay: 3.99s;\r\n  animation-delay: 3.99s;\r\n}\r\n.container-audio .colum1:nth-of-type(2) .row {\r\n  -webkit-animation-delay: 3.80s;\r\n  animation-delay: 3.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(3) .row {\r\n  -webkit-animation-delay: 3.70s;\r\n  animation-delay: 3.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(4) .row {\r\n  -webkit-animation-delay: 3.60s;\r\n  animation-delay: 3.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(5) .row {\r\n  -webkit-animation-delay: 3.50s;\r\n  animation-delay: 3.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(6) .row {\r\n  -webkit-animation-delay: 3.40s;\r\n  animation-delay: 3.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(7) .row {\r\n  -webkit-animation-delay: 3.30s;\r\n  animation-delay: 3.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(8) .row {\r\n  -webkit-animation-delay: 3.20s;\r\n  animation-delay: 3.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(9) .row {\r\n  -webkit-animation-delay: 3.10s;\r\n  animation-delay: 3.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(10) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(11) .row {\r\n  -webkit-animation-delay: 2.1s;\r\n  animation-delay: 2.1s;\r\n}\r\n.container-audio .colum1:nth-of-type(12) .row {\r\n  -webkit-animation-delay: 2.10s;\r\n  animation-delay: 2.10s;\r\n}\r\n.container-audio .colum1:nth-of-type(13) .row {\r\n  -webkit-animation-delay: 2.20s;\r\n  animation-delay: 2.20s;\r\n}\r\n.container-audio .colum1:nth-of-type(14) .row {\r\n  -webkit-animation-delay: 1.30s;\r\n  animation-delay: 1.30s;\r\n}\r\n.container-audio .colum1:nth-of-type(15) .row {\r\n  -webkit-animation-delay: 1.40s;\r\n  animation-delay: 1.40s;\r\n}\r\n.container-audio .colum1:nth-of-type(16) .row {\r\n  -webkit-animation-delay: 1.50s;\r\n  animation-delay: 1.50s;\r\n}\r\n.container-audio .colum1:nth-of-type(17) .row {\r\n  -webkit-animation-delay: 1.60s;\r\n  animation-delay: 1.60s;\r\n}\r\n.container-audio .colum1:nth-of-type(18) .row {\r\n  -webkit-animation-delay: 1.70s;\r\n  animation-delay: 1.70s;\r\n}\r\n.container-audio .colum1:nth-of-type(19) .row {\r\n  -webkit-animation-delay: 1.80s;\r\n  animation-delay: 1.80s;\r\n}\r\n.container-audio .colum1:nth-of-type(20) .row {\r\n  -webkit-animation-delay: 2s;\r\n  animation-delay: 2s;\r\n}\r\n@-webkit-keyframes Rofa {\r\n  0% {\r\n      height: 0%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n      background-color: yellow;\r\n  }\r\n\r\n  5% {\r\n      height: 100%;\r\n      -webkit-transform: translatey(15px);\r\n      transform: translatey(15px);\r\n      background-color: fuchsia;\r\n  }\r\n  10% {\r\n      height: 90%;\r\n      transform: translatey(0);\r\n      -webkit-transform: translatey(0);\r\n      background-color: bisque;\r\n  }\r\n\r\n  15% {\r\n      height: 80%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  20% {\r\n      height: 70%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n      background-color: cornflowerblue;\r\n  }\r\n  25% {\r\n      height: 0%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n      background-color: cornflowerblue;\r\n  }\r\n  30% {\r\n      height: 70%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n      background-color: cornflowerblue;\r\n  }\r\n  35% {\r\n      height: 0%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  40% {\r\n      height: 60%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  45% {\r\n      height: 0%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  50% {\r\n      height: 50%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  55% {\r\n      height: 0%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  60% {\r\n      height: 40%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  65% {\r\n      height: 0%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  70% {\r\n      height: 30%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  75% {\r\n      height: 0%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  80% {\r\n      height: 20%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  85% {\r\n      height: 0%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  90% {\r\n      height: 10%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  95% {\r\n      height: 5%;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n  100% {\r\n      height: 0;\r\n      -webkit-transform: translatey(0);\r\n      transform: translatey(0);\r\n\r\n      background-color: cornflowerblue;\r\n  }\r\n}\r\nh2\r\n{\r\n  text-align: center;\r\n}\r\ndiv {\r\n  width: 200px;\r\n}\r\nh2 {\r\n  font: 400 40px/1.5 Helvetica, Verdana, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: center;\r\n}\r\nli {\r\n  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;\r\n  border-bottom: 1px solid #ccc;\r\n  text-align: center;\r\n}\r\nli:last-child {\r\n  border: none;\r\n}\r\nli a {\r\n  text-decoration: none;\r\n  color: #000;\r\n  display: block;\r\n  width: 200px;\r\n  transition: font-size 0.3s ease, background-color 0.3s ease;\r\n}\r\nli a:hover {\r\n  font-size: 30px;\r\n  background: #f6f6f6;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJhZGlvL3VzZXItcmFkaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFxQztFQUNyQyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNEQUFzRDtFQUN0RCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQSw0QkFBNEI7QUFDNUI7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvREFBb0Q7RUFDcEQsa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUNoRCx3Q0FBd0M7RUFDeEMsU0FBUztBQUNYO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7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LFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFNWiwyREFBMkQ7QUFDN0Q7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItcmFkaW8vdXNlci1yYWRpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdBbGxlcnRhJywgYXJpYWwsIFRhaG9tYTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzcwMGFhLCAjODgwMGZmKTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcbmgze1xyXG4gIHRleHQtc2hhZG93OjFweCAxcHggMXB4ICNmZmY7XHJcbn1cclxuLyogU3RhcnQgIHN0eWxpbmcgdGhlIHBhZ2UgKi9cclxuLmNvbnRhaW5lci1hdWRpbyB7XHJcbiAgd2lkdGg6IDY2JTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogIzQ0NDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbnVse1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5hdWRpbyB7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuYXVkaW86bnRoLWNoaWxkKDIpLCBhdWRpbzpudGgtY2hpbGQoNCksIGF1ZGlvOm50aC1jaGlsZCg2KSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMSB7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgaGVpZ2h0OiA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xIC5yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHVwLCAjNzcwMGFhLCAjODgwMGZmKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IFJvZmEgMTBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogUm9mYSAxMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy45OXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjk5cztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMikgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuODBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy44MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDMpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjcwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuNzBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg0KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy42MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjYwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoNSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuNTBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy41MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDYpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjQwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuNDBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSg3KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMy4zMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjMwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoOCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuMjBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy4yMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDkpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzLjEwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDMuMTBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxMCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxMSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxMikgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMTBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4xMHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDEzKSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi4yMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjIwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTQpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjMwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMzBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxNSkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNDBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS40MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE2KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS41MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjUwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMTcpIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjYwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuNjBzO1xyXG59XHJcbi5jb250YWluZXItYXVkaW8gLmNvbHVtMTpudGgtb2YtdHlwZSgxOCkgLnJvdyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNzBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS43MHM7XHJcbn1cclxuLmNvbnRhaW5lci1hdWRpbyAuY29sdW0xOm50aC1vZi10eXBlKDE5KSAucm93IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS44MHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjgwcztcclxufVxyXG4uY29udGFpbmVyLWF1ZGlvIC5jb2x1bTE6bnRoLW9mLXR5cGUoMjApIC5yb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgUm9mYSB7XHJcbiAgMCUge1xyXG4gICAgICBoZWlnaHQ6IDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG5cclxuICA1JSB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMTVweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgxNXB4KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZnVjaHNpYTtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICB9XHJcblxyXG4gIDE1JSB7XHJcbiAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgICAgaGVpZ2h0OiAwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDMwJSB7XHJcbiAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgICAgaGVpZ2h0OiAwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgICBoZWlnaHQ6IDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDU1JSB7XHJcbiAgICAgIGhlaWdodDogMCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgNjUlIHtcclxuICAgICAgaGVpZ2h0OiAwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgICBoZWlnaHQ6IDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG4gIDg1JSB7XHJcbiAgICAgIGhlaWdodDogMCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgOTAlIHtcclxuICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICB9XHJcbiAgOTUlIHtcclxuICAgICAgaGVpZ2h0OiA1JTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5oMlxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQ6IDQwMCA0MHB4LzEuNSBIZWx2ZXRpY2EsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZm9udDogMjAwIDIwcHgvMS41IEhlbHZldGljYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmxpOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxubGkgYTpob3ZlciB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user-radio/user-radio.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-radio/user-radio.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav [navItems]=\"userNavs\"></app-nav>\n<link href='https://fonts.googleapis.com/css?family=Allerta' rel='stylesheet'>\n<nav class =\"container-audio\">\n  <ul>\n    <h2>Hello user, choose your station</h2>\n    <li><a routerLink=\"/userradio/rock\" routerLinkActive=\"active\">Rock</a></li>\n    <li><a routerLink=\"/userradio/metal\" routerLinkActive=\"active\">Metal</a></li>\n    <li><a routerLink=\"/userradio/edm\" routerLinkActive=\"active\">EDM</a></li>\n    <li><a routerLink=\"/userradio/country\" routerLinkActive=\"active\">Country</a></li>\n    <li><a routerLink=\"/userradio/rap\" routerLinkActive=\"active\">Rap</a></li>\n  </ul>\n</nav>\n\n  <!-- <ul>\n      <div class=\"container-audio\" *ngFor = \"let rockSong of rockSongs\">\n          <div *ngIf=\"displayRockStation\">\n        {{ rockSong.name }}\n        {{ rockSong.genre }}\n        <audio controls loop>\n            <source src=\"{{ rockSong.link }}\" type=\"audio/ogg\">\n              Your browser dose not Support the audio Tag\n        </audio>\n      </div>\n    </div>\n</ul>\n<ul>\n    <div class=\"container-audio\" *ngFor = \"let metalSong of metalSongs\">\n        <div *ngIf=\"displayMetalStation\">\n      {{ metalSong.name }}\n      {{ metalSong.genre }}\n      <audio controls loop>\n          <source src=\"{{ metalSong.link }}\" type=\"audio/ogg\">\n            Your browser dose not Support the audio Tag\n      </audio>\n    </div>\n  </div>\n</ul> -->\n  <!-- <div class=\"container-audio\">\n          <audio controls loop>\n                     <source src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg\" type=\"audio/ogg\">\n                     Your browser dose not Support the audio Tag\n          </audio>\n    </div>  -->\n\n    <div class=\"container-audio\">\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"colum1\">\n            <div class=\"row\"></div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/user-radio/user-radio.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-radio/user-radio.component.ts ***!
  \***************************************************************/
/*! exports provided: UserRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRadioComponent", function() { return UserRadioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var UserRadioComponent = /** @class */ (function () {
    function UserRadioComponent(authService) {
        this.authService = authService;
    }
    UserRadioComponent.prototype.ngOnInit = function () {
        if (this.authService.hasRoles(1)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].UserNav;
        }
        else if (this.authService.hasRoles(2)) {
            this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].NonSubNav;
        }
    };
    UserRadioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-radio',
            template: __webpack_require__(/*! ./user-radio.component.html */ "./src/app/components/user-radio/user-radio.component.html"),
            styles: [__webpack_require__(/*! ./user-radio.component.css */ "./src/app/components/user-radio/user-radio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UserRadioComponent);
    return UserRadioComponent;
}());



/***/ }),

/***/ "./src/app/components/user-subscription/user-subscription.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/user-subscription/user-subscription.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: rgba(0,0,0,0.6);\r\n}\r\nbutton,\r\ninput[type=\"submit\"] {\r\n  background: #1266ff;\r\n  border: none;\r\n  border-bottom: 3px solid #0052e8;\r\n  color: #fff;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  vertical-align: bottom;\r\n  width: 50%;\r\n}\r\nbutton.credit,\r\ninput[type=\"submit\"].credit {\r\n  border-left: rgba(255,255,255,0.15);\r\n  border-radius: 0 3px 3px 0;\r\n}\r\nbutton:focus,\r\ninput[type=\"submit\"]:focus,\r\nbutton:hover,\r\ninput[type=\"submit\"]:hover {\r\n  background: #2a75ff;\r\n  outline: none;\r\n}\r\nbutton:active,\r\ninput[type=\"submit\"]:active,\r\nbutton.active,\r\ninput[type=\"submit\"].active {\r\n  margin-top: 2px;\r\n  border-bottom-width: 1px;\r\n}\r\n.container {\r\n  background: #f5f5f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 15px rgba(0,0,0,0.3);\r\n  margin: 30px auto;\r\n  max-width: 300px;\r\n  overflow: hidden;\r\n}\r\n.buttons {\r\n  background: #f0f0f2;\r\n  border-bottom: 1px solid rgba(0,0,0,0.1);\r\n  border-radius: 4px 4px 0 0;\r\n  overflow: hidden;\r\n  padding: 25px 30px;\r\n}\r\n.input {\r\n  margin: 30px;\r\n  position: relative;\r\n}\r\n.input .active {\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n}\r\ninput {\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 3px;\r\n  box-shadow: inset 1px 1px 3px rgba(0,0,0,0.3), 1px 1px 0 rgba(0,0,0,0.1);\r\n  margin: 0 0 10px;\r\n  padding: 6px 10px 10px;\r\n  width: 100%;\r\n}\r\ninput.form-submit {\r\n  box-shadow: none;\r\n  margin: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\ninput.cc-expires{\r\n  width: 50%;\r\n  padding: auto;\r\n}\r\na{\r\n  color: green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXN1YnNjcmlwdGlvbi91c2VyLXN1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLDBCQUEwQjtBQUM1QjtBQUNBOzs7O0VBSUUsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBOzs7O0VBSUUsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHdFQUF3RTtFQUN4RSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItc3Vic2NyaXB0aW9uL3VzZXItc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcclxufVxyXG5idXR0b24sXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGJhY2tncm91bmQ6ICMxMjY2ZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA1MmU4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5idXR0b24uY3JlZGl0LFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLmNyZWRpdCB7XHJcbiAgYm9yZGVyLWxlZnQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbn1cclxuYnV0dG9uOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzLFxyXG5idXR0b246aG92ZXIsXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyYTc1ZmY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5idXR0b246YWN0aXZlLFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmFjdGl2ZSxcclxuYnV0dG9uLmFjdGl2ZSxcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5hY3RpdmUge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgYmFja2dyb3VuZDogI2YwZjBmMjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMjVweCAzMHB4O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlucHV0IC5hY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxufVxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC4zKSwgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4xKTtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW5wdXQuZm9ybS1zdWJtaXQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5pbnB1dC5jYy1leHBpcmVze1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogYXV0bztcclxufVxyXG5he1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user-subscription/user-subscription.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user-subscription/user-subscription.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav [hidden] = \"submitted\" [navItems] =\"NonSubNav\"></app-nav>\n<div [hidden] = \"submitted\">\n<div class=\"container\">\n  <div>\n    <h3 align=\"center\">If you subscribe today for just <h1 align=\"center\">$9.99</h1> you get unlimited skips!</h3>\n    <h3 align=\"center\">As well as access to more songs later on!</h3>\n  </div>\n  <div class=\"input\">\n    <form (ngSubmit) = \"onSubmit(cCardForm)\" #cCardForm=\"ngForm\" class=\"option\" id=\"credit\">\n      <input class=\"cc-number\" maxlength=\"19\" ngModel name=\"credit-number\" pattern=\"\\d*\" placeholder=\"Card Number\" type=\"tel\" />\n      <input class=\"cc-expires\" maxlength=\"2\" ngModel name=\"credit-mexpires\" pattern=\"\\d*\" placeholder=\"Month (digits)\" type=\"tel\" />\n      <input class=\"cc-expires\" maxlength=\"4\" ngModel name=\"credit-yexpires\" pattern=\"\\d*\" placeholder=\"Year\" type=\"tel\" />\n      <input class=\"cc-cvc\" maxlength=\"3\" ngModel name=\"credit-cvc\" pattern=\"\\d*\" placeholder=\"CVV\" type=\"tel\" />\n      <button type=\"submit\"[disabled]=\"!cCardForm.valid\">Pay Now</button>\n    </form>\n  </div>\n</div>\n</div>\n<div class = \"container\" [hidden] =\"!submitted\">\n    <h3 align = \"center\">Your payment went through</h3>\n    <h3 align = \"center\">Click <a (click) = \"logout()\">here</a> to activate your subscription</h3>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-subscription/user-subscription.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-subscription/user-subscription.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserSubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSubscriptionComponent", function() { return UserSubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/subscription.service */ "./src/app/services/subscription.service.ts");
/* harmony import */ var _model_subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/subscription */ "./src/app/model/subscription.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var UserSubscriptionComponent = /** @class */ (function () {
    function UserSubscriptionComponent(subscriptionService, userService, router, route, authService) {
        this.subscriptionService = subscriptionService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.subscription = new _model_subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.submitted = false;
        this.user = _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].getLoggedInUser();
    }
    UserSubscriptionComponent.prototype.ngOnInit = function () {
        this.NonSubNav = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].NonSubNav;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
    };
    UserSubscriptionComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var subscription = new _model_subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"];
        subscription.credit_card_no = form.value['credit-number'];
        subscription.exp_month = form.value['credit-mexpires'];
        subscription.exp_year = form.value['credit-yexpires'];
        subscription.cvv = form.value['credit-cvc'];
        subscription.user_id = this.user.userid;
        this.subscriptionService.addCardInfo(subscription)
            .subscribe(function () { return console.log('success'); }, function () { return console.log('failure'); });
        this.userService.updateUserSubscription(this.user.userid)
            .subscribe(function (data) {
            console.log(data);
            _this.user = data;
        }, function (error) { return console.log(error); });
        this.submitted = true;
    };
    UserSubscriptionComponent.prototype.logout = function () {
        localStorage.removeItem('authToken');
        this.router.navigate([this.returnUrl]);
        // window.location.reload();
    };
    UserSubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-subscription',
            template: __webpack_require__(/*! ./user-subscription.component.html */ "./src/app/components/user-subscription/user-subscription.component.html"),
            styles: [__webpack_require__(/*! ./user-subscription.component.css */ "./src/app/components/user-subscription/user-subscription.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_subscription_service__WEBPACK_IMPORTED_MODULE_3__["SubscriptionService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], UserSubscriptionComponent);
    return UserSubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/components/user-unsubpage1/user-unsubpage1.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/user-unsubpage1/user-unsubpage1.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: rgba(0,0,0,0.6);\r\n}\r\n#wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#wrappertext {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\nh3{font-family: Impact, Charcoal, sans-serif;\r\n  font-size: 25px;\r\n  letter-spacing: 6px;\r\n  word-spacing: 6px;\r\n  color: #000000;\r\n  font-weight: normal;\r\n  text-decoration: none;\r\n  font-style: italic;\r\n  font-variant: small-caps;\r\n  text-transform: capitalize;\r\n  align-content: center;\r\n}\r\nbutton,\r\ninput[type=\"submit\"] {\r\n  background: #1266ff;\r\n  border: none;\r\n  border-bottom: 3px solid #0052e8;\r\n  color: #fff;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  vertical-align: bottom;\r\n  width: 50%;\r\n  align-content: center;\r\n}\r\n.container {\r\n  background: #f5f5f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 15px rgba(0,0,0,0.3);\r\n  margin: 30px auto;\r\n  max-width: 300px;\r\n  overflow: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXVuc3VicGFnZTEvdXNlci11bnN1YnBhZ2UxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0EsR0FBRyx5Q0FBeUM7RUFDMUMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXVuc3VicGFnZTEvdXNlci11bnN1YnBhZ2UxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcclxufVxyXG4jd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiN3cmFwcGVydGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmgze2ZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogNnB4O1xyXG4gIHdvcmQtc3BhY2luZzogNnB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbmJ1dHRvbixcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZDogIzEyNjZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDUyZTg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1Zjc7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user-unsubpage1/user-unsubpage1.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/user-unsubpage1/user-unsubpage1.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav [navItems] =\"userNavs\"></app-nav>\n<div class=\"container\">\n  <div class=\"input\">\n    <form>\n      <div id=\"wrappertext\">\n      <h3>Are you sure about this?</h3>\n      </div>\n      <div id=\"wrapper\">\n        <button type=\"button\" routerLink=\"/userunsubchance2\">Yes</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-unsubpage1/user-unsubpage1.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/user-unsubpage1/user-unsubpage1.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserUnsubpage1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUnsubpage1Component", function() { return UserUnsubpage1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var UserUnsubpage1Component = /** @class */ (function () {
    function UserUnsubpage1Component() {
    }
    UserUnsubpage1Component.prototype.ngOnInit = function () {
        this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].UserNav;
    };
    UserUnsubpage1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-unsubpage1',
            template: __webpack_require__(/*! ./user-unsubpage1.component.html */ "./src/app/components/user-unsubpage1/user-unsubpage1.component.html"),
            styles: [__webpack_require__(/*! ./user-unsubpage1.component.css */ "./src/app/components/user-unsubpage1/user-unsubpage1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserUnsubpage1Component);
    return UserUnsubpage1Component;
}());



/***/ }),

/***/ "./src/app/components/user-unsubpage2/user-unsubpage2.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/user-unsubpage2/user-unsubpage2.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: rgba(0,0,0,0.6);\r\n}\r\n#wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#wrappertext {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\nh3{font-family: Impact, Charcoal, sans-serif;\r\n  font-size: 25px;\r\n  letter-spacing: 6px;\r\n  word-spacing: 6px;\r\n  color: #000000;\r\n  font-weight: normal;\r\n  text-decoration: none;\r\n  font-style: italic;\r\n  font-variant: small-caps;\r\n  text-transform: capitalize;\r\n  align-content: center;\r\n}\r\nbutton,\r\ninput[type=\"submit\"] {\r\n  background: #1266ff;\r\n  border: none;\r\n  border-bottom: 3px solid #0052e8;\r\n  color: #fff;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  vertical-align: bottom;\r\n  width: 50%;\r\n  align-content: center;\r\n}\r\n.container {\r\n  background: #f5f5f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 15px rgba(0,0,0,0.3);\r\n  margin: 30px auto;\r\n  max-width: 300px;\r\n  overflow: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXVuc3VicGFnZTIvdXNlci11bnN1YnBhZ2UyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0EsR0FBRyx5Q0FBeUM7RUFDMUMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXVuc3VicGFnZTIvdXNlci11bnN1YnBhZ2UyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcclxufVxyXG4jd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiN3cmFwcGVydGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmgze2ZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogNnB4O1xyXG4gIHdvcmQtc3BhY2luZzogNnB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbmJ1dHRvbixcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZDogIzEyNjZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDUyZTg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1Zjc7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user-unsubpage2/user-unsubpage2.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/user-unsubpage2/user-unsubpage2.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav [navItems] =\"userNavs\"></app-nav>\n<div class=\"container\">\n  <div class = \"input\">\n<form>\n  <h3>Are you sure about this?</h3>\n  <h3>You will lose all the perks</h3>\n  <div>\n    <button type=\"submit\" routerLink=\"/userunsubbing\">Yes, For Sure</button>\n  </div>\n</form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-unsubpage2/user-unsubpage2.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/user-unsubpage2/user-unsubpage2.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserUnsubpage2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUnsubpage2Component", function() { return UserUnsubpage2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var UserUnsubpage2Component = /** @class */ (function () {
    function UserUnsubpage2Component() {
    }
    UserUnsubpage2Component.prototype.ngOnInit = function () {
        this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].UserNav;
    };
    UserUnsubpage2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-unsubpage2',
            template: __webpack_require__(/*! ./user-unsubpage2.component.html */ "./src/app/components/user-unsubpage2/user-unsubpage2.component.html"),
            styles: [__webpack_require__(/*! ./user-unsubpage2.component.css */ "./src/app/components/user-unsubpage2/user-unsubpage2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserUnsubpage2Component);
    return UserUnsubpage2Component;
}());



/***/ }),

/***/ "./src/app/components/user-unsubscribe/user-unsubscribe.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/user-unsubscribe/user-unsubscribe.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: rgba(0,0,0,0.6);\r\n}\r\n#wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#wrappertext {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\nh3{font-family: Impact, Charcoal, sans-serif;\r\n  font-size: 25px;\r\n  letter-spacing: 6px;\r\n  word-spacing: 6px;\r\n  color: #000000;\r\n  font-weight: normal;\r\n  text-decoration: none;\r\n  font-style: italic;\r\n  font-variant: small-caps;\r\n  text-transform: capitalize;\r\n  align-content: center;\r\n}\r\nbutton,\r\ninput[type=\"submit\"] {\r\n  background: #1266ff;\r\n  border: none;\r\n  border-bottom: 3px solid #0052e8;\r\n  color: #fff;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  vertical-align: bottom;\r\n  width: 50%;\r\n  align-content: center;\r\n}\r\n.container {\r\n  background: #f5f5f7;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 15px rgba(0,0,0,0.3);\r\n  margin: 30px auto;\r\n  max-width: 300px;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXVuc3Vic2NyaWJlL3VzZXItdW5zdWJzY3JpYmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQSxHQUFHLHlDQUF5QztFQUMxQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItdW5zdWJzY3JpYmUvdXNlci11bnN1YnNjcmliZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XHJcbn1cclxuI3dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jd3JhcHBlcnRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5oM3tmb250LWZhbWlseTogSW1wYWN0LCBDaGFyY29hbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDZweDtcclxuICB3b3JkLXNwYWNpbmc6IDZweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5idXR0b24sXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGJhY2tncm91bmQ6ICMxMjY2ZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA1MmU4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user-unsubscribe/user-unsubscribe.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-unsubscribe/user-unsubscribe.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav [hidden]=\"submitted\" [navItems] =\"userNavs\"></app-nav>\n\n<div class = \"container\" [hidden]=\"submitted\">\n<form>\n  <h3>Okay, but really...</h3>\n  <h3>Are you sure about this?</h3>\n  <h3>You will lose all the perks</h3>\n  <div>\n    <button type=\"submit\" (click) = \"unsubscribe()\">I'm done here</button>\n  </div>\n</form>\n</div>\n\n <div class = \"container\" [hidden] =\"!submitted\">\n    <h3 align = \"center\">You're now unsubscribed</h3>\n    <h3 align = \"center\">Click <a (click) = \"logout()\">here</a> to log back in</h3>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-unsubscribe/user-unsubscribe.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/user-unsubscribe/user-unsubscribe.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserUnsubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUnsubscribeComponent", function() { return UserUnsubscribeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/subscription.service */ "./src/app/services/subscription.service.ts");







var UserUnsubscribeComponent = /** @class */ (function () {
    function UserUnsubscribeComponent(userService, authService, subscriptionService, router, route) {
        this.userService = userService;
        this.authService = authService;
        this.subscriptionService = subscriptionService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.user = _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].getLoggedInUser();
    }
    UserUnsubscribeComponent.prototype.ngOnInit = function () {
        this.userNavs = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].UserNav;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    UserUnsubscribeComponent.prototype.unsubscribe = function () {
        var _this = this;
        this.userService.updateUserSubscription(this.user.userid)
            .subscribe(function (data) {
            console.log(data);
            _this.user = data;
        }, function (error) { return console.log(error); });
        this.submitted = true;
    };
    UserUnsubscribeComponent.prototype.logout = function () {
        localStorage.removeItem('authToken');
        this.router.navigate([this.returnUrl]);
        // window.location.reload();
    };
    UserUnsubscribeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-unsubscribe',
            template: __webpack_require__(/*! ./user-unsubscribe.component.html */ "./src/app/components/user-unsubscribe/user-unsubscribe.component.html"),
            styles: [__webpack_require__(/*! ./user-unsubscribe.component.css */ "./src/app/components/user-unsubscribe/user-unsubscribe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], UserUnsubscribeComponent);
    return UserUnsubscribeComponent;
}());



/***/ }),

/***/ "./src/app/model/User.ts":
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/model/subscription.ts":
/*!***************************************!*\
  !*** ./src/app/model/subscription.ts ***!
  \***************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
var Subscription = /** @class */ (function () {
    function Subscription() {
    }
    return Subscription;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('authToken')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = 'http://localhost:8080/login/auth';
    }
    AuthService.isLoggedIn = function () {
        return localStorage.getItem('authToken') != null;
    };
    AuthService.getLoggedInUser = function () {
        var usersJson = localStorage.getItem('authToken');
        if (usersJson === null)
            return null;
        var users = JSON.parse(usersJson);
        return users;
    };
    // hasRoles(users: Array<number>): boolean {
    //   const tokenRoles: Array<number> = JSON.parse(localStorage.getItem('authToken')).users;
    //   return users.every(subscription_id => tokenRoles.indexOf(subscription_id) >= 0);
    // }
    AuthService.prototype.hasRoles = function (id) {
        var tokenId = JSON.parse(localStorage.getItem('authToken')).subscription_id;
        return tokenId === id;
    };
    AuthService.prototype.authenticate = function (email, password, success, fail) {
        return this.http.post(this.authUrl, JSON.stringify({ email: email, password: password }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .toPromise()
            .then(function (resp) {
            localStorage.setItem('authToken', JSON.stringify(resp));
            success();
        }, function (err) {
            fail(err);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/songs.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/songs.service.ts ***!
  \*******************************************/
/*! exports provided: SongsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsService", function() { return SongsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");


// import { mockSongs } from '../model/mocksongs';


var SongsService = /** @class */ (function () {
    function SongsService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    SongsService.prototype.getAllSongs = function () {
        return this.httpClient.get("" + this.apiUrl + "/login/freeradio");
    };
    SongsService.prototype.getRockSongs = function () {
        return this.httpClient.get("" + this.apiUrl + "/login/freeradio/rock");
    };
    SongsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SongsService);
    return SongsService;
}());



/***/ }),

/***/ "./src/app/services/subscription.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/subscription.service.ts ***!
  \**************************************************/
/*! exports provided: SubscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return SubscriptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var SubscriptionService = /** @class */ (function () {
    function SubscriptionService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    SubscriptionService.prototype.addCardInfo = function (subscription) {
        return this.httpClient.post(this.apiUrl + "/login/creditcard", subscription);
    };
    SubscriptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SubscriptionService);
    return SubscriptionService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    UserService.prototype.updateUserSubscription = function (userid) {
        return this.httpClient.put("" + this.apiUrl + "/login/usersubscription/" + ("" + userid), { responseType: 'text' });
    };
    UserService.prototype.addUser = function (user) {
        return this.httpClient.post("" + this.apiUrl + "/login/signup", user);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    UserNav: [
        {
            title: 'Radio',
            link: 'userradio'
        },
        {
            title: 'Unsubscribe',
            link: 'userunsubbingchance'
        },
    ],
    NonSubNav: [
        {
            title: 'Free Radio',
            link: 'userradio'
        },
        {
            title: 'Subscribe',
            link: 'usersubscription'
        },
    ]
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kara\Desktop\Project2MUSICAPP\music-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map