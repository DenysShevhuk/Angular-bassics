import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInput2Component } from './section-input2.component';

describe('SectionInput2Component', () => {
  let component: SectionInput2Component;
  let fixture: ComponentFixture<SectionInput2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInput2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
