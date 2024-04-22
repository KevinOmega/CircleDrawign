import { createContext, useContext, useEffect, useState } from "react";
import { useGenerateMatrix } from "./hooks/generateMatrix";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [itemSize, setItemSize] = useState(10);
  const [sizeMatrix,setSizeMatrix] = useState(150);
  const [matrix,setMatrix] = useState(useGenerateMatrix(sizeMatrix));
  const [algorithms,setAlgorithms] = useState('1');
  const [parameters,setParameters] = useState({
    triangle : {x1 : 0,y1 : 0,x2 : Math.floor(sizeMatrix/2),y2 : Math.floor(sizeMatrix/2),x3 : 0,y3 : sizeMatrix-1,},
    circle : {xc : Math.floor(sizeMatrix/2),yc : Math.floor(sizeMatrix/2), r: Math.floor(sizeMatrix/2)}
  })
  const [options,setOptions] = useState({thickness : 0,segmentation : {draw : 1, space : 0}})
  const [color,setColor] = useState("#fff");




  function dda(x1, y1, x2, y2,tempMatrix,pointIndex) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let steps = Math.max(Math.abs(dx), Math.abs(dy));
    let xInc = dx / steps;
    let yInc = dy / steps;
    let x = x1;
    let y = y1;

    for (let i = 0; i <= steps; i++) {
        drawPoint(Math.round(x), Math.round(y),tempMatrix,pointIndex);
        pointIndex++;
        x += xInc;
        y += yInc;
    }
}

function drawTriangle({x1, y1, x2, y2, x3, y3}) {
    const tempMatrix = matrix;
    let pointIndex = 0;
    dda(x1, y1, x2, y2,tempMatrix,pointIndex);
    dda(x2, y2, x3, y3,tempMatrix,pointIndex);
    dda(x3, y3, x1, y1,tempMatrix,pointIndex);

    setMatrix({...matrix,...tempMatrix});
}


const drawCircle = ({xc,yc,r}) => {
  const tempMatrix = matrix;
  let pointIndex = 0;
  let x = 0;
  let y = r;
  let d = 3 - 2 * r;
  while (x <= y) {
    
      drawPoint(xc + x,yc + y,tempMatrix,pointIndex);
      drawPoint(xc + y,yc + x,tempMatrix,pointIndex);
      drawPoint(xc - x,yc + y,tempMatrix,pointIndex);
      drawPoint(xc - y,yc + x,tempMatrix,pointIndex);
      drawPoint(xc - x,yc - y,tempMatrix,pointIndex);
      drawPoint(xc - y,yc - x,tempMatrix,pointIndex);
      drawPoint(xc + x,yc - y,tempMatrix,pointIndex);
      drawPoint(xc + y,yc - x,tempMatrix,pointIndex);
      pointIndex++;

      if (d <= 0) {
        d += 4 * x + 6;
    } else {
        y--;
        d += 4 * (x - y) + 10;
    }
    x++;
  }
setMatrix({...matrix,...tempMatrix});
}


  const drawPoint = (x,y,tempMatrix,pointIndex) => {
    if(x >= 0 && x <= sizeMatrix - 1 && y >= 0 && y <= sizeMatrix - 1){
      let {draw,space} = options.segmentation;
      if(space === 0 || (pointIndex % (draw + space) < draw)){
        tempMatrix[x][y] = true;
        if(options.thickness > 0){
          for (let index = 1; index <= options.thickness; index++) {
            if(x + index <= sizeMatrix - 1){
              tempMatrix[x + index][y] = true;
            }
            if(x -index >= 0){
              tempMatrix[x-index][y] = true;
            }
            if(y + index <= sizeMatrix - 1){
              tempMatrix[x][y + index] = true;
            }
            if(y - index >= 0){
              tempMatrix[x][y - index] = true;
            }
            
          }
        }
      }
        
    }
  }

  const clean = () => {

  }

  const generateBtn = () => {
    switch (algorithms) {
      case '1':
        drawTriangle(parameters.triangle)
        break;
      case '2':
        drawCircle(parameters.circle)
        break;
    
      default:
        break;
    }
  }


  useEffect(() => {
    console.log(matrix,"matrix");
  },[matrix])

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
    parameters,
    setParameters,
    clean,
    color,
    setColor,
    options,
    setOptions
     }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };