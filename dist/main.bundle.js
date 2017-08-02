webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_backoffice_backoffice_component__ = __webpack_require__("../../../../../src/app/layouts/backoffice/backoffice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_blank_blank_component__ = __webpack_require__("../../../../../src/app/layouts/blank/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_signuplayout_signuplayout_component__ = __webpack_require__("../../../../../src/app/layouts/signuplayout/signuplayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts_backoffice_backoffice_routes__ = __webpack_require__("../../../../../src/app/layouts/backoffice/backoffice.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layouts_blank_blank_routes__ = __webpack_require__("../../../../../src/app/layouts/blank/blank.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts_signuplayout_signuplayout_routes__ = __webpack_require__("../../../../../src/app/layouts/signuplayout/signuplayout.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assignment_assignment_list_assignment_list_component__ = __webpack_require__("../../../../../src/app/assignment/assignment-list/assignment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assignment_assignment_addedit_assignment_addedit_component__ = __webpack_require__("../../../../../src/app/assignment/assignment-addedit/assignment-addedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assignment_assignment_details_assignment_details_component__ = __webpack_require__("../../../../../src/app/assignment/assignment-details/assignment-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__inbox_inbox_component__ = __webpack_require__("../../../../../src/app/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__payment_payments_payments_component__ = __webpack_require__("../../../../../src/app/payment/payments/payments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__payment_cards_cards_component__ = __webpack_require__("../../../../../src/app/payment/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__signup_student_student_component__ = __webpack_require__("../../../../../src/app/signup/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__signup_teacher_teacher_component__ = __webpack_require__("../../../../../src/app/signup/teacher/teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__signup_generalinfo_generalinfo_component__ = __webpack_require__("../../../../../src/app/signup/generalinfo/generalinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__signup_student_educationinfo_educationinfo_component__ = __webpack_require__("../../../../../src/app/signup/student/educationinfo/educationinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__signup_student_paymentinfo_paymentinfo_component__ = __webpack_require__("../../../../../src/app/signup/student/paymentinfo/paymentinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__signup_teacher_experience_experience_component__ = __webpack_require__("../../../../../src/app/signup/teacher/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__signup_teacher_depositinfo_depositinfo_component__ = __webpack_require__("../../../../../src/app/signup/teacher/depositinfo/depositinfo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__layouts_backoffice_backoffice_component__["a" /* BackofficeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__layouts_blank_blank_component__["a" /* BlankComponent */],
            __WEBPACK_IMPORTED_MODULE_11__assignment_assignment_list_assignment_list_component__["a" /* AssignmentListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__assignment_assignment_addedit_assignment_addedit_component__["a" /* AssignmentAddeditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__assignment_assignment_details_assignment_details_component__["a" /* AssignmentDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__inbox_inbox_component__["a" /* InboxComponent */],
            __WEBPACK_IMPORTED_MODULE_19__payment_payments_payments_component__["a" /* PaymentsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__payment_cards_cards_component__["a" /* CardsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__signup_student_student_component__["a" /* StudentComponent */],
            __WEBPACK_IMPORTED_MODULE_22__signup_teacher_teacher_component__["a" /* TeacherComponent */],
            __WEBPACK_IMPORTED_MODULE_23__signup_generalinfo_generalinfo_component__["a" /* GeneralinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_24__signup_student_educationinfo_educationinfo_component__["a" /* EducationinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_25__signup_student_paymentinfo_paymentinfo_component__["a" /* PaymentinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_26__signup_teacher_experience_experience_component__["a" /* ExperienceComponent */],
            __WEBPACK_IMPORTED_MODULE_27__signup_teacher_depositinfo_depositinfo_component__["a" /* DepositinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__layouts_signuplayout_signuplayout_component__["a" /* SignuplayoutComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', redirectTo: '/home', pathMatch: 'full', },
                { path: '', component: __WEBPACK_IMPORTED_MODULE_6__layouts_blank_blank_component__["a" /* BlankComponent */], data: { title: 'landing Views' }, children: __WEBPACK_IMPORTED_MODULE_9__layouts_blank_blank_routes__["a" /* BLANK_ROUTES */] },
                { path: '', component: __WEBPACK_IMPORTED_MODULE_5__layouts_backoffice_backoffice_component__["a" /* BackofficeComponent */], data: { title: 'dashboard Views' }, children: __WEBPACK_IMPORTED_MODULE_8__layouts_backoffice_backoffice_routes__["a" /* BACKOFFICE_ROUTES */] },
                { path: '', component: __WEBPACK_IMPORTED_MODULE_7__layouts_signuplayout_signuplayout_component__["a" /* SignuplayoutComponent */], data: { title: 'signup Views' }, children: __WEBPACK_IMPORTED_MODULE_10__layouts_signuplayout_signuplayout_routes__["a" /* SIGNUP_ROUTES */] },
            ]),
            __WEBPACK_IMPORTED_MODULE_14_angular2_datatable__["DataTableModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/assignment/assignment-addedit/assignment-addedit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/assignment/assignment-addedit/assignment-addedit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"px-3 py-5 mx-content-width\">\n  <div class=\"page-heading\">\n  <h2 class=\"mb-5 font-weight-bold d-inline-block\">Assignment</h2>\n  <button type=\"button\" class=\"btn btn-theme text-uppercase d-inline-block mb-3 float-right\" routerLink='/assignments'>Back to List</button>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div id=\"create-assignment\" class=\"pb-4\">\n    <h6 class=\"text-uppercase bold pb-4\">Create Assignment</h6>\n    <form class=\"row form-inline d-flex align-items-stretch\">\n      <div class=\"form-group col-sm-3 mb-xs-60\">\n        <input type=\"file\" class=\"form-control col-sm-12 image-upload mb-3\" id=\"file\" (change)=\"changeFile($event)\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n        <div class=\"custom-upload \">\n           <span class=\"d-block h-25 f-10\" [class.h-50]=\"fileName == null ? false : true\">{{fileName}}</span>\n           <img src=\"assets/images/upload-img.png\" [hidden]=\"fileName != null ? true : false\"/>\n           <span class=\"align-bottom\">Drag and drop or click Upload</span>\n        </div>\n        <div class=\"img-ovrlay\"></div>\n        <button class=\"btn btn-theme btn-upload float-right w-100\">Upload</button>\n      </div>\n      <div class=\"form-group col-sm-9 p-xs-0 mt-xs-5\">\n        <div class=\"col-sm-6 col-md-7 pb-2\">\n          <label class=\"text-left font-weight-bold d-block f-sm-11\">Subject</label>\n          <input type=\"text\" class=\"form-control w-100\" id=\"subject\" />\n        </div>\n        <div class=\"col-sm-6 col-md-5 pb-2\">\n          <label class=\"text-left font-weight-bold d-block f-sm-11\">When do you need it ?</label>\n          <input type=\"text\" class=\"form-control w-100\" id=\"reason\" />\n        </div>\n        <div class=\"col-sm-12 pb-4\">\n          <label class=\"text-left font-weight-bold d-block f-sm-11\">Description</label>\n          <textarea class=\"form-control w-100\" id=\"description\" rows=\"3\"></textarea>\n        </div>\n        <div class=\"col-sm-12\">\n        <button class=\"btn btn-theme float-right\">Create Assignment</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/assignment/assignment-addedit/assignment-addedit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentAddeditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssignmentAddeditComponent = (function () {
    function AssignmentAddeditComponent() {
    }
    AssignmentAddeditComponent.prototype.changeFile = function (fileInput) {
        this.fileName = fileInput.target.files[0].name;
    };
    AssignmentAddeditComponent.prototype.ngOnInit = function () {
    };
    return AssignmentAddeditComponent;
}());
AssignmentAddeditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-assignment-addedit',
        template: __webpack_require__("../../../../../src/app/assignment/assignment-addedit/assignment-addedit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/assignment/assignment-addedit/assignment-addedit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AssignmentAddeditComponent);

//# sourceMappingURL=assignment-addedit.component.js.map

/***/ }),

/***/ "../../../../../src/app/assignment/assignment-details/assignment-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/assignment/assignment-details/assignment-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"px-3 py-5 mx-content-width\">\n  <div class=\"page-heading\">\n    <h2 class=\"mb-5 font-weight-bold d-inline-block\">Assignment</h2>\n    <button type=\"button\" class=\"btn btn-theme text-uppercase d-inline-block mb-3 float-right\" routerLink='/assignments'>Back to List</button>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div id=\"assignment-info\" class=\"pb-4\">\n    <h6 class=\"text-uppercase bold pb-4\">Assignment Info</h6>\n      <p class=\"bold mb-1\">Assignment Name</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>\n      <table class=\"table table-responsive borderless table-sm info-tbl\">\n        <thead >\n        <tr>\n          <th>Assignment ID</th>\n          <th>Submitted at</th>\n          <th>Due date</th>\n          <th>Status</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>0056</td>\n          <td>04.07.2017</td>\n          <td>07.07.2017</td>\n          <td>Done</td>\n        </tr>\n      </tbody>\n      </table>\n  </div>\n  <div id=\"attachment\" class=\"pb-5\">\n    <h6 class=\"text-uppercase bold\">Assignments</h6>\n    <table class=\"table table-responsive table-bordered attachment-tbl\">\n      <tbody>\n        <tr>\n          <td>Documents Name   <i class=\"glyphicon glyphicon-chevron-up f-10\"></i></td>\n          <td>Attached by</td>\n          <td>Attached at</td>\n          <td>Document type</td>\n        </tr>\n        <tr>\n          <td>Lorem ipsum dolor sit amet,</td>\n          <td>Bob Sinclar</td>\n          <td>04.07.2017</td>\n          <td>Completed</td>\n        </tr>\n        <tr>\n          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</td>\n          <td>Bob Sinclar</td>\n          <td>15.07.2017</td>\n          <td>Assignment Problem</td>\n        </tr>\n        <tr>\n          <td>Lorem ipsum dolor sit amet, consectetur adipiscing</td>\n          <td>Bob Sinclar</td>\n          <td>01.08.2017</td>\n          <td>Completed</td>\n        </tr>\n        <tr>\n          <td>Lorem ipsum dolor sit amet, consectetur</td>\n          <td>Bob Sinclar</td>\n          <td>04.07.2017</td>\n          <td class=\"text-left\">Assignment Problem</td>\n        </tr>\n      </tbody>\n      </table>\n      <div id=\"message\" class=\"row\">\n        <form class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"sendmessage\" class=\"font-weight-bold\">send a message to the teacher</label>\n            <textarea class=\"form-control\" id=\"sendmessage\" rows=\"4\"></textarea>\n          </div>\n          <button type=\"button\" class=\"btn btn-theme text-uppercase\">send</button>\n        </form>\n      </div>\n  </div>\n  <div id=\"payment-info\">\n      <p class=\"font-weight-bold text-uppercase\">Payment Info</p>\n      <table class=\"table table-responsive table-bordered table-centered\">\n        <thead >\n        <tr>\n          <th class=\"bold\">Date</th>\n          <th class=\"bold\">Card</th>\n          <th class=\"bold\">Subject</th>\n          <th class=\"bold\">Amount</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td scope=\"row\">04.07.2017</td>\n          <td>**** **** **** 4567</td>\n          <td>07.07.2017</td>\n          <td>$100</td>\n        </tr>\n      </tbody>\n      </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/assignment/assignment-details/assignment-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssignmentDetailsComponent = (function () {
    function AssignmentDetailsComponent() {
    }
    AssignmentDetailsComponent.prototype.ngOnInit = function () {
    };
    return AssignmentDetailsComponent;
}());
AssignmentDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-assignment-details',
        template: __webpack_require__("../../../../../src/app/assignment/assignment-details/assignment-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/assignment/assignment-details/assignment-details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AssignmentDetailsComponent);

//# sourceMappingURL=assignment-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/assignment/assignment-list/assignment-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/assignment/assignment-list/assignment-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"px-3 py-5\">\n  <div class=\"page-heading\">\n    <h2 class=\"mb-5 bold d-inline-block\">Assignment\n    </h2>\n    <div class=\"text-uppercase d-inline-block float-right mb-3\">\n    <label class=\"align-middle font-weight-bold mb-0 f-12 \">Create Assignment</label>\n    <button type=\"button\" class=\"btn btn-create rounded-circle\" routerLink='/assignment-addedit'><i class=\"glyphicon glyphicon-plus\"></i></button>\n  </div>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div id=\"assignment-info\" class=\"pb-4\">\n    <h6 class=\"text-uppercase bold\">List Of Assignments</h6>\n      <table class=\"table table-responsive table-bordered attachment-tbl\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n      <tbody>\n        <tr>\n          <td ><mfDefaultSorter by=\"name\">Attachment Name</mfDefaultSorter> </td>\n          <td>ID</td>\n          <td>Submitted at</td>\n          <td>Due Date</td>\n          <td>Status</td>\n        </tr>\n        <tr [hidden]=\"!isLoading\">\n          <td colspan=\"5\" class=\"text-center\">\n            <div class=\"loader\" >Loading..</div>\n          </tr>\n        <tr *ngFor=\"let item of mf.data\">\n          <td routerLink=\"/assignment-details\" style=\"cursor:pointer\">{{item.name}}</td>\n          <td>{{item.id}}</td>\n          <td>{{item.submittedAt}}</td>\n          <td>{{item.dueDate}}</td>\n          <td [class.text-success]=\"item.status == 'Done'\" [class.text-warning]=\"item.status == 'In Progress'\">{{item.status}}</td>\n        </tr>\n      </tbody>\n      <tfoot>\n    <tr >\n        <td colspan=\"5\" class=\"border-0 px-0 py-4\">\n            <mfBootstrapPaginator></mfBootstrapPaginator>\n        </td>\n    </tr>\n    </tfoot>\n      </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/assignment/assignment-list/assignment-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssignmentListComponent = (function () {
    function AssignmentListComponent(http) {
        this.http = http;
        this.rowsOnPage = 10;
        this.sortBy = "name";
        this.isLoading = false;
    }
    AssignmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.http.get("assets/assignments.json")
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data.json();
                _this.isLoading = false;
            }, 1000);
        });
    };
    return AssignmentListComponent;
}());
AssignmentListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-assignment-list',
        template: __webpack_require__("../../../../../src/app/assignment/assignment-list/assignment-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/assignment/assignment-list/assignment-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AssignmentListComponent);

var _a;
//# sourceMappingURL=assignment-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\r\n    height: 100%;\r\n}\r\n\r\n/* The hero image */\r\n.hero-image {\r\n    /* The image used */\r\n    background-image: url(/assets/images/home/party.png);\r\n    /* Set a specific height */\r\n    min-height: 350px;\r\n    /* Position and center the image to scale nicely on all screens */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n}\r\n\r\n/* Place text in the middle of the image */\r\n.hero-text {\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 10%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: white;\r\n} \r\n@media (max-width: 576px) {\r\n     .steps{\r\n    text-align: center;\r\n    } \r\n}\r\n@media(max-width:768px) and (min-width:576px){\r\n    .d-xs-block{\r\n        display: block\r\n    }\r\n}\r\nsection.diagonal-main{\r\n    overflow: hidden;\r\n    margin-top:-41px;\r\n}\r\n section.diagonal-left,section.diagonal-right {\r\n    position: relative;\r\n}\r\nsection.diagonal-left:before ,section.diagonal-right:before{\r\n    position: absolute;\r\n    content:'';\r\n}\r\n.diagonal-left,.diagonal-right {\r\n    z-index: 1;   \r\n}\r\n.diagonal-left:before {\r\n    -webkit-transform: rotate(-5deg);\r\n    transform: rotate(-5deg);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n    top: 0;\r\n    left: -25%;\r\n    z-index: -1;\r\n    width: 150%;\r\n    height: 75%;\r\n    background: inherit;\r\n}\r\n.diagonal-right:before {\r\n    -webkit-transform: rotate(5deg);\r\n    transform: rotate(5deg);\r\n    -webkit-transform-origin: right;\r\n    transform-origin: right;\r\n    top: 0;\r\n    left: -25%;\r\n    z-index: -1;\r\n    width: 150%;\r\n    height: 75%;\r\n    background: inherit;\r\n}\r\n\r\n#home-contact-banner{\r\n    background-image: url(/assets/images/home/contact-banner.png);\r\n    background-repeat: no-repeat;\r\n     background-position:  center;\r\n    background-size: cover;\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n#home-pricing-banner{\r\n    background-image: url(/assets/images/home/pricing.png);\r\n    background-repeat: no-repeat;\r\n     background-position:  center;\r\n    background-size: cover;\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n#home-top-banner{\r\n    background-image: url(/assets/images/home/home-1.png);\r\n    background-repeat: no-repeat;\r\n    /* background-position: right; */\r\n    background-size: cover;\r\n    z-index: 1;\r\n    position: relative;\r\n    background-position: 65%;\r\n}\r\n.w-100p{\r\n    width:100%;\r\n}\r\n.mh-200{\r\nheight: 200px;\r\n}\r\n.btn-theme-blank:hover,.btn-home:hover{\r\n    background-color: #56b4e0;\r\n    border-color: #56b4e0;\r\n    color: #fff\r\n}\r\n.top-banner .btn-theme:hover{\r\n    background-color: whitesmoke;\r\n    color: #2c3e50\r\n}\r\n\r\n.top-banner{\r\n    /* background-color: #56b4e0; */\r\n     background-color: transparent;\r\n    height: auto;\r\n}\r\n.top-banner .text-block{\r\n    color: #fff;\r\n}\r\n.proc-first{\r\n    background-color: #f39c12;\r\n    color: #fff;\r\n}\r\n.proc-second{\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n}\r\n.proc-third{\r\n    background-color: #56b4e0;\r\n    color: #fff;\r\n}\r\n.lg-font{\r\n    font-size: 92px;\r\n    line-height: 0.9\r\n}\r\np.fea-title{\r\n    color: #4b8ece;\r\n    font-size: 16px;\r\n    height: 48px\r\n}\r\np.fea-content{\r\n   font-size: 12px;\r\n}\r\np.price-title{\r\n    color: #fff;\r\n    font-size: 16px\r\n}\r\np.price-tag{\r\n    color: #fff;\r\n   font-size: 30px;\r\n}\r\np.price-tag > .sub{\r\n    color: #fff;\r\n   font-size: 15px;\r\n   vertical-align: super;\r\n}\r\np.contact-msg{\r\n    color: #fff;\r\n   font-size: 30px;\r\n}\r\np.sub-title{\r\n    font-size:13px;\r\n}\r\n.features .title,.features .sub-title{\r\n    color:#2c3e50;\r\n}\r\n.proc-first .title{\r\nfont-size: 35px;\r\n}\r\n.t-45px{\r\n    font-size: 45px;\r\n}\r\n\r\n.footer{\r\n    background-color: #2c3e50;\r\n    font-size: 12px;\r\n    color: #ffce5c\r\n}\r\n#signin-modal input{\r\n    border: 3px solid #56b4e0 !important;\r\n    font-size: 18px;\r\n}\r\n@media (max-width: 992px) {\r\n    .container{\r\n        width: 100% ;\r\n    }\r\n    #home-top-banner{\r\n     background-position:53% \r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .top-banner h1{font-size: 36px }\r\n    .top-banner h2{font-size: 26px }\r\n    .top-banner h3 {font-size: 20px }\r\n}\r\n\r\n@media (max-width: 768px) and (min-width:545px) {\r\n   #home-top-banner{\r\n        background-position:40% \r\n    }\r\n}\r\n@media (max-width: 544px) {\r\n    #home-top-banner{\r\n     background-position:45% \r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-banner\" id=\"home-top-banner\">\n  <div class=\"container pt-5 mt-5\">\n    <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 text-block py-lg-5 pb-5\">\n      <h2 class=\"mt-sm-5 mb-5\">Hey! Need some help with that homework due in 2 hours?</h2>\n      <h3 class=\"mt-4 mb-0 bold\">With us, homework is not STRESSFULL,</h3>\n      <h1 class=\"mb-4 bold t-45px\">It's <span class=\"text-uppercase\">Capuswork</span></h1>\n      <button class=\"btn btn-theme my-2  my-sm-0 mr-2 px-5\" type=\"submit\">Get Prices</button>\n      <button class=\"btn btn-theme btn-blank my-2   my-sm-0\" type=\"submit\">Check Features</button>\n      <p class=\"mt-sm-5 mb-5 text-uppercase f-12\">campuswork helps high school and undergraduate students doing their homework and projects.</p>\n    </div>\n    </div>\n  </div>\n  <!-- <div class=\"top-bg-img \" >\n   <img src=\"/assets/images/home/home-1.png\"  />\n  </div> -->\n</div>\n<section class=\"diagonal-main\" id=\"howitworks\">\n  <section class=\"proc-first\">\n    <div class=\"container\">\n      <div class=\"row py-5\">\n        <div class=\"col-sm-12 text-center\">\n          <h3 class=\"title\"><span class=\"bold\">How it works</span> - It's as <span class=\"bold text-uppercase\">Easy</span> as <span class=\"bold\">1-2-3</span></h3>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 \">\n          <img src=\"/assets/images/home/step-1.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 align-self-center steps\">\n          <div class=\"lg-font bold d-inline-block\">1</div>\n          <div class=\"d-inline-block align-top\"><h3 class=\"bold mb-0 text-uppercase\">Upload</h3>Your assignment</div>\n        </div>\n      </div>\n\n    </div>\n  </section>\n\n  <section class=\"diagonal-left proc-second\">\n    <div class=\"container\">\n      <div class=\"row pb-5\">\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 align-self-center steps\">\n          <div class=\"lg-font bold d-inline-block\">2</div>\n          <div class=\" d-inline-block\">\n            <span class=\"d-inline-block align-top\">You tell us when you need it <br/>and we tell you </span><br/>\n            <h3 class=\"bold text-uppercase\">We got it!</h3>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <img src=\"/assets/images/home/step-2.png\" class=\"img-fluid\" />\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"diagonal-right proc-third\">\n    <div class=\"container \">\n      <div class=\"row pb-4\">\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <img src=\"/assets/images/home/step-3.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 align-self-center steps\">\n          <div class=\"lg-font bold d-inline-block\">3</div>\n          <div class=\" d-inline-block\">\n            <h3 class=\"bold text-uppercase align-top mb-0\">And BOOM!</h3>\n            <span>Assignment is done</span><br/>\n            <span>and emailed to you!</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</section>\n<div class=\"clearfix\"></div>\n\n<div class=\"hero-image\">\n  <div class=\"hero-text\">\n    <button class=\"btn btn-theme btn-home my-2 my-sm-0 mr-2 px-5\" type=\"submit\">Join Us</button>\n  </div>\n</div>\n\n<div class=\"features\" id=\"features\">\n  <div class=\"container\">\n    <div class=\"row py-5 text-center d-flex align-items-stretch\">\n      <div class=\"col-sm-12 \">\n        <h3 class=\"text-center title\"><span class=\"bold\">Features</span></h3>\n        <p class=\"text-center sub-title\">Why we better</p>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\n        <img src=\"assets/images/home/feature-1.png\" class=\"h-50 img-fluid\" />\n        <p class=\"fea-title text-uppercase semibold mt-3 mb-0\">Homework / Assignment</p>\n        <p class=\"fea-content\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud </p> \n        <button class=\"btn btn-theme btn-theme-blank\">Learn more</button>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\n        <img src=\"assets/images/home/feature-2.png\" class=\"h-50 img-fluid\" />\n        <p class=\"fea-title text-uppercase semibold mt-3 mb-0\">Project</p>\n        <p class=\"fea-content\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud </p>\n \n        <button class=\"btn btn-theme btn-theme-blank\">Learn more</button>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\n        <img src=\"assets/images/home/feature-3.png\" class=\"h-50 img-fluid\" />\n        <p class=\"fea-title text-uppercase semibold mt-3 mb-0\">One-On-One Session</p>\n        <p class=\"fea-content\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud </p>\n \n        <button class=\"btn btn-theme btn-theme-blank\">Learn more</button>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\n        <img src=\"assets/images/home/feature-4.png\" class=\"h-50 img-fluid\" />\n        <p class=\"fea-title text-uppercase semibold mt-3 mb-0\">Safe and Secure</p>\n        <p class=\"fea-content\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud </p>\n        <button class=\"btn btn-theme btn-theme-blank\">Learn more</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"pricing\" id=\"home-pricing-banner\">\n  <div class=\"container\">\n    <div class=\"row py-5 text-center\">\n      <div class=\"col-sm-12\">\n        <h3 class=\"text-center text-white\"><span class=\"bold\">Pricing</span></h3>\n        <p class=\"text-center sub-title text-white\">Pricing model for CampusWork</p>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 py-sm-5\">\n        <p>\n          <img src=\"assets/images/home/pricing-1.png\" class=\"mh-200 img-fluid\" />\n        </p>\n        <p class=\"price-tag text-uppercase\">\n          <span class=\"d-xs-block\"><img src=\"assets/images/home/pricing-s1.png\" /></span>&nbsp;\n          <span class=\"bold\">&#36; 15</span><span class=\"sub\">.00</span>\n        </p>\n        <p class=\"price-title text-uppercase\">Homework to homework</p>\n    </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 py-sm-5\">\n        <p>\n          <img src=\"assets/images/home/pricing-2.png\" class=\"mh-200 img-fluid\" />\n        </p>\n        <p class=\"price-tag text-uppercase\">\n          <span class=\"d-xs-block\"><img src=\"assets/images/home/pricing-s2.png\" /></span>&nbsp;\n          <span class=\"bold\">&#36; 30</span><span class=\"sub\">.00</span>\n        </p>\n        <p class=\"price-title text-uppercase\">Monthly Subscription</p>\n \n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 py-sm-5\">\n        <p>\n          <img src=\"assets/images/home/pricing-3.png\" class=\"mh-200 img-fluid\" />\n        </p>\n        <p class=\"price-tag text-uppercase\">\n          <span class=\"d-xs-block\"><img src=\"assets/images/home/pricing-s3.png\" /></span>&nbsp;\n          <span class=\"bold\">&#36; 250</span><span class=\"sub\">.00</span>\n        </p>\n        <p class=\"price-title text-uppercase\">Annual Subscription</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section class=\"contact\" id=\"home-contact-banner\">\n  <div class=\"container py-5\">\n    <div class=\"col-sm-8 col-md-6 text-block text-white py-5\">\n      <p class=\"mt-5 contact-msg bold mb-0\">Still have questions?</p>\n      <p class=\"\">Write us and we will try to answer all your questions</p>\n      \n      <button class=\"btn btn-theme btn-blank my-2 my-sm-0 px-5\" type=\"submit\">Write us</button>\n      \n    </div>\n  </div>\n</section>\n<div class=\"modal fade\" id=\"signin-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"signin\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body my-5\">\n        <div class=\"col-sm-12\">\n        <h1 class=\"text-center bold my-4\">Sign in</h1>\n        <form>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control py-3 px-3   \" id=\"email\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control py-3 px-3\" id=\"password\" placeholder=\"Password\">\n          </div>\n          <div class=\"form-group\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"\">\n              <input type=\"checkbox\" id=\"rememberme\"/><label for=\"rememberme\">Remember Me</label>\n              </div>\n              <div class=\"\"><button type=\"submit\" class=\"btn btn-theme\">Login</button>\n              </div>\n            </div>      \n          </div>\n          <div class=\"form-group text-center\">\n            <a routerLink=\"/\" class=\"my-3\">forgot password</a>\n          </div>\n        </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"px-3 py-5\">\n  <div class=\"page-heading\">\n    <h2 class=\"mb-5 bold d-inline-block\">Inbox\n    </h2>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div id=\"inbox\" class=\"pb-4\">\n    <h6 class=\"text-uppercase bold mb-4\">Notifications</h6>\n      <table class=\"table table-responsive table-bordered inbox-tbl\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n      <tbody>\n        <tr [hidden]=\"!isLoading\">\n          <td colspan=\"3\" class=\"text-center\">\n            <div class=\"loader\" >Loading..</div>\n          </tr>\n        <tr *ngFor=\"let item of mf.data\">\n          <td style=\"max-width:50%\" class=\"pl-0\">{{item.notification}}</td>\n          <td class=\"bold text-center\">{{item.date}}</td>\n          <td class=\"text-center\"><a href=\"#\" class=\"remove\"><span class=\"glyphicon glyphicon-remove\"></span></a></td>\n        </tr>\n      </tbody>\n      <tfoot>\n    <tr >\n        <td colspan=\"3\" class=\"border-0 px-0 py-4\">\n            <mfBootstrapPaginator></mfBootstrapPaginator>\n        </td>\n    </tr>\n    </tfoot>\n      </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxComponent = (function () {
    function InboxComponent(http) {
        this.http = http;
        this.rowsOnPage = 10;
        this.sortBy = "name";
        this.isLoading = false;
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.http.get("assets/inbox.json")
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data.json();
                _this.isLoading = false;
            }, 1000);
        });
    };
    return InboxComponent;
}());
InboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inbox',
        template: __webpack_require__("../../../../../src/app/inbox/inbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/inbox/inbox.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], InboxComponent);

var _a;
//# sourceMappingURL=inbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/backoffice/backoffice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n    background-color: #498dcd;\r\n}\r\n.header span {\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    font-size: 10px;\r\n}\r\n.logo{\r\n  width: 80px\r\n}\r\n#wrapper {\r\n  padding-left: 250px;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n#sidebar {\r\n  margin-left: -250px;\r\n  left: 250px;\r\n  width: 250px;\r\n  color: #fff;\r\n  background-color: #55b4e0;\r\n  position: fixed;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n  z-index: 1000;\r\n  transition: all 0.4s ease 0s;\r\n  overflow: visible\r\n}\r\nul.nav li.profile{\r\n  border-bottom: 1px solid whitesmoke\r\n}\r\n.toggle{\r\n  position: absolute;\r\n  left:250px;\r\n  top: 0px;\r\n}\r\n.navbar-toggle{\r\n    background-color: #fff;\r\n    font-size: 18px;\r\n    padding: 15px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: 0 !important;\r\n    border: none;\r\n}\r\n  .navbar-toggle:focus{\r\n    box-shadow:none;\r\n  }\r\n.icon-bar{\r\n    position: relative;\r\n    width: 25px;\r\n    height: 3px;\r\n    background-color: #2c3e50;\r\n    margin-bottom:3px \r\n}\r\n#wrapper.active {\r\n  padding-left: 0;\r\n}\r\n#wrapper.active #sidebar,#wrapper.active .main-content {\r\n  left: 100px;\r\n}\r\n #wrapper #sidebar .first.icon-bar{\r\n   transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg); \r\n    -moz-transform: rotate(45deg);\r\n    -webkit-transform-origin: 15% 10%;\r\n            transform-origin: 15% 10%;\r\n }\r\n #wrapper #sidebar .second.icon-bar{\r\n    opacity: 0;\r\n }\r\n #wrapper #sidebar .third.icon-bar{\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n    -webkit-transform-origin: 10% 100%;\r\n            transform-origin: 10% 100%;\r\n }\r\n  #wrapper.active #sidebar .icon-bar{\r\n   transform: rotate(0deg);\r\n  -webkit-transform: rotate(0deg); \r\n    -moz-transform: rotate(0deg);\r\n    opacity: 1;\r\n    transition: all 0.6s;\r\n } \r\n#sidebar ul.nav li a:hover{\r\n    background-color: #bddff7;\r\n    text-decoration:none;\r\n}\r\n  #sidebar ul.nav li a:focus{\r\n    text-decoration: none;\r\n  }\r\n#sidebar ul.nav li span,#sidebar ul.nav li a{\r\n    font-size: 12px;\r\n    color: #fff !important;\r\n    font-weight: bold\r\n}\r\n#wrapper.active #sidebar ul.nav li.profile{\r\n  padding-right: 3px !important;\r\n  border-bottom: 0px ;\r\n  \r\n}  \r\n#wrapper.active #sidebar ul.nav li.profile span{\r\n  width: 90px !important;\r\n  float: right;\r\n  font-size: 11px !important\r\n}\r\n#wrapper.active #sidebar ul.nav li.profile span br{\r\n  display: block !important\r\n}\r\n#wrapper.active #sidebar ul.nav li.profile span small{\r\n  display: none\r\n}\r\n#wrapper.active #sidebar ul.nav li a { \r\n  overflow: hidden;\r\n  border-bottom: 1px solid rgba(44, 62, 80, 0.41);\r\n  margin-right:15px;\r\n  padding-right:15px !important \r\n} \r\n#wrapper.active #sidebar ul.nav li a:hover { background-color: transparent}   \r\n#wrapper.active span.link-img{\r\n  display: inline-block !important;\r\n  float: right;\r\n}\r\n#sidebar ul.nav li span.link-img{\r\n  width: 47px;\r\n  height: 47px;\r\n  display: none;\r\n  background-repeat: no-repeat !important\r\n}  \r\n#sidebar ul.nav li #assignment{\r\n  background-image: url('/assets/images/assignment-icon.png'); \r\n}\r\n#sidebar ul.nav li #assignment:hover{\r\n  background-image: url('/assets/images/assignment-icon-hover.png'); \r\n}\r\n#sidebar ul.nav li #inbox{\r\n background-image: url('/assets/images/inbox-icon.png'); \r\n}\r\n#sidebar ul.nav li #inbox:hover{\r\n  background-image: url('/assets/images/inbox-icon-hover.png'); \r\n}\r\n#sidebar ul.nav li #profile{\r\n  background-image: url('/assets/images/profile-icon.png'); \r\n}\r\n#sidebar ul.nav li #profile:hover{\r\n  background-image: url('/assets/images/profile-icon-hover.png'); \r\n}\r\n#sidebar ul.nav li #payment{\r\n background-image: url('/assets/images/payment-icon.png'); \r\n}\r\n#sidebar ul.nav li #payment:hover{\r\n  background-image: url('/assets/images/payment-icon-hover.png'); \r\n}\r\n#sidebar ul.nav li #logout{\r\n  background-image: url('/assets/images/logout-icon.png'); \r\n}\r\n#sidebar ul.nav li #logout:hover{\r\n  background-image: url('/assets/images/logout-icon-hover.png'); \r\n}\r\n.main-content{\r\n  color: #2c3e50;\r\n  margin-top: 12px;\r\n}\r\n@media (max-width:991px){\r\n #wrapper{\r\n  padding-left: 0;\r\n }\r\n .navbar-toggle{\r\n    border: 1px solid #2c3e50;\r\n    border-left: snow;\r\n  }\r\n  #wrapper.active #sidebar,#wrapper.active .main-content,#wrapper .main-content {\r\n    left: 0px;\r\n  }\r\n  #wrapper #sidebar {\r\n    left: 100px;\r\n  }\r\n  #wrapper #sidebar ul.nav li.profile{\r\n  padding-right: 3px !important;\r\n  border-bottom: 0px ;    \r\n  }  \r\n  #wrapper #sidebar ul.nav li.profile span{\r\n    width: 90px !important;\r\n    float: right;\r\n    font-size: 11px !important\r\n  }\r\n  #wrapper #sidebar ul.nav li.profile span br{\r\n    display: block !important\r\n  }\r\n  #wrapper #sidebar ul.nav li.profile span small{\r\n    display: none\r\n  }\r\n  #wrapper #sidebar ul.nav li a { \r\n    overflow: hidden;\r\n    border-bottom: 1px solid rgba(44, 62, 80, 0.41);\r\n    margin-right:15px;\r\n    padding-right:15px !important \r\n  } \r\n  #wrapper #sidebar ul.nav li a:hover { background-color: transparent}   \r\n  #wrapper span.link-img{\r\n    display: inline-block !important;\r\n    float: right;\r\n  }\r\n}\r\n@media (max-width:543px) {\r\n .header{\r\n   text-align: center;\r\n }\r\n  .header.sticky-top{\r\n    position: relative\r\n  }\r\n  #sidebar{\r\n    top: 0;\r\n    z-index: 1111;\r\n  }\r\n  .toggle{\r\n    top:122px\r\n  }\r\n  .main-content{\r\n    margin-top: 15px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/backoffice/backoffice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header  sticky-top bg-faded py-sm-3\">\n    <a class=\"navbar-brand align-top col-sm-2 text-xs-center pl-2 mr-0\" routerLink='/assignments'><img src=\"assets/images/logo.jpg\" class=\"logo w-xs-25 w-sm-25\" alt=\"Logo\" /></a>\n    <span class=\"navbar-text semibold col-sm-9 text-sm-right text-md-left\">\n          Easy work helps high school and undergraduate<br/>\n          Students doing their homework and projects\n    </span>\n</div>    \n<div id=\"wrapper\" [class.active]=\"!isSmallWidth\"style=\"overflow:hidden\">    \n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div id=\"sidebar\">\n        <ul class=\"nav flex-column\" (click)=\"NavSmallToggle(!isSmallWidth)\">\n          <li class=\"nav-item px-4 py-4 profile\">\n            <img src=\"assets/images/profile-pic.jpg\" class=\"rounded-circle w-25\" alt=\"Profile Page\">\n            <span class=\"w-70 d-inline-block align-middle light\">\n              Hello <br class=\"d-none\"/><span class=\"semibold\">Darshan Patel</span>\n              <small>Student</small>\n            </span>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"px-4 py-3 d-block\" routerLink='/assignments'>\n              Assignments\n              <span id=\"assignment\" class=\"link-img\" ></span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"px-4 py-3 d-block\" routerLink='/inbox'>\n              Inbox\n              <span id=\"inbox\" class=\"link-img\" ></span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"px-4 py-3 d-block\" routerLink='/profile'>\n              Profile Page\n              <span id=\"profile\" class=\"link-img\" ></span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"px-4 py-3 d-block\" routerLink='/payment'>\n              Payment Settings\n              <span id=\"payment\" class=\"link-img\" ></span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"px-4 py-3 d-block\" routerLink='/assignments'>\n              Logout\n              <span id=\"logout\" class=\"link-img\" ></span>\n            </a>\n          </li>\n        </ul>\n        <div class=\"toggle \">\n          <button type=\"button\" class=\"btn navbar-toggle mt-sm-5\" (click)=\"NavToggle()\" aria-controls=\"navbar\">\n              <div class=\"first icon-bar\"></div>\n              <div class=\"second icon-bar\"></div>\n              <div class=\"third icon-bar\"></div>\n          </button>\n         </div>\n      </div>\n      <div class=\"col-sm-12 main-content\">       \n        <div class=\"ml-sm-5\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>   \n</div>\n   "

/***/ }),

/***/ "../../../../../src/app/layouts/backoffice/backoffice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackofficeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BackofficeComponent = (function () {
    function BackofficeComponent() {
        this.isSmallWidth = false;
    }
    BackofficeComponent.prototype.NavToggle = function () {
        $("#wrapper").toggleClass("active");
        $(".main-content").toggleClass("active");
    };
    BackofficeComponent.prototype.NavSmallToggle = function (isSmall) {
        if (isSmall) {
            $("#wrapper").toggleClass("active");
            $(".main-content").toggleClass("active");
        }
    };
    BackofficeComponent.prototype.ngOnInit = function () {
        if (window.screen.width >= 992) {
            this.isSmallWidth = true;
        }
    };
    return BackofficeComponent;
}());
BackofficeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-backoffice',
        template: __webpack_require__("../../../../../src/app/layouts/backoffice/backoffice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layouts/backoffice/backoffice.component.css")]
    })
], BackofficeComponent);

//# sourceMappingURL=backoffice.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/backoffice/backoffice.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_list_assignment_list_component__ = __webpack_require__("../../../../../src/app/assignment/assignment-list/assignment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assignment_assignment_addedit_assignment_addedit_component__ = __webpack_require__("../../../../../src/app/assignment/assignment-addedit/assignment-addedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assignment_assignment_details_assignment_details_component__ = __webpack_require__("../../../../../src/app/assignment/assignment-details/assignment-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payments_payments_component__ = __webpack_require__("../../../../../src/app/payment/payments/payments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_cards_cards_component__ = __webpack_require__("../../../../../src/app/payment/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inbox_inbox_component__ = __webpack_require__("../../../../../src/app/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKOFFICE_ROUTES; });







var BACKOFFICE_ROUTES = [
    { path: 'assignments', component: __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_list_assignment_list_component__["a" /* AssignmentListComponent */] },
    { path: 'assignment-addedit', component: __WEBPACK_IMPORTED_MODULE_1__assignment_assignment_addedit_assignment_addedit_component__["a" /* AssignmentAddeditComponent */] },
    { path: 'assignment-details', component: __WEBPACK_IMPORTED_MODULE_2__assignment_assignment_details_assignment_details_component__["a" /* AssignmentDetailsComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_3__payment_payments_payments_component__["a" /* PaymentsComponent */] },
    { path: 'cards', component: __WEBPACK_IMPORTED_MODULE_4__payment_cards_cards_component__["a" /* CardsComponent */] },
    { path: 'inbox', component: __WEBPACK_IMPORTED_MODULE_5__inbox_inbox_component__["a" /* InboxComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */] },
];
//# sourceMappingURL=backoffice.routes.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/blank/blank.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body,body a{\r\n    color: #fff;\r\n} \r\n.navbar ul li a {\r\n    color: #fff;\r\n    font-size: 14px;\r\n    padding: 15px;\r\n}\r\n.header-bg{\r\n    background-color: #56b4e0;\r\n}\r\n.navbar-toggler{\r\n    border: 1px solid #fff;\r\n}\r\n\r\n.navbar-toggler:focus, .navbar-toggler:hover{\r\n    outline: white;\r\n}\r\n\r\n .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n}\r\n\r\n\r\n@media (max-width: 992px) {\r\n     .header-bg{\r\n    border-bottom: 1px solid white;\r\n    } \r\n    .navbar .container,footer .container{\r\n        width: 100%;\r\n    }\r\n    .container{\r\n        width: 100% !important;\r\n    }\r\n}\r\n\r\nfooter{\r\n    background-color: #2c3e50;\r\n}\r\nfooter .copyright{\r\n    color: #ffce5c;\r\n    line-height: 2.5em;\r\n\r\n}\r\n@media (min-width: 992px) {\r\n.ml-7rem{\r\n    margin-left: 7rem;\r\n}\r\n} \r\n@media (max-width: 576px) {\r\n    footer{\r\n        text-align: center;\r\n    } \r\n    .navbar-brand{\r\n            margin-right: 5rem;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/blank/blank.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header-bg\">     \n        <nav class=\"navbar fixed-top navbar-toggleable-md header-bg\">\n          <div class=\"container\">\n          <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <a class=\"navbar-brand pr-sm-5\" href=\"#\" (click)=\"goToDiv($event,'home-top-banner')\"><img class=\"img-fluid\" src=\"assets/images/CampusWork.png\" alt=\"logo\">    </a>\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav  mr-auto left-nav\" id=\"headerlink\">\n              <li class=\"nav-item active px-sm-2\">\n                <a class=\"nav-link px-xs-0\" href=\"#howitworks\" (click)=\"goToDiv($event,'howitworks')\">How it works</a>\n              </li>\n              <li class=\"nav-item px-sm-2\">\n                <a class=\"nav-link px-xs-0\" href=\"#features\" (click)=\"goToDiv($event,'features')\">Features</a>\n              </li>\n              <li class=\"nav-item px-sm-2\">\n                <a class=\"nav-link px-xs-0\" href=\"#home-pricing-banner\" (click)=\"goToDiv($event,'home-pricing-banner')\">Pricing</a>\n              </li>\n            </ul>\n            <ul class=\"navbar-nav right-nav\" id=\"headerbutton\">\n                <li class=\"nav-item px-sm-1\">\n                  <button class=\"btn btn-theme my-2 px-5\" type=\"button\" routerLink=\"/signup\">Sign up</button>\n                </li>\n                <li class=\"nav-item px-sm-1\">\n                <button class=\"btn btn-theme btn-blank my-2 \" data-toggle=\"modal\" data-target=\"#signin-modal\" type=\"submit\">Sign In</button>\n              </li>\n            </ul>\n          </div>\n          </div>\n        </nav>\n    </header>\n    <div class=\"main-content\">\n      <router-outlet></router-outlet>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <div class=\"row pt-4 pb-4\">\n          <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\n            <a class=\"navbar-brand pr-sm-5 flogo\" style=\"margin:0px auto\" href=\"#\" (click)=\"goToDiv($event,'home-top-banner')\"><img class=\"img-fluid\" src=\"assets/images/CampusWork.png\" alt=\"logo\">    </a>\n            </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-8 col-lg-9 align-self-center\">\n            <span class=\"copyright ml-7rem\">©2017 campusWork. All rights reserved.</span>\n            </div>\n        </div>\n      </div>\n    </footer>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/blank/blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.goToDiv = function (e, id) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top - 80
        }, 'slow');
    };
    BlankComponent.prototype.ngOnInit = function () {
    };
    return BlankComponent;
}());
BlankComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blank',
        template: __webpack_require__("../../../../../src/app/layouts/blank/blank.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layouts/blank/blank.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlankComponent);

//# sourceMappingURL=blank.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/blank/blank.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLANK_ROUTES; });

var BLANK_ROUTES = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
];
//# sourceMappingURL=blank.routes.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/signuplayout/signuplayout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body,body a{\r\n    color: #fff;\r\n} \r\n.navbar ul li a {\r\n    color: #fff;\r\n    font-size: 14px;\r\n    padding: 15px;\r\n}\r\n.header-bg{\r\n    background-color: #56b4e0;\r\n}\r\n.navbar-toggler{\r\n    border: 1px solid #fff;\r\n}\r\n\r\n.navbar-toggler:focus, .navbar-toggler:hover{\r\n    outline: white;\r\n}\r\n\r\n .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n}\r\n\r\n\r\n@media (max-width: 992px) {\r\n     .header-bg{\r\n    border-bottom: 1px solid white;\r\n    } \r\n    .navbar .container,footer .container{\r\n        width: 100%;\r\n    }\r\n    .container{\r\n        width: 100% !important;\r\n    }\r\n}\r\n\r\nfooter{\r\n    background-color: #2c3e50;\r\n}\r\nfooter .copyright{\r\n    color: #ffce5c;\r\n    line-height: 2.5em;\r\n\r\n}\r\n@media (min-width: 992px) {\r\n.ml-7rem{\r\n    margin-left: 7rem;\r\n}\r\n} \r\n@media (max-width: 576px) {\r\n    footer{\r\n        text-align: center;\r\n    } \r\n    .navbar-brand{\r\n            margin-right: 5rem;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/signuplayout/signuplayout.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header-bg\">     \n        <nav class=\"navbar fixed-top navbar-toggleable-md header-bg\">\n          <div class=\"container\">\n          <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <a class=\"navbar-brand pr-sm-5\" href=\"#\" (click)=\"goToDiv($event,'home-top-banner')\"><img class=\"img-fluid\" src=\"assets/images/CampusWork.png\" alt=\"logo\">    </a>\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav  ml-auto right-nav\" id=\"headerlink\">\n              <li class=\"nav-item active px-sm-2\">\n                <a class=\"nav-link px-xs-0\" routerLink=\"/home\">How it works</a>\n              </li>\n              <li class=\"nav-item px-sm-2\">\n                <a class=\"nav-link px-xs-0\" routerLink=\"/home\">Features</a>\n              </li>\n              <li class=\"nav-item px-sm-2\">\n                <a class=\"nav-link px-xs-0\" routerLink=\"/home\">Pricing</a>\n              </li>\n            </ul>\n          </div>\n          </div>\n        </nav>\n    </header>\n    <div class=\"main-content\">\n      <router-outlet></router-outlet>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <div class=\"row pt-4 pb-4\">\n          <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\n            </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-8 col-lg-9 align-self-center\">\n            <span class=\"copyright ml-7rem\">©2017 campusWork. All rights reserved.</span>\n            </div>\n        </div>\n      </div>\n    </footer>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/signuplayout/signuplayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignuplayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignuplayoutComponent = (function () {
    function SignuplayoutComponent() {
    }
    SignuplayoutComponent.prototype.ngOnInit = function () {
    };
    return SignuplayoutComponent;
}());
SignuplayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signuplayout',
        template: __webpack_require__("../../../../../src/app/layouts/signuplayout/signuplayout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layouts/signuplayout/signuplayout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignuplayoutComponent);

//# sourceMappingURL=signuplayout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/signuplayout/signuplayout.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_generalinfo_generalinfo_component__ = __webpack_require__("../../../../../src/app/signup/generalinfo/generalinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_student_educationinfo_educationinfo_component__ = __webpack_require__("../../../../../src/app/signup/student/educationinfo/educationinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_student_paymentinfo_paymentinfo_component__ = __webpack_require__("../../../../../src/app/signup/student/paymentinfo/paymentinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_teacher_experience_experience_component__ = __webpack_require__("../../../../../src/app/signup/teacher/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_teacher_depositinfo_depositinfo_component__ = __webpack_require__("../../../../../src/app/signup/teacher/depositinfo/depositinfo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIGNUP_ROUTES; });






var SIGNUP_ROUTES = [
    // { path: 'signup/student', component: StudentComponent },
    // { path: 'signup/teacher', component: TeacherComponent },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_0__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'signup/general/:id', component: __WEBPACK_IMPORTED_MODULE_1__signup_generalinfo_generalinfo_component__["a" /* GeneralinfoComponent */] },
    { path: 'signup/student/education', component: __WEBPACK_IMPORTED_MODULE_2__signup_student_educationinfo_educationinfo_component__["a" /* EducationinfoComponent */] },
    { path: 'signup/student/payment', component: __WEBPACK_IMPORTED_MODULE_3__signup_student_paymentinfo_paymentinfo_component__["a" /* PaymentinfoComponent */] },
    { path: 'signup/teacher/experience', component: __WEBPACK_IMPORTED_MODULE_4__signup_teacher_experience_experience_component__["a" /* ExperienceComponent */] },
    { path: 'signup/teacher/deposit', component: __WEBPACK_IMPORTED_MODULE_5__signup_teacher_depositinfo_depositinfo_component__["a" /* DepositinfoComponent */] },
];
//# sourceMappingURL=signuplayout.routes.js.map

/***/ }),

/***/ "../../../../../src/app/payment/cards/cards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pcard{\r\n   border:2px solid #ecf0f1;\r\n   border-radius: 6px; \r\n}\r\n.pcard .pcard-info{\r\n    border-bottom: 2px solid #ecf0f1;\r\n}\r\na.pc-edit,a.pc-remove{\r\n    color: #2c3e50\r\n}\r\na.pc-edit:hover,a.pc-edit:focus{\r\n    color: #55b4e0;\r\n    text-decoration: none\r\n}\r\na.pc-remove:hover,a.pc-remove:focus{\r\n    color: #f9572a;\r\n    text-decoration: none\r\n}\r\n#addcard form input{\r\n    padding: 11px 15px !important\r\n}\r\n#addcard form select{\r\n    height: 47px !important\r\n}\r\n@media (min-width: 768px) {\r\n#addcard form{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    -ms-flex-flow: row wrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    flex-flow: row wrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    margin-bottom: 0;\r\n}\r\n}\r\n@media (max-width: 576px) {\r\n    .pcard-block{\r\n        padding-right:15px;\r\n        padding-left: 15px \r\n    }\r\n    .pcard-info a,.pcard-info span{\r\n        font-size: 12px\r\n    }\r\n    .pcard-info img{\r\n        max-width: 20px\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/payment/cards/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"px-3 py-5\">\n  <div class=\"page-heading\">\n    <h2 class=\"mb-5 font-weight-bold d-inline-block\">Payment</h2>\n    <button type=\"button\" class=\"btn btn-theme text-uppercase d-inline-block mb-3 float-right\" routerLink='/payment'>Payment History</button>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div id=\"cards\" class=\"pb-4\">\n    <h6 class=\"text-uppercase bold mb-3\">List Of Cards</h6>\n      <div id=\"accordion\" class=\"px-0 mb-5 col-sm-10 col-md-8 col-lg-6\" role=\"tablist\" aria-multiselectable=\"true\">\n        <div class=\"pcard mb-3\">\n          <div class=\"pcard-info p-3\" role=\"tab\" id=\"card-info\">\n            <div class=\"d-flex justify-content-between\">\n              <div>\n                <span class=\"pr-2\"><img src=\"/assets/images/card-visa.png\" /></span>\n                <span class=\"semibold px-2\">**** **** **** 4567</span>\n              </div>\n              <div>\n                <a href=\"#\" (click)=\"toggleCard($event,1)\" class=\"semibold text-uppercase px-2 pc-edit\">Edit</a> \n                <a href=\"#\" (click)=\"toggleCard($event,1)\" class=\"semibold text-uppercase pl-2 pc-remove\"><span class=\"hidden-xs-down\">Remove</span><span class=\"glyphicon glyphicon-remove hidden-sm-up\"></span></a>\n              </div> \n            </div>\n          </div>\n          <div id=\"pcard-edit-1\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"card-info\">\n            <div class=\"pcard-block px-sm-5 py-4\">\n                <form>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control py-3 px-3\" id=\"cardnumber\" placeholder=\"Card Number\">\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"d-flex justify-content-between\">\n                      <select class=\"form-control mr-2\">\n                      <option value=\"1\" >January</option>\n                      <option value=\"2\">February</option>\n                      <option value=\"3\">March</option>\n                      <option value=\"4\">April</option>\n                      <option value=\"5\">May</option>\n                      <option value=\"6\" selected>June</option>\n                      <option value=\"7\">July</option>\n                      <option value=\"8\">August</option>\n                      <option value=\"9\">September</option>\n                      <option value=\"10\">Octomber</option>\n                      <option value=\"11\">November</option>\n                      <option value=\"12\">December</option>\n                    </select>\n                    <select class=\"form-control ml-2 \">\n                      <option value=\"2017\">2017</option>\n                      <option value=\"2018\">2018</option>\n                      <option value=\"2019\" selected>2019</option>\n                      <option value=\"2020\">2020</option>\n                      <option value=\"2021\">2021</option>\n                      <option value=\"2022\">2022</option>\n                      <option value=\"2023\">2023</option>\n                    </select>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"d-flex justify-content-start\">\n                      <input type=\"text\" class=\"form-control py-3 px-3 mr-2\" style=\"max-width:100px\" id=\"cvv\" placeholder=\"CVV\">\n                      <span class=\"f-11 semibold\">3 or four digits usualy found<br/> on signature strip</span>\n                    </div>\n                  </div>\n                <div class=\"form-group\">\n                    <div class=\"d-flex justify-content-between\">\n                      <div class=\"\">\n                      </div>\n                      <div class=\"\"><button type=\"submit\" class=\"btn btn-theme\">Update Card Info</button>\n                      </div>\n                    </div>      \n                  </div>\n                </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"pcard mb-3\">\n          <div class=\"pcard-info p-3\" role=\"tab\" id=\"card-info\">\n            <div class=\"d-flex justify-content-between\">\n              <div>\n                <span class=\"pr-2\"><img src=\"/assets/images/card-master.png\" /></span>\n                <span class=\"semibold px-2\">**** **** **** 4567</span>\n              </div>\n              <div>\n                <a href=\"#\" (click)=\"toggleCard($event,2)\" class=\"semibold text-uppercase px-2 pc-edit\">Edit</a> \n                <a href=\"#\" (click)=\"toggleCard($event,1)\" class=\"semibold text-uppercase pl-2 pc-remove\"><span class=\"hidden-xs-down\">Remove</span><span class=\"glyphicon glyphicon-remove hidden-sm-up\"></span></a>\n              </div> \n            </div>\n          </div>\n          <div id=\"pcard-edit-2\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"card-info\">\n            <div class=\"pcard-block px-sm-5 py-4\">\n                <form>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control py-3 px-3\" id=\"cardnumber\" placeholder=\"Card Number\">\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"d-flex justify-content-between\">\n                      <select class=\"form-control mr-2\">\n                      <option value=\"1\" >January</option>\n                      <option value=\"2\">February</option>\n                      <option value=\"3\">March</option>\n                      <option value=\"4\">April</option>\n                      <option value=\"5\">May</option>\n                      <option value=\"6\" selected>June</option>\n                      <option value=\"7\">July</option>\n                      <option value=\"8\">August</option>\n                      <option value=\"9\">September</option>\n                      <option value=\"10\">Octomber</option>\n                      <option value=\"11\">November</option>\n                      <option value=\"12\">December</option>\n                    </select>\n                    <select class=\"form-control ml-2 \">\n                      <option value=\"2017\">2017</option>\n                      <option value=\"2018\">2018</option>\n                      <option value=\"2019\" selected>2019</option>\n                      <option value=\"2020\">2020</option>\n                      <option value=\"2021\">2021</option>\n                      <option value=\"2022\">2022</option>\n                      <option value=\"2023\">2023</option>\n                    </select>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"d-flex justify-content-start\">\n                      <input type=\"text\" class=\"form-control py-3 px-3 mr-2\" style=\"max-width:100px\" id=\"cvv\" placeholder=\"CVV\">\n                      <span class=\"f-11 semibold\">3 or four digits usualy found<br/> on signature strip</span>\n                    </div>\n                  </div>\n                <div class=\"form-group\">\n                    <div class=\"d-flex justify-content-between\">\n                      <div class=\"\">\n                      </div>\n                      <div class=\"\"><button type=\"submit\" class=\"btn btn-theme\">Update Card Info</button>\n                      </div>\n                    </div>      \n                  </div>\n                </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h6 class=\"text-uppercase bold mb-3\">Add New Card</h6>\n      <div id=\"addcard\" class=\"addcard\">\n            <!-- <form class=\"form-inline\">\n                  <div class=\"form-group mr-3\">\n                    <input type=\"text\" class=\"form-control px-3\" id=\"cardnumber\" placeholder=\"Card Number\">\n                  </div>\n                  <div class=\"form-group mr-3\">\n                      <select class=\"form-control\">\n                      <option value=\"1\" >January</option>\n                      <option value=\"2\">February</option>\n                      <option value=\"3\">March</option>\n                      <option value=\"4\">April</option>\n                      <option value=\"5\">May</option>\n                      <option value=\"6\" selected>June</option>\n                      <option value=\"7\">July</option>\n                      <option value=\"8\">August</option>\n                      <option value=\"9\">September</option>\n                      <option value=\"10\">Octomber</option>\n                      <option value=\"11\">November</option>\n                      <option value=\"12\">December</option>\n                    </select>\n                  </div>\n                  <div class=\"form-group mr-3\">\n                    <select class=\"form-control\">\n                      <option value=\"2017\">2017</option>\n                      <option value=\"2018\">2018</option>\n                      <option value=\"2019\" selected>2019</option>\n                      <option value=\"2020\">2020</option>\n                      <option value=\"2021\">2021</option>\n                      <option value=\"2022\">2022</option>\n                      <option value=\"2023\">2023</option>\n                    </select>\n                  </div>\n                  <div class=\"form-group mr-2\">\n                      <input type=\"text\" class=\"form-control px-3 \" style=\"max-width:100px\" id=\"cvv\" placeholder=\"CVV\">\n                  </div>\n                <div class=\"form-group \">\n                      <button type=\"submit\" class=\"btn btn-theme\">Add Card</button>     \n                  </div>\n                </form> -->\n                <form>\n                  <div class=\"form-group mr-sm-2\">\n                    <input type=\"text\" class=\"form-control py-3 px-3\" id=\"addcardnumber\" placeholder=\"Card Number\">\n                  </div>\n                  <div class=\"form-group mr-sm-2\">\n                    <div class=\"d-flex justify-content-between\">\n                      <select class=\"form-control mr-2\">\n                      <option value=\"1\" >January</option>\n                      <option value=\"2\">February</option>\n                      <option value=\"3\">March</option>\n                      <option value=\"4\">April</option>\n                      <option value=\"5\">May</option>\n                      <option value=\"6\" selected>June</option>\n                      <option value=\"7\">July</option>\n                      <option value=\"8\">August</option>\n                      <option value=\"9\">September</option>\n                      <option value=\"10\">Octomber</option>\n                      <option value=\"11\">November</option>\n                      <option value=\"12\">December</option>\n                    </select>\n                    <select class=\"form-control ml-2 ml-sm-0\">\n                      <option value=\"2017\">2017</option>\n                      <option value=\"2018\">2018</option>\n                      <option value=\"2019\" selected>2019</option>\n                      <option value=\"2020\">2020</option>\n                      <option value=\"2021\">2021</option>\n                      <option value=\"2022\">2022</option>\n                      <option value=\"2023\">2023</option>\n                    </select>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"d-flex justify-content-start\">\n                      <input type=\"text\" class=\"form-control py-3 px-3 mr-2\" style=\"max-width:100px\" id=\"cvv\" placeholder=\"CVV\">\n                    </div>\n                  </div>\n                <div class=\"form-group\">\n                    <div class=\"d-flex justify-content-between\">\n                      <div class=\"\">\n                      </div>\n                      <div class=\"\"><button type=\"submit\" class=\"btn btn-theme\">Add Card</button>\n                      </div>\n                    </div>      \n                  </div>\n                </form>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/payment/cards/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsComponent = (function () {
    function CardsComponent() {
        this.isSmallWidth = false;
    }
    CardsComponent.prototype.toggleCard = function (e, id) {
        e.preventDefault();
        $("#pcard-edit-" + id).collapse("toggle");
    };
    CardsComponent.prototype.ngOnInit = function () {
        if (window.screen.width <= 768) {
            this.isSmallWidth = true;
        }
    };
    return CardsComponent;
}());
CardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cards',
        template: __webpack_require__("../../../../../src/app/payment/cards/cards.component.html"),
        styles: [__webpack_require__("../../../../../src/app/payment/cards/cards.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CardsComponent);

//# sourceMappingURL=cards.component.js.map

/***/ }),

/***/ "../../../../../src/app/payment/payments/payments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/payment/payments/payments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"px-3 py-5\">\n  <div class=\"page-heading\">\n    <h2 class=\"mb-5 font-weight-bold d-inline-block\">Payment</h2>\n    <button type=\"button\" class=\"btn btn-theme text-uppercase d-inline-block mb-3 float-right\" routerLink='/cards'>Manage Cards</button>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div id=\"payments\" class=\"pb-4\">\n    <h6 class=\"text-uppercase bold\">Payment History</h6>\n      <table class=\"table table-responsive table-bordered attachment-tbl\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\n      <tbody>\n        <tr>\n          <td class=\"semibold\"><mfDefaultSorter by=\"name\">Date</mfDefaultSorter> </td>\n          <td class=\"semibold text-left\">Card</td>\n          <td class=\"semibold text-left\">Subject</td>\n          <td class=\"semibold\">Amount</td>\n        </tr>\n        <tr [hidden]=\"!isLoading\">\n          <td colspan=\"4\" class=\"text-center\">\n            <div class=\"loader\" >Loading..</div>\n          </tr>\n        <tr *ngFor=\"let item of mf.data\">\n          <td>{{item.date}}</td>\n          <td class=\"semibold text-left\">{{item.card}}</td>\n          <td class=\"text-left\">{{item.subject}}</td>\n          <td class=\"semibold\">{{item.amount}}</td>\n        </tr>\n      </tbody>\n      <tfoot>\n    <tr >\n        <td colspan=\"4\" class=\"border-0 px-0 py-4\">\n            <mfBootstrapPaginator></mfBootstrapPaginator>\n        </td>\n    </tr>\n    </tfoot>\n      </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/payment/payments/payments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentsComponent = (function () {
    function PaymentsComponent(http) {
        this.http = http;
        this.rowsOnPage = 10;
        this.sortBy = "name";
        this.isLoading = false;
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.http.get("assets/payments.json")
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data.json();
                _this.isLoading = false;
            }, 1000);
        });
    };
    return PaymentsComponent;
}());
PaymentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payments',
        template: __webpack_require__("../../../../../src/app/payment/payments/payments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/payment/payments/payments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PaymentsComponent);

var _a;
//# sourceMappingURL=payments.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"px-3 py-5\">\n  <div class=\"page-heading\">\n    <h2 class=\"mb-5 bold d-inline-block\">Profile</h2>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"yellow-bg px-5\">\n        <h6 class=\"text-uppercase bold px-3 mb-0\">General Info</h6>\n  </div>\n  <div id=\"profile-gen\">\n      <form class=\"my-4 mx-contain\">\n          <div class=\"row form-group\">\n            <label class=\"col-sm-3 mt-sm-3 p-xs-0\">First Name</label>\n            <input type=\"text\" class=\"form-control py-3 px-3 col-sm-6 col-md-4\" id=\"firstname\" placeholder=\"First Name\">\n          </div>\n          <div class=\"row form-group\">\n            <label class=\"col-sm-3 mt-sm-3 p-xs-0\">Last Name</label>\n            <input type=\"text\" class=\"form-control py-3 px-3 col-sm-6 col-md-4\" id=\"lastname\" placeholder=\"Last Name\">\n          </div>\n          <div class=\"row form-group\">\n            <label class=\"col-sm-3 mt-sm-3 p-xs-0\">Email</label>\n            <input type=\"email\" class=\"form-control py-3 px-3 col-sm-6 col-md-4\" id=\"email\" placeholder=\"Email\">\n          </div>\n          <div class=\"row form-group\">\n            <label class=\"col-sm-3  mt-sm-3 p-xs-0\">Password</label>\n            <input type=\"password\" class=\"form-control py-3 px-3 col-sm-6 col-md-4\" id=\"password\" placeholder=\"Password\">\n          </div>\n        </form>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"yellow-bg px-5\">\n        <h6 class=\"text-uppercase bold px-3 mb-0\">Education</h6>\n  </div>\n  <div id=\"profile-edu\" class=\"pb-4\">\n      <form class=\"my-4 mx-contain\">\n          <div class=\"row form-group\">\n            <label class=\"col-sm-3  mt-sm-3 p-xs-0\">Select education level</label>\n            <select class=\"form-control col-sm-6\">\n                      <option value=\"2017\">primary education</option>\n                      <option value=\"2018\">secondary education</option>\n                      <option value=\"2019\" selected>higher secondary</option>\n            </select>\n          </div>\n          <div class=\"row form-group\">\n              <label class=\"col-sm-3 mt-sm-3 p-xs-0\">Specific about the education level</label>\n              <textarea type=\"text\" rows=\"6\" class=\"form-control py-3 px-3 col-sm-6\" id=\"specificlevel\" placeholder=\"Last Name\"></textarea>\n          </div>\n          <div class=\"row form-group\">\n              <label class=\"col-sm-3 mt-sm-3 p-xs-0\"></label>\n              <div class=\"col-sm-6 p-xs-0 p-0\">\n              <button type=\"button\" class=\"btn btn-theme pull-right\">Save</button>\n              </div> \n          </div>\n          <div class=\"mt-5 d-flex justify-content-end\">\n              \n          </div> \n        </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/generalinfo/generalinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/generalinfo/generalinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\n    <div class=\"container\">\n    <div class=\"signup-content mb-5 pb-4\">\n        <div class=\"page-heading\">\n            <h2 class=\"pt-4 pb-3 bold text-center\">Signup</h2>\n        </div>  \n<div id=\"generalinfo\" class=\"w-100\">\n          <div class=\"yellow-bg px-md-5 px-sm-3 ml-0\">\n              <h6 class=\"text-uppercase bold px-3 mb-0\">General Info</h6>\n          </div>\n          <div class=\"px-md-5 px-sm-3\">\n              <form class=\"px-3 my-4\">\n                  <div class=\"signup-form\">\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"firstname\" placeholder=\"First Name\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"lastname\" placeholder=\"Last Name\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6\">\n                          <input type=\"email\" class=\"form-control py-3 px-3\" id=\"email\" placeholder=\"Email\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"password\" class=\"form-control py-3 px-3\" id=\"password\" placeholder=\"Password\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"password\" class=\"form-control py-3 px-3\" id=\"conpassword\" placeholder=\"Confirm Password\">\n                      </div>\n                  </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <button type=\"button\" class=\"btn btn-theme-signup text-uppercase\"\n                          routerLink=\"/signup\">Back</button>\n                      </div>\n                      <div class=\"col-sm-6\" [hidden]=\"id == 2\">\n                          <button type=\"button\" class=\"btn btn-theme-signup  text-uppercase\"\n                          routerLink=\"/signup/student/education\">Skip</button>\n                          <button type=\"button\" class=\"btn btn-theme w-45 text-uppercase pull-right\"\n                          routerLink=\"/signup/student/education\">Next</button>\n                      </div>\n                      <div class=\"col-sm-6\" [hidden]=\"id == 1\">\n                          <button type=\"button\" class=\"btn btn-theme-signup  text-uppercase\"\n                          routerLink=\"/signup/teacher/experience\">Skip</button>\n                          <button type=\"button\" class=\"btn btn-theme w-45 text-uppercase pull-right\"\n                          routerLink=\"/signup/teacher/experience\">Next</button>\n                      </div>\n                  </div>\n              </form>\n          </div>\n        </div>\n    </div>\n       <ol class=\"carousel-indicators\">\n        <li ></li>\n        <li class=\"active\"></li>\n        <li class=\"active\"></li>\n      </ol>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/generalinfo/generalinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneralinfoComponent = (function () {
    function GeneralinfoComponent(route) {
        this.route = route;
    }
    GeneralinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
        });
    };
    return GeneralinfoComponent;
}());
GeneralinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-generalinfo',
        template: __webpack_require__("../../../../../src/app/signup/generalinfo/generalinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/generalinfo/generalinfo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], GeneralinfoComponent);

var _a;
//# sourceMappingURL=generalinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\r\n    <div class=\"container\">\r\n        <div class=\"signup-content mb-5 pb-5\">\r\n            <div class=\"page-heading\">\r\n                <h2 class=\"pt-4 pb-3 bold text-center\">Signup</h2>\r\n            </div>\r\n            <div class=\"px-md-5 px-sm-3\" id=\"profile-selector\">\r\n                <div class=\"row px-3\">\r\n                    <div class=\"col-sm-6 mb-4\">\r\n                        <div class=\"text-center pro-box py-2\" routerLink=\"/signup/general/1\">\r\n                            <img src=\"/assets/images/student-icon.png\" class=\"my-sm-2 my-md-4\"/>\r\n                            <p class=\"pt-3 tagline semibold\">Need help with assignment / project</p>   \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"text-center pro-box py-2\" routerLink=\"/signup/general/2\">\r\n                            <img src=\"/assets/images/teacher-icon.png\" class=\"my-sm-2 my-md-4\"/>\r\n                            <p class=\"pt-3 tagline semibold\">I would like to assist student</p>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n</div>\r\n\r\n        "

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
        $('.flogo').css("display", "none");
        $('#headerlink').removeClass('left-nav').removeClass('mr-auto').addClass('ml-auto');
        $('#headerbutton').removeClass('right-nav').addClass('mr-auto').addClass('left-nav').css("display", "none");
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/student/educationinfo/educationinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/student/educationinfo/educationinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\n    <div class=\"container\">\n    <div class=\"signup-content mb-5 pb-4\">\n        <div class=\"page-heading\">\n            <h2 class=\"pt-4 pb-3 bold text-center\">Signup</h2>\n        </div>  \n<div id=\"education\" class=\"w-100\">\n          <div class=\"yellow-bg px-md-5 px-sm-3 ml-0\">\n              <h6 class=\"text-uppercase bold px-3 mb-0\">Education</h6>\n          </div>\n          <div class=\"px-md-5 px-sm-3\">\n              <form class=\"px-3 my-4\">\n                  <div class=\"signup-form\">\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-12\">\n                          <select class=\"form-control\">\n                                    <option value=\"2017\">primary education</option>\n                                    <option value=\"2018\">secondary education</option>\n                                    <option value=\"2019\" selected>higher secondary</option>\n                          </select>\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-12\">\n                          <textarea type=\"text\" rows=\"8\" class=\"form-control py-3 px-3\" id=\"specification\" placeholder=\"Specific about the education level\"></textarea>\n                      </div>\n                  </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <button type=\"button\" class=\"btn btn-theme-signup text-uppercase\"\n                          routerLink=\"/signup/general/1\">Back</button>\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <button type=\"button\" class=\"btn btn-theme-signup  text-uppercase\"\n                          routerLink=\"/signup/student/payment\">Skip</button>\n                          <button type=\"button\" class=\"btn btn-theme w-45 text-uppercase pull-right\" \n                          routerLink=\"/signup/student/payment\">Next</button>\n                      </div>\n                  </div>\n              </form>\n          </div>\n          </div>\n    </div>\n        <ol class=\"carousel-indicators\">\n        <li ></li>\n        <li ></li>\n        <li class=\"active\"></li>\n      </ol>\n    </div>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/signup/student/educationinfo/educationinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationinfoComponent = (function () {
    function EducationinfoComponent() {
    }
    EducationinfoComponent.prototype.ngOnInit = function () {
    };
    return EducationinfoComponent;
}());
EducationinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-educationinfo',
        template: __webpack_require__("../../../../../src/app/signup/student/educationinfo/educationinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/student/educationinfo/educationinfo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EducationinfoComponent);

//# sourceMappingURL=educationinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/student/paymentinfo/paymentinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/student/paymentinfo/paymentinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\n    <div class=\"container\">\n    <div class=\"signup-content mb-5 pb-4\">\n        <div class=\"page-heading\">\n            <h2 class=\"pt-4 pb-3 bold text-center\">Signup</h2>\n        </div>  \n<div id=\"paymentinfo\" class=\"w-100\">\n          <div class=\"yellow-bg px-md-5 px-sm-3 ml-0\">\n              <h6 class=\"text-uppercase bold px-3 mb-0\">Payment Info</h6>\n          </div>\n          <div class=\"px-md-5 px-sm-3\">\n              <form class=\"px-3 my-4\">\n                  <div class=\"signup-form\">\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"firstname\" placeholder=\"First Name\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"lastname\" placeholder=\"Last Name\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"card\" placeholder=\"Card No\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                           <input type=\"text\" class=\"form-control py-3 px-3 col-sm-3 d-inline-block mb-xs-15\" id=\"cvv\" placeholder=\"CVV\">\n                           <input type=\"text\" class=\"form-control py-3 px-3 col-sm-8 d-inline-block pull-right\" id=\"date\" placeholder=\"Expiration Date(YY.MM.DD)\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"address1\" placeholder=\"Address 1\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"address2\" placeholder=\"Address 2\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"pcode\" placeholder=\"Postal Code\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"city\" placeholder=\"City\">\n                      </div>\n                  </div>\n                  </div>\n                  <div class=\"d-flex justify-content-between\">\n                      <div class=\"col-sm-6 mb-xs-15 pl-0\">\n                       <button type=\"button\" class=\"btn btn-theme-signup text-uppercase\"\n                          style=\"width:135px\" routerLink=\"/signup/student/education\">Back</button>\n                      </div>\n                       <div class=\"col-sm-6 pr-0\"> \n                        <button type=\"button\" style=\"width:135px\" class=\"btn btn-theme text-uppercase pull-right\" routerLink=\"/signup\">Complete</button>\n                       </div>\n                  </div>\n              </form>\n          </div>\n          </div>\n    </div>\n        <ol class=\"carousel-indicators\">\n        <li ></li>\n        <li ></li>\n        <li ></li>\n      </ol>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/student/paymentinfo/paymentinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentinfoComponent = (function () {
    function PaymentinfoComponent() {
    }
    PaymentinfoComponent.prototype.ngOnInit = function () {
    };
    return PaymentinfoComponent;
}());
PaymentinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paymentinfo',
        template: __webpack_require__("../../../../../src/app/signup/student/paymentinfo/paymentinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/student/paymentinfo/paymentinfo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaymentinfoComponent);

//# sourceMappingURL=paymentinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/student/student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/student/student.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\n    <div class=\"container\">\n    <div class=\"signup-content mb-5 pb-4\">\n        <div class=\"page-heading\">\n            <h2 class=\"pt-4 pb-3 bold text-center\">Signup</h2>\n        </div>\n<div id=\"signupuser\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <div id=\"generalinfo\" class=\"w-100\">\n          <div class=\"yellow-bg px-md-5 px-sm-3 ml-0\">\n              <h6 class=\"text-uppercase bold px-3 mb-0\">General Info</h6>\n          </div>\n          <div class=\"px-md-5 px-sm-3\">\n              <form class=\"px-3 my-4\">\n                  <div class=\"signup-form\">\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"firstname\" placeholder=\"First Name\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"lastname\" placeholder=\"Last Name\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6\">\n                          <input type=\"email\" class=\"form-control py-3 px-3\" id=\"email\" placeholder=\"Email\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"password\" class=\"form-control py-3 px-3\" id=\"password\" placeholder=\"Password\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"password\" class=\"form-control py-3 px-3\" id=\"conpassword\" placeholder=\"Confirm Password\">\n                      </div>\n                  </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <button type=\"button\" class=\"btn btn-theme-signup text-uppercase\"\n                          routerLink=\"/signup\">Back</button>\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <button type=\"button\" class=\"btn btn-theme-signup  text-uppercase\"\n                          href=\"#signupuser\" role=\"button\" data-slide=\"next\">Skip</button>\n                          <button type=\"button\" class=\"btn btn-theme w-45 text-uppercase pull-right\"\n                          href=\"#signupuser\" role=\"button\" data-slide=\"next\">Next</button>\n                      </div>\n                  </div>\n              </form>\n          </div>\n        </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div id=\"education\" class=\"w-100\">\n          <div class=\"yellow-bg px-md-5 px-sm-3 ml-0\">\n              <h6 class=\"text-uppercase bold px-3 mb-0\">Education</h6>\n          </div>\n          <div class=\"px-md-5 px-sm-3\">\n              <form class=\"px-3 my-4\">\n                  <div class=\"signup-form\">\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-12\">\n                          <select class=\"form-control\">\n                                    <option value=\"2017\">primary education</option>\n                                    <option value=\"2018\">secondary education</option>\n                                    <option value=\"2019\" selected>higher secondary</option>\n                          </select>\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-12\">\n                          <textarea type=\"text\" rows=\"8\" class=\"form-control py-3 px-3\" id=\"specification\" placeholder=\"Specific about the education level\"></textarea>\n                      </div>\n                  </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <button type=\"button\" class=\"btn btn-theme-signup text-uppercase\"\n                          href=\"#signupuser\" role=\"button\" data-slide=\"prev\">Back</button>\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <button type=\"button\" class=\"btn btn-theme-signup  text-uppercase\"\n                          href=\"#signupuser\" role=\"button\" data-slide=\"next\">Skip</button>\n                          <button type=\"button\" class=\"btn btn-theme w-45 text-uppercase pull-right\" \n                          href=\"#signupuser\" role=\"button\" data-slide=\"next\">Next</button>\n                      </div>\n                  </div>\n              </form>\n          </div>\n          </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div id=\"paymentinfo\" class=\"w-100\">\n          <div class=\"yellow-bg px-md-5 px-sm-3 ml-0\">\n              <h6 class=\"text-uppercase bold px-3 mb-0\">Payment Info</h6>\n          </div>\n          <div class=\"px-md-5 px-sm-3\">\n              <form class=\"px-3 my-4\">\n                  <div class=\"signup-form\">\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"firstname\" placeholder=\"First Name\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"lastname\" placeholder=\"Last Name\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"card\" placeholder=\"Card No\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                           <input type=\"text\" class=\"form-control py-3 px-3 col-sm-3 d-inline-block mb-xs-15\" id=\"cvv\" placeholder=\"CVV\">\n                           <input type=\"text\" class=\"form-control py-3 px-3 col-sm-8 d-inline-block pull-right\" id=\"date\" placeholder=\"Expiration Date(YY.MM.DD)\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"address1\" placeholder=\"Address 1\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"address2\" placeholder=\"Address 2\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"pcode\" placeholder=\"Postal Code\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"city\" placeholder=\"City\">\n                      </div>\n                  </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <button type=\"button\" class=\"btn btn-theme-signup text-uppercase\"\n                          href=\"#signupuser\" role=\"button\" data-slide=\"prev\">Back</button>\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <button type=\"button\" class=\"btn btn-theme w-45 text-uppercase pull-right\">Complete</button>\n                      </div>\n                  </div>\n              </form>\n          </div>\n          </div>\n    </div>\n  </div>\n</div>\n  </div>\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#signupuser\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#signupuser\" data-slide-to=\"1\"></li>\n    <li data-target=\"#signupuser\" data-slide-to=\"2\"></li>\n  </ol>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/student/student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentComponent = (function () {
    function StudentComponent() {
    }
    StudentComponent.prototype.ngOnInit = function () {
        $('.flogo').css("display", "none");
        $('#headerlink').removeClass('left-nav').removeClass('mr-auto').addClass('ml-auto');
        $('#headerbutton').removeClass('right-nav').addClass('mr-auto').addClass('left-nav').css("display", "none");
        $('.carousel').carousel({
            interval: false
        });
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-student',
        template: __webpack_require__("../../../../../src/app/signup/student/student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/student/student.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StudentComponent);

//# sourceMappingURL=student.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/teacher/depositinfo/depositinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/teacher/depositinfo/depositinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\n    <div class=\"container\">\n    <div class=\"signup-content mb-5 pb-4\">\n        <div class=\"page-heading\">\n            <h2 class=\"pt-4 pb-3 bold text-center\">Signup</h2>\n        </div>  \n<div id=\"paymentinfo\" class=\"w-100\">\n          <div class=\"px-md-5 px-sm-3\">\n              <form class=\"px-3 my-4\">\n                  <div class=\"signup-form\">\n                  <div class=\"row form-group\">\n                     <label class=\"col-sm-12 bold mb-4\">Direct deposit Info</label>\n                      <div class=\"col-sm-12 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3 border-blue mb-4\" id=\"firstname\" placeholder=\"Routing No\">\n                      </div>\n                      <div class=\"col-sm-12\">\n                          <input type=\"text\" class=\"form-control py-3 px-3 border-blue mb-4\" id=\"lastname\" placeholder=\"Account No\">\n                      </div>\n                  </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <button type=\"button\" class=\"btn btn-theme-signup text-uppercase\"\n                          routerLink=\"/signup/teacher/experience\">Back</button>\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <button type=\"button\" class=\"btn btn-theme-signup  text-uppercase\" routerLink=\"/signup\">Skip</button>\n                          <button type=\"button\" class=\"btn btn-theme w-45 text-uppercase pull-right\" routerLink=\"/signup\">Complete</button>\n                      </div>\n                  </div>\n              </form>\n          </div>\n          </div>\n    </div>\n        <ol class=\"carousel-indicators\">\n        <li ></li>\n        <li ></li>\n        <li ></li>\n      </ol>\n    </div>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/signup/teacher/depositinfo/depositinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DepositinfoComponent = (function () {
    function DepositinfoComponent() {
    }
    DepositinfoComponent.prototype.ngOnInit = function () {
    };
    return DepositinfoComponent;
}());
DepositinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-depositinfo',
        template: __webpack_require__("../../../../../src/app/signup/teacher/depositinfo/depositinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/teacher/depositinfo/depositinfo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DepositinfoComponent);

//# sourceMappingURL=depositinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/teacher/experience/experience.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file{\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n.resume-in{\r\n    z-index: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/teacher/experience/experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\n    <div class=\"container\">\n    <div class=\"signup-content mb-5 pb-4\">\n        <div class=\"page-heading\">\n            <h2 class=\"pt-4 pb-3 bold text-center\">Signup</h2>\n        </div>  \n<div id=\"experince\" class=\"w-100\">\n          <div class=\"yellow-bg px-md-5 px-sm-3 ml-0\">\n              <h6 class=\"text-uppercase bold px-3 mb-0\">Experience</h6>\n          </div>\n          <div class=\"\">\n              <form class=\"my-4\">\n                  <div class=\"signup-form\">\n                    <div class=\"exp-block px-md-5 px-sm-3 pt-4 pb-3 mb-5\">\n                      <div class=\"row form-group px-3 \">\n                          <div class=\"col-sm-6 mb-xs-15\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"expertise\" placeholder=\"Area of expertise\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"area\" placeholder=\"Specific Area\">\n                          </div>\n                      </div>\n                      <div class=\"row form-group px-3\">\n                          <div class=\"col-sm-6\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"yearsexp\" placeholder=\"Years of experience\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                          </div>\n                      </div>\n                    </div>\n                    <div class=\"exp-block px-md-5 px-sm-3 pt-4 pb-3 mb-5\">\n                      <div class=\"row form-group px-3\">\n                          <div class=\"col-sm-6 mb-xs-15\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"expertise\" placeholder=\"Area of expertise\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"area\" placeholder=\"Specific Area\">\n                          </div>\n                      </div>\n                      <div class=\"row form-group px-3\">\n                          <div class=\"col-sm-6 mb-xs-15\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"yearsexp\" placeholder=\"Years of experience\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                              <button type=\"button\" class=\"btn btn-yl  text-uppercase\">Remove Skill</button>\n                          </div>\n                      </div>\n                    </div>\n                    <div class=\"exp-block px-md-5 px-sm-3 pt-4 pb-3 mb-5\">\n                      <div class=\"row form-group px-3 \">\n                          <div class=\"col-sm-6 mb-xs-15\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"expertise\" placeholder=\"Area of expertise\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"area\" placeholder=\"Specific Area\">\n                          </div>\n                      </div>\n                      <div class=\"row form-group px-3\">\n                          <div class=\"col-sm-6 mb-xs-15\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"yearsexp\" placeholder=\"Years of experience\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <button type=\"button\" class=\"btn btn-yl  text-uppercase\">Remove Skill</button>\n                          <button type=\"button\" class=\"btn btn-yl colored w-45 text-uppercase pull-right\">Add Skill</button>\n                          </div>\n                      </div>\n                    </div>\n                    <div class=\"px-md-5 px-sm-3 mb-5\">\n                    <div class=\"row form-group px-3 mb-5\">\n                          <div class=\"col-sm-6\">\n                              <input type=\"file\" (change)=\"changeFile($event)\" class=\"file form-control py-3 px-3\" style=\"opacity:0\" id=\"yearsexp\" placeholder=\"Years of experience\" />\n                              <button type=\"button\" class=\"btn btn-yl colored resume-upload w-45 text-uppercase pull-right\">Upload</button>\n                              <div class=\"resume-in\"><span [hidden]=\"fileName != null ? true : false\">Upload resume</span>\n                                <span [hidden]=\"fileName != null ? false : true\">{{fileName}}</span>\n                              </div>\n                            </div>\n                          <div class=\"col-sm-6\">\n                          </div>\n                      </div>\n                    </div>\n                  </div>\n                <div class=\"px-md-5 px-sm-3\">\n                  <div class=\"row form-group px-3 \">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <button type=\"button\" class=\"btn btn-theme-signup text-uppercase\"\n                          routerLink=\"/signup/general/2\">Back</button>\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <button type=\"button\" class=\"btn btn-theme-signup  text-uppercase\"\n                          routerLink=\"/signup/teacher/deposit\">Skip</button>\n                          <button type=\"button\" class=\"btn btn-theme w-45 text-uppercase pull-right\" \n                          routerLink=\"/signup/teacher/deposit\">Next</button>\n                      </div>\n                  </div>\n                </div>\n              </form>\n          </div>\n          </div>\n    </div>\n        <ol class=\"carousel-indicators\">\n        <li ></li>\n        <li ></li>\n        <li class=\"active\"></li>\n      </ol>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/teacher/experience/experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    return ExperienceComponent;
}());
ExperienceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-experience',
        template: __webpack_require__("../../../../../src/app/signup/teacher/experience/experience.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/teacher/experience/experience.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ExperienceComponent);

//# sourceMappingURL=experience.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/teacher/teacher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/teacher/teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\n    <div class=\"container\">\n    <div class=\"signup-content mb-5 pb-4\">\n        <div class=\"page-heading\">\n            <h2 class=\"pt-4 pb-3 bold text-center\">Signup</h2>\n        </div>\n<div id=\"signupuser\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <div id=\"generalinfo\" class=\"w-100\">\n          <div class=\"yellow-bg px-md-5 px-sm-3 ml-0\">\n              <h6 class=\"text-uppercase bold px-3 mb-0\">General Info</h6>\n          </div>\n          <div class=\"px-md-5 px-sm-3\">\n              <form class=\"px-3 my-4\">\n                  <div class=\"signup-form\">\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"firstname\" placeholder=\"First Name\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"text\" class=\"form-control py-3 px-3\" id=\"lastname\" placeholder=\"Last Name\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6\">\n                          <input type=\"email\" class=\"form-control py-3 px-3\" id=\"email\" placeholder=\"Email\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                      </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <input type=\"password\" class=\"form-control py-3 px-3\" id=\"password\" placeholder=\"Password\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <input type=\"password\" class=\"form-control py-3 px-3\" id=\"conpassword\" placeholder=\"Confirm Password\">\n                      </div>\n                  </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <button type=\"button\" class=\"btn btn-theme-signup text-uppercase\"\n                          routerLink=\"/signup\">Back</button>\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <button type=\"button\" class=\"btn btn-theme-signup  text-uppercase\"\n                          href=\"#signupuser\" role=\"button\" data-slide=\"next\">Skip</button>\n                          <button type=\"button\" class=\"btn btn-theme w-45 text-uppercase pull-right\"\n                          href=\"#signupuser\" role=\"button\" data-slide=\"next\">Next</button>\n                      </div>\n                  </div>\n              </form>\n          </div>\n        </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div id=\"experince\" class=\"w-100\">\n          <div class=\"yellow-bg px-md-5 px-sm-3 ml-0\">\n              <h6 class=\"text-uppercase bold px-3 mb-0\">Experience</h6>\n          </div>\n          <div class=\"\">\n              <form class=\"my-4\">\n                  <div class=\"signup-form\">\n                    <div class=\"exp-block px-md-5 px-sm-3 pt-4 pb-3 mb-5\">\n                      <div class=\"row form-group px-3 \">\n                          <div class=\"col-sm-6 mb-xs-15\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"expertise\" placeholder=\"Area of expertise\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"area\" placeholder=\"Specific Area\">\n                          </div>\n                      </div>\n                      <div class=\"row form-group px-3\">\n                          <div class=\"col-sm-6\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"yearsexp\" placeholder=\"Years of experience\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                          </div>\n                      </div>\n                    </div>\n                    <div class=\"exp-block px-md-5 px-sm-3 pt-4 pb-3 mb-5\">\n                      <div class=\"row form-group px-3\">\n                          <div class=\"col-sm-6 mb-xs-15\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"expertise\" placeholder=\"Area of expertise\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"area\" placeholder=\"Specific Area\">\n                          </div>\n                      </div>\n                      <div class=\"row form-group px-3\">\n                          <div class=\"col-sm-6 mb-xs-15\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"yearsexp\" placeholder=\"Years of experience\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                              <button type=\"button\" class=\"btn btn-yl  text-uppercase\">Remove Skill</button>\n                          </div>\n                      </div>\n                    </div>\n                    <div class=\"exp-block px-md-5 px-sm-3 pt-4 pb-3 mb-5\">\n                      <div class=\"row form-group px-3 \">\n                          <div class=\"col-sm-6 mb-xs-15\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"expertise\" placeholder=\"Area of expertise\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"area\" placeholder=\"Specific Area\">\n                          </div>\n                      </div>\n                      <div class=\"row form-group px-3\">\n                          <div class=\"col-sm-6 mb-xs-15\">\n                              <input type=\"text\" class=\"form-control py-3 px-3\" id=\"yearsexp\" placeholder=\"Years of experience\">\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <button type=\"button\" class=\"btn btn-yl  text-uppercase\">Remove Skill</button>\n                          <button type=\"button\" class=\"btn btn-yl colored w-45 text-uppercase pull-right\">Add Skill</button>\n                          </div>\n                      </div>\n                    </div>\n                    <div class=\"px-md-5 px-sm-3 mb-5\">\n                    <div class=\"row form-group px-3 mb-5\">\n                          <div class=\"col-sm-6\">\n                              <input type=\"file\" (change)=\"changeFile($event)\" class=\"form-control py-3 px-3\" style=\"opacity:0\" id=\"yearsexp\" placeholder=\"Years of experience\" />\n                              <button type=\"button\" class=\"btn btn-yl colored resume-upload w-45 text-uppercase pull-right\">Upload</button>\n                              <div class=\"resume-in\"><span [hidden]=\"fileName != null ? true : false\">Upload resume</span>\n                                <span [hidden]=\"fileName != null ? false : true\">{{fileName}}</span>\n                              </div>\n                            </div>\n                          <div class=\"col-sm-6\">\n                          </div>\n                      </div>\n                    </div>\n                  </div>\n                <div class=\"px-md-5 px-sm-3\">\n                  <div class=\"row form-group px-3 \">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <button type=\"button\" class=\"btn btn-theme-signup text-uppercase\"\n                          href=\"#signupuser\" role=\"button\" data-slide=\"prev\">Back</button>\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <button type=\"button\" class=\"btn btn-theme-signup  text-uppercase\"\n                          href=\"#signupuser\" role=\"button\" data-slide=\"next\">Skip</button>\n                          <button type=\"button\" class=\"btn btn-theme w-45 text-uppercase pull-right\" \n                          href=\"#signupuser\" role=\"button\" data-slide=\"next\">Next</button>\n                      </div>\n                  </div>\n                </div>\n              </form>\n          </div>\n          </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div id=\"paymentinfo\" class=\"w-100\">\n          <div class=\"px-md-5 px-sm-3\">\n              <form class=\"px-3 my-4\">\n                  <div class=\"signup-form\">\n                  <div class=\"row form-group\">\n                     <label class=\"col-sm-12 bold mb-4\">Direct deposit Info</label>\n                      <div class=\"col-sm-12 mb-xs-15\">\n                          <input type=\"text\" class=\"form-control py-3 px-3 border-blue mb-4\" id=\"firstname\" placeholder=\"Routing No\">\n                      </div>\n                      <div class=\"col-sm-12\">\n                          <input type=\"text\" class=\"form-control py-3 px-3 border-blue mb-4\" id=\"lastname\" placeholder=\"Account No\">\n                      </div>\n                  </div>\n                  </div>\n                  <div class=\"row form-group\">\n                      <div class=\"col-sm-6 mb-xs-15\">\n                          <button type=\"button\" class=\"btn btn-theme-signup text-uppercase\"\n                          href=\"#signupuser\" role=\"button\" data-slide=\"prev\">Back</button>\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <button type=\"button\" class=\"btn btn-theme-signup  text-uppercase\">Skip</button>\n                          <button type=\"button\" class=\"btn btn-theme w-45 text-uppercase pull-right\">Complete</button>\n                      </div>\n                  </div>\n              </form>\n          </div>\n          </div>\n    </div>\n  </div>\n</div>\n  </div>\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#signupuser\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#signupuser\" data-slide-to=\"1\"></li>\n    <li data-target=\"#signupuser\" data-slide-to=\"2\"></li>\n  </ol>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/teacher/teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeacherComponent = (function () {
    function TeacherComponent() {
    }
    TeacherComponent.prototype.changeFile = function (fileInput) {
        this.fileName = fileInput.target.files[0].name;
    };
    TeacherComponent.prototype.ngOnInit = function () {
        $('.flogo').css("display", "none");
        $('#headerlink').removeClass('left-nav').removeClass('mr-auto').addClass('ml-auto');
        $('#headerbutton').removeClass('right-nav').addClass('mr-auto').addClass('left-nav').css("display", "none");
        $('.carousel').carousel({
            interval: false
        });
    };
    return TeacherComponent;
}());
TeacherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-teacher',
        template: __webpack_require__("../../../../../src/app/signup/teacher/teacher.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/teacher/teacher.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TeacherComponent);

//# sourceMappingURL=teacher.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map