import { Directive, OnInit, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective implements OnInit {

  @Output()
  public onConfirm = new EventEmitter();

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('click', ['$event'])
  public ShowMessage($event) {
    const result: boolean = window.confirm('Load Users?');
    if (result) {
      this.onConfirm.emit();
    }
  }

  ngOnInit() {
    console.log(this);
  }

}
