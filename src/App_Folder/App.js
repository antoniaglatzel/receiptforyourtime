import './App.css'
import LandingPage from '../LandingPage/LandingPage'
import { createTheme, ThemeProvider } from '@mui/material';
import React, { useEffect, useContext } from 'react';
import InputOutputPage from '../InputOutputPage/InputOutput';
import Header from '../Header_white/header_white';
import '../InputOutputPage/inputOutput.css';
import { RouterSharp, SystemSecurityUpdate } from '@mui/icons-material';
// import { SystemSecurityUpdate } from '@mui/icons-material';
import DallEReplacement from '../assets/dallEimage.png';
import ReceiptLandingPage from '../ReceiptLandingPage/ReceiptLandingPage';
import { Routes, Route} from "react-router-dom";

const lightTheme = createTheme({
  palette: {
    neutral: {
      main: "#AD13E6",
      contrastText: '#FBF2D1',
    },
    mode: 'light'
  },
});

const darkTheme = createTheme({
  palette: {
    neutral: {

      main: "#AD13E6",
      contrastText: '#1F2A34',
    },
    mode: 'dark'
  },
});

export const ItemContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [appOpen, setAppOpen] = React.useState(false);
  const [yourName, setYourName] = React.useState("Your Name");
  const [yourMail, setYourMail] = React.useState("Your Mail");
  const [receiverName, setReceiverName] = React.useState("Receiver Name");
  const [receiverMail, setReceiverMail] = React.useState("Receiver Name");
  const [receiverLink, setReceiverLink] = React.useState("http://localhost:5173/receipt?time=5&happy=2&informative=2&productive=2");
  const [time, setTime] = React.useState(5);
  const [happy, setHappy] = React.useState(2);
  const [productive, setProductive] = React.useState(2);
  const [informative, setInformative] = React.useState(2);
  const [prompt, setPrompt] = React.useState (""); //only change at button change? how?
  const [generatedImage, setImage] = React.useState (DallEReplacement);
  const [print, setPrint] = React.useState (false);
  


  return (
    <ItemContext.Provider value={{
      appOpen, setAppOpen,
      yourName, setYourName,
      yourMail, setYourMail,
      receiverName, setReceiverName,
      receiverMail, setReceiverMail,
      time, setTime,
      happy, setHappy,
      productive, setProductive,
      informative, setInformative,
      prompt, setPrompt,
      generatedImage, setImage,
      print, setPrint,
      receiverLink, setReceiverLink,
    }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Routes>
              <Route exact path="/" element={<div><Header setDarkMode={setDarkMode} /> {appOpen ? <InputOutputPage /> : <LandingPage />}</div>}></Route>
              <Route exact path="/receipt" element={<ReceiptLandingPage />}></Route>
          </Routes>
      </ThemeProvider>
    </ItemContext.Provider>
  )
}

export default App
