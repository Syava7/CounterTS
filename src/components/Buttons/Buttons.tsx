import React from 'react';
import s from './Buttons.module.css'




type ButtonsPropsType = {
  startValue: any
  maxValue: any
  onClick: () => void
  onReset: () => void
}

const Buttons = (props: ButtonsPropsType) => {

    return (
      <div className={s.buttons}>
        <button disabled={props.startValue === props.maxValue } className={s.button} onClick={props.onClick}>inc</button>
        <button disabled={props.startValue === 0 } className={s.button} onClick={props.onReset}>reset</button>
      </div>
    )

}

export default Buttons;