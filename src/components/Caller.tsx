import React, {useState} from "react"
import {getSequence} from "../functional/ticket";
import {sampleSize} from "lodash";
import NumberLog from "./NumberLog";
import NumberBoard from "./NumberBoard";
import Button from 'react-bootstrap/Button';
import {Stack} from "react-bootstrap";
import styled from "styled-components";


interface CallerGridProps {
  name: string;
  className?: string;
}

const Caller: React.FunctionComponent<CallerGridProps> = ({name, className}) => {

  const initialSelectedNumbers: number[] = []
  const [selectedNumbers, setSelectedNumbers] = useState(initialSelectedNumbers)
  const [remainingNumbers, setRemainingNumbers] = useState(getSequence(1, 75));

  const resetGame = () => {
    console.log("resetGame")
    setRemainingNumbers(getSequence(1, 75));
    setSelectedNumbers([]);
  }
  const generateRandomNumber = () => {
    console.log("generateRandomNumber")
    const [randomNumber] = sampleSize(remainingNumbers);
    if (randomNumber) {
      setSelectedNumbers([randomNumber, ...selectedNumbers]);
      setRemainingNumbers(remainingNumbers.filter(num => num !== randomNumber))
    }
  }

  return (
    <div className={className}>
      <h1>Caller {name}</h1>
      <br/>

      <NumberLog selectedNumbers={selectedNumbers} max={5}/>
      <br/>

      <NumberBoard selectedNumbers={selectedNumbers}/>

      <br/>
      <br/>
      <br/>
      <Stack direction="horizontal" gap={2} className="col-md-12 text-center">
        <Button onClick={generateRandomNumber} disabled={selectedNumbers.length === 75}>Call Number</Button>
        <div className="vr"/>
        <Button onClick={resetGame} disabled={selectedNumbers.length === 0}  variant="outline-danger">Reset</Button>
      </Stack>
    </div>

  )
}

export default styled(Caller)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`