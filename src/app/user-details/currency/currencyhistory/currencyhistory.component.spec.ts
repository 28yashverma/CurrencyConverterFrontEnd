import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyhistoryComponent } from './currencyhistory.component';

describe('CurrencyhistoryComponent', () => {
  let component: CurrencyhistoryComponent;
  let fixture: ComponentFixture<CurrencyhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
