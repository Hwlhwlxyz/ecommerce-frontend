import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonNavComponent } from './salesperson-nav.component';

describe('SalespersonNavComponent', () => {
  let component: SalespersonNavComponent;
  let fixture: ComponentFixture<SalespersonNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalespersonNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespersonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
