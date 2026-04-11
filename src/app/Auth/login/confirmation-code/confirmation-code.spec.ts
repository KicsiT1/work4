import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCode } from './confirmation-code';

describe('ConfirmationCode', () => {
  let component: ConfirmationCode;
  let fixture: ComponentFixture<ConfirmationCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
