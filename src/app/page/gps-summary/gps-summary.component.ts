import { Component } from '@angular/core';
import { GpsCardComponent } from '../../component/gps-card/gps-card.component';
import { GpsData } from '../../dummy/GPSData';
import { FormsModule } from '@angular/forms'
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { TGpsData } from '../../interface/gps';

@Component({
  selector: 'app-gps-summary',
  standalone: true,
  imports: [GpsCardComponent, FormsModule, NgClass, CommonModule],
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
  searchKeyword = '';
  optionsAvailable = [{ value: 'deviceId', label: 'Device ID' }, { value: 'deviceType', label: 'Device Type' }]
  selectedOption = this.optionsAvailable[0];
  sortLocationAsc = true;

  constructor(private router: Router) {
    this.totalPages = this.generateNumbers(Math.ceil(this.gpsDataCollection.length / this.itemsPerPage));
    this.start = (this.currentPage - 1) * this.itemsPerPage;
    this.end = this.start + this.itemsPerPage;
    this.gpsDataCollection = GpsData.slice(this.start, this.end);
  }

  displayPage(page: number, gpsData: TGpsData[]) {
    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.start = start;
    this.end = end;
    this.currentPage = page;

    if (!this.searchKeyword || this.searchKeyword === '') {
      this.gpsDataCollection = GpsData;  
    } else {
      this.gpsDataCollection = gpsData;
    }
  }

  inputValue() {
    const value = this.selectedOption.value;
    let filteredDevice = [];

    if (value === 'deviceType') {
      filteredDevice = GpsData.filter((gps) => gps.deviceType.toLowerCase().includes(this.searchKeyword.toLowerCase()));
    } else {
      filteredDevice = GpsData.filter((gps) => gps.deviceId.includes(this.searchKeyword));
    }

    this.displayPage(1, filteredDevice)
    this.totalPages = this.generateNumbers(Math.ceil(filteredDevice.length / this.itemsPerPage));
  }

  sortByLocation() {
    this.sortLocationAsc = !this.sortLocationAsc;
    const sortLocation = GpsData.sort((a, b) => this.sortLocationAsc ? a.location.localeCompare(b.location) : b.location.localeCompare(a.location));

    this.displayPage(1 ,sortLocation);
  }

  generateNumbers(count: number): number[] {
    return Array.from({length: count}, (_, i) => i + 1);
  }

  logOut() {
    this.router.navigate(['/']);
  }
}
