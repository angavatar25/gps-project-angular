import { Component } from '@angular/core';
import { GpsCardComponent } from '../../component/gps-card/gps-card.component';
import { GpsData } from '../../dummy/GPSData';

@Component({
  selector: 'app-gps-summary',
  standalone: true,
  imports: [GpsCardComponent],
  templateUrl: './gps-summary.component.html',
  styleUrl: './gps-summary.component.scss'
})
export class GpsSummaryComponent {
  gpsDataCollection = GpsData;
}
