import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    todo: Todo = new Todo();

    constructor(private location: Location, private todoService: TodoService) { }

    submitted = false;

  ngOnInit() {
  }

  goBack(): void {
      this.location.back();
  }

  onSubmit() {
      this.submitted = true;
      this.todoService.addTodo(this.todo)
          .subscribe();

      this.todo = new Todo();
  }



}
