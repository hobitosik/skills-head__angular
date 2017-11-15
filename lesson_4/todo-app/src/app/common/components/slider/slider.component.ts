import { Component, OnInit, AfterContentInit, ElementRef, Renderer2, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterContentInit {

  @ContentChildren('tiketItemComponent', {read: ElementRef})
  private items: QueryList<ElementRef>;

  public leftCSS = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // console.log(this);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this);
  }

  public scrolLeft(slider) {
    if (this.leftCSS !== 0) {
      this.leftCSS = this.leftCSS - 33;
      this.renderer.setStyle(slider, 'left', '-' + this.leftCSS + '%');
    }
  }

  public scrolRight(slider) {
    if (this.leftCSS !== (this.items.length - 3) * 33) {
      this.leftCSS = this.leftCSS + 33;
      this.renderer.setStyle(slider, 'left', '-' + this.leftCSS + '%');
    }
  }

}
