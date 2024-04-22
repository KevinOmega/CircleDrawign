import { createContext, useContext, useState } from "react";

const sleep = ms => new Promise(r => setTimeout(r, ms));

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [itemSize, setItemSize] = useState(10);
  const [sizeMatrix,setSizeMatrix] = useState(50);
  const [matrix,setMatrix] = useState({});
  const [algorithms,setAlgorithms] = useState(1);
  const [parameter,setParameters] = useState({
    x1 : 0,x2 : sizeMatrix - 1,y1: 0, y2 : sizeMatrix - 1,
    xc : Math.round(sizeMatrix/2),yc : Math.round(sizeMatrix/2), r : Math.round(sizeMatrix/2)
  })
  const [delay,setDelay] = useState(100);


  const drawPoint = (tempMatrix,x,y,color) => {
    if(x < 0 || x > sizeMatrix - 1 || y < 0 || y > sizeMatrix - 1){
      return tempMatrix;
    }else{
      tempMatrix[y][x] = {...matrix[y][x], color}
      return tempMatrix;
    }
  }

  const clean = () => {

  }

  const generateBtn = () => {

  }

  return (
    <AppContext.Provider value={{ 
    itemSize,
    setItemSize,
    sizeMatrix,
    setSizeMatrix, 
    matrix, 
    setMatrix,
    algorithms,
    setAlgorithms,
    generateBtn,
    parameter,
    setParameters,
    delay,
    setDelay,
    clean,
     }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };