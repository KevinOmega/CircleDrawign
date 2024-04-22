import React from 'react'
import { useGlobalContext } from './context'

const Form = () => {
    const {generateBtn} = useGlobalContext();

  return (
    <div className='form bg-light'>
      Form
      <button className='btn btn-primary' onClick={generateBtn}>Generate</button>
    </div>
  )
}

export default Form
