import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSchemeWorkTextComponent } from './block-scheme-work-text.component';

describe('BlockSchemeWorkTextComponent', () => {
  let component: BlockSchemeWorkTextComponent;
  let fixture: ComponentFixture<BlockSchemeWorkTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockSchemeWorkTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSchemeWorkTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
