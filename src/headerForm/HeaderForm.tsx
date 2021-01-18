import React, { useEffect } from 'react'
import { Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/Loader';
import { loadBusList, loadDateList, loadPointsData, selectBus, selectDate, setPointData } from '../store/actionCreators/action.creators';
import { IState } from '../store/types';

function HeaderForm() {
  const loading = useSelector((state: IState) => state.loading);
  const { busList, dateList, selectedBus, selectedDate } = useSelector(
    ({busList, dateList, selectedBus, selectedDate}: IState) => {
      return { busList, dateList, selectedBus, selectedDate }
    }
  );

  const dispatch = useDispatch();
  
  useEffect(() => {    
    dispatch(loadBusList());
  }, [dispatch]);

  function renderBusOptions() {
    if (!selectedBus.ident) {
      return (
        <React.Fragment>
          <option value="0">...выбрать автобус</option>
          {busList.map((bus) => {
            return (<option key={bus.id} value={bus.id}>{bus.ident}</option>);
          })}
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        {busList.map((bus) => {
            return (<option key={bus.id} value={bus.id}>{bus.ident}</option>);
          })}
      </React.Fragment>
    )
  }

  function renderDateOptions() {
    if (!selectedDate) {
      return (
        <React.Fragment>
          <option value="0">...выбрать дату</option>
          {dateList.map((date, idx) => {
            return (<option key={idx} value={date}>{date}</option>);
          })}
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        {dateList.map((date, idx) => {
          return (<option key={idx} value={date}>{date}</option>);
        })}
      </React.Fragment>
    )
  }

  function selectBusValue (busId: string) {
    const bus = busList.find((item) => item.id === +busId)
    if (bus) {
      dispatch(selectBus(bus));
      dispatch(selectDate(''));
      dispatch(setPointData(null));
      dispatch(loadDateList(+busId));
    }
  }

  function selectDateValue(date: string) {
    if (date) {
      dispatch(selectDate(date));
      dispatch(setPointData(null));
      dispatch(loadPointsData(selectedBus.id, date));
    }
  }

  if (loading) {
    return <Loader />  
  }

  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Автобус</Form.Label>
            <Form.Control
              as="select"
              custom
              value={selectedBus.id}
              onChange={({ target: {value}}) => selectBusValue(value)}
            >
              {renderBusOptions()}              
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
        <Form.Group>
            <Form.Label>Дата</Form.Label>
            <Form.Control
              as="select"
              custom
              value={selectedDate}
              onChange={({ target: {value}}) => selectDateValue(value)}
            >
              {renderDateOptions()}
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default HeaderForm;