import React from 'react';
import s from './Table.module.css';


type CounterPropsType = {
  startValue: any
  maxValue: any
  error?: boolean
  setError: (error: boolean) => void
}

const Table = (props: CounterPropsType) => {
  if (props.startValue < 0) {
    return (
      <div>Value should be more than 0</div>
    )
  }
  else if  (props.maxValue < props.startValue) {
    return (
      <div>Value should be more than max value</div>
    )
  }
  else if  (props.maxValue === props.startValue) {
    return (
      <div>You have max value {props.startValue}</div>
    )
  }
  // else if  (props.startValue < props.maxValue) {
  //   return (
  //     <div>Enter value and press set</div>
  //   )
  // }
  else {
    return (
      <div>
        {props.startValue}
      </div>
    )
  }
}

export default Table