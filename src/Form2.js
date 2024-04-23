import React, { useState } from 'react'
import { FaArrowAltCircleUp,FaArrowAltCircleRight,FaArrowAltCircleLeft,FaArrowAltCircleDown } from "react-icons/fa";


const Form2 = () => {
    const [formColor,setFormColor] = useState([255,255,255]);

    const limpiarBtn = () => {

    }

    const onColorChange = (e) => {
        let value = e.target.value;
        if (value > 255) {
          value = 255;
        }
        if (value < 0) {
          value = 0;
        }
    
        const currentColor = formColor.slice();
    
        switch (e.target.name) {
          case "R":
            currentColor[0] = value;
            break;
          case "G":
            currentColor[1] = value;
            break;
          case "B":
            currentColor[2] = value;
            break;
          default:
            break;
        }
        setFormColor([...currentColor]);
      };

      const onRellenarClick = () => {

      }
  return (
    <div className="form bg-light">
      <h2>Controles</h2>
      <div className="input-item">
        <label className="form-label">RGB Color</label>
        <div className="flex-input">
          <label>R:</label>
          <input
            name="R"
            value={formColor[0]}
            onChange={(e) => onColorChange(e)}
            className="form-control"
            type="number"
          />
          <label>G:</label>
          <input
            name="G"
            value={formColor[1]}
            onChange={(e) => onColorChange(e)}
            className="form-control"
            type="number"
          />
          <label>B:</label>
          <input
            name="B"
            value={formColor[2]}
            onChange={(e) => onColorChange(e)}
            className="form-control"
            type="number"
          />
          <button className="btn btn-outline-primary" onClick={onRellenarClick}>
            Rellenar
          </button>
        </div>
      </div>
      <div className="controllers">
            <span><FaArrowAltCircleUp/></span>
        <div className="x-controllers">
            <span><FaArrowAltCircleLeft/></span>
            <span><FaArrowAltCircleRight/></span>
        </div>
            <span><FaArrowAltCircleDown/></span>
      </div>
      
      <button className="btn btn-dark" onClick={limpiarBtn}>
        Limpiar
      </button>
    </div>
  )
}

export default Form2
