import React, {useState} from 'react';
import './App.css';
import Table from './components/Table/Table';
import Buttons from './components/Buttons/Buttons';

export type CounterType = {
  counter: number
}


function App() {
  let [counter, setCounter] = useState<number>(0);
  const Inc = () => setCounter(counter + 1)
  const Reset = () => setCounter(0)

  return (
    <div className="App">
      <div>
        <Table counter={counter}/>
      </div>
      <div>
        <Buttons counter={counter}
                 onClick={Inc}
                 onReset={Reset}/>
      </div>
    </div>
  );
}

export default App;
