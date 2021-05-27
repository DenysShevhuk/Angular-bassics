import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockConvenientlyComponent } from './block-conveniently.component';

describe('BlockConvenientlyComponent', () => {
  let component: BlockConvenientlyComponent;
  let fixture: ComponentFixture<BlockConvenientlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockConvenientlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockConvenientlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
