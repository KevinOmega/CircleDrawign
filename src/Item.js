import React,{useState,useEffect} from 'react'
import { useGlobalContext } from './context';

const Item = ({id_row,id_col}) => {

    const {itemSize,matrix} = useGlobalContext();
    const [paint,setPaint] = useState(false);


  useEffect(() => {
    if (Object.keys(matrix).length) {
      if (matrix[id_row][id_col]) {
        setPaint(true);
      }else{
        setPaint(false);
      }
    }
    
  },[matrix, id_col, id_row])

  return (
    <div className='item' style={{width: itemSize,
        height: itemSize, 
        backgroundColor: `${paint ? "blue" : "transparent"}`}}>
    </div>
  )
}

export default Item
