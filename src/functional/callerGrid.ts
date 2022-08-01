import {sampleSize, times} from "lodash";

export function generateTicket() {
  return {
    columns: [
      getColumn(1, 15),
      getColumn(16, 15),
      getColumn(31, 15),
      getColumn(46, 15),
      getColumn(61, 15),
    ]
  }
}

function getColumn(start: number, totalNumber : number = 4, freeElement?: boolean) {
  // const totalNumber = freeElement ? 4 : 5;

  const possibleNumbers = getSequence(start, totalNumber);
  const selectedNumbers = sampleSize(possibleNumbers, freeElement ? totalNumber-1: totalNumber);
  const sortedNumbers = selectedNumbers.sort((a, b) => a - b)

  if(freeElement) {
    sortedNumbers.splice(2, 0, 0)
  }

  return sortedNumbers

}


function getSequence(start: number, count: number) {
  return times(count, (n: number) => {
    return start + n;
  });
}