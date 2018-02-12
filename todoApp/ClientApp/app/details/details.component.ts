import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    getTodo(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.todoService.getTodo(id)
            .subscribe(todo => this.todo = todo)
    }

    @Input() todo: Todo;

    constructor(private route: ActivatedRoute,
        private todoService: TodoService,
        private location: Location) { }

  ngOnInit() {
      this.getTodo();
  }

  goBack(): void {
      this.location.back();
  }

}
