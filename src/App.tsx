import React, {useState} from 'react'
import './App.css'
import Caller from './components/Caller'
import Player from './components/Player'
import { Home } from './components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {ThemeProvider} from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = {
  bingo: {
    B: "#ee6002",
    I: "#00E5FF",
    N: "#B71C1C",
    G: "#61d800",
    O: "#5c00d2"
  }
};


function App() {
  const [name, setName] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setName={setName} name={name}/>}/>
          <Route path="/bingo" element={
            <div className="App" style={{display: 'flex', justifyContent: 'space-evenly'}}>
              <Caller name={name}/>
              <Player/>
            </div>
          }/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
