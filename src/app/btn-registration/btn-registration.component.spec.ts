import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRegistrationComponent } from './btn-registration.component';

describe('BtnRegistrationComponent', () => {
  let component: BtnRegistrationComponent;
  let fixture: ComponentFixture<BtnRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
