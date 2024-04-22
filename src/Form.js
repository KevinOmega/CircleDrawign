import React, { useState } from 'react'
import { useGlobalContext } from './context'

const Form = () => {
    const {generateBtn,setColor} = useGlobalContext();
    const [formColor,setFormColor] = useState([0,0,0]);

    const onColorChange = (e) => {
        let value = e.target.value;
        if(value > 255){
            value = 255
        }
        if(value < 0 ){
            value = 0
        }

        const currentColor = formColor.slice();

        switch (e.target.name) {
            case "R":
                currentColor[0] = value;
                break;
            case "G":
                currentColor[1] = value;
                break;
            case "B":
                currentColor[2] = value;
                break;
            default:
                break;
        }
        setFormColor([...currentColor]);
    }

    const onColorClick = () => {
        setColor(`rgb(${formColor[0]},${formColor[1]},${formColor[2]})`)
    }

  return (
    <div className='form bg-light'>
      <h2>Options</h2>
      <div className="input-item">
        <label className='form-label'>Color</label>
        <div className='color-input'>
            <label >R:</label><input name="R" value={formColor[0]} onChange={(e) => onColorChange(e)} className="form-control" type="number" /> 
            <label >G:</label><input name="G" value={formColor[1]} onChange={(e) => onColorChange(e)} className="form-control" type="number" /> 
            <label >B:</label><input name="B" value={formColor[2]} onChange={(e) => onColorChange(e)} className="form-control" type="number" /> 
            <button className='btn btn-outline-primary' onClick={onColorClick}>Set</button>
        </div>
      </div>
      <button className='btn btn-primary' onClick={generateBtn}>Generate</button>
    </div>
  )
}

export default Form
