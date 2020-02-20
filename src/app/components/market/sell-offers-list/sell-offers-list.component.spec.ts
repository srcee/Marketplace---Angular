import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOffersListComponent } from './sell-offers-list.component';

describe('SellOffersListComponent', () => {
  let component: SellOffersListComponent;
  let fixture: ComponentFixture<SellOffersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellOffersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
