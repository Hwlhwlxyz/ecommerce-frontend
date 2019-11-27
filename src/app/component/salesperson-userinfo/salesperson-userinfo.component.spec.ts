import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonUserinfoComponent } from './salesperson-userinfo.component';

describe('SalespersonUserinfoComponent', () => {
  let component: SalespersonUserinfoComponent;
  let fixture: ComponentFixture<SalespersonUserinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalespersonUserinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespersonUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
