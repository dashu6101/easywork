import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentAddeditComponent } from './assignment-addedit.component';

describe('AssignmentAddeditComponent', () => {
  let component: AssignmentAddeditComponent;
  let fixture: ComponentFixture<AssignmentAddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentAddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
