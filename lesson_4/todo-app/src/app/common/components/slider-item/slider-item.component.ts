import { Component, OnInit, Input } from '@angular/core';
import { ITiket } from '../../services/todo-items.service';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.css']
})
export class SliderItemComponent implements OnInit {

  @Input()
  public tiket: ITiket;

  constructor() { }

  ngOnInit() {
  }

}
