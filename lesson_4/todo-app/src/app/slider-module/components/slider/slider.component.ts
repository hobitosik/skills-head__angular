import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public items: Array<number> = [1, 2, 3, 4, 5];
  public leftCSS = 0;
  public rightCSS: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  public scrolLeft(slider) {
    if (this.leftCSS !== 0) {
      this.leftCSS = this.leftCSS - 33;
      this.renderer.setStyle(slider, 'left', '-' + this.leftCSS + '%');
    }
    console.log(slider);
  }

  public scrolRight(slider) {
    if (this.leftCSS !== (this.items.length - 3) * 33) {
      this.leftCSS = this.leftCSS + 33;
      this.renderer.setStyle(slider, 'left', '-' + this.leftCSS + '%');
    }
    console.log(slider);
  }

}
