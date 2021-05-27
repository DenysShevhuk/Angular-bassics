import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSchemeWorkComponent } from './block-scheme-work.component';

describe('BlockSchemeWorkComponent', () => {
  let component: BlockSchemeWorkComponent;
  let fixture: ComponentFixture<BlockSchemeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockSchemeWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSchemeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
