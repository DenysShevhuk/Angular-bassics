import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPartnersComponent } from './block-partners.component';

describe('BlockPartnersComponent', () => {
  let component: BlockPartnersComponent;
  let fixture: ComponentFixture<BlockPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
