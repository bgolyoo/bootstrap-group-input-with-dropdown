import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnChanges {

  @Input() options: Array<{ id: number, value: string }> = [];
  @Input() limit = 10;
  @Input() inputId: string;
  @Input() search: string;
  @Output() selected: EventEmitter<{ id: number, value: string }> = new EventEmitter();
  @Output() open: EventEmitter<boolean> = new EventEmitter();
  public isOpen = false;
  public selectedItem = 0;

  constructor() { }

  ngOnChanges(changes?: SimpleChanges): void {
    this.options = this.options.slice(0);
    this.selectedItem = -1;
    if (this.options && this.options.length &&
      changes['search'].previousValue !== changes['search'].currentValue &&
      this.options.map(option => option.value.replace(/\s+/g, ' ').toLowerCase()).filter(option => option.indexOf(changes['search'].currentValue.replace(/\s+/g, ' ').toLowerCase()) !== -1).length &&
      this.options.map(option => option.value.replace(/\s+/g, ' ').toLowerCase()).indexOf(changes['search'].currentValue.replace(/\s+/g, ' ').toLowerCase()) === -1
    ) {
      this.openDropDown();
    } else {
      this.closeDropDown();
    }
  }

  public onSelect(selected: { id: number, value: string }): void {
    if (selected) {
      this.selected.emit(selected);
      this.closeDropDown();
    }
    this.selectedItem = 0;
  }

  public onClickOutside(): void {
    if (this.options && this.options.length) {
      this.closeDropDown();
    }
  }

  public onClickInInput(): void {
    if (this.options && this.options.length) {
      this.openDropDown();
    }
  }

  public onEnterTyped(): void {
    if (this.selectedItem > -1) {
      this.onSelect(this.options[this.selectedItem]);
    } else {
      this.closeDropDown();
    }
  }

  public onEscapeTyped(): void {
    this.closeDropDown();
  }

  public onTabTyped(): void {
    this.closeDropDown();
  }

  public onMoveUp(): void {
    if (this.options[this.selectedItem - 1]) {
      --this.selectedItem;
    } else {
      this.selectedItem = this.options.length - 1;
    }
  }

  public onMoveDown(): void {
    if (this.options[this.selectedItem + 1]) {
      ++this.selectedItem;
    } else {
      this.selectedItem = 0;
    }
  }

  public onMouseEnter(i: number): void {
    this.selectedItem = i;
  }

  private openDropDown(): void {
    this.isOpen = true;
    this.open.emit(true);
  }

  private closeDropDown(): void {
    this.isOpen = false;
    this.open.emit(false);
    this.selectedItem = 0;
  }

}
