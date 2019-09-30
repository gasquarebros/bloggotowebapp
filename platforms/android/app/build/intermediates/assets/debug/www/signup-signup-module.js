(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form  [formGroup]=\"validations_form\"  (ngSubmit)=\"register(validations_form.value)\" >\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3 class=\"title-section\">Let us Understand you to give you better experience!</h3>\n          </div>\n          <div>\n            <div class=\"SelectImage\">\n              <img [src]=\"base64Image\" *ngIf=\"base64Image\" class=\"AddImage\">  \n              <div class=\"profile-photo\" *ngIf=\"!base64Image\">Profile Photo</div>\n              <div class=\"ImageDiv\" [style.backgroundImage]=\"'url(' + DefaultImg + ')'\" (click)=\"presentActionSheet()\"> Upload\n              </div>\n            </div>\n            <div class=\"error-message server-error\" [innerHTML]=\"formError\">\n            </div>\n            <ion-item>\n              <div class=\"col1\">\n                <ion-input  formControlName=\"firstname\" type=\"text\" placeholder=\"First Name\"  required></ion-input>\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validation_messages.firstname\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('firstname').hasError(validation.type) && (validations_form.get('firstname').dirty || validations_form.get('firstname').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n              <div class=\"col2\">\n                <ion-input  formControlName=\"lastname\" type=\"text\" placeholder=\"Last Name\" ></ion-input>\n              </div>\n            </ion-item>\n            <ion-item>\n              <ion-input  formControlName=\"username\" type=\"text\" placeholder=\"Username\" required></ion-input>\n              <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validation_messages.username\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('username').hasError(validation.type) && (validations_form.get('username').dirty || validations_form.get('username').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n            </ion-item>\n            <ion-item>\n              <div class=\"col1\">\n                <ion-datetime formControlName=\"dob\" display-format=\"MMM DD, YYYY\" aria-placeholder=\"DOB\" placeholder=\"DOB\"></ion-datetime>\n              </div>\n              <div class=\"col2\">\n                  <ion-select formControlName=\"gender\" placeholder=\"Select Gender\">\n                    <ion-select-option value=\"female\">Female</ion-select-option>\n                    <ion-select-option value=\"male\">Male</ion-select-option>\n                  </ion-select>\n              </div>\n            </ion-item>\n            <ion-item>\n              <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Email ID\" required></ion-input>\n              <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validation_messages.email\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n            </ion-item>\n            <ion-item>\n              <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Password\"  required></ion-input>\n              <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validation_messages.password\">\n                    <div class=\"error-message\" *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n            </ion-item>\n            <ion-item class=\"ion-slider-toggle\">\n              <ion-label class=\"usertype-label\">I'm Person</ion-label>\n              <ion-toggle formControlName=\"usertype\" color =\"secondary\"  (click)=\"userTypeToggle()\"></ion-toggle>\n              <ion-label class=\"usertype-label\">I'm Business</ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"toggleAction == true\">\n                <ion-input  formControlName=\"companyname\" type=\"text\" placeholder=\"Company Name\" ></ion-input>  \n            </ion-item>\n                        \n          </div>\n          <div padding> \n            <ion-button class=\"submit-btn\"  size=\"small\" type=\"submit\" [disabled]=\"!validations_form.valid\" expand=\"block\">Signup</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --background: #062f77; }\n\n.title-section {\n  font-size: 15px;\n  margin-top: 20px; }\n\n.server-error {\n  clear: both; }\n\n.SelectImage {\n  border-radius: 50%;\n  width: 85px;\n  margin: 0 auto;\n  height: 92px;\n  border: 2px solid #ccc; }\n\n.SelectImage .AddImage {\n    border-radius: 50%;\n    width: 85px;\n    height: 85px;\n    margin: 0 auto;\n    text-align: center;\n    float: left; }\n\n.SelectImage .profile-photo {\n    height: 84px;\n    text-align: center;\n    margin: 0 auto;\n    width: 90%;\n    vertical-align: middle;\n    display: inline-block;\n    font-size: 12px;\n    padding: 21px 18px;\n    margin-left: 5px; }\n\n.SelectImage .ImageDiv {\n    position: relative;\n    top: -26px;\n    left: 3px;\n    border-top: 1px solid #CCC;\n    width: 75px;\n    height: 30px;\n    float: left;\n    background-color: grey;\n    border-radius: 0 0px 44px 44px;\n    color: white;\n    padding-left: 13px;\n    padding-top: 5px; }\n\n.col1 {\n  width: 48%;\n  float: left;\n  margin-right: 10px; }\n\n.col2 {\n  width: 48%;\n  float: right; }\n\nion-select {\n  padding: 0px;\n  width: 100%;\n  max-width: 100%;\n  position: relative; }\n\nion-select .select-text {\n    width: 100px !important;\n    max-width: 100px;\n    float: left; }\n\nion-select .select-icon {\n    width: 16px; }\n\nion-datetime {\n  padding-top: 7px;\n  padding-bottom: 0px;\n  padding-left: 0px; }\n\nion-datetime .datetime-text {\n    font-size: 14px !important; }\n\nion-datetime ion-label {\n    margin-top: 3px; }\n\n.ion-slider-toggle ion-toggle {\n  margin-right: 15px; }\n\n.ion-slider-toggle ion-label {\n  margin-right: 0px; }\n\nion-label {\n  font-size: 15px !important; }\n\n.submit-btn {\n  width: 50%;\n  margin: 0 auto; }\n\n.error-message {\n  color: red;\n  font-size: 11px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0Q6XFxibG9nZ290b3dlYmFwcC9zcmNcXGFwcFxcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFHakI7RUFDSSxlQUFjO0VBQ2QsZ0JBQWUsRUFBQTs7QUFFbkI7RUFDSSxXQUFVLEVBQUE7O0FBR2Q7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0JBQXNCLEVBQUE7O0FBTDFCO0lBT1Esa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7O0FBWm5CO0lBZVEsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTs7QUF2QnhCO0lBMEJRLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7O0FBTXhCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxVQUFVO0VBQ1YsWUFBVyxFQUFBOztBQUVmO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWlCLEVBQUE7O0FBSnJCO0lBTVEsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7O0FBUm5CO0lBV1EsV0FBVyxFQUFBOztBQUduQjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBSHJCO0lBS1EsMEJBQXlCLEVBQUE7O0FBTGpDO0lBUVEsZUFBYyxFQUFBOztBQUd0QjtFQUVRLGtCQUFpQixFQUFBOztBQUZ6QjtFQUtRLGlCQUFpQixFQUFBOztBQUd6QjtFQUNJLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLFVBQVU7RUFDVixjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzA2MmY3NztcclxufVxyXG5cclxuLnRpdGxlLXNlY3Rpb24ge1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuLnNlcnZlci1lcnJvciB7XHJcbiAgICBjbGVhcjpib3RoO1xyXG59XHJcblxyXG4uU2VsZWN0SW1hZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGhlaWdodDogOTJweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgICAuQWRkSW1hZ2Uge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUtcGhvdG8ge1xyXG4gICAgICAgIGhlaWdodDogODRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogMjFweCAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuSW1hZ2VEaXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0yNnB4O1xyXG4gICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NDQztcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDBweCA0NHB4IDQ0cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG59XHJcbi5jb2wxIHtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uY29sMiB7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgLnNlbGVjdC10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnNlbGVjdC1pY29uIHtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgIH1cclxufVxyXG5pb24tZGF0ZXRpbWUge1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIC5kYXRldGltZS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOjNweDtcclxuICAgIH1cclxufVxyXG4uaW9uLXNsaWRlci10b2dnbGUge1xyXG4gICAgaW9uLXRvZ2dsZSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxufVxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





// import { NavController, ActionSheetController , NavParams, LoadingController, ToastController  } from 'ionic-angular';


// import { DatePicker } from '@ionic-native/date-picker/ngx';
var SignupPage = /** @class */ (function () {
    function SignupPage(toastCtrl, loadingCtrl, camera, actionSheetCtrl, api, formBuilder, 
    // private datePicker: DatePicker,
    router) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.api = api;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toggleAction = false;
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            'companyname': [
                { type: 'minlength', message: 'Company Name must be at least 1 characters long.' },
                { type: 'maxlength', message: 'Company Name cannot be more than 25 characters long.' },
                { type: 'validCompanyname', message: 'Your company name has already been taken.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Password cannot be more than 25 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
            'email': [
                { type: 'required', message: 'EmailId is required.' },
                { type: 'pattern', message: 'Invalid Email' },
                { type: 'validEmail', message: 'Your Email has already been taken.' }
            ],
            'firstname': [
                { type: 'required', message: 'Firstname is required.' },
            ],
        };
        this.base64Image = '';
        this.image = '';
        this.DefaultImg = 'assets/kola.jpg';
    }
    SignupPage.prototype.ngOnInit = function () {
        this.validations_form = this.formBuilder.group({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            companyname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)
            ])),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            usertype: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
        });
    };
    SignupPage.prototype.userTypeToggle = function () {
        console.log(this.validations_form.value.usertype);
        if (this.validations_form.value.usertype === false) {
            this.toggleAction = true;
        }
        else if (this.validations_form.value.usertype === true) {
            this.toggleAction = false;
        }
    };
    SignupPage.prototype.register = function (form) {
        var _this = this;
        console.log(form);
        var body = new FormData();
        body.append('customer_first_name', form.firstname);
        body.append('customer_last_name', form.lastname);
        body.append('customer_username', form.username);
        body.append('customer_email', form.email);
        body.append('customer_password', form.password);
        body.append('dob', form.dob);
        body.append('gender', form.gender);
        body.append('customer_type', form.usertype);
        body.append('customer_photo', this.base64Image);
        body.append('company_name', form.companyname);
        this.showLoader();
        this.api.postData('api/register', body).subscribe(function (result) {
            console.log('innn');
            var res = result;
            if (res !== undefined) {
                console.log(res.status);
                if (res.status === 'success') {
                    _this.presentToastWithOptions(res.message);
                    // this.router.navigateByUrl('/login');
                }
                else {
                    _this.formError = res[0].message;
                    console.log(_this.formError);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    SignupPage.prototype.showLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: null,
                            duration: 5000,
                            message: 'Please wait...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SignupPage.prototype.presentToastWithOptions = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            showCloseButton: true,
                            position: 'bottom',
                            closeButtonText: 'Done'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            // title: 'Select Image Source',
                            buttons: [
                                {
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            sourceType: sourceType,
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 600,
            targetHeight: 600,
            saveToPhotoAlbum: false
        };
        if (_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]['installed']) {
            this.camera.getPicture(options).then(function (imageData) {
                _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            }, function (err) {
                try {
                    _this.fileInput.nativeElement.click();
                }
                catch (err) {
                    console.log(err);
                    // this.presentToast('Sorry!! Something went wrong.');
                }
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    SignupPage.prototype.processWebImage = function (event) {
        var _this = this;
        console.log(event);
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var ImageURI = readerEvent.target.result;
            _this.base64Image = ImageURI;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    SignupPage.prototype.openCam = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // alert(imageData)
            _this.image = window.Ionic.WebView.convertFileSrc(imageData);
        }, function (err) {
            // Handle error
            alert('error ' + JSON.stringify(err));
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupPage.prototype, "fileInput", void 0);
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map