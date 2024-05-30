import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsCardComponent } from './gps-card.component';

describe('GpsCardComponent', () => {
  let component: GpsCardComponent;
  let fixture: ComponentFixture<GpsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
