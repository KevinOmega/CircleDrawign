import React,{useEffect,useRef} from 'react'
import GridRow from './GridRow'
import { useGlobalContext } from './context';

const Grid = ({n}) => {
    const {setItemSize} = useGlobalContext();
    const gridRef = useRef();

    useEffect(() => {
        const gridSize = gridRef.current.getBoundingClientRect().height;
        const boxSize = Math.floor(gridSize/ Number(n));
        console.log(boxSize);
        setItemSize(boxSize);
    },[n, setItemSize])
  return (
    <div>
        <div className='grid' ref={gridRef}>
            {Array.from({length: n},(_,index) => <GridRow n={n} n_row={index} key={index}></GridRow>)}
        </div>
    </div>
  )
}

export default Grid
