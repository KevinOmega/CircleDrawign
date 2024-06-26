import React, { useState } from "react";
import { useGlobalContext } from "./context";

const Form = () => {
  const {
    generateBtn,
    setColor,
    algorithms,
    setAlgorithms,
    parameters,
    setParameters,
    options,
    setOptions,
  } = useGlobalContext();
  const [formColor, setFormColor] = useState([255, 255, 255]);

  const onParameterChange = (e) => {
    const name = e.target.name;
    let value = Number(e.target.value);

    if (algorithms === "1") {
      setParameters({
        ...parameters,
        triangle: { ...parameters.triangle, [name]: value },
      });
    } else {
      setParameters({
        ...parameters,
        circle: { ...parameters.circle, [name]: value },
      });
    }
  };

  const onOptionsChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    if(value < 0){
        value = 0;
    }
    if(value > 10){
        value = 10
    }

    setOptions({...options,[name] : value});
  }

  const onSegmentationChange = (e) => {
    let value = Number(e.target.value);
    const name =  e.target.name;

    if(value < 0){
        value = 0
    }
    if(value > 10){
        value = 10
    }

    setOptions({...options,segmentation : {...options.segmentation,[name] : value}})
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

  const onColorClick = () => {
    setColor(`rgb(${formColor[0]},${formColor[1]},${formColor[2]})`);
  };

  return (
    <div className="form bg-light">
      <h2>Opciones</h2>
      <div className="input-item">
        <label className="form-label">Elejir tipo de grafica</label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={algorithms}
          onChange={(e) => setAlgorithms(e.target.value)}
        >
          <option value={1}>Triangulo</option>
          <option value={2}>Circunferencia</option>
        </select>
      </div>
      <div className="input-item">
        {algorithms === "1" ? (
          <>
            <label className="form-label">Parametros Triangulo</label>
            <div className="flex-input">
              <label>x1:</label>
              <input
                name="x1"
                value={parameters.triangle.x1}
                onChange={(e) => onParameterChange(e)}
                className="form-control"
                type="number"
              />
              <label>x2:</label>
              <input
                name="x2"
                value={parameters.triangle.x2}
                onChange={(e) => onParameterChange(e)}
                className="form-control"
                type="number"
              />
              <label>x3:</label>
              <input
                name="x3"
                value={parameters.triangle.x3}
                onChange={(e) => onParameterChange(e)}
                className="form-control"
                type="number"
              />
            </div>
            <div className="flex-input mt-2">
              <label>y1:</label>
              <input
                name="y1"
                value={parameters.triangle.y1}
                onChange={(e) => onParameterChange(e)}
                className="form-control"
                type="number"
              />
              <label>y2:</label>
              <input
                name="y2"
                value={parameters.triangle.y2}
                onChange={(e) => onParameterChange(e)}
                className="form-control"
                type="number"
              />
              <label>y3:</label>
              <input
                name="y3"
                value={parameters.triangle.y3}
                onChange={(e) => onParameterChange(e)}
                className="form-control"
                type="number"
              />
            </div>
          </>
        ) : (
          <>
            <label className="form-label">Parametros Circunferencia</label>
            <div className="flex-input">
              <label>xc:</label>
              <input
                name="xc"
                value={parameters.circle.xc}
                onChange={(e) => onParameterChange(e)}
                className="form-control"
                type="number"
              />
              <label>yc:</label>
              <input
                name="yc"
                value={parameters.circle.yc}
                onChange={(e) => onParameterChange(e)}
                className="form-control"
                type="number"
              />
              <label>r:</label>
              <input
                name="r"
                value={parameters.circle.r}
                onChange={(e) => onParameterChange(e)}
                className="form-control"
                type="number"
              />
            </div>
          </>
        )}
      </div>

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
          <button className="btn btn-outline-primary" onClick={onColorClick}>
            Set
          </button>
        </div>
      </div>
      <div className="input-item">
        <label className="form-label">Opciones</label>
        <div className="flex-input">
          <label>Grosor:</label>
          <input
            name="thickness"
            value={options.thickness}
            onChange={(e) => onOptionsChange(e)}
            className="form-control"
            type="number"
          />
        </div>
      </div>
      <div className="input-item">
      <label className="form-label">Segmentacion:</label>
      <div className="flex-input">
          <label>Linea:</label>
          <input
            name="draw"
            value={options.segmentation.draw}
            onChange={(e) => onSegmentationChange(e)}
            className="form-control"
            type="number"
          />
          <label>Espacio:</label>
          <input
            name="space"
            value={options.segmentation.space}
            onChange={(e) => onSegmentationChange(e)}
            className="form-control"
            type="number"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={generateBtn}>
        Generar
      </button>
    </div>
  );
};

export default Form;
