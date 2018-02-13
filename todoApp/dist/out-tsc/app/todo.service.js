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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var httpOptions = {
    headers: new http_1.HttpHeaders({
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
    TodoService.prototype.updateTodo = function (todo) {
        var url = this.todosUrl + "/" + todo.id;
        return this.http.put(url, todo, httpOptions);
    };
    TodoService.prototype.CompleteTodo = function (todo) {
        var url = this.todosUrl + "/" + todo.id;
        return this.http.put(url, todo, httpOptions);
    };
    TodoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map