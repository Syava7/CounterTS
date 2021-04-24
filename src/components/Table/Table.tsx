import React from 'react';
import s from './Table.module.css';
import {CounterType} from '../../App';

const Table = (props: CounterType) => {
  if (props.counter === 5) {
    return (
      <div className={s.table5}>{props.counter}</div>
    )
  } else {
    return (
      <div className={s.table}>{props.counter}</div>
    )
  }
}

export default Table