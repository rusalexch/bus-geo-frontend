import { SET_POINT_DATA } from './../actions/actions';
import { ActionType, SELECT_BUS, SET_BUS_LIST, UPDATE_LOADING, SET_DATE_LIST, SELECT_DATE, CANCEL_ALL_SELECTED } from '../actions/actions';
import { IState } from '../types';

export const initialBusSelect = {
  id: 0,
  ident: ''
}

export const initialDateSelect = '';

const initialState: IState = {
  loading: true,
  busList: [],
  selectedBus: initialBusSelect,
  dateList: [],
  selectedDate: '',
  pointData: null,
}

function reducer(state = initialState, action: ActionType): IState {
  switch(action.type) {
      case UPDATE_LOADING:
        return {
          ...state,
          loading: action.payload,
        }
      case SET_BUS_LIST:
        return {
          ...state,
          busList: action.payload,
        }
      case SELECT_BUS:
        return {
          ...state,
          selectedBus: action.payload,
        }
      case SET_DATE_LIST:
        return {
          ...state,
          dateList: action.payload,
        }
      case SELECT_DATE:
        return {
          ...state,
          selectedDate: action.payload,
        }
      case CANCEL_ALL_SELECTED:
        return {
          ...state,
          selectedBus: initialBusSelect,
          selectedDate: initialDateSelect,
        }  
      case SET_POINT_DATA:
        return {
          ...state,
          pointData: action.payload,
        }  
      default: return state;
  }
}

export default reducer;
