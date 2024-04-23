


const useGenerateMatrix = (sizeMatrix) => {
    const tempMatrix = {}
    for (let index = 0; index < sizeMatrix; index++) {
      tempMatrix[index] = {};
      for (let j = 0; j < sizeMatrix; j++) {
        tempMatrix[index][j] = false;
      }
    }
    return tempMatrix
}

export {useGenerateMatrix}