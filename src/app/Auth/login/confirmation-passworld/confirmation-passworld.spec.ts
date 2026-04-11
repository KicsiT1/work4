import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationPassworld } from './confirmation-passworld';

describe('ConfirmationPassworld', () => {
  let component: ConfirmationPassworld;
  let fixture: ComponentFixture<ConfirmationPassworld>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationPassworld]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationPassworld);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
