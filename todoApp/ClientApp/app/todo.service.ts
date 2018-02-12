import { Observable } from "rxjs/Observable";
import { Todo } from "./todo";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";


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


}
