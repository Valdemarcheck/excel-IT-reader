function getMin(a, b) {
  return a < b ? a : b;
}

function getMax(a, b) {
  return a > b ? a : b;
}

export class DependantTableDataSumsArray {
  constructor({ tableDataArray, isMin }) {
    this.data = this.#arrayOfSums(tableDataArray, isMin);
  }

  #arrayOfSums(tableDataArray, isMin) {
    // console.log(tableDataArray);
    const sumsArray = [];
    const rows = tableDataArray.length;
    const columns = tableDataArray[0].length;

    for (let i = 0; i < rows; i++) {
      sumsArray.push([]);
    }

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const isFirstRow = !row;
        const isFirstColumn = !column;

        if (isFirstRow && isFirstColumn) {
          sumsArray[0].push(tableDataArray[0][0]);
        } else if (isFirstRow) {
          sumsArray[0].push(
            tableDataArray[0][column] + sumsArray[0][column - 1]
          );
        } else if (isFirstColumn) {
          // console.log(sumsArray[row], row);
          sumsArray[row].push(tableDataArray[row][0] + sumsArray[row - 1][0]);
        } else {
          if (isMin) {
            sumsArray[row].push(
              tableDataArray[row][column] +
                getMin(sumsArray[row - 1][column], sumsArray[row][column - 1])
            );
          } else {
            sumsArray[row].push(
              tableDataArray[row][column] +
                getMax(sumsArray[row - 1][column], sumsArray[row][column - 1])
            );
          }
        }
      }
    }

    return sumsArray;
  }
}
