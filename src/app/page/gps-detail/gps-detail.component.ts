import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GpsData } from '../../dummy/GPSData';
import { TGpsData } from '../../interface/gps';
@Component({
  selector: 'app-gps-detail',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './gps-detail.component.html',
  styleUrl: './gps-detail.component.scss'
})

export class GpsDetailComponent {
  private getDeviceId = new URLSearchParams(window.location.search);
  private gpsFiltered = GpsData.filter(data => data.deviceId === this.deviceId);
  private countedLocation = this.newGpsDataMap(this.gpsFiltered, 'location')
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartType: ChartType = 'pie';
  public deviceId = this.getDeviceId.get('deviceId');
  public deviceLocation = this.getDeviceId.get('location');
  deviceFound = this.gpsFiltered.find((gps) => gps.deviceId === this.deviceId && gps.location === this.deviceLocation) || null;

  public pieChartData: ChartData <'bar'> = {
    labels: this.extractLabel(),
    datasets: [{
      data: this.extractData(),
    }],
  };

  public newGpsDataMap(arr: TGpsData[], key: keyof TGpsData) {
    const counts: Record<string, number> = {};
    arr.forEach(obj => {
      const value = obj[key];
      if (typeof value === 'string') {
        counts[value] = (counts[value] || 0) + 1;
      }
    });

    return counts;
  }

  private extractData(): number[] {
    const arrayValue: any[] = [];
    const lengthOfData = this.gpsFiltered.length;

    Object.values(this.countedLocation).forEach((value)=> {
      const percentage = Math.ceil((value/lengthOfData) * 100);
      arrayValue.push(percentage)
    });

    return arrayValue;
  }

  private extractLabel(): string[] {
    const labels: string[] = []

    Object.keys(this.countedLocation).forEach((value)=> {
      labels.push(value)
    });

    return labels;
  }
}
