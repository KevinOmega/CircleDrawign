import './App.css';
import Grid from './Grid';
import React,{useEffect} from 'react';
import { useGlobalContext } from './context';
import Form from './Form';
import Form2 from './Form2';

function App() {
  
  const {sizeMatrix,setMatrix,generateBtn,clean,isGenerated} = useGlobalContext();



  return (
    <div className="App">
      {isGenerated ? 
        <Form2/>
      :
        <Form/>
      }
      
      <div className="grid-container">
        <Grid n={sizeMatrix}/>
      </div>
    </div>
  );
}

export default App;
