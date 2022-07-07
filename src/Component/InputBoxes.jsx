import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PinItem from './PinItem';
import { useRef } from 'react';

const InputBoxes = ({length,test,label, perBox, onChange}) => {
    const [values, setValues] = useState(new Array(length).fill(""))

    const elements = useRef(new Array(length).fill(0))

    const handleChange = (value,index) => {
        // console.log(value,index)

        const val = [...values];
        val[index] = value;
        setValues(val)

        if( value.length > 0 && value.length<=perBox && index < length-1)
        {
            elements.current[index+1].focus();
        }

        onChange(val.join(""))
    }

    const handleBackspace = (value,index)=>{
        if(index > 0)
        {
            elements.current[index-1].focus()
        }

        const val = [...values];
        val[index] = value;
        setValues(val)
        onChange(val.join(""))

    }

    // console.log(values)

    const handlePaste = (e) => {
        e.preventDefault();
        console.log(e.clipboardData.getData("Text"))
    }


  return (
    <div onPaste={handlePaste}>
        <h1>InputBoxes</h1>
        {length}-{test}-{label}
        {
            values.map((item,index)=> (
                <PinItem 
                onChange={(v)=>handleChange(v,index)} 
                max={perBox} 
                key={index} 
                ref={n => elements.current[index]=n}
                onBackspace = {(v)=> handleBackspace(v,index) }
                />
            ))
        }
        <div>{values}</div>
    </div>
  )
}

InputBoxes.propTypes = {
    length : PropTypes.number, //here it can take number, string, object, function, array.
    perBox : PropTypes.number, //here it can take number, string, object, function, array.
    test : PropTypes.oneOf([4,5]),
    label : PropTypes.string.isRequired,
    onChange : PropTypes.func 
    

    // if .isRequired is typed then its mandatory to pass the prop in the component in app.js
};

InputBoxes.defaultProps ={
    label : "Label",
    perBox: 1
}



export default InputBoxes