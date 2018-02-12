webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'apps';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: [__webpack_require__("./ClientApp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todos_todos_component__ = __webpack_require__("./ClientApp/app/todos/todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_service__ = __webpack_require__("./ClientApp/app/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__details_details_component__ = __webpack_require__("./ClientApp/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_create_component__ = __webpack_require__("./ClientApp/app/create/create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__todos_todos_component__["a" /* TodosComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_8__details_details_component__["a" /* DetailsComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_9__create_create_component__["a" /* CreateComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todos_todos_component__["a" /* TodosComponent */],
                __WEBPACK_IMPORTED_MODULE_8__details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__create_create_component__["a" /* CreateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes, {
                    useHash: true,
                    enableTracing: false
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__todo_service__["a" /* TodoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6 offset-md-3\"><h1 class=\"display-3 text-center\">Sukurkite</h1></div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <button class=\"btn btn-primary\" (click)=\"goBack()\">Atgal i sarasa</button>\r\n\r\n    <div [hidden]=\"submitted\">\r\n        <div class=\"col-md-6 offset-md-3\">\r\n            <form (ngSubmit)=\"onSubmit()\" #Create=\"ngForm\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">Pavadinimas</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"emailHelp\" placeholder=\"Pavadinimas\" required [(ngModel)]=\"todo.name\" name=\"name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"description\">Aprasymas</label>\r\n                    <textarea class=\"form-control\" id=\"description\" rows=\"3\" [(ngModel)]=\"todo.description\" name=\"description\" required></textarea>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!Create.form.valid\">Prideti</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <div [hidden]=\"!submitted\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 offset-md-3 text-center\">\r\n                <h2 class=\"display-3\">jus sukurete irasa...</h2>\r\n                <button class=\"btn btn-primary\" (click)=\"submitted=false\">Sukurti nauja</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo__ = __webpack_require__("./ClientApp/app/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_service__ = __webpack_require__("./ClientApp/app/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = /** @class */ (function () {
    function CreateComponent(location, todoService) {
        this.location = location;
        this.todoService = todoService;
        this.todo = new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]();
        this.submitted = false;
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.goBack = function () {
        this.location.back();
    };
    CreateComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.todoService.addTodo(this.todo)
            .subscribe();
        this.todo = new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]();
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create',
            template: __webpack_require__("./ClientApp/app/create/create.component.html"),
            styles: [__webpack_require__("./ClientApp/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__todo_service__["a" /* TodoService */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./ClientApp/app/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6 offset-md-3\"><h1 class=\"display-3 text-center\">Uzduotis</h1></div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <button class=\"btn btn-primary\" (click)=\"goBack()\">Atgal i sarasa</button>\r\n    <div *ngIf=\"todo\">\r\n        <h2>{{ todo.name | uppercase }} Details</h2>\r\n        <div><span>id: </span>{{todo.id}}</div>\r\n        <div>\r\n            <label>\r\n                name:\r\n                <input [(ngModel)]=\"todo.name\" placeholder=\"name\">\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("./ClientApp/app/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_service__ = __webpack_require__("./ClientApp/app/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, todoService, location) {
        this.route = route;
        this.todoService = todoService;
        this.location = location;
    }
    DetailsComponent.prototype.getTodo = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.todoService.getTodo(id)
            .subscribe(function (todo) { return _this.todo = todo; });
    };
    DetailsComponent.prototype.ngOnInit = function () {
        this.getTodo();
    };
    DetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */])
    ], DetailsComponent.prototype, "todo", void 0);
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__("./ClientApp/app/details/details.component.html"),
            styles: [__webpack_require__("./ClientApp/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.todosUrl = 'api/todo';
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get(this.todosUrl);
    };
    TodoService.prototype.getTodo = function (id) {
        return this.http.get(this.todosUrl + '/' + id);
    };
    TodoService.prototype.addTodo = function (todo) {
        return this.http.post(this.todosUrl, todo, httpOptions);
    };
    TodoService.prototype.deleteTodo = function (id) {
        var url = this.todosUrl + "/" + id;
        return this.http.delete(url, httpOptions);
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./ClientApp/app/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "./ClientApp/app/todos/todos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/todos/todos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6 offset-md-3\"><h1 class=\"display-3 text-center\">Uzduotys</h1></div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <a class=\"btn btn-primary\" routerLink=\"/create\" role=\"button\">Prideti uzduoti</a>\r\n    <table class=\"table table-striped table-dark\">\r\n        <thead>\r\n            <tr>\r\n                <th scope=\"col\">Pavadinimas</th>\r\n                <th scope=\"col\">Sukurta</th>\r\n                <th scope=\"col\">Atnaujinta</th>\r\n                <th scope=\"col\">Atlikta</th>\r\n                <th scope=\"col\">Pasirinkimai</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let todo of todos\">\r\n                <td>{{ todo.name }}</td>\r\n                <td>{{ todo.createdDate }}</td>\r\n                <td>{{ todo.modifiedDate }}</td>\r\n                <td>{{ todo.isCompleted }}</td>\r\n                <td><a class=\"btn btn-info\" routerLink=\"/detail/{{todo.id}}\" role=\"button\">Perziureti</a> <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteTodo(todo.id)\">Istrinti</button></td>\r\n                \r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/todos/todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("./ClientApp/app/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosComponent = /** @class */ (function () {
    function TodosComponent(todoService) {
        this.todoService = todoService;
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    TodosComponent.prototype.getHeroes = function () {
        var _this = this;
        this.todoService.getTodos()
            .subscribe(function (todos) { return _this.todos = todos; });
    };
    TodosComponent.prototype.deleteTodo = function (id) {
        this.todoService.deleteTodo(id).subscribe();
        var index = this.todos.find(function (x) { return x.id == id; });
        var z = this.todos.indexOf(index);
        if (z > -1) {
            this.todos.splice(z, 1);
        }
    };
    TodosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todos',
            template: __webpack_require__("./ClientApp/app/todos/todos.component.html"),
            styles: [__webpack_require__("./ClientApp/app/todos/todos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./ClientApp/boot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("./ClientApp/app/app.module.ts");


var bootApplication = function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
};
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().destroy();
    });
}
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-hot-middleware/client.js?path=%2Fdist%2F__webpack_hmr");
module.exports = __webpack_require__("./ClientApp/boot.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map