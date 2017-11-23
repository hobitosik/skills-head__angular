import { Component, OnInit, Input } from '@angular/core';

import { ITiket } from '../../../../interfaces/ITiket.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  public task: ITiket;

  constructor() { }

  ngOnInit() {
  }

}
