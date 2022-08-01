import React from "react";
import styled from "styled-components";
import BingoNumber from "./BingoNumber";

interface NumberLogProps {
  selectedNumbers: number[];
  max: number;
  className?: string;
}

const NumberLog: React.FC<NumberLogProps> = (props) => {
  const {selectedNumbers, className} = props;

  return <div className={className}>
    {selectedNumbers.slice(0,5).map(number => <BingoNumber number={number}/>)}
  </div>
}

export default styled(NumberLog)`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 80px;
`;