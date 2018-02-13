import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

    todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
      this.getTodos();
  }
  getTodos(): void {
      this.todoService.getTodos()
          .subscribe(todos => this.todos = todos);
  }

  deleteTodo(id: number): void {
      this.todoService.deleteTodo(id).subscribe();
      var index = this.todos.find(x => x.id == id);
      var z = this.todos.indexOf(index);
      if (z > -1) {
          this.todos.splice(z, 1);
      }
    
  }

}
