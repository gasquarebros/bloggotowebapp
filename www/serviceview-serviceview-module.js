(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serviceview-serviceview-module"],{

/***/ "./src/app/serviceview/serviceview.module.ts":
/*!***************************************************!*\
  !*** ./src/app/serviceview/serviceview.module.ts ***!
  \***************************************************/
/*! exports provided: ServiceviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceviewPageModule", function() { return ServiceviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _serviceview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceview.page */ "./src/app/serviceview/serviceview.page.ts");
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-module/share-module.module */ "./src/app/share-module/share-module.module.ts");








var routes = [
    {
        path: '',
        component: _serviceview_page__WEBPACK_IMPORTED_MODULE_6__["ServiceviewPage"]
    }
];
var ServiceviewPageModule = /** @class */ (function () {
    function ServiceviewPageModule() {
    }
    ServiceviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModulePageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_serviceview_page__WEBPACK_IMPORTED_MODULE_6__["ServiceviewPage"]]
        })
    ], ServiceviewPageModule);
    return ServiceviewPageModule;
}());



/***/ }),

/***/ "./src/app/serviceview/serviceview.page.html":
/*!***************************************************!*\
  !*** ./src/app/serviceview/serviceview.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-header [title]=\"'Services'\"></app-login-header>\r\n\r\n<ion-content padding>\r\n  <div class=\"productsection\">\r\n    \r\n    <div class=\"productTitlesection\">\r\n        <p class=\"txt\">{{posts.ser_title}}</p>\r\n        <p class=\"ser_section_types\">\r\n          <span class=\"txt\">{{posts.ser_cate_name}}</span> \r\n          <span class=\"icon\"><ion-icon name=\"ios-arrow-round-forward\"></ion-icon></span>\r\n          <span class=\"txt\">{{posts.pro_subcate_name}}</span>\r\n        </p>\r\n    </div>\r\n    <div class=\"gallery\">\r\n      <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"posts.galleryimages\">\r\n        <ion-slide *ngFor=\"let images of posts.galleryimages\">\r\n            <img class=\"imagegal\" src=\"{{images}}\">\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n    <div class=\"pricing\">\r\n      <h3 class=\"price\" *ngIf=\"posts.ser_discount_price !='' && posts.discount > 0\">\r\n          ₹{{posts.ser_discount_price}} / {{posts.ser_pricet_type}}\r\n      </h3>\r\n      <h3 class=\"price\" *ngIf=\"posts.discount == 0\">\r\n          ₹{{posts.ser_price}} / {{posts.ser_pricet_type}}\r\n      </h3>\r\n    </div>\r\n    <p>\r\n        <ion-button expand=\"block\" class=\"ios button button-block button-solid ion-activatable ion-focusable hydrated\">Book now</ion-button>\r\n    </p>\r\n    <div class=\"providersection\" >\r\n      <ion-avatar slot=\"start\" class=\"ios hydrated\" (click)=\"userProfile(posts.customer_username)\">\r\n          <img src=\"{{posts.customer_image}}\">\r\n      </ion-avatar>\r\n      <p> Service provided by <span class=\"providername\" (click)=\"userProfile(posts.customer_username)\">{{posts.customer_username}}</span>\r\n        <br>\r\n        <span class=\"shareicons\">\r\n          <a target=\"_blank\" href=\"https://www.facebook.com/sharer.php?u=http://www.bloggoto.com/services/view/{{posts.ser_slug}}\"><ion-icon name=\"logo-facebook\"></ion-icon></a>\r\n          <a target=\"_blank\" href=\"https://plus.google.com/share?url=http://www.bloggoto.com/services/view/{{posts.ser_slug}}\">  <ion-icon name=\"logo-googleplus\"></ion-icon></a>\r\n          <a target=\"_blank\" href=\"https://twitter.com/share?text=http://www.bloggoto.com/services/view/{{posts.ser_slug}}\"><ion-icon name=\"logo-twitter\"></ion-icon></a>\r\n          <a target=\"_blank\" href=\"mailto:?subject=Referal&body=http://www.bloggoto.com/services/view/{{posts.ser_slug}}\"><ion-icon name=\"mail\"></ion-icon></a>\r\n        </span>\r\n      </p>\r\n      \r\n    </div>\r\n    <div class=\"description\">\r\n      <p>{{posts.ser_description}}</p>\r\n    </div>\r\n    <div class=\"availability\">\r\n      <ion-list-header class=\"ios hydrated\">Availability</ion-list-header>\r\n      <ion-chip outline class=\"ion-color ion-color-primary ios chip-outline ion-activatable hydrated\" *ngFor=\"let availability of posts.availability\">\r\n        <ion-label  *ngIf=\"availability != ''\">{{availability}}</ion-label>\r\n      </ion-chip>\r\n\r\n        <ion-list-header class=\"ios hydrated\">Available Cities</ion-list-header>\r\n        <ion-chip outline class=\"ion-color ion-color-primary ios chip-outline ion-activatable hydrated\"  *ngFor=\"let city of posts.cities\">\r\n          <ion-label  *ngIf=\"city != ''\">{{city}}</ion-label>\r\n        </ion-chip>\r\n      </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serviceview/serviceview.page.scss":
/*!***************************************************!*\
  !*** ./src/app/serviceview/serviceview.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productsection .productTitlesection {\n  clear: both;\n  display: block;\n  float: left;\n  width: 100%; }\n  .productsection .productTitlesection .ser_section_types {\n    font-size: 13px;\n    width: 100%;\n    float: left;\n    clear: both;\n    margin-top: 0px; }\n  .productsection .productTitlesection .ser_section_types .txt {\n      width: auto;\n      float: left; }\n  .productsection .productTitlesection .ser_section_types .icon {\n      float: left;\n      font-size: 18px; }\n  .productsection .gallery {\n  clear: both; }\n  .productsection .pricing .price {\n  color: red; }\n  .productsection .providersection ion-avatar {\n  float: left; }\n  .productsection .providersection p {\n  float: left;\n  margin-left: 20px;\n  margin-top: 0px; }\n  .productsection .providersection p .providername {\n    font-size: 16px;\n    font-weight: bold; }\n  .productsection .providersection p .shareicons {\n    font-size: 30px;\n    margin-top: 10px;\n    float: left; }\n  .productsection .providersection p .shareicons a {\n      margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXZpZXcvRDpcXGJsb2dnb3Rvd2ViYXBwL3NyY1xcYXBwXFxzZXJ2aWNldmlld1xcc2VydmljZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVyxFQUFBO0VBTG5CO0lBUVksZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWUsRUFBQTtFQVozQjtNQWNnQixXQUFXO01BQ1gsV0FBVyxFQUFBO0VBZjNCO01Ba0JnQixXQUFXO01BQ1gsZUFBZSxFQUFBO0VBbkIvQjtFQXdCUSxXQUFVLEVBQUE7RUF4QmxCO0VBNEJZLFVBQVMsRUFBQTtFQTVCckI7RUFrQ1ksV0FBVSxFQUFBO0VBbEN0QjtFQXFDWSxXQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTtFQXZDM0I7SUF5Q2dCLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQTFDakM7SUE2Q2dCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBO0VBL0MzQjtNQWlEb0Isa0JBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNldmlldy9zZXJ2aWNldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHNlY3Rpb24ge1xyXG4gICAgLnByb2R1Y3RUaXRsZXNlY3Rpb24ge1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuc2VyX3NlY3Rpb25fdHlwZXMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgLnR4dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZ2FsbGVyeSB7XHJcbiAgICAgICAgY2xlYXI6Ym90aDtcclxuICAgIH1cclxuICAgIC5wcmljaW5nIHtcclxuICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm92aWRlcnNlY3Rpb24ge1xyXG4gICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgLnByb3ZpZGVybmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2hhcmVpY29ucyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/serviceview/serviceview.page.ts":
/*!*************************************************!*\
  !*** ./src/app/serviceview/serviceview.page.ts ***!
  \*************************************************/
/*! exports provided: ServiceviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceviewPage", function() { return ServiceviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var ServiceviewPage = /** @class */ (function () {
    function ServiceviewPage(loadingController, api, authService, route, router, toastCtrl, storage) {
        this.loadingController = loadingController;
        this.api = api;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.slug = '';
        this.posts = [];
        this.overallCities = [];
    }
    ServiceviewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.slug = this.route.snapshot.paramMap.get('slug');
        this.appID = 'Bloggoto';
        this.presentLoadingWithOptions();
        this.posts = [];
        this.fetchservices();
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoplay: true
        };
        var cdata = '/countries?type=city';
        this.storage.get('city').then(function (val) {
            if (val == null) {
                _this.authService.fetchMasterData(cdata);
                _this.storage.get('city').then(function (val) {
                    _this.overallCities = val;
                });
            }
            else {
                _this.overallCities = val;
            }
        });
    };
    ServiceviewPage.prototype.presentLoadingWithOptions = function () {
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
    ServiceviewPage.prototype.fetchservices = function () {
        var _this = this;
        var queryparams = '?app_id=' + this.appID;
        if (this.slug != undefined && this.slug != '') {
            queryparams += '&slug=' + this.slug;
        }
        this.api.getStaticData('restservices/servicelist' + queryparams, []).subscribe(function (result) {
            var response = result;
            if (response.body !== undefined) {
                var res = response.body;
                _this.posts = (res.data.records.length > 0) ? res.data.records[0] : [];
                var availability = (_this.posts.ser_available != '') ? _this.posts.ser_available.split(',') : [];
                _this.posts.availability = availability.filter(function (el) {
                    return (el != null && el != "");
                });
                var filteredCities_1 = [];
                underscore__WEBPACK_IMPORTED_MODULE_6__["each"](_this.posts.cities, function (cty) {
                    var findCity = underscore__WEBPACK_IMPORTED_MODULE_6__["findWhere"](_this.overallCities, { city_id: cty });
                    if (findCity.city_name != undefined) {
                        filteredCities_1.push(findCity.city_name);
                    }
                });
                _this.posts.cities = filteredCities_1;
                // filteredCities
            }
            _this.loadingController.dismiss();
        });
    };
    ServiceviewPage.prototype.userProfile = function (customerid) {
        this.router.navigate(['/profile'], { queryParams: { customer: customerid } });
    };
    ServiceviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-serviceview',
            template: __webpack_require__(/*! ./serviceview.page.html */ "./src/app/serviceview/serviceview.page.html"),
            styles: [__webpack_require__(/*! ./serviceview.page.scss */ "./src/app/serviceview/serviceview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
    ], ServiceviewPage);
    return ServiceviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=serviceview-serviceview-module.js.map