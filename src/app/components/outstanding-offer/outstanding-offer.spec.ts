import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingOffer } from './outstanding-offer';

describe('OutstandingOffer', () => {
  let component: OutstandingOffer;
  let fixture: ComponentFixture<OutstandingOffer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutstandingOffer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingOffer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
