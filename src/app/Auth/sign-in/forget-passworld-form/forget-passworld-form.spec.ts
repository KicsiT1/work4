import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassworldForm } from './forget-passworld-form';

describe('ForgetPassworldForm', () => {
  let component: ForgetPassworldForm;
  let fixture: ComponentFixture<ForgetPassworldForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPassworldForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPassworldForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
