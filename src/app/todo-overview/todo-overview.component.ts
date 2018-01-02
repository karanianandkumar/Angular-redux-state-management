import { REMOVE_ALL_TODOS } from './../actions';
import { IAppState } from './../store';
import { Component, OnInit } from '@angular/core';
import { NgRedux,select} from '@angular-redux/store'


@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
