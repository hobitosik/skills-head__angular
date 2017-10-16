import { Component, OnInit, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { SliderItemComponent } from '../slider-item/slider-item.component';
import { EditTiketComponent } from '../edit-tiket/edit-tiket.component';
import { ITiket, TodoItemsService } from '../../services/todo-items.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  // @ViewChildren('tiketComponent')
  // private editTiketComponent: QueryList<EditTiketComponent>;

  public leftCSS = 0;
  public todoTikets: Promise<ITiket[] | void>;
  public sltikets: ITiket[];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private todoitems: TodoItemsService
  ) {
    this.loadTikets();
  }

  ngOnInit() {
    // console.log(this);
  }

  // public onTiketEdit() {
  //   this.editTiketComponent.forEach((item) => {
  //     // item.editTiket();
  //   });
  // }

  public editTiketS() {
    console.log('editTiketS');
  }

  public loadTikets() {
    this.todoTikets = this.todoitems.getTodos()
      .then((tikets) => {
        console.log(tikets);
        this.sltikets = tikets;
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  public scrolLeft(slider) {
    if (this.leftCSS !== 0) {
      this.leftCSS = this.leftCSS - 33;
      this.renderer.setStyle(slider, 'left', '-' + this.leftCSS + '%');
    }
  }

  public scrolRight(slider) {
    if (this.leftCSS !== (this.sltikets.length - 3) * 33) {
      this.leftCSS = this.leftCSS + 33;
      this.renderer.setStyle(slider, 'left', '-' + this.leftCSS + '%');
    }
  }

}
