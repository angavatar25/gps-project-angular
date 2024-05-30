import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsSummaryComponent } from './gps-summary.component';

describe('GpsSummaryComponent', () => {
  let component: GpsSummaryComponent;
  let fixture: ComponentFixture<GpsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpsSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
