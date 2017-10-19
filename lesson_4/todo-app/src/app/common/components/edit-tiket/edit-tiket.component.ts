import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITiket } from '../../services/todo-items.service';
import { TodoItemService } from '../../services/todo-item.service';

@Component({
  selector: 'app-edit-tiket',
  templateUrl: './edit-tiket.component.html',
  styleUrls: ['./edit-tiket.component.css'],
  providers: [TodoItemService]
  // exportAs: 'editTiketComponent'
})
export class EditTiketComponent implements OnInit {

  // @Output()
  // private onTiketEdit = new EventEmitter();

  constructor(
    private todoitem: TodoItemService
  ) {
    // this.getTodoItem();
  }

  ngOnInit() {
  }

  public getTodoItem(id: string) {
    this.todoitem.getTiket(id);
    // console.log('getTodoItem');
  }

  public editTiket() {
    // this.onTiketEdit.emit(this);
    console.log('edit tiket');
  }

}
