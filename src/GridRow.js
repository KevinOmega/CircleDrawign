import React from 'react'
import Item from './Item'

const GridRow = ({n,n_row,}) => {
  return (
    <div className='d-flex'>
        {Array.from({length:n},(_,index) => <Item id_row={index} id_col={n_row} key={index}/>)}
    </div>
  )
}

export default GridRow
