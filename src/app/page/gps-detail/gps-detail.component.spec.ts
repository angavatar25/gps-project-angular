import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsDetailComponent } from './gps-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';

describe('GpsDetailComponent', () => {
  let component: GpsDetailComponent;
  let fixture: ComponentFixture<GpsDetailComponent>;
  let compiled: HTMLElement;
  const params = { queryParams: { deviceId: 'D-1567', location: 'L1' }}
  const mockQueryParams = new BehaviorSubject<any>(params);
  let route: ActivatedRouteSnapshot;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GpsDetailComponent,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRouteSnapshot,
          useValue: {
            queryParams: of(mockQueryParams),
          },
        },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpsDetailComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    route = new ActivatedRouteSnapshot();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
