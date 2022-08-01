import Ticket from "./ticket/Ticket";
import React, {useState} from "react";
import {generateTicket} from "../functional/ticket";
import styled from "styled-components";
import {checkBingoState} from "../functional/game";
import Button from "react-bootstrap/Button";

interface PlayerProps {
  className?: string;
}

const Player: React.FC<PlayerProps> = ({className}) => {
  const [ticket,] = useState(generateTicket());
  const [selected, setSelected] = useState<boolean[][]>([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]);

  const {isHorizontalComplete, isVerticalComplete, isDiagonalComplete} = checkBingoState(selected);

  return <div className={className}>
    <Ticket
      ticket={ticket}
      selected={selected}
      onSelect={({columnIndex, rowIndex}) => {
        selected[rowIndex][columnIndex] = !selected[rowIndex][columnIndex];

        setSelected([...selected]);
      }}/>

    <br/>

    <Button disabled={!(isHorizontalComplete || isVerticalComplete || isDiagonalComplete)} variant={"danger"}>
      Bingo!
    </Button>
  </div>
}

export default styled(Player)`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
`

