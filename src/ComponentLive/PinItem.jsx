import React from 'react'
import { forwardRef } from 'react'

const PinItem = forwardRef(({changeHandler,onBackSpaceHandler},ref) => {

    const handleKeyUp = (e) => {
        // console.log(e.keyCode);

        if(e.keyCode == 8)
        {
            onBackSpaceHandler(e);
        }
        else
        {
            changeHandler(e);
        }
    }

  return (
    <div style={{}}>
        <input style={{width: '30px', height: '30px', margin: '2rem 0.4rem', textAlign: 'center', fontWeight: 'bold'}} 
        ref={ref} 
        maxLength={1} 
        onKeyUp={handleKeyUp} />
    </div>
  )
})

export default PinItem