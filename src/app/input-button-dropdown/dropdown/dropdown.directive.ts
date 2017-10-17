import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

export enum EKeyboardCode {
  ArrowDown = 40, Escape = 27, ArrowUp = 38, Enter = 13, Tab = 9
}

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @Input() inputId: string;
  @Output() clickedOutside: EventEmitter<any> = new EventEmitter();
  @Output() clickedInInput: EventEmitter<any> = new EventEmitter();
  @Output() moveDown: EventEmitter<any> = new EventEmitter();
  @Output() moveUp: EventEmitter<any> = new EventEmitter();
  @Output() escape: EventEmitter<any> = new EventEmitter();
  @Output() enter: EventEmitter<any> = new EventEmitter();
  @Output() tab: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  @HostListener('document:mousedown', ['$event.target'])
  public onMouseDown(targetElement) {
    const input = document.getElementById(this.inputId);
    if (input && input.contains(targetElement)) {
      this.clickedInInput.emit();
    }
    if (!this.el.nativeElement.contains(targetElement) && input && !input.contains(targetElement)) {
      this.clickedOutside.emit();
    }
  }

  @HostListener('document:keyup', ['$event'])
  public onKeyUp(event: KeyboardEvent) {
    if (event.keyCode === EKeyboardCode.Enter) {
      this.enter.emit();
    } else if (event.keyCode === EKeyboardCode.ArrowDown) {
      this.moveDown.emit();
    } else if (event.keyCode === EKeyboardCode.ArrowUp) {
      this.moveUp.emit();
    } else if (event.keyCode === EKeyboardCode.Escape) {
      this.escape.emit();
    } else if (event.keyCode === EKeyboardCode.Tab) {
      this.tab.emit();
    }
  }

}
