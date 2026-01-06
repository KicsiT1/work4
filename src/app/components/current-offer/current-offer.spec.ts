import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOffer } from './current-offer';

describe('CurrentOffer', () => {
  let component: CurrentOffer;
  let fixture: ComponentFixture<CurrentOffer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentOffer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentOffer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
