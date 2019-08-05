(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["draft-posts-draft-posts-module"],{

/***/ "./src/app/draft-posts/draft-posts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/draft-posts/draft-posts.module.ts ***!
  \***************************************************/
/*! exports provided: DraftPostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftPostsPageModule", function() { return DraftPostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _draft_posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draft-posts.page */ "./src/app/draft-posts/draft-posts.page.ts");
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-module/share-module.module */ "./src/app/share-module/share-module.module.ts");








var routes = [
    {
        path: '',
        component: _draft_posts_page__WEBPACK_IMPORTED_MODULE_6__["DraftPostsPage"]
    }
];
var DraftPostsPageModule = /** @class */ (function () {
    function DraftPostsPageModule() {
    }
    DraftPostsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModulePageModule"]
            ],
            declarations: [_draft_posts_page__WEBPACK_IMPORTED_MODULE_6__["DraftPostsPage"]]
        })
    ], DraftPostsPageModule);
    return DraftPostsPageModule;
}());



/***/ }),

/***/ "./src/app/draft-posts/draft-posts.page.html":
/*!***************************************************!*\
  !*** ./src/app/draft-posts/draft-posts.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-header [title]=\"title\"></app-login-header>\n<ion-content>\n<ion-item>\n  <ion-avatar>\n    <img src=\"assets/icon/avatar.png\">\n  </ion-avatar>\n  <h6>Hi {{userInfo.customer_username}}!</h6>\n</ion-item>\n<hr no-padding no-margin>\n<app-common-post [isProfileType] = \"profileType\"></app-common-post>\n</ion-content>"

/***/ }),

/***/ "./src/app/draft-posts/draft-posts.page.scss":
/*!***************************************************!*\
  !*** ./src/app/draft-posts/draft-posts.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyYWZ0LXBvc3RzL2RyYWZ0LXBvc3RzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/draft-posts/draft-posts.page.ts":
/*!*************************************************!*\
  !*** ./src/app/draft-posts/draft-posts.page.ts ***!
  \*************************************************/
/*! exports provided: DraftPostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftPostsPage", function() { return DraftPostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_module_common_post_common_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share-module/common-post/common-post.component */ "./src/app/share-module/common-post/common-post.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var DraftPostsPage = /** @class */ (function () {
    function DraftPostsPage(api, 
    // private youtube: YoutubeVideoPlayer,
    route, authService) {
        this.api = api;
        this.route = route;
        this.authService = authService;
        this.userInfo = null;
    }
    DraftPostsPage.prototype.ngOnInit = function () {
        var _this = this;
        var queryParams = this.route.snapshot.queryParams;
        this.profileView = 'post';
        this.authService.getUserInfo().then(function (items) {
            _this.userInfo = items;
        });
        if (queryParams !== undefined && queryParams.type !== undefined && queryParams.type === 'Favourites') {
            this.title = 'Favourites';
            this.profileType = 'favourite';
        }
        else {
            this.title = 'Drafts';
            this.profileType = 'draft';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_share_module_common_post_common_post_component__WEBPACK_IMPORTED_MODULE_2__["CommonPostComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _share_module_common_post_common_post_component__WEBPACK_IMPORTED_MODULE_2__["CommonPostComponent"])
    ], DraftPostsPage.prototype, "commonPostComponent", void 0);
    DraftPostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-draft-posts',
            template: __webpack_require__(/*! ./draft-posts.page.html */ "./src/app/draft-posts/draft-posts.page.html"),
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]],
            styles: [__webpack_require__(/*! ./draft-posts.page.scss */ "./src/app/draft-posts/draft-posts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DraftPostsPage);
    return DraftPostsPage;
}());



/***/ })

}]);
//# sourceMappingURL=draft-posts-draft-posts-module.js.map