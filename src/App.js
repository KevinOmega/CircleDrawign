import './App.css';
import Grid from './Grid';
import React,{useEffect} from 'react';
import { useGlobalContext } from './context';

function App() {
  
  const {sizeMatrix,setMatrix,generateBtn,clean} = useGlobalContext();



  return (
    <div className="App">
      <div className="grid-container">
        <Grid n={sizeMatrix}/>
      </div>
    </div>
  );
}

export default App;
