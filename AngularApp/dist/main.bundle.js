webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var review_component_1 = __webpack_require__("./src/app/review/review.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var write_component_1 = __webpack_require__("./src/app/write/write.component.ts");
var routes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'new', component: new_component_1.NewComponent },
    { path: 'reviews/:id', component: review_component_1.ReviewComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: 'write/:id', component: write_component_1.WriteComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h1>\n  Let's eat\n</h1>\n \n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var review_component_1 = __webpack_require__("./src/app/review/review.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var write_component_1 = __webpack_require__("./src/app/write/write.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                new_component_1.NewComponent,
                review_component_1.ReviewComponent,
                edit_component_1.EditComponent,
                write_component_1.WriteComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "th {\n    color: white;\n    background-color: gray;\n}\n\n#one{\n    background-color: purple;\n}\n\n#two{\n    background-color: yellow;\n}\n\n#three{\n    background-color: red;\n}\n\n#four{\n    background-color: green;\n}\n\ntable {\n    border: solid 1px black;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<button id = \"four\" [routerLink]= \"['new']\">New Restaurant</button>\n\n<table>\n  <tr>\n    <th>Restaurant</th>\n    <th>Cuisine</th> \n    <th>Actions Available</th>\n  </tr>\n  <tr>\n  <tr *ngFor = \"let rest of rests\">\n    <td>{{rest.name}}</td>\n    <td>{{rest.cuisine}}</td>\n    <td>\n      <button id= \"one\" [routerLink]= \"['reviews', rest._id]\">Read Reviews</button>\n      <button id= \"two\" [routerLink]= \"['edit', rest._id]\">Update</button>\n      <button id=\"three\" (click)= \"deleteRest(rest._id)\">Delete</button>\n\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getRests();
    };
    DashboardComponent.prototype.getRests = function () {
        var _this = this;
        var observable = this._httpService.getRests();
        observable.subscribe(function (data) {
            console.log("Got our rests!", data);
            _this.rests = data['data'];
            console.log(_this.rests);
        });
    };
    DashboardComponent.prototype.deleteRest = function (id) {
        var _this = this;
        var observable = this._httpService.deleteRest(id);
        observable.subscribe(function (data) {
            console.log("Deleting Rest", data);
            _this.getRests();
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Edit a restaurant</h4>\n<div>\n    <form (submit)=\"check()\">\n        Restaurant name:\n        <br>\n        <input type=\"text\" [(ngModel)]=\"rest.name\" name=\"rest.name\">\n        <br>\n        Cuisine:\n        <br>\n        <input type=\"text\" [(ngModel)]=\"rest.cuisine\" name=\"rest.cuisine\">\n        <br>\n        <button id = \"CancelButton\"[routerLink]=\"['']\">Cancel</button>\n        <input id = \"AddRestButton\" type=\"submit\" value=\"Edit\">\n      </form>\n\n</div>\n<p *ngFor=\"let messages of array\">{{messages}}</p>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.array = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        this.getRest(this.id);
    };
    EditComponent.prototype.getRest = function (id) {
        var _this = this;
        var observable = this._httpService.getRest(this._route.params['value'].id);
        observable.subscribe(function (data) {
            console.log("Got our rest", data);
            _this.rest = data;
            console.log(_this.rest);
        });
    };
    EditComponent.prototype.check = function () {
        var _this = this;
        console.log("in check() edit.component:", this.rest);
        var observable = this._httpService.editRest(this.rest, this.rest._id);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['errors']) {
                _this.array = [];
                for (var error in data['errors']) {
                    _this.array.push(data['errors'][error].message);
                    console.log("PARSING data[errors] : val : " + error);
                    console.log(_this.array);
                }
            }
            else {
                console.log("save response from server: ", data['status']);
                _this._router.navigate(['']);
            }
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute, router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.addRest = function (rest) {
        console.log("in service addRest: ", rest);
        return this._http.post('/newRest', rest);
    };
    HttpService.prototype.addReview = function (review, id) {
        console.log("in service addReview: ", review, id);
        return this._http.post("/rest/" + id, review);
    };
    HttpService.prototype.getRests = function () {
        console.log("in service getRests");
        return this._http.get("/rests");
    };
    HttpService.prototype.getRest = function (id) {
        console.log("in service getRest");
        return this._http.get("/rest/" + id);
    };
    HttpService.prototype.getReviews = function (id) {
        console.log('in service getReviews');
        return this._http.get("/reviews/" + id);
    };
    HttpService.prototype.deleteRest = function (id) {
        console.log("in service deleteRest");
        return this._http.delete("/rest/" + id);
    };
    HttpService.prototype.editRest = function (rest, id) {
        console.log("in service editRest");
        return this._http.put("/rest/" + id, rest);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/new/new.component.css":
/***/ (function(module, exports) {

module.exports = "div {\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 20px;\n    width: 200px;\n}\n#AddRestButton{\n    background: lightskyblue;\n    color: white;\n\n}\n#CancelButton{\n    background: lavender;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Register a restaurant</h4>\n<div>\n    <form (submit)=\"check()\">\n        Restaurant name:\n        <br>\n        <input type=\"text\" [(ngModel)]=\"rest.name\" name=\"rest.name\">\n        <br>\n        Cuisine:\n        <br>\n        <input type=\"text\" [(ngModel)]=\"rest.cuisine\" name=\"rest.cuisine\">\n        <br>\n        <button id = \"CancelButton\"[routerLink]=\"['']\">Cancel</button>\n        <input id = \"AddRestButton\" type=\"submit\" value=\"Register\">\n      </form>\n\n</div>\n<p *ngFor=\"let messages of array\">{{messages}}</p>\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.array = [];
        this.rest = {
            name: '',
            cuisine: ''
        };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.check = function () {
        var _this = this;
        console.log("in check() new.component:", this.rest);
        var observable = this._httpService.addRest(this.rest);
        observable.subscribe(function (data) {
            if (data['errors']) {
                // console.log(data['errors']);
                _this.array = [];
                // this.array.push(data['errors']['name']['message']);
                // this.array.push(data['errors']['cuisine']['message']);
                // console.log(data['errors']['errors']['name'])
                console.log(data);
                for (var error in data['errors']) {
                    _this.array.push(data['errors'][error].message);
                    console.log("PARSING data[errors] : val : " + error);
                    console.log(_this.array);
                }
            }
            else {
                console.log("save response from server: ", data['status']);
                _this._router.navigate(['']);
            }
        });
        this.rest = { name: '', cuisine: '' };
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            template: __webpack_require__("./src/app/new/new.component.html"),
            styles: [__webpack_require__("./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute, router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;


/***/ }),

/***/ "./src/app/review/review.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Reviews for {{rest.name}}</h4>\n<button id= \"one\" [routerLink]= \"['/write', rest._id]\">New Review</button>\n<table>\n        <tr>\n          <th>Name</th>\n          <th>Stars</th> \n          <th>Description</th>\n        </tr>\n        <tr>\n        <tr *ngFor = \"let review of rest.reviews\">\n          <td>{{review.name}}</td>\n          <td>{{review.stars}}</td>\n          <td>{{review.review}}</td>\n        </tr>\n      </table>\n\n\n"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        this.getRest(this.id);
    };
    ReviewComponent.prototype.getRest = function (id) {
        var _this = this;
        var observable = this._httpService.getRest(this._route.params['value'].id);
        observable.subscribe(function (data) {
            console.log("Got our rest", data);
            _this.rest = data;
            console.log("!!!!!!!!!!!" + _this.rest.name);
            console.log("$$$$$$$$$$$$" + _this.rest.reviews[0]['name']);
            console.log("$$$$$$$$$$$$" + _this.rest.reviews[0]['stars']);
            console.log("$$$$$$$$$$$$" + _this.rest.reviews[0]['review']);
        });
    };
    ReviewComponent = __decorate([
        core_1.Component({
            selector: 'app-review',
            template: __webpack_require__("./src/app/review/review.component.html"),
            styles: [__webpack_require__("./src/app/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute, router_1.Router])
    ], ReviewComponent);
    return ReviewComponent;
}());
exports.ReviewComponent = ReviewComponent;


/***/ }),

/***/ "./src/app/write/write.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/write/write.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Write a review for {{rest.name}}</h4>\n<div>\n    <form (submit)=\"check()\">\n        Your name:\n        <br>\n        <input type=\"text\" [(ngModel)]=\"review.name\" name=\"name\">\n        <br>\n        Stars:\n        <br>\n        \n        <select [(ngModel)]=\"review.stars\" name = \"stars\">\n            <option value=\"1\">1</option>\n            <option value=2>2</option>\n            <option value=3>3</option>\n            <option value=4>4</option>\n            <option value=5>5</option>\n          </select>\n          <br>\n          Your review:\n        <input type=\"text\" [(ngModel)]=\"review.review\" name=\"review\">\n        <br>\n        <button id = \"CancelButton\"[routerLink]=\"['']\">Cancel</button>\n        <input id = \"AddReviewButton\" type=\"submit\" value=\"Submit\">\n      </form>\n\n</div>\n<p *ngFor=\"let messages of array\">{{messages}}</p>\n"

/***/ }),

/***/ "./src/app/write/write.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var WriteComponent = /** @class */ (function () {
    function WriteComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.array = [];
        this.review = {
            name: '',
            review: '',
            stars: Number
        };
    }
    WriteComponent.prototype.ngOnInit = function () {
        this.getRest(this.id);
    };
    WriteComponent.prototype.check = function () {
        var _this = this;
        console.log("in check() write.component:", this.review);
        var observable = this._httpService.addReview(this.review, this.rest._id);
        observable.subscribe(function (data) {
            if (data['errors']) {
                console.log(data['errors']);
                _this.array = [];
                _this.array.push(data['errors']['errors']['name']['message']);
                _this.array.push(data['errors']['errors']['review']['message']);
                _this.array.push(data['errors']['errors']['stars']['message']);
                console.log(data['errors']['errors']['name']);
                //console.log(data)
                // for (let name in data['errors']){
                //   this.array.push(data['errors'].name.message)
                //   console.log("PARSING data[errors] : val : " + name);
                //   console.log(this.array);
                // }
                // console.log(data['errors']['name']);
            }
            else {
                console.log("save response from server: ", data['status']);
                _this._router.navigate(['reviews/' + _this.rest._id]);
            }
        });
    };
    WriteComponent.prototype.getRest = function (id) {
        var _this = this;
        var observable = this._httpService.getRest(this._route.params['value'].id);
        observable.subscribe(function (data) {
            console.log("Got our rest", data);
            _this.rest = data;
        });
    };
    WriteComponent = __decorate([
        core_1.Component({
            selector: 'app-write',
            template: __webpack_require__("./src/app/write/write.component.html"),
            styles: [__webpack_require__("./src/app/write/write.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute, router_1.Router])
    ], WriteComponent);
    return WriteComponent;
}());
exports.WriteComponent = WriteComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map