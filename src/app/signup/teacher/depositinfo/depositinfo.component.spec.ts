import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositinfoComponent } from './depositinfo.component';

describe('DepositinfoComponent', () => {
  let component: DepositinfoComponent;
  let fixture: ComponentFixture<DepositinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
