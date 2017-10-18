import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITiket } from '../../services/todo-items.service';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.css']
})
export class SliderItemComponent implements OnInit {

  @Input()
  public tiket: ITiket;

  // @Output()
  // public onTiketEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
