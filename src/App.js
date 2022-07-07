import logo from './logo.svg';
import './App.css';
// import InputBoxes from './Component/InputBoxes';
// import PinItem from './Component/PinItem';
// import { useState } from 'react';
import PreClass from './PreClass';
import Pin from './ComponentLive/Pin';
import Live from './ComponentLive/Live';


function App() {
  // const [value, setValue] = useState("");
  // console.log(value)
  return (
    <div className="App">
      
      {/* <PreClass/> */}
      {/* <Pin length={4} onChange={()=>{}} /> */}
      <Live />
    </div>
  );
}

export default App;
