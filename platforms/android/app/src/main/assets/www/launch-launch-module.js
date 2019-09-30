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

module.exports = "<ion-content padding *ngIf=\"userInfo != undefined\">\r\n    <ion-card-header>\r\n      <ion-card-title><p class=\"usertitle\">Hello {{userInfo.customer_username}}...</p></ion-card-title>\r\n      <ion-card-subtitle class=\"subtitle\">How about you choose</ion-card-subtitle>\r\n      <ion-card-subtitle class=\"subtitle\">Default launch screen you are here for ?</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <div class=\"launchpage\">\r\n      <ul class=\"buttons-section\">\r\n        <li>\r\n        <ion-button class=\"launch_page_buttons\" [ngClass]=\"(step =='wall')?'selected':''\" (click)=\"selectPageType('wall')\">I'm here to explore</ion-button> \r\n        </li>\r\n        <li>\r\n          <ion-button class=\"launch_page_buttons\" [ngClass]=\"(step =='shopping')?'selected':''\" (click)=\"selectPageType('shopping')\">I'm here for shopping</ion-button> \r\n        </li> \r\n        <li>\r\n          <ion-button class=\"launch_page_buttons\" [ngClass]=\"(step =='service')?'selected':''\" (click)=\"selectPageType('service')\">I'm here for services</ion-button> \r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <p class=\"text\">You can change this in setting anytime</p>\r\n    <div>\r\n      <ion-button class=\"next_button\" (click)=\"wallPage()\">Next</ion-button>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/launch/launch.page.scss":
/*!*****************************************!*\
  !*** ./src/app/launch/launch.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".usertitle {\n  font-size: 12px; }\n\n.subtitle {\n  font-size: 10px;\n  font-family: Trebuchet MS;\n  color: chocolate; }\n\n.launchpage {\n  text-align: center; }\n\n.buttons-section {\n  list-style: none;\n  display: inline-block;\n  margin: 0;\n  padding: 0; }\n\n.selected {\n  --background: rgb(93, 82, 248); }\n\n.launch_page_buttons {\n  height: 60px;\n  width: 200px; }\n\n.launch_page_buttons:hover {\n  --background:rgb(93, 82, 248); }\n\n.launch_page_buttons:active {\n  --background:rgb(48, 160, 45); }\n\n.text {\n  font-size: 15px;\n  color: #8b0ff1; }\n\n.next_button {\n  float: right;\n  --background:rgb(48, 160, 45); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF1bmNoL0Q6XFxibG9nZ290b3dlYmFwcC9zcmNcXGFwcFxcbGF1bmNoXFxsYXVuY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWUsRUFBQTs7QUFFbkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRWQ7RUFDSSw4QkFBYSxFQUFBOztBQUVqQjtFQUNJLFlBQVc7RUFDWCxZQUFXLEVBQUE7O0FBRWY7RUFDSSw2QkFBYSxFQUFBOztBQUdqQjtFQUNJLDZCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZUFBYztFQUNkLGNBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksWUFBWTtFQUNaLDZCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXVuY2gvbGF1bmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VydGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnN1YnRpdGxle1xyXG4gICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICBmb250LWZhbWlseSA6VHJlYnVjaGV0IE1TO1xyXG4gICAgY29sb3I6Y2hvY29sYXRlO1xyXG59XHJcbi5sYXVuY2hwYWdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnV0dG9ucy1zZWN0aW9uIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zZWxlY3RlZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYig5MywgODIsIDI0OCk7XHJcbn1cclxuLmxhdW5jaF9wYWdlX2J1dHRvbnN7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG59XHJcbi5sYXVuY2hfcGFnZV9idXR0b25zOmhvdmVye1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYig5MywgODIsIDI0OCk7XHJcblxyXG59XHJcbi5sYXVuY2hfcGFnZV9idXR0b25zOmFjdGl2ZXtcclxuICAgIC0tYmFja2dyb3VuZDpyZ2IoNDgsIDE2MCwgNDUpO1xyXG59XHJcbi50ZXh0e1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBjb2xvcjpyZ2IoMTM5LCAxNSwgMjQxKTtcclxufVxyXG4ubmV4dF9idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAtLWJhY2tncm91bmQ6cmdiKDQ4LCAxNjAsIDQ1KTtcclxufSJdfQ== */"

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