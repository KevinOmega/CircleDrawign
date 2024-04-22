import './App.css';
import Grid from './Grid';
import React,{useEffect} from 'react';
import { useGlobalContext } from './context';

function App() {
  
  const {sizeMatrix,setSizeMatrix,setMatrix,generateBtn,clean} = useGlobalContext();

  useEffect(() => {
    console.log("generating")
    const tempMatrix = {}
    for (let index = 0; index < sizeMatrix; index++) {
      tempMatrix[index] = {};
      for (let j = 0; j < sizeMatrix; j++) {
        tempMatrix[index][j] = false;
      }
    }
    console.log(tempMatrix);
    setMatrix(tempMatrix);
  },[setMatrix, setSizeMatrix, sizeMatrix])

  return (
    <div className="App">
      <div className="grid-container">
        <Grid n={sizeMatrix}/>
      </div>
    </div>
  );
}

export default App;
