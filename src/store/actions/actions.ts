import { IPointData } from './../../interfaces/point-data.interface';
import { IBus } from './../../interfaces/bus.interface';
export const UPDATE_LOADING = 'UPDATE_LOADING';
export const SET_BUS_LIST = 'SET_BUS_LIST';
export const SELECT_BUS = 'SELECT_BUS';
export const SET_DATE_LIST = 'SET_DATE_LIST';
export const SELECT_DATE = 'SELECT_DATE';
export const SET_POINT_DATA = 'SET_POINT_DATA';
export const CANCEL_ALL_SELECTED = 'CANCEL_ALL_SELECTED';

export interface UpdateLoading {
  type: typeof UPDATE_LOADING;
  payload: boolean;
}

export interface SetBusList {
  type: typeof SET_BUS_LIST;
  payload: IBus[];
}

export interface SelectBus {
  type: typeof SELECT_BUS;
  payload: IBus;
}

export interface SetDateList {
  type: typeof SET_DATE_LIST;
  payload: string[];
}

export interface SelectDate {
  type: typeof SELECT_DATE;
  payload: string;
}

export interface SetPointDate {
  type: typeof SET_POINT_DATA,
  payload: IPointData | null,
}

export interface CancelAllSelected {
  type: typeof CANCEL_ALL_SELECTED,
}

export type ActionType = UpdateLoading | SetBusList | SelectBus | SetDateList | SelectDate | CancelAllSelected | SetPointDate;
