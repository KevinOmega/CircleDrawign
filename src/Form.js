import React from 'react'
import { useGlobalContext } from './context'

const Form = () => {
    const {generateBtn,setColor} = useGlobalContext();

  return (
    <div className='form bg-light'>
      <h2>Options</h2>
      <div className="input-item">
        <label className='form-label'>Color</label>
        <div className='color-input'>
            <label >R:</label><input className="form-control" type="number" /> 
            <label >G:</label><input className="form-control" type="number" /> 
            <label >B:</label><input className="form-control" type="number" /> 
        </div>
      </div>
      <button className='btn btn-primary' onClick={generateBtn}>Generate</button>
    </div>
  )
}

export default Form
