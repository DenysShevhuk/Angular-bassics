import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMaterialsComponent } from './export-materials.component';

describe('ExportMaterialsComponent', () => {
  let component: ExportMaterialsComponent;
  let fixture: ComponentFixture<ExportMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
