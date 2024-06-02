import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface TGPSData {
  deviceId: string;
  deviceType: string;
  timestamp: string;
  location: string;
}

@Component({
  selector: 'app-gps-card',
  standalone: true,
  imports: [],
  templateUrl: './gps-card.component.html',
  styleUrl: './gps-card.component.scss'
})
export class GpsCardComponent {
  @Input() gpsData?: TGPSData;

  constructor(private router: Router) {}

  handleToGpsDetailPage(deviceId: string | null | undefined, location: string | null | undefined) {
    if (deviceId) {
      this.router.navigate(['/gps-detail'], { queryParams: { deviceId, location }})
    }
  }
}
