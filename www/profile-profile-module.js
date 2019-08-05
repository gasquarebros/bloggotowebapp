(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-module/share-module.module */ "./src/app/share-module/share-module.module.ts");








var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-header [title]=\"title\" [customerType]=\"customerType\" [star]=\"'true'\"></app-login-header>\r\n\r\n<ion-content padding>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\" horizontal=\"start\" >\r\n            <ion-button (click)=\"createPost()\">Post on Wall</ion-button>\r\n            <ion-button>Sell Products</ion-button>\r\n            <ion-button>Post Services</ion-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n    <div class=\"info-section\" *ngIf=\"profileInfo\">\r\n        <div class=\"top-section\">\r\n            <div class=\"top-left fl\">\r\n                <ion-list lines=\"none\" class=\"prof-sec\">\r\n                    <ion-item no-lines>\r\n                        <img class=\"profilepic\" *ngIf=\"profileInfo.info.customer_photo\" src=\"{{profileInfo.info.customer_photo}}\">\r\n                        <img class=\"profilepic\" *ngIf=\"profileInfo.info.customer_photo == ''\" src=\"assets/icon/avatar.png\">\r\n                        <p class=\"badge\" *ngIf= \"profileInfo.info.customer_celebrity_badge\">\r\n                            <ion-icon name=\"star-outline\"></ion-icon>\r\n                        </p>\r\n                    </ion-item>   \r\n                    <p class=\"profilename\">{{profileInfo.info.customer_username}}</p>\r\n                    <ul class=\"profession\">\r\n                        <li *ngFor=\"let prof of profileInfo.info.customer_prof_profession\">{{prof}}</li>\r\n                    </ul>\r\n                </ion-list>     \r\n            </div>\r\n            <div class=\"top-right fr\">\r\n                <div class=\"fl width50\">\r\n                    <p class=\"counting\">{{profileInfo.follow_count}}<span> Looped</span></p>\r\n                    <div *ngIf=\"userInfo.bg_user_id != profileInfo.info.customer_id\">\r\n                        <p class=\"buttons-action\" (click)=\"loopUser('follow')\" *ngIf=\"loop\">Looped</p>\r\n                        <p class=\"buttons-action\" (click)=\"loopUser('unfollow')\" *ngIf=\"!loop\">Loop</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"fr width50\">\r\n                    <p class=\"counting\">{{profileInfo.following_count}}<span> Looping</span></p>\r\n                    <div *ngIf=\"userInfo.bg_user_id != profileInfo.info.customer_id\">\r\n                        <p class=\"buttons-action\">Message</p>\r\n                    </div>\r\n                </div>\r\n                <p class=\"bio\" *ngIf=\"profileInfo.info.customer_notes\">{{profileInfo.info.customer_notes}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"middle-section\">\r\n            <ul class=\"section\">\r\n                <li [ngClass]=\"(profileView =='post')?'selected':''\" (click)=\"profileViewSection('post')\"><span>Posts</span></li>\r\n                <li [ngClass]=\"(profileView =='product')?'selected':''\" (click)=\"profileViewSection('product')\"><span>Products</span></li>\r\n                <li [ngClass]=\"(profileView =='service')?'selected':''\" (click)=\"profileViewSection('service')\"><span>Services</span></li>\r\n            </ul>\r\n            <div class=\"clear\"></div>\r\n            <div class=\"post-section\" *ngIf=\"profileView == 'post'\">\r\n                <app-common-post [isProfileType] = \"profileType\" [isProfile] = \"true\" [profileInfo] = \"profileInfo\" ></app-common-post>\r\n            </div>\r\n            <div class=\"product-section\" *ngIf = \"profileView == 'product'\">\r\n                <app-common-products [isProfilePage] = \"true\" [profileInfo] = \"profileInfo\"></app-common-products>    \r\n            </div>\r\n            <div class=\"services-section\" *ngIf=\"profileView == 'service'\">\r\n                <app-common-services [profileView] = \"true\" [profileInfo] = \"profileInfo\"></app-common-services>  \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"no-info-section\" *ngIf=\"!profileInfo\">\r\n        <p class=\"txtcenter\"> No Data Found </p>\r\n    </div>\r\n</ion-content>\r\n<app-common-footer \r\n    [postProfileType] = 'profileType'\r\n    (updatePageType) = profileSection($event)></app-common-footer>"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fl {\n  float: left; }\n\n.fr {\n  float: right; }\n\n.txtcenter {\n  text-align: center; }\n\n.txtellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.info-section {\n  width: 100%;\n  display: block;\n  float: left; }\n\n.info-section .top-section {\n    width: 100%;\n    display: block;\n    float: left; }\n\n.info-section .top-section .top-left {\n      width: 42%; }\n\n.info-section .top-section .top-left .prof-sec {\n        margin-bottom: 14px; }\n\n.info-section .top-section .top-left ion-item {\n        margin: 0 auto;\n        width: 112px;\n        height: 75px; }\n\n.info-section .top-section .top-left .profilepic {\n        width: 75px;\n        height: 75px;\n        border-radius: 50%;\n        float: left; }\n\n.info-section .top-section .top-left .badge {\n        position: absolute;\n        top: 50px;\n        left: 69px;\n        width: 25px;\n        height: 25px;\n        background-color: cornflowerblue;\n        border-radius: 50%;\n        font-size: 24px;\n        color: white;\n        font-weight: 400;\n        padding: 0;\n        margin: 0; }\n\n.info-section .top-section .top-left .profilename {\n        padding: 0px;\n        margin: 0 auto;\n        text-align: center; }\n\n.info-section .top-section .top-left .profession {\n        padding: 0px;\n        width: 100%;\n        float: left;\n        margin: 0px;\n        font-size: 13px;\n        margin-left: 10px;\n        word-break: break-all; }\n\n.info-section .top-section .top-left .profession li {\n          width: auto;\n          float: left;\n          list-style-type: none; }\n\n.info-section .top-section .top-left .profession li:before {\n          content: \"\\2219\";\n          font-size: 2.5em;\n          line-height: 0;\n          position: relative;\n          top: 8px;\n          padding-right: 2px; }\n\n.info-section .top-section .top-right {\n      width: 58%; }\n\n.info-section .top-section .top-right .counting {\n        font-size: 16px;\n        font-weight: 800;\n        margin: 0; }\n\n.info-section .top-section .top-right .counting span {\n          font-size: 13px;\n          font-weight: 400; }\n\n.info-section .top-section .top-right .buttons-action {\n        border: 1px solid black;\n        text-align: center;\n        width: 96%;\n        margin: 8px 0px 0px 0px;\n        cursor: pointer; }\n\n.info-section .top-section .top-right p.bio {\n        float: left;\n        margin-top: 10px;\n        font-size: 13px;\n        height: 60px;\n        margin-bottom: 0px;\n        overflow-y: hidden;\n        overflow: hidden;\n        display: -webkit-box;\n        -webkit-line-clamp: 4; }\n\n.info-section .middle-section {\n    width: 100%;\n    float: left; }\n\n.info-section .middle-section .section {\n      padding: 0px;\n      margin: 10px 0px;\n      width: 100%;\n      float: left;\n      border: 1px solid black; }\n\n.info-section .middle-section .section li {\n        list-style: none;\n        width: 33.3%;\n        float: left;\n        text-align: center;\n        padding: 9px 0px;\n        cursor: pointer; }\n\n.info-section .middle-section .section li.selected {\n        background: black;\n        color: white;\n        font-weight: 800; }\n\n.info-section .middle-section .clear {\n      clear: both; }\n\n.info-section .middle-section .card .fl {\n      float: left;\n      background: none; }\n\n.info-section .middle-section .card .fl ion-icon {\n        font-size: 25px; }\n\n.info-section .middle-section .card ion-avatar img {\n      width: 35px;\n      height: 30px; }\n\n.info-section .middle-section .card .like-content {\n      clear: both; }\n\n.info-section .middle-section .card [col-10] {\n      flex: 0 0 83.33333%;\n      width: 83.33333%;\n      max-width: 83.33333%; }\n\n.info-section .middle-section .card [col-2] {\n      flex: 0 0 16.66667%;\n      width: 16.66667%;\n      max-width: 16.66667%; }\n\n.info-section .middle-section .card [col-2] button {\n        text-align: center;\n        vertical-align: middle;\n        margin: 47% 0px 0px 0px;\n        background: none; }\n\n.info-section .middle-section .card .post_title {\n      text-align: left;\n      font-size: 14px;\n      margin-left: 20px;\n      margin-top: 0px; }\n\n.info-section .middle-section .card ul.post_tags {\n      list-style: none;\n      padding-left: 20px; }\n\n.info-section .middle-section .card .image-gallery {\n      clear: both;\n      width: 100%; }\n\n.info-section .middle-section .card .card-content-description {\n      padding-left: 10px; }\n\n.info-section .middle-section .price:before {\n      content: \"\\20b9\"; }\n\n.info-section .middle-section .product-section ion-row {\n      width: 100%;\n      height: auto; }\n\n.info-section .middle-section .product-section ion-col {\n      width: auto;\n      height: 33%; }\n\n.info-section .middle-section .product-section img {\n      width: 100%;\n      height: 100%; }\n\n.item-inner {\n  border: 0px; }\n\n.width50 {\n  width: 50%; }\n\nion-fab-list {\n  margin-left: -66px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcbXlhcHAyL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVUsRUFBQTs7QUFFZDtFQUNJLFlBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBSGY7SUFLUSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVcsRUFBQTs7QUFQbkI7TUFTWSxVQUFVLEVBQUE7O0FBVHRCO1FBV2dCLG1CQUFtQixFQUFBOztBQVhuQztRQWNnQixjQUFjO1FBQ2QsWUFBWTtRQUNaLFlBQVksRUFBQTs7QUFoQjVCO1FBbUJnQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixXQUFXLEVBQUE7O0FBdEIzQjtRQXlCZ0Isa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLFlBQVk7UUFDWixnQ0FBZ0M7UUFDaEMsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixTQUFTLEVBQUE7O0FBcEN6QjtRQXVDZ0IsWUFBWTtRQUNaLGNBQWM7UUFDZCxrQkFBa0IsRUFBQTs7QUF6Q2xDO1FBNENnQixZQUFZO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUIsRUFBQTs7QUFsRHJDO1VBb0RvQixXQUFXO1VBQ1gsV0FBVztVQUNYLHFCQUFxQixFQUFBOztBQXREekM7VUF5RG9CLGdCQUFnQjtVQUNoQixnQkFBZ0I7VUFDaEIsY0FBYztVQUNkLGtCQUFrQjtVQUNsQixRQUFRO1VBQ1Isa0JBQWtCLEVBQUE7O0FBOUR0QztNQW1FWSxVQUFVLEVBQUE7O0FBbkV0QjtRQXFFZ0IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixTQUFTLEVBQUE7O0FBdkV6QjtVQXlFb0IsZUFBZTtVQUNmLGdCQUFnQixFQUFBOztBQTFFcEM7UUE4RWdCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLHVCQUF1QjtRQUN2QixlQUFlLEVBQUE7O0FBbEYvQjtRQXFGZ0IsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixxQkFBcUIsRUFDTzs7QUE5RjVDO0lBbUdRLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBcEduQjtNQXNHWSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxXQUFXO01BQ1gsdUJBQXVCLEVBQUE7O0FBMUduQztRQTRHZ0IsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixlQUFlLEVBQUE7O0FBakgvQjtRQW9IZ0IsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixnQkFBZ0IsRUFBQTs7QUF0SGhDO01BMEhZLFdBQVcsRUFBQTs7QUExSHZCO01BK0hZLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTs7QUFoSTVCO1FBa0lnQixlQUFjLEVBQUE7O0FBbEk5QjtNQXVJZ0IsV0FBVztNQUNYLFlBQVksRUFBQTs7QUF4STVCO01BNElZLFdBQVUsRUFBQTs7QUE1SXRCO01Ba0pZLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsb0JBQW9CLEVBQUE7O0FBcEpoQztNQTBKWSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLG9CQUFvQixFQUFBOztBQTVKaEM7UUE4SmdCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGdCQUFnQixFQUFBOztBQWpLaEM7TUFxS1ksZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsZUFBZSxFQUFBOztBQXhLM0I7TUEyS1ksZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBOztBQTVLOUI7TUErS1ksV0FBVTtNQUNWLFdBQVUsRUFBQTs7QUFoTHRCO01Bb0xZLGtCQUFrQixFQUFBOztBQXBMOUI7TUF3TFksZ0JBQWdCLEVBQUE7O0FBeEw1QjtNQTJMc0IsV0FBVTtNQUFFLFlBQVcsRUFBQTs7QUEzTDdDO01BNkxzQixXQUFVO01BQUUsV0FBVSxFQUFBOztBQTdMNUM7TUErTGtCLFdBQVU7TUFBRSxZQUFXLEVBQUE7O0FBSXpDO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuLmZyIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcbi50eHRjZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50eHRlbGxpcHNpcyB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pbmZvLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLnRvcC1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAudG9wLWxlZnQge1xyXG4gICAgICAgICAgICB3aWR0aDogNDIlO1xyXG4gICAgICAgICAgICAucHJvZi1zZWMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMTJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZmlsZXBpYyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2OXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9maWxlbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZmVzc2lvbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsaTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyMjE5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b3AtcmlnaHQge1xyXG4gICAgICAgICAgICB3aWR0aDogNTglO1xyXG4gICAgICAgICAgICAuY291bnRpbmcge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idXR0b25zLWFjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwLmJpbyB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1pZGRsZS1zZWN0aW9uIHsgICAgICAgIFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5zZWN0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNlbGVjdGVkIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xlYXIge1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAuZmwge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYXZhdGFyIHsgXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saWtlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBjbGVhcjpib3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFtjb2wtMTBdIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMDtcclxuICAgICAgICAgICAgLXdlYmtpdC1mbGV4OiAwIDAgODMuMzMzMzMlO1xyXG4gICAgICAgICAgICAtbXMtZmxleDogMCAwIDgzLjMzMzMzJTtcclxuICAgICAgICAgICAgZmxleDogMCAwIDgzLjMzMzMzJTtcclxuICAgICAgICAgICAgd2lkdGg6IDgzLjMzMzMzJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgW2NvbC0yXSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmxleDogMCAwIDE2LjY2NjY3JTtcclxuICAgICAgICAgICAgLW1zLWZsZXg6IDAgMCAxNi42NjY2NyU7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNi42NjY2NyU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTYuNjY2NjclO1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNDclIDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wb3N0X3RpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsLnBvc3RfdGFncyB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1hZ2UtZ2FsbGVyeSB7XHJcbiAgICAgICAgICAgIGNsZWFyOmJvdGg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByaWNlOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyMGI5XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBpb24tcm93IHsgd2lkdGg6MTAwJTsgaGVpZ2h0OmF1dG87IH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1jb2wgeyB3aWR0aDphdXRvOyBoZWlnaHQ6MzMlOyB9XHJcblxyXG4gICAgICAgICAgICBpbWcgeyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaXRlbS1pbm5lciB7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG4ud2lkdGg1MCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5pb24tZmFiLWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02NnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _share_module_common_post_common_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share-module/common-post/common-post.component */ "./src/app/share-module/common-post/common-post.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);








var ProfilePage = /** @class */ (function () {
    function ProfilePage(loadingController, api, authService, route, toastCtrl) {
        this.loadingController = loadingController;
        this.api = api;
        this.authService = authService;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.like_btn = { 'icon_name': 'heart', 'color': 'danger' };
        this.loop = true;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        var queryParams = this.route.snapshot.queryParams;
        this.title = '';
        this.customerType = '';
        this.nextOffset = 0;
        this.profileType = '';
        this.authService.getUserInfo().then(function (items) {
            _this.userInfo = items;
            if (queryParams !== undefined && queryParams.customer != undefined && queryParams.customer != '') {
                _this.fetchProfileInfo(queryParams.customer);
            }
            else {
                _this.fetchProfileInfo(_this.userInfo.customer_username);
            }
        });
        this.presentLoadingWithOptions();
    };
    ProfilePage.prototype.presentLoadingWithOptions = function () {
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
    ProfilePage.prototype.presentToastWithOptions = function (msg) {
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
    ProfilePage.prototype.fetchProfileInfo = function (userName) {
        var _this = this;
        this.api.getStaticData('profile/getDetails?userid=' + userName + '&customerid=' + this.userInfo.bg_user_id, []).subscribe(function (result) {
            var res = result;
            if (res.body !== undefined) {
                if (res.body.status === 'success') {
                    var response = res.body;
                    _this.profileInfo = response.data;
                    _this.title = '#' + _this.profileInfo.info.customer_username;
                    _this.customerType = (_this.profileInfo.info.customer_type === 0) ? 'Personal' : 'Business';
                    _this.profileView = 'post';
                    if (_this.profileInfo.follow_list.length > 0) {
                        var index = underscore__WEBPACK_IMPORTED_MODULE_7__["findIndex"](_this.profileInfo.follow_list, _this.profileInfo.info.customer_id);
                        if (index >= 0) {
                            _this.loop = false;
                        }
                    }
                }
                _this.loadingController.dismiss();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.profileSection = function (section) {
        if (section === void 0) { section = ''; }
        this.profileView = 'post';
        this.profileType = section;
    };
    ProfilePage.prototype.profileViewSection = function (viewType) {
        this.profileView = viewType;
    };
    ProfilePage.prototype.createPost = function () {
        this.commonPostComponent.createPost();
    };
    ProfilePage.prototype.loopUser = function (event) {
        var _this = this;
        var body = new FormData();
        body.append('customerid', this.userInfo.bg_user_id);
        body.append('userid', this.profileInfo.info.customer_id);
        this.api.postData('profile/userFollow', body).subscribe(function (result) {
            var res = result;
            if (res !== undefined) {
                if (res[0].status === 'success') {
                    _this.profileInfo.follow_count = res[0].profile_following_html;
                    _this.profileInfo.following_count = res[0].profile_html;
                    if (event === 'follow') {
                        _this.loop = false;
                    }
                    else {
                        _this.loop = true;
                    }
                }
                _this.presentToastWithOptions(res[0].msg);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_share_module_common_post_common_post_component__WEBPACK_IMPORTED_MODULE_3__["CommonPostComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _share_module_common_post_common_post_component__WEBPACK_IMPORTED_MODULE_3__["CommonPostComponent"])
    ], ProfilePage.prototype, "commonPostComponent", void 0);
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]],
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map