import React from 'react'

const style = {
    padding:10,
    width: 15,
    fontSize:14,
    margin:5 
}

const PinItem = React.forwardRef(({onChange,onBackspace, max}, ref) => {


   




    const handleKeyUp = (e) =>{

        switch(e.keyCode)
        {
            case 8 :{
                if(!e.target.value) onBackspace(e.target.value)
                break;
            }
            case 9:{
                e.preventDefault()
                break;
            }
            default:{
                // e.preventDefault();
                onChange(e.target.value)

            }
        }



        onChange(e.target.value)
    }


  return (
    <input maxLength={max} ref={ref} onKeyUp={handleKeyUp} style={style}/>
  )
})

export default PinItem