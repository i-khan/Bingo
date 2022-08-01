import React from "react";
import styled from "styled-components";

interface BingoNumberProps {
  number: number;
  className?: string;
}

const BingoNumber: React.FC<BingoNumberProps> = (props) => {
  const {className, number} = props;

  return <div className={className}>
    {number}
  </div>
}

function getTypeFromNumber(number: number) {
  if(number > 1 && number <= 15) {
    return "B";
  } else if(number > 15 && number <= 30) {
    return "I";
  } else if(number > 30 && number <= 45) {
    return "N";
  } else if(number > 45 && number <= 60) {
    return "G";
  }

  return "O";
}

export default styled(BingoNumber)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 75px;
  margin: 10px;
  border: 8px solid ${props => props.theme.bingo[getTypeFromNumber(props.number)]};
`