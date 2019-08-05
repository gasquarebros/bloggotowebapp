(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-static-module"],{

/***/ "./src/app/static/static.module.ts":
/*!*****************************************!*\
  !*** ./src/app/static/static.module.ts ***!
  \*****************************************/
/*! exports provided: StaticPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticPageModule", function() { return StaticPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _static_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./static.page */ "./src/app/static/static.page.ts");







var routes = [
    {
        path: '',
        component: _static_page__WEBPACK_IMPORTED_MODULE_6__["StaticPage"]
    }
];
var StaticPageModule = /** @class */ (function () {
    function StaticPageModule() {
    }
    StaticPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_static_page__WEBPACK_IMPORTED_MODULE_6__["StaticPage"]]
        })
    ], StaticPageModule);
    return StaticPageModule;
}());



/***/ }),

/***/ "./src/app/static/static.page.html":
/*!*****************************************!*\
  !*** ./src/app/static/static.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageHeading}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div [innerHTML]=\"pageContent\" class=\"page-content\">\n  </div>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/static/static.page.scss":
/*!*****************************************!*\
  !*** ./src/app/static/static.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9zdGF0aWMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/static/static.page.ts":
/*!***************************************!*\
  !*** ./src/app/static/static.page.ts ***!
  \***************************************/
/*! exports provided: StaticPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticPage", function() { return StaticPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var StaticPage = /** @class */ (function () {
    function StaticPage(route, api, loadingController) {
        this.route = route;
        this.api = api;
        this.loadingController = loadingController;
        this.section = '';
        this.pageHeading = '';
        this.pageContent = '';
    }
    StaticPage.prototype.ngOnInit = function () {
        this.section = (this.route.snapshot.queryParamMap['params'].section !== undefined) ?
            this.route.snapshot.queryParamMap['params'].section : '';
        this.getData();
    };
    StaticPage.prototype.getData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.section !== '')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading'
                            })];
                    case 1:
                        loading_1 = _a.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 2:
                        _a.sent();
                        this.api.getStaticData('api/page?page=' + this.section, this.reqOpts).subscribe(function (res) {
                            loading_1.dismiss();
                            var response = res.body;
                            _this.pageHeading = response.data.cmspage_title;
                            _this.pageContent = response.data.cmspage_description;
                        }, function (err) {
                            console.log(err);
                            loading_1.dismiss();
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        this.pageHeading = 'Page Not Found';
                        this.pageContent = 'Page Not Found';
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StaticPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-static',
            template: __webpack_require__(/*! ./static.page.html */ "./src/app/static/static.page.html"),
            styles: [__webpack_require__(/*! ./static.page.scss */ "./src/app/static/static.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], StaticPage);
    return StaticPage;
}());



/***/ })

}]);
//# sourceMappingURL=static-static-module.js.map