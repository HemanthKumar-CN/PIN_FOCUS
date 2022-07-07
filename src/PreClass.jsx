import React from 'react'
import InputBoxes from './Component/InputBoxes';
import PinItem from './Component/PinItem';
import { useState } from 'react';

const PreClass = () => {
    const [value, setValue] = useState("");

  return (
    <div>
        <InputBoxes length ={4} onChange={(val)=> setValue(val)} label = "input" test={5} perBox={1} />
    </div>
  )
}

export default PreClass