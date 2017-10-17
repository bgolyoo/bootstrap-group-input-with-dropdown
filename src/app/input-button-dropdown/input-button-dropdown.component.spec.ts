import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonDropdownComponent } from './input-button-dropdown.component';

describe('InputButtonDropdownComponent', () => {
  let component: InputButtonDropdownComponent;
  let fixture: ComponentFixture<InputButtonDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputButtonDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputButtonDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
