(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["launch-launch-module"],{

/***/ "./src/app/launch/launch.module.ts":
/*!*****************************************!*\
  !*** ./src/app/launch/launch.module.ts ***!
  \*****************************************/
/*! exports provided: LaunchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchPageModule", function() { return LaunchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _launch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./launch.page */ "./src/app/launch/launch.page.ts");







var routes = [
    {
        path: '',
        component: _launch_page__WEBPACK_IMPORTED_MODULE_6__["LaunchPage"]
    }
];
var LaunchPageModule = /** @class */ (function () {
    function LaunchPageModule() {
    }
    LaunchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_launch_page__WEBPACK_IMPORTED_MODULE_6__["LaunchPage"]]
        })
    ], LaunchPageModule);
    return LaunchPageModule;
}());



/***/ }),

/***/ "./src/app/launch/launch.page.html":
/*!*****************************************!*\
  !*** ./src/app/launch/launch.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding *ngIf=\"userInfo != undefined\">\n    <ion-card-header>\n      <ion-card-title><p class=\"usertitle\">Hello {{userInfo.customer_username}}...</p></ion-card-title>\n      <ion-card-subtitle class=\"subtitle\">How about you choose</ion-card-subtitle>\n      <ion-card-subtitle class=\"subtitle\">Default launch screen you are here for ?</ion-card-subtitle>\n    </ion-card-header>\n    <div class=\"launchpage\">\n      <ul class=\"buttons-section\">\n        <li>\n        <ion-button class=\"launch_page_buttons\" [ngClass]=\"(step =='wall')?'selected':''\" (click)=\"selectPageType('wall')\">I'm here to explore all</ion-button> \n        </li>\n        <li>\n          <ion-button class=\"launch_page_buttons\" [ngClass]=\"(step =='shopping')?'selected':''\" (click)=\"selectPageType('shopping')\">I'm here for shopping</ion-button> \n        </li> \n        <li>\n          <ion-button class=\"launch_page_buttons\" [ngClass]=\"(step =='service')?'selected':''\" (click)=\"selectPageType('service')\">I'm here for services</ion-button> \n        </li>\n      </ul>\n    </div>\n    <p class=\"text\">You can change this in setting anytime</p>\n    <div>\n      <ion-button class=\"next_button\" (click)=\"wallPage()\">Next</ion-button>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/launch/launch.page.scss":
/*!*****************************************!*\
  !*** ./src/app/launch/launch.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".usertitle {\n  font-size: 12px; }\n\n.subtitle {\n  font-size: 10px;\n  font-family: Trebuchet MS;\n  color: chocolate; }\n\n.launchpage {\n  text-align: center; }\n\n.buttons-section {\n  list-style: none;\n  display: inline-block;\n  margin: 0;\n  padding: 0; }\n\n.selected {\n  --background: rgb(93, 82, 248); }\n\n.launch_page_buttons {\n  height: 60px;\n  width: 200px; }\n\n.launch_page_buttons:hover {\n  --background:rgb(93, 82, 248); }\n\n.launch_page_buttons:active {\n  --background:rgb(48, 160, 45); }\n\n.text {\n  font-size: 15px;\n  color: #8b0ff1; }\n\n.next_button {\n  float: right;\n  --background:rgb(48, 160, 45); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF1bmNoL0Q6XFxteWFwcDIvc3JjXFxhcHBcXGxhdW5jaFxcbGF1bmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUVkO0VBQ0ksOEJBQWEsRUFBQTs7QUFFakI7RUFDSSxZQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUVmO0VBQ0ksNkJBQWEsRUFBQTs7QUFHakI7RUFDSSw2QkFBYSxFQUFBOztBQUVqQjtFQUNJLGVBQWM7RUFDZCxjQUF1QixFQUFBOztBQUUzQjtFQUNJLFlBQVk7RUFDWiw2QkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF1bmNoL2xhdW5jaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5zdWJ0aXRsZXtcclxuICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgZm9udC1mYW1pbHkgOlRyZWJ1Y2hldCBNUztcclxuICAgIGNvbG9yOmNob2NvbGF0ZTtcclxufVxyXG4ubGF1bmNocGFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRvbnMtc2VjdGlvbiB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uc2VsZWN0ZWQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoOTMsIDgyLCAyNDgpO1xyXG59XHJcbi5sYXVuY2hfcGFnZV9idXR0b25ze1xyXG4gICAgaGVpZ2h0OjYwcHg7XHJcbiAgICB3aWR0aDoyMDBweDtcclxufVxyXG4ubGF1bmNoX3BhZ2VfYnV0dG9uczpob3ZlcntcclxuICAgIC0tYmFja2dyb3VuZDpyZ2IoOTMsIDgyLCAyNDgpO1xyXG5cclxufVxyXG4ubGF1bmNoX3BhZ2VfYnV0dG9uczphY3RpdmV7XHJcbiAgICAtLWJhY2tncm91bmQ6cmdiKDQ4LCAxNjAsIDQ1KTtcclxufVxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgY29sb3I6cmdiKDEzOSwgMTUsIDI0MSk7XHJcbn1cclxuLm5leHRfYnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYig0OCwgMTYwLCA0NSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/launch/launch.page.ts":
/*!***************************************!*\
  !*** ./src/app/launch/launch.page.ts ***!
  \***************************************/
/*! exports provided: LaunchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchPage", function() { return LaunchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var LaunchPage = /** @class */ (function () {
    function LaunchPage(authService, plt, api, router) {
        this.authService = authService;
        this.plt = plt;
        this.api = api;
        this.router = router;
        this.step = 'wall';
        // this.plt.ready().then(() => {
        this.loadUserInfo();
        // });
    }
    LaunchPage.prototype.loadUserInfo = function () {
        var _this = this;
        this.authService.getUserInfo().then(function (items) {
            _this.userInfo = items;
            console.log(_this.userInfo);
            if (_this.userInfo === null) {
                _this.router.navigateByUrl('/login');
            }
        });
    };
    LaunchPage.prototype.ngOnInit = function () {
        // console.log('ngoninit');
        // console.log(this.userInfo);
        // console.log(this.userInfo.bg_user_id);
    };
    LaunchPage.prototype.selectPageType = function (pageType) {
        this.step = pageType;
    };
    LaunchPage.prototype.wallPage = function () {
        var _this = this;
        var userid = this.userInfo.bg_user_id;
        var body = new FormData();
        body.append('pagetype', this.step);
        body.append('userid', userid);
        console.log(userid);
        this.router.navigateByUrl('/wall');
        this.api.postData('api/updateinfo', body).subscribe(function (result) {
            var res = result;
            if (res !== undefined) {
                if (res[0].status === 'success') {
                    if (_this.step === 'shopping') {
                        _this.router.navigateByUrl('/products');
                    }
                    else if (_this.step === 'service') {
                        _this.router.navigateByUrl('/services');
                    }
                    else {
                        _this.router.navigateByUrl('/wall');
                    }
                }
                else {
                }
            }
        }, function (err) {
            console.log(err);
        });
        this.router.navigateByUrl('/wall');
    };
    LaunchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-launch',
            template: __webpack_require__(/*! ./launch.page.html */ "./src/app/launch/launch.page.html"),
            styles: [__webpack_require__(/*! ./launch.page.scss */ "./src/app/launch/launch.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LaunchPage);
    return LaunchPage;
}());



/***/ })

}]);
//# sourceMappingURL=launch-launch-module.js.map