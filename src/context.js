import { createContext, useContext, useEffect, useState } from "react";
import { useGenerateMatrix } from "./hooks/generateMatrix";

const sleep = ms => new Promise(r => setTimeout(r, ms));

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [itemSize, setItemSize] = useState(10);
  const [sizeMatrix,setSizeMatrix] = useState(10);
  const [matrix,setMatrix] = useState(useGenerateMatrix(sizeMatrix));
  const [algorithms,setAlgorithms] = useState(1);
  const [parameter,setParameters] = useState({
    x1 : 0,x2 : sizeMatrix - 1,y1: 0, y2 : sizeMatrix - 1,
    xc : Math.round(sizeMatrix/2),yc : Math.round(sizeMatrix/2), r : Math.round(sizeMatrix/2)
  })
  const [delay,setDelay] = useState(100);




  function dda(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let steps = Math.max(Math.abs(dx), Math.abs(dy));
    let xInc = dx / steps;
    let yInc = dy / steps;
    let x = x1;
    let y = y1;

    for (let i = 0; i <= steps; i++) {
        drawPoint(Math.round(x), Math.round(y));
        x += xInc;
        y += yInc;
    }
}

function drawTriangle(x1, y1, x2, y2, x3, y3) {
    dda(x1, y1, x2, y2);
    dda(x2, y2, x3, y3);
    dda(x3, y3, x1, y1);
}


  const drawPoint = (x,y) => {
    if(x < 0 || x > sizeMatrix - 1 || y < 0 || y > sizeMatrix - 1){
        return;
    }else{
        const tempMatrix = matrix.splice();
        tempMatrix[x][y] = true;
        setMatrix(tempMatrix);
        console.log(tempMatrix);
    }
  }

  const clean = () => {

  }

  const generateBtn = () => {
    drawTriangle(0,0,5,5,0,10)
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