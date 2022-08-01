import styled from "styled-components";
import TicketNumber from "./TicketNumber";
import TicketColumnHeader from "./TicketColumnHeader";
import {getType} from "../../functional/ticket";

interface TicketRowProps {
  column: number[];
  columnIndex: number;
  className?: string;
  selected: boolean[][];
  onSelect: (selected: { rowIndex: number, columnIndex: number }) => void
}

const TicketColumn = (props: TicketRowProps) => {
  const {column, columnIndex, className, onSelect, selected} = props;
  const type = getType(columnIndex);

  return <div className={className}>
    <TicketColumnHeader type={type} />
    {
      column.map((number, rowIndex) => {
        const isSelected = selected[rowIndex][columnIndex];

        return (
          <TicketNumber
            key={`number-${rowIndex}-${columnIndex}`}
            onSelect={onSelect}
            isSelected={isSelected}
            columnIndex={columnIndex}
            rowIndex={rowIndex}
            number={number}
            type={type}
          />
        )
      })
    }
  </div>
}

export default styled(TicketColumn)`
  &:nth-child(even) ${TicketNumber}:nth-child(even) {
    background-color: #fff2df;
  }

  &:nth-child(odd) ${TicketNumber}:nth-child(odd) {
    background-color: #fff2df;
  }
`;
