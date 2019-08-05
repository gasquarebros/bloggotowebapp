(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wall-wall-module"],{

/***/ "./src/app/wall/wall.module.ts":
/*!*************************************!*\
  !*** ./src/app/wall/wall.module.ts ***!
  \*************************************/
/*! exports provided: WallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallPageModule", function() { return WallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wall_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wall.page */ "./src/app/wall/wall.page.ts");
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-module/share-module.module */ "./src/app/share-module/share-module.module.ts");








var routes = [
    {
        path: '',
        component: _wall_page__WEBPACK_IMPORTED_MODULE_6__["WallPage"]
    }
];
var WallPageModule = /** @class */ (function () {
    function WallPageModule() {
    }
    WallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModulePageModule"]
            ],
            declarations: [
                _wall_page__WEBPACK_IMPORTED_MODULE_6__["WallPage"],
            ],
            exports: [],
            entryComponents: []
        })
    ], WallPageModule);
    return WallPageModule;
}());



/***/ }),

/***/ "./src/app/wall/wall.page.html":
/*!*************************************!*\
  !*** ./src/app/wall/wall.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-header [title]=\"'wall'\"></app-login-header>\n<ion-content *ngIf=\"userInfo != undefined\">\n    \n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button>\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\" horizontal=\"start\" >\n          <ion-button (click)=\"createPost()\">Post on Wall</ion-button>\n          <ion-button (click)=\"goto('products')\">Sell Products</ion-button>\n          <ion-button (click)=\"goto('services')\">Post Services</ion-button>\n        </ion-fab-list>\n    </ion-fab>\n  <ion-item>\n    <ion-avatar>\n      <img src=\"assets/icon/avatar.png\">\n    </ion-avatar>\n    <h6 *ngIf=\"userInfo.customer_username != undefined\">Hi {{userInfo.customer_username}}!</h6>\n  </ion-item>\n  <hr no-padding no-margin>\n  <app-common-post [isProfileType] = \"profileType\"></app-common-post>\n</ion-content>\n<app-common-footer \n    [postProfileType] = 'profileType'\n    (updatePageType) = profileSection($event)></app-common-footer>"

/***/ }),

/***/ "./src/app/wall/wall.page.scss":
/*!*************************************!*\
  !*** ./src/app/wall/wall.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-list {\n  margin-left: -66px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbC9EOlxcbXlhcHAyL3NyY1xcYXBwXFx3YWxsXFx3YWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2FsbC93YWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItbGlzdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC02NnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/wall/wall.page.ts":
/*!***********************************!*\
  !*** ./src/app/wall/wall.page.ts ***!
  \***********************************/
/*! exports provided: WallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallPage", function() { return WallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _share_module_common_post_common_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share-module/common-post/common-post.component */ "./src/app/share-module/common-post/common-post.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");







var WallPage = /** @class */ (function () {
    function WallPage(menu, api, router, 
    // private youtube: YoutubeVideoPlayer,
    authService) {
        this.menu = menu;
        this.api = api;
        this.router = router;
        this.authService = authService;
        this.userInfo = null;
    }
    WallPage.prototype.ngOnInit = function () {
        var _this = this;
        this.profileView = 'post';
        this.authService.getUserInfo().then(function (items) {
            _this.userInfo = items;
        });
    };
    WallPage.prototype.createPost = function () {
        this.commonPostComponent.createPost();
    };
    WallPage.prototype.profileSection = function (section) {
        if (section === void 0) { section = ''; }
        this.profileView = 'post';
        this.profileType = section;
    };
    WallPage.prototype.goto = function (page) {
        if (page === void 0) { page = ''; }
        if (page != '') {
            this.router.navigateByUrl('/' + page);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_share_module_common_post_common_post_component__WEBPACK_IMPORTED_MODULE_4__["CommonPostComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _share_module_common_post_common_post_component__WEBPACK_IMPORTED_MODULE_4__["CommonPostComponent"])
    ], WallPage.prototype, "commonPostComponent", void 0);
    WallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wall',
            template: __webpack_require__(/*! ./wall.page.html */ "./src/app/wall/wall.page.html"),
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]],
            styles: [__webpack_require__(/*! ./wall.page.scss */ "./src/app/wall/wall.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], WallPage);
    return WallPage;
}());



/***/ })

}]);
//# sourceMappingURL=wall-wall-module.js.map