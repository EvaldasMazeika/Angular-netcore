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
var core_1 = require("@angular/core");
var todo_1 = require("../todo");
var router_1 = require("@angular/router");
var todo_service_1 = require("../todo.service");
var common_1 = require("@angular/common");
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
        core_1.Input(),
        __metadata("design:type", todo_1.Todo)
    ], DetailsComponent.prototype, "todo", void 0);
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            todo_service_1.TodoService,
            common_1.Location])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map