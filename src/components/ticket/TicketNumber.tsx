import React from "react";
import styled, {css} from "styled-components";

interface TicketNumberProps{
  isSelected: boolean;
  type: string;
  className?: string;
  number: number;
  rowIndex: number;
  columnIndex: number;
  onSelect: (selectedItem: {rowIndex: number, columnIndex:number}) => void;
}


const TicketNumber: React.FC<TicketNumberProps> = (props) => {
  const {rowIndex, columnIndex, className, onSelect, number} = props;

  return <div className={className} onClick={() => {
    onSelect({rowIndex, columnIndex})
  }}>
    <div>
      {number || <FreeText>FREE</FreeText>}
    </div>
  </div>
}

const FreeText = styled.span`
  font-size: 12px;
`

export default styled(TicketNumber)`
  padding: 5px;
  width: 75px;
  height: 75px;
  cursor: pointer;
  
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${props => props.isSelected && css`
      border-radius: 50px;
      color: #FFF;
      background-color: ${props.theme.bingo[props.type]};
    `};
  }
`;