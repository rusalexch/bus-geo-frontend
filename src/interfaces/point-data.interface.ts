import { IPoint } from './point.interface';

export interface ICenterMap {
  lat: number;
  lon: number;
}

export interface IBoundsMap {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
}

export interface IPointData {
  points: IPoint[];
  countPoints: number;
  maxSpeed: number;
  distance: number;
  center: ICenterMap;
  bounds: IBoundsMap;
}
