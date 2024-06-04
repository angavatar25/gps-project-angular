import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsSummaryComponent } from './gps-summary.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPageComponent } from '../login-page/login-page.component';
import { GpsDetailComponent } from '../gps-detail/gps-detail.component';

describe('GpsSummaryComponent', () => {
  let component: GpsSummaryComponent;
  let fixture: ComponentFixture<GpsSummaryComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GpsSummaryComponent,
        RouterTestingModule.withRoutes([
          { path: '', component: LoginPageComponent },
          { path: 'gps-detail', component: GpsDetailComponent },
        ])
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpsSummaryComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to login page page when view logout is clicked', async () => {
    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.nativeElement.querySelector('#logoutButton')
    button.click();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(navigateSpy).toHaveBeenCalledWith(['/']);
    });
  })

  it('should redirect to gps detail page when view detail button is clicked', async () => {
    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.nativeElement.querySelector('#viewDetail')
    button.click();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(navigateSpy).toHaveBeenCalledWith(['/gps-detail'], { queryParams: { deviceId: 'D-1567', location: 'L1' }});
    });
  })
});
