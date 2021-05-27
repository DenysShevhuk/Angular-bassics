import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockConvenientlyTextComponent } from './block-conveniently-text.component';

describe('BlockConvenientlyTextComponent', () => {
  let component: BlockConvenientlyTextComponent;
  let fixture: ComponentFixture<BlockConvenientlyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockConvenientlyTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockConvenientlyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
