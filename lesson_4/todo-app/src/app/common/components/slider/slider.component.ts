import { Component, OnInit, ElementRef, Renderer2, ViewChildren, QueryList, Inject, InjectionToken } from '@angular/core';

import { SliderItemComponent } from '../slider-item/slider-item.component';
import { EditTiketComponent } from '../edit-tiket/edit-tiket.component';

import { ITiket, TodoItemsService } from '../../services/todo-items.service';
import { TodoItemService } from '../../services/todo-item.service';

export const statusToken = new InjectionToken<string>('STATUS');

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @ViewChildren('tiketItemComponent')
  private editTiketComponent: QueryList<EditTiketComponent>;

  public leftCSS = 0;
  public todoTikets: ITiket[];
  public editForms: ITiket[] = [];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private todoitems: TodoItemsService,
    @Inject(statusToken) public status: any
  ) {
    this.loadTikets();
    // console.log(this);
  }

  ngOnInit() {
    // console.log(this);
  }

  public onTiketEdit(tiket: ITiket) {

    const OPEN_EDIT_TIKETS = 3;

    if (this.editForms.length === OPEN_EDIT_TIKETS) {
      this.editForms.splice(0, 1);
    }

    this.editForms.push(tiket);

    // this.editTiketComponent.forEach((item) => {
    //   console.log(item);
    //   item.editTiket();
    // });
  }

  public loadTikets() {
    if (this.todoitems !== null) {
      this.todoTikets = this.todoitems.getTodos();
    }
    console.log(this.todoTikets);
  }

  public scrolLeft(slider) {
    if (this.leftCSS !== 0) {
      this.leftCSS = this.leftCSS - 33;
      this.renderer.setStyle(slider, 'left', '-' + this.leftCSS + '%');
    }
  }

  public scrolRight(slider) {
    if (this.leftCSS !== (this.todoTikets.length - 3) * 33) {
      this.leftCSS = this.leftCSS + 33;
      this.renderer.setStyle(slider, 'left', '-' + this.leftCSS + '%');
    }
  }

}
