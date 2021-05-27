import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPartnersCardComponent } from './block-partners-card.component';

describe('BlockPartnersCardComponent', () => {
  let component: BlockPartnersCardComponent;
  let fixture: ComponentFixture<BlockPartnersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockPartnersCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockPartnersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
