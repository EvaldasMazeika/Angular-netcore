import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';


let routes = [
    { path: '', component: TodosComponent },
    { path: 'detail/:id', component: DetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DetailsComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes, {
          useHash: true,
          enableTracing: false
      })
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }


