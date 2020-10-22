import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

import {TodoService} from '../../services/todo.service'
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //set dynamic classes

  setClasses(){
    let classes = {
      todo: true,
      'is-completed' :this.todo.completed,
    }

    return classes;
  }

  onToggle(todo)
  {
    //toggle in ui
    console.log('toggle ' + todo.title);
    todo.completed = !todo.completed;
    //toggle in server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo)
  {
    this.deleteTodo.emit(todo);
  }

}
