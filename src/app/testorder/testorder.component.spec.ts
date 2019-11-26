import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestorderComponent } from './testorder.component';

xdescribe('TestorderComponent', () => {
  let component: TestorderComponent;
  let fixture: ComponentFixture<TestorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
