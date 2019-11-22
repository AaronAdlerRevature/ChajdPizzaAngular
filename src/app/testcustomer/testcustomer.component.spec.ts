import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcustomerComponent } from './testcustomer.component';

describe('TestcustomerComponent', () => {
  let component: TestcustomerComponent;
  let fixture: ComponentFixture<TestcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
