import Button from '@mui/material/Button';
import { React, useContext, useEffect } from 'react';
import { styled, useTheme, TextField } from '@mui/material';
import QR from '../assets/qr_code.png';
import dark from '../assets/dark.png';
import light from '../assets/dallEimage.png';

// import Mail from '../assets/mail_icon.svg'
import Slider from '@mui/material/Slider';
import './inputOutput.css';
import { margin } from '@mui/system';
import { ItemContext } from '../App_Folder/App'
import DallE from './DallE.js';



const StyledTextField = styled(TextField)`
    border-radius: 30px;
    margin: 0.5em;
   
`


const StyledButton = styled(Button)`
    border-radius: 30px;
    padding: 15px 105px;
`

const RecipeToPrint = ({ }) => {

    const theme = useTheme();

    const { appOpen, setAppOpen,
        yourName, setYourName,
        yourMail, setYourMail,
        receiverName, setReceiverName,
        receiverMail, setReceiverMail,
        time, setTime,
        happy, setHappy,
        productive, setProductive,
        informative, setInformative,
    } = useContext(ItemContext);


    return (
        <div className='inputOutputPageGridItemReceipt'>

            <div>
                {/* Whitespace */}
            </div>

            <div className='inputOutputPageGridItemReceiptImage'>

                <div className='inputOutputPageGridItemReceiptImageText' style={{ fontFamily: 'Roboto Mono' }}>

                    <p>
                        <span style={{ fontWeight: 'bold' }}>{theme.palette.mode === 'dark' ? "Charge for a Wast of Time" : "Charge for the Best Time"}</span>
                    </p>

                    <hr />
                    <br />

                    <p>
                        <p>{time} hour of time: <span style={{ textAlign: 'right' }}>$ priceless </span></p> <hr />
                        <br />

                        <p style={{ textAlign: 'right', fontSize: 12 }}>You are now <br /> <span style={{ textDecoration: 'underline' }}>{theme.palette.mode === 'dark' ? "Infinitely Indebted to:" : "forever owed to:"}</span></p>

                    </p>


                </div>

                <div>
                    {/* DallE Image */}
                    {theme.palette.mode === 'dark' ? <img src={dark}></img> : <img src={light}></img>}
                </div>

                <div className='inputOutputPageGridItemReceiptImageText' style={{ fontFamily: 'Roboto Mono', fontSize: 12 }}>
                    {theme.palette.mode === 'dark' ? "Thanks for the meeting - do not invite me the next time." : "Thanks for being you. Please always stay that way."}
                </div>



                <div className='inputOutputPageGridItemReceiptImageText' style={{ fontFamily: 'Roboto Mono', fontSize: 12 }}>

                    {/* Making a grid for the qr code */}

                    <div className='inputOutputPageGridItemReceiptImageTextQR'>

                        <span style={{ fontSize: 12 }}>
                            Want your own receipt?
                            Just scan the code
                            and get to our page:
                        </span>

                        <div>
                            {/* QR Code Image */}

                            <img src={QR}></img>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )


}

export default RecipeToPrint