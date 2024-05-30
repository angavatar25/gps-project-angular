interface TGpsData {
  deviceId: string;
  deviceType: string;
  timestamp: string;
  location: string;
}

export const GpsData: TGpsData[] = [
  { deviceId: 'D-1567', deviceType: 'Aircraft', timestamp: '31-08-2022 10.05', location: 'L1' },
  { deviceId: 'D-1567', deviceType: 'Aircraft', timestamp: '31-08-2022 10.10', location: 'L1' },
  { deviceId: 'D-1567', deviceType: 'Aircraft', timestamp: '31-08-2022 10.15', location: 'L1' },
  { deviceId: 'D-1567', deviceType: 'Aircraft', timestamp: '31-08-2022 10.20', location: 'L1' },
  { deviceId: 'D-1567', deviceType: 'Aircraft', timestamp: '31-08-2022 10.25', location: 'L2' },
  { deviceId: 'D-1568', deviceType: 'Personal', timestamp: '31-08-2022 10.05', location: 'L3' },
  { deviceId: 'D-1568', deviceType: 'Personal', timestamp: '31-08-2022 10.10', location: 'L3' },
  { deviceId: 'D-1568', deviceType: 'Personal', timestamp: '31-08-2022 10.15', location: 'L3' },
  { deviceId: 'D-1568', deviceType: 'Personal', timestamp: '31-08-2022 10.20', location: 'L3' },
  { deviceId: 'D-1568', deviceType: 'Personal', timestamp: '31-08-2022 10.25', location: 'L3' },
  { deviceId: 'D-1569', deviceType: 'Asset', timestamp: '31-08-2022 10.15', location: 'L4' },
  { deviceId: 'D-1569', deviceType: 'Asset', timestamp: '31-08-2022 10.20', location: 'L4' },
  { deviceId: 'D-1569', deviceType: 'Asset', timestamp: '31-08-2022 10.30', location: 'L1' },
  { deviceId: 'D-1569', deviceType: 'Asset', timestamp: '31-08-2022 10.35', location: 'L1' },
  { deviceId: 'D-1570', deviceType: 'Personal', timestamp: '31-08-2022 10.35', location: 'L5' },
  { deviceId: 'D-1571', deviceType: 'Asset', timestamp: '31-08-2022 10.35', location: 'L6' },
]