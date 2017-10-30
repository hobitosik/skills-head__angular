import { Directive, OnInit, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { IUser } from '../services/user-service.service';

@Directive({
  selector: '[appPictureSizes]'
})
export class PictureSizesDirective implements OnInit {

  @Input()
  public imgs: Array<string>;

  public picturePath: string;
  private index: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // this.setPicturePath();
  }

  private randomInteger(min: number, max: number): number {
    let rand: number = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  ngOnInit() {
    console.log(this);
  }

  @HostListener('click')
  setPicturePath() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.getPicturePath());
  }

  getPicturePath(): string {
    this.index = this.randomInteger(0, 2);
    this.picturePath = this.imgs[this.index];
    // console.log(this.picturePath);
    return this.picturePath;
  }

}
