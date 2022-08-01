import React from "react";
import styled from "styled-components";

interface TicketColumnHeaderProps {
  type: string;
  className?: string
}

const TicketColumnHeader: React.FC<TicketColumnHeaderProps> = ({className, type}) => {
  return <div className={className}>
    {type}
  </div>
}

export default styled(TicketColumnHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  padding: 5px;
  color: #FFF;
  background-color: ${props => props.theme.bingo[props.type]};
`;