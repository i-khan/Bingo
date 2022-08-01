import {sampleSize, times} from "lodash";

export function generateTicket() {
  return {
    columns: [
      getColumn(1),
      getColumn(16),
      getColumn(31, true),
      getColumn(46),
      getColumn(61),
    ]
  }
}

export function getType(columnIndex: number): string {
  return ["B", "I", "N", "G", "O"][columnIndex]
}

function getColumn(start: number, freeElement?: boolean) {
  const totalNumber = freeElement ? 4 : 5;

  const possibleNumbers = getSequence(start, 15);
  const selectedNumbers = sampleSize(possibleNumbers, totalNumber);
  const sortedNumbers = selectedNumbers.sort((a, b) => a - b)

  if(freeElement) {
    sortedNumbers.splice(2, 0, 0)
  }

  return sortedNumbers

}


export function getSequence(start: number, count: number) {
  return times(count, (n: number) => {
    return start + n;
  });
}