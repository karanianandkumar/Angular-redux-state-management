import { ITodo } from './../todo';
import { ADD_TODO,REMOVE_TODO,TOGGLE_TODO } from './../actions';
import { IAppState } from './../store';
import { NgRedux,select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @select() todos;

  model:ITodo={
    id:0,
    description:"",
    responsible:"",
    priority:"",
    isCompleted:false
  }
  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit(){
    console.dir(this.model);
    this.ngRedux.dispatch({type:ADD_TODO,todo:this.model})
  }

  toggleTodo(todo){
    this.ngRedux.dispatch({type:TOGGLE_TODO,id:todo.id});
  }

  removeTodo(todo){
    this.ngRedux.dispatch({type:REMOVE_TODO,id:todo.id});
  }
}
