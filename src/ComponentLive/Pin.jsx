import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { useState } from 'react';
import PinItem from './PinItem';

const Pin = ({length, setOtpHandler}) => {

  const inputRef = useRef([]);
  const [inputBoxLen] = useState(new Array(length).fill(1));
  const [inputBox2] = useState(new Array(length).fill(""));

  const [inputBoxValue, setInputBoxValue] = useState(new Array(length).fill(""));



  // console.log(inputRef);

  const handleChange = (e,index) => {

    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue)
    
    if(e.target.value.length > 0 && index < length - 1)
    {
      inputRef.current[index + 1].focus()
    }

    // console.log(inputBoxValue)
    setOtpHandler(inputBoxValue.join(""))
  };

  const handleBackSpace = (e,index) => {
    if(index > 0)
    {
      inputRef.current[index - 1].focus()
    }

    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue)

    setOtpHandler(inputBoxValue.join(""))


  }


  const handlePaste = (e) => {
    e.preventDefault();

    // console.log(e.clipboardData.getData("text").split("").filter((item, index)=> index < length));

    const data = e.clipboardData.getData("text").split("").filter((item, index) => index < length);

    data.forEach((value, index)=> {
      inputBoxValue[index] = value;
      inputRef.current[index].value =  value;

      if(index < length -1)
      {
        inputRef.current[index + 1].focus();
      }
    }) 
  } 
  
  return (
    <div style={{ display: 'flex',border: '1px', justifyContent: 'center' }} onPaste={handlePaste}>
         {/* {
            inputBox2.map((item,index)=> {
                return <input ref={(element)=> {
                  inputRef.current[index] = element;
                }}
                 maxLength={1} 
                 style={{width: '30px', height:"30px", margin: "3rem 0.4rem", textAlign: 'center', fontWeight:'bold'}}
                 onChange={(e)=> handleChange(e, index)} 
                key={index}/> 
            })
        }  */}
        <div>
          <br />
        </div>
        {
          inputBoxLen.map((item,index) => {
            return <PinItem key={index} changeHandler={(e)=> handleChange(e, index)} ref={(element)=> {
              inputRef.current[index] = element;
            }} onBackSpaceHandler={(e)=>handleBackSpace(e,index)}/>
          })
        }

        {/* {inputBoxValue} */}
    </div>
  )
}
Pin.propTypes = {
    length: PropTypes.number,
    onChange: PropTypes.func
}


export default Pin