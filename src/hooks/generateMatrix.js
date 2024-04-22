


const useGenerateMatrix = (sizeMatrix) => {
    console.log("generating")
    const tempMatrix = {}
    for (let index = 0; index < sizeMatrix; index++) {
      tempMatrix[index] = {};
      for (let j = 0; j < sizeMatrix; j++) {
        tempMatrix[index][j] = false;
      }
    }
    console.log(tempMatrix)
    return tempMatrix
}

export {useGenerateMatrix}