import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCustomerPostComponent } from './test-customer-post.component';

describe('TestCustomerPostComponent', () => {
  let component: TestCustomerPostComponent;
  let fixture: ComponentFixture<TestCustomerPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCustomerPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCustomerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
