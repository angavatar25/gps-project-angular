import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsDetailComponent } from './gps-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GpsDetailComponent', () => {
  let component: GpsDetailComponent;
  let fixture: ComponentFixture<GpsDetailComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GpsDetailComponent,
        RouterTestingModule.withRoutes([
          { path: 'gps-detail', component: GpsDetailComponent },
        ])
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpsDetailComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should contain Device ID, Device Type, Time and Device Location', () => {
    const getDeviceId = new URLSearchParams(window.location.search);
    const deviceId = getDeviceId.get('deviceId');
    const deviceLocation = getDeviceId.get('location');

    if (deviceId && deviceLocation) {
      fixture.detectChanges();  // Trigger change detection
      const deviceId = compiled.querySelector('#deviceId');
      const deviceType = compiled.querySelector('#deviceType');
      const deviceTime = compiled.querySelector('#deviceTime');
      const deviceLoc = compiled.querySelector('#deviceLoc');
      expect(deviceId?.textContent).toContain('Device ID');
      expect(deviceType?.textContent).toContain('Device Type');
      expect(deviceTime?.textContent).toContain('Time');
      expect(deviceLoc?.textContent).toContain('Device Location');
    }
  });
});
