(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productlist-productlist-module"],{

/***/ "./src/app/productlist/productlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/productlist/productlist.module.ts ***!
  \***************************************************/
/*! exports provided: ProductlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPageModule", function() { return ProductlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productlist.page */ "./src/app/productlist/productlist.page.ts");
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-module/share-module.module */ "./src/app/share-module/share-module.module.ts");








var routes = [
    {
        path: '',
        component: _productlist_page__WEBPACK_IMPORTED_MODULE_6__["ProductlistPage"]
    }
];
var ProductlistPageModule = /** @class */ (function () {
    function ProductlistPageModule() {
    }
    ProductlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModulePageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_productlist_page__WEBPACK_IMPORTED_MODULE_6__["ProductlistPage"]]
        })
    ], ProductlistPageModule);
    return ProductlistPageModule;
}());



/***/ }),

/***/ "./src/app/productlist/productlist.page.html":
/*!***************************************************!*\
  !*** ./src/app/productlist/productlist.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-header [title]=\"'Products'\"></app-login-header>\n<ion-content>\n    <ion-grid>\n      <div id=\"s-backout-link\">\n        <div class=\"a-subheader\">\n          <a>\n            <h4>\n              <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n              <span>{{subHeader}}</span>\n            </h4>\n          </a>\n        </div>\n      </div>\n\n      <div id=\"centerBelow\">\n        <div id=\"s-slick-result-header\" class=\"a-container sx-rib\">\n          <div class=\"a-row a-spacing-none a-grid-vertical-align a-grid-center\">\n            <div class=\"a-column a-span7\">\n              <span class=\"a-size-small a-color-secondary a-text-bold\">{{productCount}} Results found</span>\n            </div>\n            <div class=\"a-column a-span5 a-text-right a-span-last\">\n              <a id=\"sx-top-filter-button\" class=\"a-size-small a-link-normal a-text-bold\">Filter\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"6\" class='cardProducts' *ngFor=\"let product of products; let i = index\">\n            <div class=\"card-container\">\n              <div class=\"outer_img\">\n                <div class=\"inner_img\">\n                    <img [src]=\"product.product_thumbnail\"  class=\"imgCardMain\" />\n                </div>\n              </div>\n              <div class=\"grid-detail\">\n                <h5 class=\"sx-title\"><span class=\"textProductTitle\">{{ product.product_name }}</span></h5>\n                <!--<span class=\"productdesc\" [innerHTML]=\"product.product_short_description\"></span>-->\n                <div class=\"a-row a-spacing-mini a-size-mini a-color-secondary sx-overflow-ellipses\"><span>by </span><span>COTTON SHOPY</span></div>\n                <div class=\"reduction\">\n                  <span class=\"price a-size-medium a-color-price a-text-bold\" *ngIf=\"product.discount > 0\">₹{{product.product_special_price}}</span>\n                  <span class=\"price a-size-medium a-color-price a-text-bold\" *ngIf=\"product.discount <= 0\">₹{{product.product_price}}</span>\n                  <span class=\"a-letter-space\"></span>\n                  <span class=\"old-price a-text-strike\"  *ngIf=\"product.discount > 0\">₹{{product.product_price}}</span>\n                </div>\n              </div>\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/productlist/productlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/productlist/productlist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".a-subheader {\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05); }\n  .a-subheader h4 {\n    font-size: 13px !important;\n    padding: 10px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    line-height: 1;\n    font-weight: 700;\n    margin: 0px; }\n  .a-subheader h4 ion-icon {\n      float: left; }\n  .a-subheader h4 span {\n      float: left;\n      margin-left: 2px; }\n  .a-container {\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset, 0 1px 0 rgba(255, 255, 255, 0.3);\n  left: -14px;\n  margin-right: -7px;\n  padding: 12px 14px 10px 14px; }\n  .a-container .a-grid-vertical-align {\n    display: table !important;\n    table-layout: fixed;\n    zoom: 1;\n    border-collapse: collapse;\n    width: 100%; }\n  .a-container .a-grid-vertical-align div.a-column {\n      vertical-align: middle; }\n  .a-container .a-grid-vertical-align .a-span7 {\n      width: 61.25%;\n      float: left;\n      display: block; }\n  .a-container .a-grid-vertical-align .a-span7 span {\n        overflow-x: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        text-rendering: auto;\n        font-size: 13px; }\n  .a-container .a-grid-vertical-align .a-span5 {\n      width: 38.75%;\n      padding-right: 5px;\n      float: right;\n      display: block;\n      text-align: right; }\n  .a-container .a-grid-vertical-align .a-span5 #sx-top-filter-button {\n        text-decoration: none;\n        color: #0066c0;\n        font-size: 13px; }\n  .card-container .outer_img {\n  display: table;\n  min-height: 200px;\n  width: 100%; }\n  .card-container .outer_img .inner_img {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%; }\n  .card-container .outer_img .inner_img img {\n      max-height: 200px;\n      display: block;\n      margin-left: auto;\n      margin-right: auto; }\n  .card-container .grid-detail {\n  min-width: 2rem;\n  padding: 10px 0 10px 0;\n  margin: 0 auto; }\n  .card-container .grid-detail .sx-title {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    word-wrap: break-word;\n    -webkit-line-clamp: 2;\n    font-size: 1.1rem !important;\n    line-height: 1 !important;\n    font-weight: 700;\n    margin-bottom: 2px;\n    height: 40px;\n    overflow: hidden;\n    width: 135px;\n    display: -webkit-box;\n    -webkit-line-clamp: 2; }\n  .card-container .grid-detail .sx-title .textProductTitle {\n      font-style: normal !important;\n      text-transform: none !important;\n      text-decoration: none !important;\n      font-size: 14px !important; }\n  .card-container .grid-detail .sx-overflow-ellipses, .card-container .grid-detail div.sx-overflow-ellipses {\n    display: -webkit-box;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    word-wrap: break-word;\n    -webkit-line-clamp: 1; }\n  .card-container .grid-detail .a-text-bold {\n    font-weight: 700 !important; }\n  .card-container .grid-detail .a-size-medium {\n    text-rendering: optimizeLegibility;\n    font-size: 1rem !important;\n    line-height: 1.25 !important; }\n  .card-container .grid-detail .a-color-price {\n    color: #B12704 !important; }\n  .card-container .grid-detail .a-letter-space {\n    display: inline-block;\n    width: .4em; }\n  .card-container .grid-detail .a-text-strike {\n    text-decoration: line-through !important; }\n  .card-container .grid-detail .a-size-mini {\n    font-size: 0.65rem !important;\n    line-height: 1.5 !important; }\n  .card-container .grid-detail .a-color-secondary {\n    color: #555 !important; }\n  .card-container .grid-detail .a-letter-space {\n    display: inline-block;\n    width: .4em; }\n  .cardProducts:nth-child(1n+3) {\n  border-top: 1px solid #DDD; }\n  .cardProducts {\n  border-left: 1px solid #DDD; }\n  .cardProducts:nth-child(2n+1) {\n  border-left-width: 0px;\n  border-left: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdGxpc3QvRDpcXGJsb2dnb3Rvd2ViYXBwL3NyY1xcYXBwXFxwcm9kdWN0bGlzdFxccHJvZHVjdGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUNBQWlDO0VBQ2pDLCtDQUEwQyxFQUFBO0VBRjlDO0lBTVEsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTtFQWJuQjtNQWVZLFdBQVcsRUFBQTtFQWZ2QjtNQWtCWSxXQUFXO01BQ1gsZ0JBQWUsRUFBQTtFQUkzQjtFQUNJLHFDQUFpQztFQUNqQyw0Q0FBd0M7RUFDeEMsK0VBQXVFO0VBQ3ZFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNEJBQTRCLEVBQUE7RUFOaEM7SUFRUSx5QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCx5QkFBeUI7SUFDekIsV0FBVyxFQUFBO0VBWm5CO01BY1ksc0JBQXNCLEVBQUE7RUFkbEM7TUFpQlksYUFBYTtNQUNiLFdBQVc7TUFDWCxjQUFjLEVBQUE7RUFuQjFCO1FBcUJnQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsZUFBZSxFQUFBO0VBekIvQjtNQTZCWSxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixjQUFjO01BQ2QsaUJBQWlCLEVBQUE7RUFqQzdCO1FBbUNnQixxQkFBcUI7UUFDckIsY0FBYztRQUNkLGVBQWUsRUFBQTtFQU0vQjtFQUVRLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVyxFQUFBO0VBSm5CO0lBTVksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXLEVBQUE7RUFSdkI7TUFVZ0IsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsa0JBQWtCLEVBQUE7RUFibEM7RUFrQlEsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7RUFwQnRCO0lBc0JZLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQiw0QkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHFCQUFxQixFQUNPO0VBbkN4QztNQXFDZ0IsNkJBQTRCO01BQzVCLCtCQUE4QjtNQUM5QixnQ0FBK0I7TUFDL0IsMEJBQTBCLEVBQUE7RUF4QzFDO0lBNENZLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUVyQixxQkFBcUIsRUFBQTtFQWpEakM7SUFvRFksMkJBQTBCLEVBQUE7RUFwRHRDO0lBdURZLGtDQUFrQztJQUNsQywwQkFBeUI7SUFDekIsNEJBQTJCLEVBQUE7RUF6RHZDO0lBNERZLHlCQUF3QixFQUFBO0VBNURwQztJQStEWSxxQkFBcUI7SUFDckIsV0FBVyxFQUFBO0VBaEV2QjtJQW1FWSx3Q0FBdUMsRUFBQTtFQW5FbkQ7SUFzRVksNkJBQTZCO0lBQzdCLDJCQUEwQixFQUFBO0VBdkV0QztJQTBFWSxzQkFBcUIsRUFBQTtFQTFFakM7SUE2RVkscUJBQXFCO0lBQ3JCLFdBQVcsRUFBQTtFQU12QjtFQUNJLDBCQUEwQixFQUFBO0VBRTlCO0VBQ0ksMkJBQTJCLEVBQUE7RUFFL0I7RUFDSSxzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0bGlzdC9wcm9kdWN0bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmEtc3ViaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKTtcclxuICAgIGJvcmRlci1ib3R0b206IC4xcmVtIHNvbGlkIHJnYmEoMCwwLDAsLjA1KTtcclxuICAgIC5hLWljb24tcGFnZS1iYWNrIHtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLDAsMCwuMDMpIGluc2V0LCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjMpO1xyXG4gICAgbGVmdDogLTE0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC03cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHggMTBweCAxNHB4O1xyXG4gICAgLmEtZ3JpZC12ZXJ0aWNhbC1hbGlnbiB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUhaW1wb3J0YW50O1xyXG4gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgem9vbTogMTtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpdi5hLWNvbHVtbiB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hLXNwYW43IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYxLjI1JTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hLXNwYW41IHtcclxuICAgICAgICAgICAgd2lkdGg6IDM4Ljc1JTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgI3N4LXRvcC1maWx0ZXItYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA2NmMwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4OyAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICAgIC5vdXRlcl9pbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5pbm5lcl9pbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ncmlkLWRldGFpbCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgLnN4LXRpdGxlIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aWR0aDoxMzVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgLnRleHRQcm9kdWN0VGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3gtb3ZlcmZsb3ctZWxsaXBzZXMsIGRpdi5zeC1vdmVyZmxvdy1lbGxpcHNlcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hLXRleHQtYm9sZHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hLXNpemUtbWVkaXVtIHtcclxuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYS1jb2xvci1wcmljZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQjEyNzA0IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmEtbGV0dGVyLXNwYWNlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogLjRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmEtdGV4dC1zdHJpa2Uge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hLXNpemUtbWluaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmEtY29sb3Itc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NTUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYS1sZXR0ZXItc3BhY2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAuNGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmRQcm9kdWN0czpudGgtY2hpbGQoMW4rMykge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEREQ7XHJcbn1cclxuLmNhcmRQcm9kdWN0cyB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNEREQ7XHJcbn1cclxuLmNhcmRQcm9kdWN0czpudGgtY2hpbGQoMm4rMSkge1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/productlist/productlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/productlist/productlist.page.ts ***!
  \*************************************************/
/*! exports provided: ProductlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPage", function() { return ProductlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");






var ProductlistPage = /** @class */ (function () {
    function ProductlistPage(api, route, authService, loadingController, toastCtrl) {
        this.api = api;
        this.route = route;
        this.authService = authService;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.appid = 'BloggotoApp';
        this.productCount = 0;
    }
    ProductlistPage.prototype.ngOnInit = function () {
        var _this = this;
        var queryParams = this.route.snapshot.queryParams;
        this.authService.getUserInfo().then(function (items) {
            _this.userInfo = items;
        });
        this.products = [];
        this.subHeader = queryParams.title;
        var searchString = '?app_id=' + this.appid;
        if (queryParams.type === 'subcat') {
            searchString += '&subcat=' + queryParams.subcategory;
        }
        this.fetchProducts(searchString);
        this.presentLoadingWithOptions();
    };
    ProductlistPage.prototype.presentLoadingWithOptions = function () {
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
    ProductlistPage.prototype.presentToastWithOptions = function (msg) {
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
    ProductlistPage.prototype.fetchProducts = function (queryparams) {
        var _this = this;
        this.api.getStaticData('productsapi/productslist' + queryparams, []).subscribe(function (result) {
            var res = result;
            if (res.body !== undefined) {
                var response = res.body;
                if (response.status === 'ok') {
                    _this.products = response.data.records;
                }
                _this.loadingController.dismiss();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productlist',
            template: __webpack_require__(/*! ./productlist.page.html */ "./src/app/productlist/productlist.page.html"),
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]],
            styles: [__webpack_require__(/*! ./productlist.page.scss */ "./src/app/productlist/productlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ProductlistPage);
    return ProductlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=productlist-productlist-module.js.map