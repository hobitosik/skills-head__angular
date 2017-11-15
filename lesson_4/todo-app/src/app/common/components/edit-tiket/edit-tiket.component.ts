import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITiket } from '../../services/todo-items.service';
import { TodoItemService } from '../../services/todo-item.service';

@Component({
  selector: 'app-edit-tiket',
  templateUrl: './edit-tiket.component.html',
  styleUrls: ['./edit-tiket.component.css'],
  providers: [TodoItemService]
})
export class EditTiketComponent implements OnInit{

  @Input()
  public inputTiket: ITiket;

  @Output()
  public onSaveSuccess = new EventEmitter();

  private editTiket: ITiket;

  constructor(
    private todoitem: TodoItemService
  ) {
  }

  ngOnInit() {
    this.editTiket = this.todoitem.getTiket(this.inputTiket.id);
  }

  public saveFormValues(editTiket: ITiket, titleTiket: string, descriptionTiket: string, statusTiket: string) {
    this.todoitem.setTiket(editTiket, titleTiket, descriptionTiket, statusTiket);
    this.onSaveSuccess.emit();
  }

}
