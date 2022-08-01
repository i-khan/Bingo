import React from "react";
import {getSequence} from "../functional/ticket";
import styled, {css} from "styled-components";

interface NumberBoardProps {
  selectedNumbers: number[]
}

const NumberBoard: React.FC<NumberBoardProps> = ({selectedNumbers}) => {
  const rows = [
    getSequence(1, 15),
    getSequence(16, 15),
    getSequence(31, 15),
    getSequence(46, 15),
    getSequence(61, 15),
  ];

  return <div>
    {
      rows.map(row => (
        <div style={{display: "flex"}}>
          {
            row.map(number => (
              <DisplayedNumber isSelected={selectedNumbers.includes(number)}>{number}</DisplayedNumber>
            ))
          }
        </div>
      ))
    }
  </div>
}

interface DisplayedNumber {
  isSelected: boolean;
}

const DisplayedNumber = styled.div<DisplayedNumber>`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  ${props => props.isSelected && css`
    text-decoration: line-through;
    background-color: lavender;
  `}
`

export default NumberBoard;