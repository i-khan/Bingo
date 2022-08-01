/**
 All functional code is in the functional folder.
*/
export function checkBingoState(selected: boolean[][]) {
  const isHorizontalComplete = checkHorizontal(selected);
  const isVerticalComplete = checkVertical(selected);
  const isDiagonalComplete = checkDiagonal(selected);

  return {
    isHorizontalComplete, isVerticalComplete, isDiagonalComplete
  }
}

function checkHorizontal(selected: boolean[][]) {
    const rows = selected.map(row => {
        return row.length === 5 && row.every(element => element);
    })

    return rows.some(row => row);
}


function checkVertical(selected: boolean[][]) {
    return checkHorizontal(transpose(selected))
}


function checkDiagonal(selected: boolean[][]) {
    let principalDiagonal = [];
    let secondaryDiagonal = [];
    for (let i = 0; i < selected.length; i++) {
        principalDiagonal.push(selected[i][i]);
        secondaryDiagonal.push(selected[i][selected.length - 1 - i]);
    }
    return principalDiagonal.every(element => element === true) || secondaryDiagonal.every(element => element === true);
}

function transpose(matrix: boolean[][]) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
  }
