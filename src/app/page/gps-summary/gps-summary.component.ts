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
  start = 0
  end = 0
  currentPage: number = 1
  itemsPerPage: number = 5
  gpsDataCollection = GpsData;
  totalPages: number[] = [];

  constructor() {
    this.totalPages = this.generateNumbers(Math.ceil(this.gpsDataCollection.length / this.itemsPerPage));
    this.start = (this.currentPage - 1) * this.itemsPerPage;
    this.end = this.start + this.itemsPerPage;
    this.gpsDataCollection = GpsData.slice(this.start, this.end);
  }
  

  displayPage(page: number) {
    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.gpsDataCollection = GpsData.slice(start, end);
  }

  generateNumbers(count: number): number[] {
    return Array.from({length: count}, (_, i) => i + 1);
  }

  renderPaginationStyle(page: number) {
    if (page === this.currentPage) return 'bg-blue-500 text-white';

    return 'bg-transparent text-black';
  }
}
