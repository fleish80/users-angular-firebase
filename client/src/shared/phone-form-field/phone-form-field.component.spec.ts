import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFormFieldComponent } from './phone-form-field.component';

describe('PhoneFormFieldComponent', () => {
  let component: PhoneFormFieldComponent;
  let fixture: ComponentFixture<PhoneFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
