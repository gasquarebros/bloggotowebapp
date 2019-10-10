(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicelist-servicelist-module"],{

/***/ "./src/app/servicelist/filtercomponent/filtercomponent.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/servicelist/filtercomponent/filtercomponent.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\r\n  <div class=\"top-header\">\r\n    <a class=\"back-icon ptr\" (click)=\"closeModalPopup()\"><ion-icon name=\"arrow-round-back\"></ion-icon></a>\r\n    <div class=\"fltrtext\">\r\n      <span>Filter</span>\r\n    </div>\r\n    <a class=\"clearfltr ptr\" (click)=\"clearFilter()\">clear filter</a>\r\n  </div>\r\n\r\n  <form onsubmit=\"processForm(event)\">\r\n    <div class=\"filter-section\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Title</ion-label>\r\n        <ion-input type=\"text\" value=\"{{filterData.title}}\" (ionBlur)=\"handleinput($event, 'title')\"></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"categories.length > 0\">\r\n        <ion-label>Select category</ion-label>\r\n        <ion-select placeholder=\"category\" (ionChange)=\"handleinput($event, 'category')\">\r\n          <ion-select-option *ngFor=\"let cat of categories;let i=index;\"\r\n          [value]='cat.ser_cate_primary_id'\r\n          [selected]=\"filterData.category == cat.ser_cate_primary_id\">{{cat.ser_cate_name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"subcategories.length > 0\">\r\n        <ion-label>Select subcategory</ion-label>\r\n        <ion-select placeholder=\"subcategory\"  (ionChange)=\"handleinput($event, 'subcategory')\">\r\n            <ion-select-option *ngFor=\"let subcat of subcategories;let i=index;\"\r\n            [value]='subcat.pro_subcate_primary_id'\r\n            [selected]=\"filterData.subcategory == subcat.ser_cate_primary_id\">{{subcat.pro_subcate_name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Select availability</ion-label>\r\n        <ion-select multiple placeholder=\"availability\"  (ionChange)=\"handleinput($event, 'availability')\">\r\n            <ion-select-option value=\"mon\">Mon</ion-select-option>\r\n            <ion-select-option value=\"tue\">Tue</ion-select-option>\r\n            <ion-select-option value=\"wed\">Wed</ion-select-option>\r\n            <ion-select-option value=\"thu\">Thu</ion-select-option>\r\n            <ion-select-option value=\"fri\">Fri</ion-select-option>\r\n            <ion-select-option value=\"sat\">Sat</ion-select-option>\r\n            <ion-select-option value=\"sun\">Sun</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"cities.length > 0\">\r\n        <ion-label>Select city</ion-label>\r\n        <ion-select placeholder=\"city\"  (ionChange)=\"handleinput($event, 'city')\">\r\n            <ion-select-option *ngFor=\"let citie of cities;let i=index;\"\r\n            [value]='citie.city_id'\r\n            [selected]=\"filterData.city == citie.city_id\">{{citie.city_name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"filter-action\">\r\n      <div col=\"6\" class=\"width50 blkbtn ptr\" (click)=\"closeModalPopup()\">\r\n        <span class=\"txt\">Cancel</span>\r\n      </div>\r\n      <div col=\"6\" class=\"width50 redbtn ptr\" (click)=\"applyFilter()\">\r\n          <span class=\"txt\">Apply</span>\r\n        </div>\r\n    </div>\r\n  </form>\r\n</ion-content>      "

/***/ }),

/***/ "./src/app/servicelist/filtercomponent/filtercomponent.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/servicelist/filtercomponent/filtercomponent.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-header {\n  height: 52px;\n  background: #2874f0; }\n  .top-header .back-icon {\n    float: left;\n    padding: 15px;\n    height: 52px;\n    color: white; }\n  .top-header .fltrtext {\n    height: 52px;\n    padding: 16px 0px;\n    color: white;\n    width: auto;\n    float: left; }\n  .top-header .clearfltr {\n    float: right;\n    padding: 17px;\n    height: 52px;\n    color: white; }\n  .filter-section {\n  height: calc(100vh - 104px); }\n  .ptr {\n  cursor: pointer; }\n  .filter-action {\n  position: absolute;\n  bottom: 0px;\n  height: 52px;\n  width: 100%;\n  color: white; }\n  .filter-action .width50 {\n    width: 50%;\n    float: left;\n    padding: 16px 0px;\n    text-align: center; }\n  .filter-action .blkbtn {\n    border-top: 1px solid black;\n    background: black; }\n  .filter-action .redbtn {\n    background: red;\n    border-top: 1px solid red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZWxpc3QvZmlsdGVyY29tcG9uZW50L0Q6XFxibG9nZ290b3dlYmFwcC9zcmNcXGFwcFxcc2VydmljZWxpc3RcXGZpbHRlcmNvbXBvbmVudFxcZmlsdGVyY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLG1CQUE2QixFQUFBO0VBRmpDO0lBSVEsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWSxFQUFBO0VBUHBCO0lBVVEsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVcsRUFBQTtFQWRuQjtJQWlCUSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZLEVBQUE7RUFHcEI7RUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtFQUNJLGVBQWUsRUFBQTtFQUVuQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFMaEI7SUFRUSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQVgxQjtJQWNRLDJCQUEyQjtJQUMzQixpQkFBaUIsRUFBQTtFQWZ6QjtJQWtCUSxlQUFlO0lBQ2YseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlbGlzdC9maWx0ZXJjb21wb25lbnQvZmlsdGVyY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDQwLCAxMTYsIDI0MCk7XHJcbiAgICAuYmFjay1pY29uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuZmx0cnRleHQge1xyXG4gICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY2xlYXJmbHRyIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMTdweDtcclxuICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbi5maWx0ZXItc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDRweCk7XHJcbn1cclxuLnB0ciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZpbHRlci1hY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgLndpZHRoNTAge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJsa2J0biB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLnJlZGJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/servicelist/filtercomponent/filtercomponent.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/servicelist/filtercomponent/filtercomponent.component.ts ***!
  \**************************************************************************/
/*! exports provided: FiltercomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltercomponentComponent", function() { return FiltercomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);





var FiltercomponentComponent = /** @class */ (function () {
    // @Output()
    // public updateFilter = new EventEmitter();
    function FiltercomponentComponent(modalController, navParams, loadingController, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.storage = storage;
        this.filterData = {};
        this.categories = {};
        this.subcategories = {};
        this.countries = {};
        this.states = {};
        this.cities = {};
    }
    FiltercomponentComponent.prototype.ngOnInit = function () {
        // this.filterData = { 'title':'', 'category':'', 'subcategory':'', 'availability': [], 'city': '' };
        this.filterData = this.navParams.data.post;
        this.categories = this.navParams.data.categories;
        this.subcategories = this.navParams.data.subcategories;
        this.countries = this.navParams.data.countries;
        this.states = this.navParams.data.states;
        this.cities = this.navParams.data.cities;
        this.updateSubcategory();
    };
    FiltercomponentComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingController.dismiss();
        setTimeout(function () {
            _this.loadingController.dismiss();
        }, 500);
    };
    FiltercomponentComponent.prototype.handleinput = function (data, field) {
        if (field == 'title') {
            this.filterData.title = data.target.value;
        }
        else if (field == 'category') {
            this.filterData.category = data.target.value;
            this.updateSubcategory();
        }
        else if (field == 'subcategory') {
            this.filterData.subcategory = data.target.value;
        }
        else if (field == 'availability') {
            this.filterData.availability = data.target.value;
        }
        else if (field == 'city') {
            this.filterData.city = data.target.value;
        }
    };
    FiltercomponentComponent.prototype.updateSubcategory = function () {
        var _this = this;
        this.filterData.category;
        this.subcategories = [];
        if (this.filterData.category) {
            underscore__WEBPACK_IMPORTED_MODULE_4__["each"](this.navParams.data.subcategories, function (subcats) {
                if (subcats.pro_subcate_category_primary_id == _this.filterData.category) {
                    _this.subcategories.push(subcats);
                }
            });
        }
        else {
            this.subcategories = this.navParams.data.subcategories;
        }
    };
    FiltercomponentComponent.prototype.clearFilter = function () {
        this.filterData = { 'title': '', 'category': '', 'subcategory': '', 'availability': [], 'city': '' };
        // this.updateFilter.emit(this.filterData);
        this.closeModalPopup(this.filterData);
    };
    FiltercomponentComponent.prototype.applyFilter = function () {
        // this.updateFilter.emit(this.filterData);
        this.closeModalPopup(this.filterData);
    };
    FiltercomponentComponent.prototype.closeModalPopup = function (data) {
        if (data === void 0) { data = ''; }
        this.modalController.dismiss(data);
    };
    FiltercomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filtercomponent',
            template: __webpack_require__(/*! ./filtercomponent.component.html */ "./src/app/servicelist/filtercomponent/filtercomponent.component.html"),
            styles: [__webpack_require__(/*! ./filtercomponent.component.scss */ "./src/app/servicelist/filtercomponent/filtercomponent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], FiltercomponentComponent);
    return FiltercomponentComponent;
}());



/***/ }),

/***/ "./src/app/servicelist/servicelist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/servicelist/servicelist.module.ts ***!
  \***************************************************/
/*! exports provided: ServicelistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicelistPageModule", function() { return ServicelistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicelist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicelist.page */ "./src/app/servicelist/servicelist.page.ts");
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-module/share-module.module */ "./src/app/share-module/share-module.module.ts");
/* harmony import */ var _filtercomponent_filtercomponent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filtercomponent/filtercomponent.component */ "./src/app/servicelist/filtercomponent/filtercomponent.component.ts");









var routes = [
    {
        path: '',
        component: _servicelist_page__WEBPACK_IMPORTED_MODULE_6__["ServicelistPage"]
    }
];
var ServicelistPageModule = /** @class */ (function () {
    function ServicelistPageModule() {
    }
    ServicelistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModulePageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _servicelist_page__WEBPACK_IMPORTED_MODULE_6__["ServicelistPage"],
                _filtercomponent_filtercomponent_component__WEBPACK_IMPORTED_MODULE_8__["FiltercomponentComponent"]
            ],
            entryComponents: [
                _filtercomponent_filtercomponent_component__WEBPACK_IMPORTED_MODULE_8__["FiltercomponentComponent"]
            ]
        })
    ], ServicelistPageModule);
    return ServicelistPageModule;
}());



/***/ }),

/***/ "./src/app/servicelist/servicelist.page.html":
/*!***************************************************!*\
  !*** ./src/app/servicelist/servicelist.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-header [title]=\"'Services'\"></app-login-header>\r\n<div class=\"sorting_options\">\r\n  <div class=\"sortoptions brdrgt\">\r\n    <div class=\"sortinside\"> \r\n      <div class=\"sorttxt\" (click)=\"presentActionSheet()\">\r\n        <ion-icon name=\"options\"></ion-icon>\r\n        Sort\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sortoptions\">\r\n      <div class=\"sortinside\"> \r\n        <div class=\"sorttxt\" (click)=\"showFilter()\">\r\n          <ion-icon ios=\"ios-funnel\" md=\"md-funnel\"></ion-icon>\r\n          Filter\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<ion-content>\r\n  <app-common-services [sort] =\"sort\" [updateFilter] = \"updateFilter\" [filterData] =\"filterData\" ></app-common-services>  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/servicelist/servicelist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/servicelist/servicelist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sorting_options {\n  width: 100%;\n  height: 48px;\n  border-bottom: 1px solid #ccc; }\n  .sorting_options .sortoptions {\n    width: 50%;\n    float: left;\n    height: 48px;\n    text-align: center;\n    margin: 0 auto; }\n  .sorting_options .sortoptions .sortinside {\n      height: 48px;\n      margin: 0 auto;\n      padding: 14px;\n      text-align: center;\n      vertical-align: middle; }\n  .sorting_options .brdrgt {\n    border-right: 1px solid #ccc; }\n  .sorting_options .seperator {\n    width: 1px; }\n  .sorting_options .filteroptions {\n    flex: 1 1 0%; }\n  .action-sheet-group .active {\n  background: #ccc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZWxpc3QvRDpcXGJsb2dnb3Rvd2ViYXBwL3NyY1xcYXBwXFxzZXJ2aWNlbGlzdFxcc2VydmljZWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVTtFQUNWLFlBQVk7RUFDWiw2QkFBNkIsRUFBQTtFQUhqQztJQU1RLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7RUFWdEI7TUFZWSxZQUFZO01BQ1osY0FBYztNQUNkLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsc0JBQXNCLEVBQUE7RUFoQmxDO0lBb0JRLDRCQUE0QixFQUFBO0VBcEJwQztJQXVCUSxVQUFVLEVBQUE7RUF2QmxCO0lBMEJRLFlBQVksRUFBQTtFQUlwQjtFQUVRLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZWxpc3Qvc2VydmljZWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvcnRpbmdfb3B0aW9ucyB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblxyXG4gICAgLnNvcnRvcHRpb25zIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgLnNvcnRpbnNpZGUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJyZHJndCB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIC5zZXBlcmF0b3Ige1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyb3B0aW9ucyB7XHJcbiAgICAgICAgZmxleDogMSAxIDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9uLXNoZWV0LWdyb3VwICB7XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/servicelist/servicelist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/servicelist/servicelist.page.ts ***!
  \*************************************************/
/*! exports provided: ServicelistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicelistPage", function() { return ServicelistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filtercomponent_filtercomponent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtercomponent/filtercomponent.component */ "./src/app/servicelist/filtercomponent/filtercomponent.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);








var ServicelistPage = /** @class */ (function () {
    function ServicelistPage(route, menu, popoverController, modalController, loadingController, toastCtrl, actionSheetController, storage, ref) {
        this.route = route;
        this.menu = menu;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.actionSheetController = actionSheetController;
        this.storage = storage;
        this.ref = ref;
        this.categories = {};
        this.subcategories = {};
        this.countries = {};
        this.states = {};
        this.cities = {};
        this.filteredCities = {};
    }
    ServicelistPage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    ServicelistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.filterData = { 'title': '', 'category': '', 'subcategory': '', 'availability': [], 'city': '' };
        if (this.route.snapshot.queryParamMap['params']) {
            if (this.route.snapshot.queryParamMap['params'].type == 'category') {
                this.filterData.category = this.route.snapshot.queryParamMap['params'].category_id;
            }
        }
        this.storage.get('service_category').then(function (val) {
            _this.categories = val;
        });
        this.storage.get('service_subcategory').then(function (val) {
            _this.subcategories = val;
        });
        this.storage.get('country').then(function (val) {
            _this.countries = val;
        });
        this.storage.get('state').then(function (val) {
            _this.states = val;
        });
        this.storage.get('city').then(function (val) {
            _this.cities = val;
            _this.filterCities();
        });
    };
    ServicelistPage.prototype.presentLoadingWithOptions = function () {
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
    ServicelistPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Sort By',
                            buttons: [{
                                    text: 'Price - Low to High',
                                    cssClass: (this.sort == 'price-low') ? 'active' : '',
                                    handler: function () {
                                        _this.sort = "price-low";
                                    }
                                }, {
                                    text: 'Price - High to Low',
                                    cssClass: (this.sort == 'price-high') ? 'active' : '',
                                    handler: function () {
                                        _this.sort = "price-high";
                                    }
                                }, {
                                    text: 'Ascending Order A-Z',
                                    cssClass: (this.sort == 'asc') ? 'active' : '',
                                    handler: function () {
                                        _this.sort = "asc";
                                    }
                                }, {
                                    text: 'Descending Order Z-A',
                                    cssClass: (this.sort == 'desc') ? 'active' : '',
                                    handler: function () {
                                        _this.sort = "desc";
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }]
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
    ServicelistPage.prototype.showFilter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoadingWithOptions();
                        return [4 /*yield*/, this.modalController.create({
                                component: _filtercomponent_filtercomponent_component__WEBPACK_IMPORTED_MODULE_4__["FiltercomponentComponent"],
                                componentProps: {
                                    'type': 'filter',
                                    'post': this.filterData,
                                    'categories': this.categories,
                                    'subcategories': this.subcategories,
                                    //'countries': this.countries,
                                    //'states': this.states,
                                    'cities': this.filteredCities,
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null && dataReturned.data != '' && dataReturned.data != undefined) {
                                _this.filterData = dataReturned.data;
                                _this.updateFilter = !_this.updateFilter;
                                _this.ref.detectChanges();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServicelistPage.prototype.filterCities = function () {
        var _this = this;
        this.filteredCities = [];
        if (this.states) {
            var tempstateIds_1 = [];
            underscore__WEBPACK_IMPORTED_MODULE_6__["each"](this.states, function (state) {
                tempstateIds_1.push(state.id);
            });
            if (tempstateIds_1.length > 0) {
                underscore__WEBPACK_IMPORTED_MODULE_6__["each"](this.cities, function (city) {
                    if (underscore__WEBPACK_IMPORTED_MODULE_6__["contains"](tempstateIds_1, city.city_state)) {
                        _this.filteredCities.push(city);
                    }
                });
            }
        }
        else {
            this.filteredCities = this.cities;
        }
    };
    ServicelistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicelist',
            template: __webpack_require__(/*! ./servicelist.page.html */ "./src/app/servicelist/servicelist.page.html"),
            styles: [__webpack_require__(/*! ./servicelist.page.scss */ "./src/app/servicelist/servicelist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ServicelistPage);
    return ServicelistPage;
}());



/***/ })

}]);
//# sourceMappingURL=servicelist-servicelist-module.js.map