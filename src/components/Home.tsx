import { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-around;
    flex-direction: column;
    height: 100vh;
    background: transparent;
    color: white;
    padding: 0.25em 1em;
    background-image: url('/bingo-background.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    `
const Input = styled.input`
    border-radius: 0.25em;
    font-size: 2em;
    font-family: 'Roboto', sans-serif;
    align-self: center;
    align-content: center;
    background-color: rgba(255, 255, 255, .85);  
    backdrop-filter: blur(0px);
    `
const LoginCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: 0 0 50px 0 ;
      background: inherit;
      backdrop-filter: blur(10px);
      margin: 50px;
      padding: 1em;`
export const Home: React.FunctionComponent<HomeProps> = ({setName, name}) => {

    const navigate = useNavigate();
    const handleSubmit = (event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            event.preventDefault()
            if(name) {
                navigate('/bingo')
            }
          }
      };

    return (
        <>
            <HomeContainer>
                <img src="/bingo-logo.png" alt="bingo-logo" style={{width: '35%'}} />
                <LoginCard>

                <Input type="text" placeholder="Enter your name" onKeyDown={(e) => {
                    return handleSubmit(e);
                }} onChange={(e) => setName(e.target.value)} value={name}/>
                </LoginCard>
            </HomeContainer>
        </>
    )
}

interface HomeProps {
    name: string;
    setName: (name: string) => void;
}