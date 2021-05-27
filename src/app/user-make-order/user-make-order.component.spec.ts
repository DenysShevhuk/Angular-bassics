import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMakeOrderComponent } from './user-make-order.component';

describe('UserMakeOrderComponent', () => {
  let component: UserMakeOrderComponent;
  let fixture: ComponentFixture<UserMakeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMakeOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMakeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
