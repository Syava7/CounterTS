import React from 'react';
import s from './Buttons.module.css'




type ButtonsPropsType = {
  counter: number
  onClick: () => void
  onReset: () => void
}

const Buttons = (props: ButtonsPropsType) => {

    return (
      <div className={s.buttons}>
        <button disabled={props.counter === 5 } className={s.button} onClick={props.onClick}>inc</button>
        <button disabled={props.counter === 0 } className={s.button} onClick={props.onReset}>reset</button>
      </div>
    )

}

export default Buttons;