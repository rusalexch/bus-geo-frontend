import { IPointData } from './../interfaces/point-data.interface';
import { IBus } from "../interfaces/bus.interface";

export interface IState {
  loading: boolean;
  busList: IBus[];
  selectedBus: IBus;
  dateList: string[];
  selectedDate: string;
  pointData: IPointData | null;
}
