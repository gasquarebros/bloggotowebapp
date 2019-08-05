(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-module/share-module.module */ "./src/app/share-module/share-module.module.ts");








var routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModulePageModule"]
            ],
            declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ }),

/***/ "./src/app/account/account.page.html":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-header [title]=\"title\"></app-login-header>\n\n<ion-content padding>\n    <div id=\"sc-edprofile\" *ngIf=\"userData != undefined\">\n        <form  [formGroup]=\"validations_form\"  (ngSubmit)=\"updateProfile(validations_form.value)\" >\n          <div class=\"userImage\">\n              <div class=\"user-image-section\">\n                <div class=\"img _1-yc profpic\" aria-label=\"userData.customer_username\" role=\"img\" style=\"background:#d8dce6;background-size:100% 100%;-webkit-background-size:100% 100%;width:48px;height:48px;\">\n                    <ion-avatar>\n                      <img [src]=\"userData.customer_photo\">\n                    </ion-avatar>\n                </div>\n              </div>\n          </div>\n          <div class=\"error-message server-error\" [innerHTML]=\"formError\">\n          </div>\n\n          <div class=\"sc-container\" >\n            <p>Basic Details</p>\n            <div *ngIf=\"userData.customer_type == 0\">\n              <ion-input type=\"text\" formControlName=\"first_name\" placeholder=\"Enter First Name\" value=\"{{userData.customer_first_name}}\" required></ion-input>\n              <ion-input type=\"text\" formControlName=\"last_name\" placeholder=\"Enter Last Name\" value=\"{{userData.customer_last_name}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_phone\" placeholder=\"Enter Phone Number\" value=\"{{userData.customer_phone}}\"></ion-input>\n              <ion-item>\n                  <ion-label>Date</ion-label>\n                  <ion-datetime formControlName=\"customer_birthdate\" placeholder=\"Enter Birthday\" value=\"{{userData.customer_birthdate}}\" display-format=\"YYYY-MM-DD\"></ion-datetime>\n              </ion-item>\n            </div>\n            <div *ngIf=\"userData.customer_type == 1\">\n              <ion-input type=\"text\" formControlName=\"company_name\" placeholder=\"Enter Company Name\" value=\"{{userData.company_name}}\" required></ion-input>\n              <ion-select formControlName=\"business_source\" placeholder=\"Select Business Source\">\n                <ion-select-option [selected]=\"userData.customer_business_source == 'online'\"  value=\"online\"> Online Business</ion-select-option> \n                <ion-select-option [selected]=\"userData.customer_business_source == 'offline'\" [value]='offline'> Offline Business</ion-select-option> \n                <ion-select-option [selected]=\"userData.customer_business_source == both\" [value]='both'> Both Online/Offline</ion-select-option> \n              </ion-select>\n              <ion-input type=\"text\" formControlName=\"business_website\" placeholder=\"Enter Business Website\" value=\"{{userData.customer_business_website}}\"></ion-input>\n\n              <ion-select formControlName=\"business_model\" placeholder=\"Select Business Model\">\n                <ion-select-option [selected]=\"userData.business_model == 'sales'\"  value=\"sales\"> Sales</ion-select-option> \n                <ion-select-option [selected]=\"userData.business_model == 'service'\" [value]='service'> Service</ion-select-option> \n                <ion-select-option [selected]=\"userData.business_model == both\" [value]='sale-service'> Sales/Services</ion-select-option> \n              </ion-select>\n\n              <ion-input type=\"text\" formControlName=\"first_name\" placeholder=\"Lead Person of Business\" value=\"{{userData.customer_first_name}}\" required></ion-input>\n              <ion-input type=\"text\" formControlName=\"last_name\" placeholder=\"Point of Contact\" value=\"{{userData.customer_last_name}}\"></ion-input>\n\n\n              <ion-select formControlName=\"business_sector\" placeholder=\"Select Business Sector\">\n                <ion-select-option [selected]=\"userData.business_sector == 'local'\"  value=\"local\"> Local</ion-select-option> \n                <ion-select-option [selected]=\"userData.business_sector == 'national'\" [value]='national'> National</ion-select-option> \n                <ion-select-option [selected]=\"userData.business_sector == international\" [value]='international'> International</ion-select-option> \n              </ion-select>\n\n              <ion-select formControlName=\"branches\" placeholder=\"Select Branches\">\n                <ion-select-option [selected]=\"userData.branches == '0'\"  value=\"0\"> No</ion-select-option> \n                <ion-select-option [selected]=\"userData.branches == '1'\" [value]='1'> Yes</ion-select-option> \n              </ion-select>\n\n              <ion-input type=\"text\" formControlName=\"business_establishment\" placeholder=\"Business Establishment\" value=\"{{userData.business_establishment}}\" required></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_prof_specialized\" placeholder=\"Business Customer Target\" value=\"{{userData.customer_prof_specialized}}\"></ion-input>\n              \n              <ion-select formControlName=\"is_adult_only\" placeholder=\"is_adult_only\">\n                <ion-select-option [selected]=\"userData.is_adult_only == '0'\"  value=\"0\"> No</ion-select-option> \n                <ion-select-option [selected]=\"userData.is_adult_only == '1'\" [value]='1'> Yes</ion-select-option> \n              </ion-select>\n            </div>\n\n\n            <ion-input type=\"text\" formControlName=\"address_line1\" placeholder=\"Enter Address Line1\" value=\"{{userData.address}}\"></ion-input>\n            <ion-input type=\"text\" formControlName=\"address_line2\" placeholder=\"Enter Address Line2\" value=\"{{userData.address_line2}}\"></ion-input>\n            <ion-select value=\"{{userData.customer_country}}\" (ionChange) = \"changeCountry($event)\" formControlName=\"customer_country\" placeholder=\"Select Country\">\n                <ion-select-option *ngFor=\"let country of countries;let i=index;\" [selected]=\"userData.customer_country == country.key\" [value]='country.indexval'> {{country.value}}</ion-select-option> \n            </ion-select>\n            <ion-select (ionChange) = \"changeState($event)\" value=\"{{userData.customer_state}}\" formControlName=\"customer_state\" placeholder=\"Select State\">\n                <ion-select-option [value]=\"\">Select State</ion-select-option>\n                <ion-select-option *ngFor=\"let state of validStates;let i=index;\" [value]='state.key'[selected]=\"userData.customer_state == state.key\"> {{state.value}}</ion-select-option> \n            </ion-select>\n            {{userData.customer_city}}\n            <ion-select value=\"{{userData.customer_city}}\" formControlName=\"customer_city\" placeholder=\"Select City\">\n                <ion-select-option [value]=\"\">Select City</ion-select-option>\n                <ion-select-option *ngFor=\"let city of validCities;let i=index;\" [value]='city.key' [selected]=\"userData.customer_city == city.key\"> {{city.value}}</ion-select-option> \n            </ion-select>\n            <ion-input type=\"text\" formControlName=\"postal_code\" placeholder=\"Enter Postal Code\" value=\"{{userData.customer_postal_code}}\"></ion-input>\n            <ion-select formControlName=\"customer_profession\" (ionChange) = \"changeProf($event)\" [selectedText]=\"selectedCodeValue ? selectedCodeValue.toString() : selectedCodeValue\" multiple=\"true\" placeholder=\"Select Profession\">\n                <ion-select-option [value]=\"\">Select Profession</ion-select-option>\n                <ion-select-option *ngFor=\"let profession of professions;let i=index;\" [value]='profession.indexval' [selected]=\"checkProfession(profession.indexval)\"> {{profession.value}}</ion-select-option> \n            </ion-select>\n\n\n            <div *ngIf=\"userData.customer_type == 0\">\n              <ion-select formControlName=\"customer_gender\" placeholder=\"Select Gender\">\n                <ion-select-option value=\"\"> Select Gender</ion-select-option> \n                <ion-select-option [selected]=\"userData.customer_gender == M\" [value]='M'> Male</ion-select-option> \n                <ion-select-option [selected]=\"userData.customer_gender == F\" [value]='F'> Female</ion-select-option> \n              </ion-select>\n\n              <ion-select formControlName=\"customer_maritial_status\" placeholder=\"Select Martial Status\">\n                <ion-select-option value=\"\"> Select Martial Status</ion-select-option> \n                <ion-select-option [selected]=\"userData.customer_maritial_status == single\" [value]='single'> Single</ion-select-option> \n                <ion-select-option [selected]=\"userData.customer_maritial_status == married\" [value]='married'> Married</ion-select-option> \n                <ion-select-option [selected]=\"userData.customer_maritial_status == divorced\" [value]='divorced'> Divorced</ion-select-option> \n                <ion-select-option [selected]=\"userData.customer_maritial_status == 'Open Relationship'\" [value]='OpenRelationship'> Open Relationship</ion-select-option> \n                <ion-select-option [selected]=\"userData.customer_maritial_status == 'In Relationship'\" [value]='InRelationship'> In Relationship</ion-select-option> \n              </ion-select>\n              <ion-textarea formControlName=\"customer_places_visted\" rows=\"2\" cols=\"20\" placeholder=\"Places Visited\" value=\"{{userData.customer_places_visted}}\"></ion-textarea>       \n              <ion-textarea formControlName=\"customer_places_tovist\" rows=\"2\" cols=\"20\" placeholder=\"Places to Visit\" value=\"{{userData.customer_places_tovist}}\"></ion-textarea>\n            </div>\n\n            <ion-textarea formControlName=\"customer_notes\" rows=\"2\" cols=\"20\" placeholder=\"Bio\" value=\"{{userData.customer_notes}}\"></ion-textarea>\n            \n\n            <p class=\"txtcenter\">Bank Details</p>\n            <ion-input type=\"text\" formControlName=\"customer_account_no\" placeholder=\"Enter Account No.\" value=\"{{userData.customer_account_no}}\"></ion-input>\n            <ion-input type=\"text\" formControlName=\"customer_account_holder_name\" placeholder=\"Enter Account Holder Name\" value=\"{{userData.customer_account_holder_name}}\"></ion-input>\n            <ion-input type=\"text\" formControlName=\"customer_ifsc_code\" placeholder=\"Enter IFSC Code\" value=\"{{userData.customer_ifsc_code}}\"></ion-input>\n            <ion-input type=\"text\" formControlName=\"customer_gst_no\" placeholder=\"Enter GST No.\" value=\"{{userData.customer_gst_no}}\"></ion-input>\n\n            <div *ngIf=\"userData.customer_type == 1\">\n              <ion-input type=\"text\" formControlName=\"customer_pan_no\" placeholder=\"Enter PAN No.\" value=\"{{userData.customer_pan_no}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_tin_no\" placeholder=\"Enter TIN No.\" value=\"{{userData.customer_tin_no}}\"></ion-input>\n            </div>\n\n            \n\n            \n            <div *ngIf=\"userData.customer_type == 0\">\n              <p class=\"txtcenter\">Professional</p>\n              <ion-input type=\"text\" formControlName=\"customer_school\" placeholder=\"Enter School\" value=\"{{userData.customer_school}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_college\" placeholder=\"Enter Pre College\" value=\"{{userData.customer_college}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_college_higher\" placeholder=\"Enter Graduation\" value=\"{{userData.customer_college_higher}}\"></ion-input>\n              <ion-select formControlName=\"customer_nature\" value=\"{{userData.customer_nature}}\" placeholder=\"Select Nature of Profession\">\n                  <ion-select-option [value]=\"\">Select Nature of Profession</ion-select-option>\n                  <ion-select-option [selected]=\"userData.customer_nature == working\" [value]='working'>Working</ion-select-option> \n                  <ion-select-option [selected]=\"userData.customer_nature == studying\" [value]='studying'>Studying</ion-select-option> \n              </ion-select>\n              <ion-input type=\"text\" formControlName=\"customer_position\" placeholder=\"Enter Position\" value=\"{{userData.customer_position}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_current_company\" placeholder=\"Enter Current Company\" value=\"{{userData.customer_current_company}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_previous_company\" placeholder=\"Enter Previous Companies\" value=\"{{userData.customer_previous_company}}\"></ion-input>\n            </div>  \n\n            <p class=\"txtcenter\">Social Media</p>\n            <ion-input type=\"text\" formControlName=\"customer_facebook_link\" placeholder=\"Enter Facebook Link\" value=\"{{userData.customer_facebook_link}}\"></ion-input>\n            <ion-input type=\"text\" formControlName=\"customer_instagram_link\" placeholder=\"Enter Instagram Link\" value=\"{{userData.customer_instagram_link}}\"></ion-input>\n            <ion-input type=\"text\" formControlName=\"customer_twitter_link\" placeholder=\"Enter Twitter Link\" value=\"{{userData.customer_twitter_link}}\"></ion-input>\n            <ion-input type=\"text\" formControlName=\"customer_youtube_link\" placeholder=\"Enter Youtube Link\" value=\"{{userData.customer_youtube_link}}\"></ion-input>\n            <ion-input type=\"text\" formControlName=\"customer_linkedin_link\" placeholder=\"Enter LinkedIn Link\" value=\"{{userData.customer_linkedin_link}}\"></ion-input>\n\n            <div *ngIf=\"userData.customer_type == 0\">\n              <p class=\"txtcenter\">Interest</p>\n              <ion-input type=\"text\" formControlName=\"customer_hobbies\" placeholder=\"Enter Hobbies\" value=\"{{userData.customer_hobbies}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_color\" placeholder=\"Enter Favorite Color\" value=\"{{userData.customer_fav_color}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_place\" placeholder=\"Enter Favorite Place\" value=\"{{userData.customer_fav_place}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_food\" placeholder=\"Enter Favorite Food\" value=\"{{userData.customer_fav_food}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_brand\" placeholder=\"Enter Favorite Brand\" value=\"{{userData.customer_fav_brand}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_music\" placeholder=\"Enter Favorite Musix\" value=\"{{userData.customer_fav_music}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_book\" placeholder=\"Enter Favorite Book\" value=\"{{userData.customer_fav_book}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_author\" placeholder=\"Enter Favorite Author\" value=\"{{userData.customer_fav_author}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_drink\" placeholder=\"Enter Favorite Drink\" value=\"{{userData.customer_fav_drink}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_things\" placeholder=\"Enter Favorite Things\" value=\"{{userData.customer_fav_things}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_sports\" placeholder=\"Enter Favorite Sports\" value=\"{{userData.customer_fav_sports}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_celebrates\" placeholder=\"Enter Favorite Celebrities\" value=\"{{userData.customer_fav_celebrates}}\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"customer_fav_movie\" placeholder=\"Enter Favorite Movies\" value=\"{{userData.customer_fav_movie}}\"></ion-input>\n              <ion-textarea formControlName=\"customer_bucket_list\" rows=\"2\" cols=\"20\" placeholder=\"Bucket List\"  value=\"{{userData.customer_bucket_list}}\"></ion-textarea>\n            </div>\n            <div *ngIf=\"userData.customer_type == 1\">\n                <ion-input type=\"text\" formControlName=\"customer_phone\" placeholder=\"Enter Phone Number\" value=\"{{userData.customer_phone}}\"></ion-input>\n                <ion-input type=\"text\" formControlName=\"customer_prof_official_phone\" placeholder=\"Enter Official Phone Number\" value=\"{{userData.customer_prof_official_phone}}\"></ion-input>\n                <ion-input type=\"text\" formControlName=\"customer_prof_official_email\" placeholder=\"Enter Official Email\" value=\"{{userData.customer_prof_official_email}}\"></ion-input>\n                <ion-input type=\"text\" formControlName=\"customer_prof_official_website\" placeholder=\"Enter Website\" value=\"{{userData.customer_prof_official_website}}\"></ion-input>\n                <ion-input type=\"text\" formControlName=\"fax\" placeholder=\"Enter FAX\" value=\"{{userData.fax}}\"></ion-input>\n                <ion-textarea formControlName=\"address\" rows=\"2\" cols=\"20\" placeholder=\"Google Map Location\"  value=\"{{userData.address}}\"></ion-textarea>\n            </div>\n            <ion-button class=\"submit-btn\"  size=\"small\" type=\"submit\" [disabled]=\"!validations_form.valid\" expand=\"block\">Update Profile</ion-button>\n          </div>\n        </form>\n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* css class for the edit profile generated errors */\n.profilepress-edit-profile-status {\n  width: 100%;\n  text-align: center;\n  background-color: #e74c3c;\n  color: #ffffff;\n  border: medium none;\n  border-radius: 4px;\n  font-size: 17px;\n  font-weight: normal;\n  line-height: 1.4;\n  padding: 8px 5px;\n  margin: auto; }\n.memo-edprofile-success {\n  width: 100%;\n  text-align: center;\n  background-color: #2ecc71;\n  color: #ffffff;\n  border: medium none;\n  border-radius: 4px;\n  font-size: 17px;\n  font-weight: normal;\n  line-height: 1.4;\n  padding: 8px 5px;\n  margin: auto; }\n#sc-edprofile {\n  background: #f0f0f0;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 8px;\n  margin-bottom: 2%;\n  transition: opacity 1s;\n  -webkit-transition: opacity 1s; }\n.user-image-section {\n  margin-right: 8px;\n  width: auto; }\n.user-image-section .img {\n    vertical-align: middle; }\n.user-image-section ion-avatar img {\n    width: 48px;\n    height: 48px; }\n#sc-edprofile h1 {\n  background: #3399cc;\n  padding: 20px 0;\n  font-size: 140%;\n  font-weight: 300;\n  text-align: center;\n  color: #fff; }\ndiv#sc-edprofile .sc-container {\n  background: #f0f0f0;\n  padding: 6% 4%; }\ndiv#sc-edprofile .sc-container ion-input {\n    border: 1px solid #ccc;\n    background: white;\n    margin-bottom: 10px; }\ndiv#sc-edprofile .sc-container ion-select {\n    border: 1px solid #ccc;\n    background: white;\n    margin-bottom: 10px; }\ndiv#sc-edprofile .sc-container ion-textarea {\n    border: 1px solid #ccc;\n    background: white;\n    margin-bottom: 10px; }\ndiv#sc-edprofile .sc-container .item-datetime {\n    border: 1px solid #ccc;\n    background: white;\n    margin-bottom: 10px; }\ndiv#sc-edprofile input,\ndiv#sc-edprofile input,\ndiv#sc-edprofile input, div#sc-edprofile select, div#sc-edprofile textarea {\n  width: 92%;\n  background: #fff;\n  margin-bottom: 4%;\n  border: 1px solid #ccc;\n  padding: 4%;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 95%;\n  color: #555; }\ndiv#sc-edprofile select {\n  width: 100%; }\ndiv#sc-edprofile textarea {\n  height: 100px; }\ndiv#sc-edprofile input[type=\"submit\"] {\n  width: 100%;\n  background: #3399cc;\n  border: 0;\n  padding: 4%;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 100%;\n  color: #fff;\n  cursor: pointer;\n  transition: background .3s;\n  -webkit-transition: background .3s; }\ndiv#sc-edprofile input[type=\"submit\"]:hover {\n  background: #2288bb; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9EOlxcbXlhcHAyL3NyY1xcYXBwXFxhY2NvdW50XFxhY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvREFBQTtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtBQUdkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtBQUdkO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsOEJBQThCLEVBQUE7QUFHaEM7RUFDSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBO0FBRmY7SUFJUSxzQkFBc0IsRUFBQTtBQUo5QjtJQVFZLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFLeEI7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtBQUdiO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTtBQUZoQjtJQUlJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7QUFOdkI7SUFTSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0FBWHZCO0lBY0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtBQWhCdkI7SUFtQkksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtBQUl2Qjs7O0VBR0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLFdBQVcsRUFBQTtBQUdiO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtDQUFrQyxFQUFBO0FBR3BDO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIGNsYXNzIGZvciB0aGUgZWRpdCBwcm9maWxlIGdlbmVyYXRlZCBlcnJvcnMgKi9cclxuLnByb2ZpbGVwcmVzcy1lZGl0LXByb2ZpbGUtc3RhdHVzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIHBhZGRpbmc6IDhweCA1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWVtby1lZHByb2ZpbGUtc3VjY2VzcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzE7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI3NjLWVkcHJvZmlsZSB7XHJcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXM7XHJcbn1cclxuXHJcbi51c2VyLWltYWdlLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIC5pbWcge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICBpb24tYXZhdGFyIHsgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNzYy1lZHByb2ZpbGUgaDEge1xyXG4gIGJhY2tncm91bmQ6ICMzMzk5Y2M7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTQwJTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuZGl2I3NjLWVkcHJvZmlsZSAuc2MtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gIHBhZGRpbmc6IDYlIDQlO1xyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBpb24tc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi10ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuaXRlbS1kYXRldGltZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuZGl2I3NjLWVkcHJvZmlsZSBpbnB1dCxcclxuZGl2I3NjLWVkcHJvZmlsZSBpbnB1dCxcclxuZGl2I3NjLWVkcHJvZmlsZSBpbnB1dCwgZGl2I3NjLWVkcHJvZmlsZSBzZWxlY3QsIGRpdiNzYy1lZHByb2ZpbGUgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiA5MiU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIHBhZGRpbmc6IDQlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDk1JTtcclxuICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuZGl2I3NjLWVkcHJvZmlsZSBzZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5kaXYjc2MtZWRwcm9maWxlIHRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5kaXYjc2MtZWRwcm9maWxlIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMzMzk5Y2M7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDQlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XHJcbn1cclxuXHJcbmRpdiNzYy1lZHByb2ZpbGUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzIyODhiYjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_9__);










var AccountPage = /** @class */ (function () {
    function AccountPage(loadingController, api, authService, toastCtrl, formBuilder, transfer, 
    // private file: File,
    fileChooser, camera) {
        this.loadingController = loadingController;
        this.api = api;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.transfer = transfer;
        this.fileChooser = fileChooser;
        this.camera = camera;
        this.countries = [];
        this.base64Image = '';
        this.validation_messages = {
            'postcomments': [
                { type: 'required', message: 'Comments is required.' },
            ],
            'title': [
                { type: 'required', message: 'Title is required.' },
            ],
            'description': [
                { type: 'required', message: 'Description is required.' },
            ]
        };
    }
    AccountPage.prototype.ngOnInit = function () {
        var _this = this;
        this.title = 'My profile';
        this.authService.getUserInfo().then(function (items) {
            _this.userInfo = items;
            _this.fetchUserInfo();
        });
        this.presentLoadingWithOptions();
        this.validations_form = this.formBuilder.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            customer_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            /*address_line1: new FormControl('', Validators.compose([
              Validators.required
            ])),
            postal_code: new FormControl('', Validators.compose([
              Validators.required
            ])),*/
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            address_line2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_places_visted: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_places_tovist: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_account_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_account_holder_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_ifsc_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_gst_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_college: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_college_higher: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_position: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_current_company: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_previous_company: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_facebook_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_instagram_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_twitter_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_youtube_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_linkedin_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_hobbies: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_color: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_place: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_food: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_music: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_book: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_author: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_drink: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_things: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_sports: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_celebrates: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_fav_movie: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_bucket_list: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            /*customer_city: new FormControl(),
            customer_profession: new FormControl(),
            customer_gender: new FormControl(),
            customer_maritial_status: new FormControl(),
            customer_nature: new FormControl(),*/
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            business_source: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            business_website: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            business_model: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            business_sector: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            branches: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            business_establishment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            is_adult_only: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_pan_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_tin_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_prof_official_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_prof_official_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            customer_prof_official_website: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    };
    AccountPage.prototype.fetchUserInfo = function () {
        var _this = this;
        this.api.getStaticData('profile/getUserDetails?userid=' + this.userInfo.bg_user_id, []).subscribe(function (result) {
            var res = result;
            if (res.body !== undefined) {
                if (res.body.status === 'success') {
                    _this.userData = res.body.data.info;
                    if (res.body.data.professions !== '') {
                        var prof_1 = [];
                        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](res.body.data.professions, function (country, index) {
                            prof_1.push({ indexval: index, value: country });
                        });
                        _this.professions = prof_1;
                    }
                    _this.selectedCodeValue = _this.userData.customer_prof_profession;
                    _this.countries = [];
                    if (res.body.data.countries !== '') {
                        var count_1 = [];
                        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](res.body.data.countries, function (country, index) {
                            count_1.push({ indexval: index, value: country });
                        });
                        _this.countries = count_1;
                    }
                    console.log(_this.professions);
                    if (res.body.data.states !== '') {
                        var statelist_1 = [];
                        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](res.body.data.states, function (state) {
                            statelist_1.push(state);
                        });
                        _this.states = statelist_1;
                    }
                    if (res.body.data.cities !== '') {
                        var citylist_1 = [];
                        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](res.body.data.cities, function (city) {
                            citylist_1.push(city);
                        });
                        _this.cities = citylist_1;
                    }
                }
                else {
                    _this.presentToastWithOptions(res.body.msg);
                }
            }
            else {
                _this.presentToastWithOptions('Invalid Request');
            }
            _this.loadingController.dismiss();
        });
    };
    AccountPage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'circles',
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
    AccountPage.prototype.presentToastWithOptions = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            showCloseButton: true,
                            duration: 5000,
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
    AccountPage.prototype.checkProfession = function (value) {
        if (this.userData.customer_prof_profession.length > 0) {
            var prof = this.userData.customer_prof_profession;
            var index = underscore__WEBPACK_IMPORTED_MODULE_9__["find"](prof, function (profession) { return profession === value; });
            if (index !== undefined) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    AccountPage.prototype.changeProf = function (data) {
        console.log(data);
    };
    AccountPage.prototype.changeCountry = function (data) {
        console.log(data);
        var currentCountry = data.detail.value;
        this.validStates = [];
        var statelist = [];
        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.states, function (state) {
            if (state.countryid === currentCountry) {
                statelist.push({ key: state.id, value: state.name });
            }
        });
        this.validStates = statelist;
        console.log(this.validStates);
    };
    AccountPage.prototype.changeState = function (data) {
        var currentState = data.detail.value;
        this.validCities = [];
        var citylist = [];
        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.cities, function (city) {
            if (city.stateid === currentState) {
                citylist.push({ key: city.id, value: city.name });
            }
        });
        this.validCities = citylist;
    };
    AccountPage.prototype.updateProfile = function (formValues) {
        var _this = this;
        var body = new FormData();
        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](formValues, function (val, key) {
            body.append(key, val);
        });
        body.append('user_id', this.userInfo.bg_user_id);
        this.api.postData('profile/updateInfo', body).subscribe(function (result) {
            var res = result;
            var message = '';
            if (res !== undefined) {
                if (res[0].status === 'success') {
                    message = 'Profile updated successfully';
                }
                else {
                    _this.formError = res[0].error;
                    message = 'Please provide proper details';
                }
            }
            else {
                message = 'Something went Wrong, Try again later';
            }
            _this.presentToastWithOptions(message);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccountPage.prototype, "fileInput", void 0);
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/account/account.page.html"),
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"]],
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map