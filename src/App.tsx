import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Table from './components/Table/Table';
import Buttons from './components/Buttons/Buttons';



function App() {
  let [startValue, setStartValue] = useState<any>(0)
  let [maxValue, setMaxValue] = useState<any>(0)
  let [error, setError] = useState<boolean>(false)


  const Inc = () => setStartValue(startValue + 1)
  const Reset = () => setStartValue(0)

  const onMinValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    startValue = (+e.currentTarget.value)
  }

  const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    maxValue = (+e.currentTarget.value)
  }

  useEffect( () => {
    let startValueString = localStorage.getItem('startValue')
    let maxValueString = localStorage.getItem('maxValue')
    if (startValueString && maxValueString) {
      let newStartValue = JSON.parse(startValueString)
      let newMaxValue = JSON.parse(maxValueString)
      setStartValue(newStartValue)
      setMaxValue(newMaxValue)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('startValue', JSON.stringify(startValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }, [startValue, maxValue])



  const setValueHandler = () => {
    setStartValue(startValue)
    setMaxValue(maxValue)
  }

  return (
    <div >
      <div>
        <div>
          <Table startValue={startValue}
                 maxValue={maxValue}
                 error={error}
                 setError={setError}
                 />
        </div>
        <div>
          <Buttons startValue={startValue}
                   maxValue={maxValue}
                   onClick={Inc}
                   onReset={Reset}/>
        </div>
      </div>
      <div>
        <div>
          <div>
            Min value
            <input type="number" onChange={onMinValueChangeHandler}/>
          </div>
          <div>
            Max value
            <input type="number" onChange={onMaxValueChangeHandler}/>
          </div>
          <div>
            <button onClick={setValueHandler}>Set</button>
          </div>
        </div>
        {/*<InputValue />*/}
        {/*<StartInputValue/>*/}
        {/*<MaxInputValue />*/}
        {/*<SetButton />*/}
      </div>
    </div>
  );
}

export default App;
