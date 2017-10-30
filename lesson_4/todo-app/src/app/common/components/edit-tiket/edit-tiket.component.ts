import { Component, OnInit, Input } from '@angular/core';
import { ITiket } from '../../services/todo-items.service';
import { TodoItemService } from '../../services/todo-item.service';

@Component({
  selector: 'app-edit-tiket',
  templateUrl: './edit-tiket.component.html',
  styleUrls: ['./edit-tiket.component.css'],
  providers: [TodoItemService]
})
export class EditTiketComponent implements OnInit {

  @Input()
  public editTiket: ITiket;

  private tiketChanged: ITiket;

  constructor(
    private todoitem: TodoItemService
  ) {
    // this.getTodoItem();
  }

  ngOnInit() {
  }

  public getTodoItem(id: string) {
    this.todoitem.getTiket(id);
  }

  public saveFormValues(editTiket: ITiket, titleTiket, descriptionTiket, statusTiket) {
    // console.log('до изменения', editTiket);

    editTiket.title = titleTiket.value;
    editTiket.description = descriptionTiket.value;
    editTiket.status = statusTiket.value;

    // console.log('после изменения', editTiket);

    this.todoitem.setTiket(editTiket.id, editTiket);
  }

}
