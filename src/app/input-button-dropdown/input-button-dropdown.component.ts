import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-button-dropdown',
  templateUrl: './input-button-dropdown.component.html',
  styleUrls: ['./input-button-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputButtonDropdownComponent),
      multi: true
    }
  ]
})
export class InputButtonDropdownComponent implements OnInit, ControlValueAccessor {

  @Input() options: Array<{ id: number, value: string }> = [];
  private _value: string;
  private propagateChange = (_: any) => {};

  get value(): string {
    return this._value;
  }

  set value(v: string) {
    this._value = v;
    this.propagateChange(this._value);
  }

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  public setValue(value: { id: number, value: string }): void {
    console.log('set', value);
    this._value = value.value;
    this.propagateChange(this._value);
  }

}

// import { Component, OnInit, Input, forwardRef } from '@angular/core';

// @Component({
//   selector: 'app-input-button-dropdown',
//   templateUrl: './input-button-dropdown.component.html',
//   styleUrls: ['./input-button-dropdown.component.scss']
// })
// export class InputButtonDropdownComponent implements OnInit {

//   @Input() options: Array<{ id: number, value: string }> = [];
//   private value: string;

//   constructor() { }

//   ngOnInit() {
//   }

//   public setValue(value: { id: number, value: string }): void {
//     this.value = value.value;
//     console.log('set', this.value);
//   }

// }
