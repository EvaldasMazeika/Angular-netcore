import { Observable } from "rxjs/Observable";
import { Todo } from "./todo";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


@Injectable()
export class TodoService {
    private todosUrl = 'api/todo';

    constructor(private http: HttpClient) { }

    getTodos(): Observable<Todo[]> {

        return this.http.get<Todo[]>(this.todosUrl);

    }

    getTodo(id: number): Observable<Todo> {
        return this.http.get<Todo>(this.todosUrl + '/' + id);
    }

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
    }

    deleteTodo(id: number): Observable<{}> {
        const url = `${this.todosUrl}/${id}`;
        return this.http.delete(url, httpOptions);
    }

    updateTodo(todo: Todo): Observable<{}> {
        const url = `${this.todosUrl}/${todo.id}`;
        return this.http.put(url, todo, httpOptions);
    }
    CompleteTodo(todo: Todo): Observable<{}> {
        const url = `${this.todosUrl}/${todo.id}`;
        return this.http.put(url, todo, httpOptions);
    }

}
