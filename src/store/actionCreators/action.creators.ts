import { IPointData } from './../../interfaces/point-data.interface';
import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IState } from '../types';
import { IBus } from './../../interfaces/bus.interface';
import { ActionType, CANCEL_ALL_SELECTED, SELECT_BUS, SELECT_DATE, SET_BUS_LIST, SET_DATE_LIST, UPDATE_LOADING, SET_POINT_DATA } from './../actions/actions';

export function updateLoading(status: boolean): ActionType {
  return {
    type: UPDATE_LOADING,
    payload: status,
  }
}

export function setBusList(list: IBus[]): ActionType {
  return {
    type: SET_BUS_LIST,
    payload: list,
  }
}

export function selectBus(bus: IBus): ActionType {
  return { 
    type: SELECT_BUS,
    payload: bus,
  }
}

export function setDateList(list: string[]): ActionType {
  return {
    type: SET_DATE_LIST,
    payload: list,
  }
}

export function selectDate(date: string): ActionType {
  return { 
    type: SELECT_DATE,
    payload: date,
  }
}

export function setPointData(data: IPointData | null): ActionType {
  return {
    type: SET_POINT_DATA,
    payload: data,
  }
}

export function cancelAllSelected(): ActionType {
  return { 
    type: CANCEL_ALL_SELECTED,
  }
}

export function loadBusList(): ThunkAction<void, IState, unknown, Action<string>> {
  return (dispatch) => {
    dispatch(updateLoading(true));
    axios.get('http://localhost:4000/bus', {
      method: 'GET'
    })
      .then((res) => {
        const list: IBus[] = res.data.buses;
        dispatch(setBusList(list));        
      })
      .catch((err) => {
        console.log(err);        
      })
      .finally(() => {
        dispatch(updateLoading(false));
      })

  }
}

export function loadDateList(id: number): ThunkAction<void, IState, unknown, Action<string>> {
  return (dispatch) => {    
    dispatch(updateLoading(true));
    axios.get(`http://localhost:4000/point/dates/${id}`, {
      method: 'GET'
    })
      .then((res) => {
        const list: string[] = res.data;
        dispatch(setDateList(list));        
      })
      .catch((err) => {
        console.log(err);        
      })
      .finally(() => {
        dispatch(updateLoading(false));
      })

  }
}

export function loadPointsData(id: number, date: string): ThunkAction<void, IState, unknown, Action<string>> {
  return (dispatch) => {    
    dispatch(updateLoading(true));
    axios.get(`http://localhost:4000/point/${id}?date=${date}`, {
      method: 'GET'
    })
      .then((res) => {
        const data: IPointData = res.data;
        dispatch(setPointData(data));        
      })
      .catch((err) => {
        console.log(err);        
      })
      .finally(() => {
        dispatch(updateLoading(false));
      })

  }
}
