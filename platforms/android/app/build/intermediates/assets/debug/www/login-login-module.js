(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n-->\r\n<ion-content padding>\r\n\r\n    <ion-card-header>\r\n        <ion-card-title>Wohooo</ion-card-title>\r\n        <ion-card-subtitle>Welcome on board with us...</ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-img class=\"logo-icon\" src=\"assets/icon/logo.png\" ></ion-img>\r\n      <hr>\r\n      <hr>\r\n      <form [formGroup]=\"validations_form\" *ngIf=\"showForgotSection == false\" (ngSubmit)=\"launchPage(validations_form.value)\">\r\n          <div class=\"validation-errors\" [innerHTML]=\"formError\">\r\n          </div>\r\n          <ion-item>\r\n            <ion-input  formControlName=\"username\" placeholder=\"EmailId/UserName\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.username\">\r\n              <div class=\"error-message\" *ngIf=\"validations_form.get('username').hasError(validation.type) && (validations_form.get('username').dirty || validations_form.get('username').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item>\r\n            <ion-input  type=\"password\" formControlName=\"password\" minlength=\"3\" placeholder=\"Password\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n              <div class=\"error-message\" *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <hr>\r\n          <a class=\"forgot_password\" (click)=\"showForgot()\">Forgot Password?</a>\r\n        \r\n        <div class=\"login-action-btn\">\r\n          <ion-button class=\"buttons\" type=\"submit\" [disabled]=\"!validations_form.valid\"><p>Already a Member<span>Sign in</span></p></ion-button>\r\n          <ion-button class=\"buttons\" (click)=\"OpenSignup()\"><p>For Better Experience<span>Sign up</span></p></ion-button>\r\n        </div>\r\n      </form>\r\n      <form [formGroup]=\"validations_Forgot_form\" *ngIf=\"showForgotSection == true\" (ngSubmit)=\"resetPassword(validations_Forgot_form.value)\">\r\n        <div class=\"validation-errors\" [innerHTML]=\"formForgotError\">\r\n        </div>\r\n        <ion-item>\r\n          <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Email ID\" required></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_forgot_messages.email\">\r\n            <div class=\"error-message\" *ngIf=\"validations_Forgot_form.get('email').hasError(validation.type) && (validations_Forgot_form.get('email').dirty || validations_Forgot_form.get('email').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <div class=\"login-action-btn\">\r\n          <ion-button class=\"buttons\" type=\"submit\" [disabled]=\"!validations_Forgot_form.valid\"><p>Submit</p></ion-button>\r\n          <ion-button class=\"buttons\" (click)=\"goBack()\"><p>Back</p></ion-button>\r\n        </div>\r\n      </form>\r\n      <div class=\"skip-sec\">\r\n        <a class=\"skip_link\" [routerLink]=\"['/wall']\">Skip and just Explore</a><ion-icon class=\"icon\" name=\"information-circle-outline\"></ion-icon>\r\n      </div>\r\n\r\n      <ul class=\"footer_additional_links\" >\r\n        <li>\r\n            <a [routerLink]=\"['/static']\" [queryParams]=\"{section: 'terms-of-use'}\" routerDirection=\"root\">Terms & Conditions</a>\r\n        </li>\r\n        <li class=\"middle\"><a [routerLink]=\"['/static']\" [queryParams]=\"{section: 'privacy-policy'}\" routerDirection=\"root\" >Privacy Policy</a></li>\r\n        <li class=\"last\"><a [routerLink]=\"['/static']\" [queryParams]=\"{section: 'user-agreement'}\" routerDirection=\"root\">Agreements</a></li>\r\n      </ul>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  display: inline; }\n\nion-card-header {\n  text-align: center; }\n\n.logo-icon {\n  margin: 0 auto;\n  display: table;\n  width: 100px; }\n\n.logo-icon img {\n    display: table-cell;\n    width: 100px; }\n\n.forgot_password {\n  color: red;\n  margin-left: 15px;\n  text-decoration: none; }\n\n.validation-errors {\n  color: red;\n  font-size: 11px; }\n\n.validation-errors p {\n  margin: 0px 2px 0px 0px; }\n\n.login-action-btn {\n  margin-bottom: 20px;\n  margin-top: 15px; }\n\n.login-action-btn .buttons {\n    width: 45%;\n    margin: 5px 6px auto;\n    height: auto;\n    cursor: pointer; }\n\n.login-action-btn .buttons p {\n      width: 130px;\n      float: left;\n      font-size: 11px;\n      letter-spacing: 0px; }\n\n.login-action-btn .buttons p span {\n        clear: both;\n        float: left;\n        margin: 0 auto;\n        width: 100%;\n        margin-top: 5px;\n        font-size: 16px;\n        text-align: center; }\n\n.footer_additional_links {\n  bottom: 4px !important;\n  padding: 0 27px 0 0;\n  margin: 10px auto;\n  position: relative;\n  bottom: 10px;\n  width: 100%;\n  float: left; }\n\n.footer_additional_links li:first {\n    width: 31%; }\n\n.footer_additional_links li.last {\n    list-style-type: disc;\n    display: list-item;\n    list-style-position: inside;\n    display: list-item;\n    width: 30%; }\n\n.footer_additional_links li {\n    width: 31%;\n    display: block;\n    float: left;\n    font-size: 12px;\n    text-align: center;\n    vertical-align: middle;\n    margin: 0 auto; }\n\n.footer_additional_links li a {\n      text-decoration: none;\n      color: black; }\n\n.footer_additional_links .middle {\n    width: 35%;\n    margin-right: 10px;\n    margin-top: 0px;\n    list-style-type: disc;\n    display: list-item;\n    list-style-position: inside; }\n\n.item-inner {\n  border: none; }\n\n.skip-sec {\n  margin: 0 auto;\n  text-align: center; }\n\n.skip-sec .skip_link {\n    color: green;\n    text-decoration: none; }\n\n.buttons {\n  color: primary;\n  size: medium; }\n\n.list-ios {\n  margin-bottom: 15px; }\n\n.icon {\n  font-size: 20px;\n  margin-left: 20px;\n  vertical-align: bottom; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXGJsb2dnb3Rvd2ViYXBwL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUhoQjtJQUtRLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7O0FBR3BCO0VBQ0ksVUFBUztFQUNULGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUVuQjtFQUNJLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFGcEI7SUFJUSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBUHZCO01BU1ksWUFBWTtNQUNaLFdBQVc7TUFDWCxlQUFlO01BQ2YsbUJBQW1CLEVBQUE7O0FBWi9CO1FBY2dCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsY0FBYztRQUNkLFdBQVc7UUFDWCxlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQixFQUFBOztBQU1sQztFQUNJLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFQZjtJQVNRLFVBQVUsRUFBQTs7QUFUbEI7SUFZUSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsVUFBVSxFQUFBOztBQWhCbEI7SUFtQlEsVUFBVTtJQUNWLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYyxFQUFBOztBQXpCdEI7TUEyQlkscUJBQXFCO01BQ3JCLFlBQVksRUFBQTs7QUE1QnhCO0lBZ0NRLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMkJBQTJCLEVBQUE7O0FBR25DO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFGdEI7SUFJUSxZQUFXO0lBQ1gscUJBQW9CLEVBQUE7O0FBRzVCO0VBQ0ksY0FBYTtFQUNaLFlBQVcsRUFBQTs7QUFHaEI7RUFDSSxtQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgICBkaXNwbGF5OmlubGluZTtcclxufVxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dvLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuLmZvcmdvdF9wYXNzd29yZHtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbn1cclxuLnZhbGlkYXRpb24tZXJyb3JzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLnZhbGlkYXRpb24tZXJyb3JzIHAge1xyXG4gICAgbWFyZ2luOiAwcHggMnB4IDBweCAwcHg7XHJcbn1cclxuLmxvZ2luLWFjdGlvbi1idG4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBtYXJnaW46IDVweCA2cHggYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb290ZXJfYWRkaXRpb25hbF9saW5rcyB7XHJcbiAgICBib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAyN3B4IDAgMDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGxpOmZpcnN0IHtcclxuICAgICAgICB3aWR0aDogMzElO1xyXG4gICAgfVxyXG4gICAgbGkubGFzdCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG4gICAgICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxuICAgICAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbiAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDMxJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5taWRkbGUge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcclxuICAgIH1cclxufVxyXG4uaXRlbS1pbm5lciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnNraXAtc2VjIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLnNraXBfbGlua3tcclxuICAgICAgICBjb2xvcjpncmVlbjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIH1cclxufVxyXG4uYnV0dG9uc3tcclxuICAgIGNvbG9yOnByaW1hcnk7XHJcbiAgICAgc2l6ZTptZWRpdW07XHJcbiAgICAgXHJcbn1cclxuLmxpc3QtaW9zIHtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG4uaWNvbntcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");









var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, api, authService, storage, events, myApp, router) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.authService = authService;
        this.storage = storage;
        this.events = events;
        this.myApp = myApp;
        this.router = router;
        this.showForgotSection = false;
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'EmailId/Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 255 characters long.' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Password cannot be more than 255 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
        };
        this.validation_forgot_messages = {
            'email': [
                { type: 'required', message: 'EmailId is required.' },
                { type: 'pattern', message: 'Invalid Email' }
            ],
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.validations_form = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[@0-9])[a-zA-Z0-9]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
        this.validations_Forgot_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
        this.authService.getUserInfo().then(function (items) {
            var userInfo = items;
            if (userInfo !== null) {
                _this.router.navigateByUrl('/launch');
                _this.router.navigate(['/launch']);
            }
        });
    };
    LoginPage.prototype.launchPage = function (values) {
        var _this = this;
        this.formError = '';
        var body = new FormData();
        body.append('username', values.username);
        body.append('password', values.password);
        this.api.postData('api/login', body).subscribe(function (result) {
            var res = result;
            if (res !== undefined) {
                if (res[0].status === 'success') {
                    _this.storage.set('ACCESS_TOKEN', res[0].user_data.access_token);
                    _this.storage.set('USER_DATA', res[0].user_data);
                    _this.events.publish('user:login');
                    _this.myApp.loggedIn();
                    _this.router.navigateByUrl('/launch');
                }
                else {
                    _this.formError = res[0].message;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.OpenSignup = function () {
        this.router.navigateByUrl('/signup');
    };
    LoginPage.prototype.showForgot = function () {
        this.showForgotSection = true;
        this.formForgotError = '';
    };
    LoginPage.prototype.goBack = function () {
        this.showForgotSection = false;
    };
    LoginPage.prototype.resetPassword = function (values) {
        var _this = this;
        this.formError = '';
        var body = new FormData();
        body.append('email', values.email);
        this.api.postData('api/login', body).subscribe(function (result) {
            var res = result;
            if (res !== undefined) {
                if (res[0].status === 'success') {
                    _this.showForgotSection = false;
                }
                else {
                    _this.showForgotSection = true;
                    _this.formForgotError = res[0].message;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"]],
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"],
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map