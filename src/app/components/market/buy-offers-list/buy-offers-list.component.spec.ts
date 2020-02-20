import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyOffersListComponent } from './buy-offers-list.component';

describe('OffersListComponent', () => {
  let component: BuyOffersListComponent;
  let fixture: ComponentFixture<BuyOffersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyOffersListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyOffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
