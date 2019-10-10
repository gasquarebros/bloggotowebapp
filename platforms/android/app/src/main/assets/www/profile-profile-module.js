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

module.exports = ".fl {\n  float: left; }\n\n.fr {\n  float: right; }\n\n.txtcenter {\n  text-align: center; }\n\n.txtellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.info-section {\n  width: 100%;\n  display: block;\n  float: left; }\n\n.info-section .top-section {\n    width: 100%;\n    display: block;\n    float: left; }\n\n.info-section .top-section .top-left {\n      width: 42%; }\n\n.info-section .top-section .top-left .prof-sec {\n        margin-bottom: 14px; }\n\n.info-section .top-section .top-left ion-item {\n        margin: 0 auto;\n        width: 112px;\n        height: 75px; }\n\n.info-section .top-section .top-left .profilepic {\n        width: 75px;\n        height: 75px;\n        border-radius: 50%;\n        float: left; }\n\n.info-section .top-section .top-left .badge {\n        position: absolute;\n        top: 57px;\n        left: 57px;\n        width: 18px;\n        height: 18px;\n        background-color: cornflowerblue;\n        border-radius: 50%;\n        font-size: 20px;\n        color: white;\n        font-weight: 400;\n        padding: 0;\n        margin: 0; }\n\n.info-section .top-section .top-left .badge ion-icon {\n          font-size: 18px; }\n\n.info-section .top-section .top-left .profilename {\n        padding: 0px;\n        margin: 0 auto;\n        text-align: center; }\n\n.info-section .top-section .top-left .profession {\n        padding: 0px;\n        width: 100%;\n        float: left;\n        margin: 0px;\n        font-size: 13px;\n        margin-left: 10px;\n        word-break: break-all; }\n\n.info-section .top-section .top-left .profession li {\n          width: auto;\n          float: left;\n          list-style-type: none; }\n\n.info-section .top-section .top-left .profession li:before {\n          content: \"\\2219\";\n          font-size: 2.5em;\n          line-height: 0;\n          position: relative;\n          top: 8px;\n          padding-right: 2px; }\n\n.info-section .top-section .top-right {\n      width: 58%; }\n\n.info-section .top-section .top-right .counting {\n        font-size: 16px;\n        font-weight: 800;\n        margin: 0; }\n\n.info-section .top-section .top-right .counting span {\n          font-size: 13px;\n          font-weight: 400; }\n\n.info-section .top-section .top-right .buttons-action {\n        border: 1px solid black;\n        text-align: center;\n        width: 96%;\n        margin: 8px 0px 0px 0px;\n        cursor: pointer; }\n\n.info-section .top-section .top-right p.bio {\n        float: left;\n        margin-top: 10px;\n        font-size: 13px;\n        height: 60px;\n        margin-bottom: 0px;\n        overflow-y: hidden;\n        overflow: hidden;\n        display: -webkit-box;\n        -webkit-line-clamp: 4; }\n\n.info-section .middle-section {\n    width: 100%;\n    float: left; }\n\n.info-section .middle-section .section {\n      padding: 0px;\n      margin: 10px 0px;\n      width: 100%;\n      float: left;\n      border: 1px solid black; }\n\n.info-section .middle-section .section li {\n        list-style: none;\n        width: 33.3%;\n        float: left;\n        text-align: center;\n        padding: 9px 0px;\n        cursor: pointer; }\n\n.info-section .middle-section .section li.selected {\n        background: black;\n        color: white;\n        font-weight: 800; }\n\n.info-section .middle-section .clear {\n      clear: both; }\n\n.info-section .middle-section .card .fl {\n      float: left;\n      background: none; }\n\n.info-section .middle-section .card .fl ion-icon {\n        font-size: 25px; }\n\n.info-section .middle-section .card ion-avatar img {\n      width: 35px;\n      height: 30px; }\n\n.info-section .middle-section .card .like-content {\n      clear: both; }\n\n.info-section .middle-section .card [col-10] {\n      flex: 0 0 83.33333%;\n      width: 83.33333%;\n      max-width: 83.33333%; }\n\n.info-section .middle-section .card [col-2] {\n      flex: 0 0 16.66667%;\n      width: 16.66667%;\n      max-width: 16.66667%; }\n\n.info-section .middle-section .card [col-2] button {\n        text-align: center;\n        vertical-align: middle;\n        margin: 47% 0px 0px 0px;\n        background: none; }\n\n.info-section .middle-section .card .post_title {\n      text-align: left;\n      font-size: 14px;\n      margin-left: 20px;\n      margin-top: 0px; }\n\n.info-section .middle-section .card ul.post_tags {\n      list-style: none;\n      padding-left: 20px; }\n\n.info-section .middle-section .card .image-gallery {\n      clear: both;\n      width: 100%; }\n\n.info-section .middle-section .card .card-content-description {\n      padding-left: 10px; }\n\n.info-section .middle-section .price:before {\n      content: \"\\20b9\"; }\n\n.info-section .middle-section .product-section ion-row {\n      width: 100%;\n      height: auto; }\n\n.info-section .middle-section .product-section ion-col {\n      width: auto;\n      height: 33%; }\n\n.info-section .middle-section .product-section img {\n      width: 100%;\n      height: 100%; }\n\n.item-inner {\n  border: 0px; }\n\n.width50 {\n  width: 50%; }\n\nion-fab-list {\n  margin-left: -66px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcYmxvZ2dvdG93ZWJhcHAvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVSxFQUFBOztBQUVkO0VBQ0ksWUFBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFIZjtJQUtRLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVyxFQUFBOztBQVBuQjtNQVNZLFVBQVUsRUFBQTs7QUFUdEI7UUFXZ0IsbUJBQW1CLEVBQUE7O0FBWG5DO1FBY2dCLGNBQWM7UUFDZCxZQUFZO1FBQ1osWUFBWSxFQUFBOztBQWhCNUI7UUFtQmdCLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFdBQVcsRUFBQTs7QUF0QjNCO1FBeUJnQixrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7UUFDVixXQUFXO1FBQ1gsWUFBWTtRQUNaLGdDQUFnQztRQUNoQyxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLFNBQVMsRUFBQTs7QUFwQ3pCO1VBc0NvQixlQUFlLEVBQUE7O0FBdENuQztRQTBDZ0IsWUFBWTtRQUNaLGNBQWM7UUFDZCxrQkFBa0IsRUFBQTs7QUE1Q2xDO1FBK0NnQixZQUFZO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUIsRUFBQTs7QUFyRHJDO1VBdURvQixXQUFXO1VBQ1gsV0FBVztVQUNYLHFCQUFxQixFQUFBOztBQXpEekM7VUE0RG9CLGdCQUFnQjtVQUNoQixnQkFBZ0I7VUFDaEIsY0FBYztVQUNkLGtCQUFrQjtVQUNsQixRQUFRO1VBQ1Isa0JBQWtCLEVBQUE7O0FBakV0QztNQXNFWSxVQUFVLEVBQUE7O0FBdEV0QjtRQXdFZ0IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixTQUFTLEVBQUE7O0FBMUV6QjtVQTRFb0IsZUFBZTtVQUNmLGdCQUFnQixFQUFBOztBQTdFcEM7UUFpRmdCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLHVCQUF1QjtRQUN2QixlQUFlLEVBQUE7O0FBckYvQjtRQXdGZ0IsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixxQkFBcUIsRUFDTzs7QUFqRzVDO0lBc0dRLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBdkduQjtNQXlHWSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxXQUFXO01BQ1gsdUJBQXVCLEVBQUE7O0FBN0duQztRQStHZ0IsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixlQUFlLEVBQUE7O0FBcEgvQjtRQXVIZ0IsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixnQkFBZ0IsRUFBQTs7QUF6SGhDO01BNkhZLFdBQVcsRUFBQTs7QUE3SHZCO01Ba0lZLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTs7QUFuSTVCO1FBcUlnQixlQUFjLEVBQUE7O0FBckk5QjtNQTBJZ0IsV0FBVztNQUNYLFlBQVksRUFBQTs7QUEzSTVCO01BK0lZLFdBQVUsRUFBQTs7QUEvSXRCO01BcUpZLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsb0JBQW9CLEVBQUE7O0FBdkpoQztNQTZKWSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLG9CQUFvQixFQUFBOztBQS9KaEM7UUFpS2dCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGdCQUFnQixFQUFBOztBQXBLaEM7TUF3S1ksZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsZUFBZSxFQUFBOztBQTNLM0I7TUE4S1ksZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBOztBQS9LOUI7TUFrTFksV0FBVTtNQUNWLFdBQVUsRUFBQTs7QUFuTHRCO01BdUxZLGtCQUFrQixFQUFBOztBQXZMOUI7TUEyTFksZ0JBQWdCLEVBQUE7O0FBM0w1QjtNQThMc0IsV0FBVTtNQUFFLFlBQVcsRUFBQTs7QUE5TDdDO01BZ01zQixXQUFVO01BQUUsV0FBVSxFQUFBOztBQWhNNUM7TUFrTWtCLFdBQVU7TUFBRSxZQUFXLEVBQUE7O0FBSXpDO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuLmZyIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcbi50eHRjZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50eHRlbGxpcHNpcyB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pbmZvLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLnRvcC1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAudG9wLWxlZnQge1xyXG4gICAgICAgICAgICB3aWR0aDogNDIlO1xyXG4gICAgICAgICAgICAucHJvZi1zZWMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMTJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZmlsZXBpYyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDU3cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1N3B4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZmlsZW5hbWUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2Zlc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGk6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcMjIxOVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudG9wLXJpZ2h0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDU4JTtcclxuICAgICAgICAgICAgLmNvdW50aW5nIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnV0dG9ucy1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcC5iaW8ge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5taWRkbGUtc2VjdGlvbiB7ICAgICAgICBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOXB4IDBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsZWFyIHtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgLmZsIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWF2YXRhciB7IFxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlrZS1jb250ZW50IHtcclxuICAgICAgICAgICAgY2xlYXI6Ym90aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBbY29sLTEwXSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmxleDogMCAwIDgzLjMzMzMzJTtcclxuICAgICAgICAgICAgLW1zLWZsZXg6IDAgMCA4My4zMzMzMyU7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCA4My4zMzMzMyU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4My4zMzMzMyU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODMuMzMzMzMlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFtjb2wtMl0ge1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gICAgICAgICAgICAtd2Via2l0LWZsZXg6IDAgMCAxNi42NjY2NyU7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4OiAwIDAgMTYuNjY2NjclO1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgMTYuNjY2NjclO1xyXG4gICAgICAgICAgICB3aWR0aDogMTYuNjY2NjclO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE2LjY2NjY3JTtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDQ3JSAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucG9zdF90aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bC5wb3N0X3RhZ3Mge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltYWdlLWdhbGxlcnkge1xyXG4gICAgICAgICAgICBjbGVhcjpib3RoO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2FyZC1jb250ZW50LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmljZTpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcMjBiOVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1zZWN0aW9uIHtcclxuICAgICAgICAgICAgaW9uLXJvdyB7IHdpZHRoOjEwMCU7IGhlaWdodDphdXRvOyB9XHJcblxyXG4gICAgICAgICAgICBpb24tY29sIHsgd2lkdGg6YXV0bzsgaGVpZ2h0OjMzJTsgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLml0ZW0taW5uZXIge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuLndpZHRoNTAge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuaW9uLWZhYi1saXN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNjZweDtcclxufSJdfQ== */"

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