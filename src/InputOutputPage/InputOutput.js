import { React, useContext, useRef, createRef } from 'react';
import Button from '@mui/material/Button';
import { styled, useTheme, TextField } from '@mui/material';
import DallE from '../assets/dallEimage.png';
import QR from '../assets/qr_code.png';
// import Mail from '../assets/mail_icon.svg'
import Slider from '@mui/material/Slider';
import './inputOutput.css';
import { margin } from '@mui/system';
import Recipe from './Recipe.js';
import RecipeToPrint from './RecipeToPrint.js';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { ItemContext } from '../App_Folder/App'
import emailjs from '@emailjs/browser';
import { NoEncryption } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StyledTextField = styled(TextField)`
    border-radius: 30px;
    margin: 0.5em;
`

const StyledButton = styled(Button)`
    border-radius: 30px;
    padding: 15px 105px;
`

const generatePDF = async () => {

    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#recipe"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("receipt.pdf");
    
};

const InputOutputPage = ({ }) => {

    const { appOpen, setAppOpen,
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
    } = useContext(ItemContext);

    const theme = useTheme();
    const backgroundColor = theme.palette.mode === 'dark' ? '#1F2A34' : '#FBF2D1';
    const fontColor = theme.palette.mode === 'dark' ? '#FBF2D1' : '#9F27DE';

    function handleYourName(input) {
        setYourName(input);
    }

    function handleYourMail(input) {
        setYourMail(input);
        console.log(yourMail);
    }

    function handleReceiverName(input) {
        setReceiverName(input);
    }

    function handleReceiverMail(input) {
        setReceiverMail(input);
    }

    function handleTime(input) {
        setTime(input);
    }

    function handleHappy(input) {
        setHappy(input);
    }

    function handleProductive(input) {
        setProductive(input);
    }

    function handleInformative(input) {
        setInformative(input);
    }

    const happyArray = ['satisfied', 'joyful', 'happy', 'thrilled', 'exhillerated'];
    const productiveArray = ["one", "few", "a bunch of", "lots of", "an abundance of"];
    const informativeArray = ["hearts", "flowers", "gifts", "love letters", "books"];

    const sadArray = ['sad', 'tears', 'crying', 'depressed', 'dead'];
    const unproductiveArray = ["one", "zero", "negative", "very unproductive", "very much unproductive"];
    const uninformativeArray = ["cross", "RIP", "death", "satan", "devil"];

    //array for sad - 
    //array for angry - 
    //array for lost - 

    function handleGenerate() {
        var random_boolean = Math.random() < 0.5; //https://stackoverflow.com/questions/36756331/js-generate-random-boolean
        var person = random_boolean ? "boy" : "girl";
        if (theme.palette.mode === 'dark') {
            console.log(person + " with a " + sadArray[happy] + " expression and " + unproductiveArray[productive] + " " + uninformativeArray[informative] + " as a black and white comic");
            setPrompt(person + " with a " + sadArray[happy] + " expression and " + unproductiveArray[productive] + " " + uninformativeArray[informative] + " as a black and white comic");
        } else {
            console.log(person + " with a " + happyArray[happy] + " expression and " + productiveArray[productive] + " " + informativeArray[informative] + " as a black and white comic");
            setPrompt(person + " with a " + happyArray[happy] + " expression and " + productiveArray[productive] + " " + informativeArray[informative] + " as a black and white comic");
            setReceiverLink(`http://localhost:5173/receipt?time=${time}&happy=${happy}&informative=${informative}&productive=${productive}`);
            console.log(receiverLink);
        }
    }

    const form = useRef(); //required for the mail service to work

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7m4xjz9', 'template_qwibbnp', form.current, '8zUwhJreXR84XEu62')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const changeMode = {
        display: theme.palette.mode === 'dark' ? 'initial' : 'none'
    }

    // const ref = createRef(null)
    // const [image, takeScreenshot] = useScreenshot()

    // const getImage = () => takeScreenshot(ref.current)

    return (

        <form style={{ backgroundColor: backgroundColor }} className='inputOutputPageGrid' ref={form}>

            <div className='inputOutputPageGridItem'>

                {/* <img src={image} alt={'Screenshot'} /> */}

                <div className='inputOutputPageGridItemElement'>
                    <div style={{ color: fontColor }} className='inputOutputPageGridItemHeadline'>
                        <p>Tell us how you feel.</p>
                    </div>
                </div>


                <div className='inputOutputPageGridItemElement'>

                    <div className='inputOutputPageGridItemInput'>

                        <StyledTextField sx={{ boxShadow: 2, "& fieldset": { border: 'none' } }} style={{ backgroundColor: 'white' }} id="Outlined secondary" color="secondary" label="Your Name" variant="outlined" name="yourName"
                            onChange={(e) => {
                                handleYourName(e.target.value);
                            }} />
                        <StyledTextField sx={{ boxShadow: 2, "& fieldset": { border: 'none' } }} style={{ backgroundColor: 'white' }} id="Outlined secondary" color="secondary" label="Your E-Mail Address" variant="outlined" name="yourMail"
                            onChange={(e) => {
                                handleYourMail(e.target.value);
                            }} />
                        <StyledTextField sx={{ boxShadow: 2, "& fieldset": { border: 'none' } }} style={{ backgroundColor: 'white' }} id="Outlined secondary" color="secondary" label="Their Name" variant="outlined" name="receiverName"
                            onChange={(e) => {
                                handleReceiverName(e.target.value);
                            }} />
                        <StyledTextField sx={{ boxShadow: 2, "& fieldset": { border: 'none' } }} style={{ backgroundColor: 'white' }} id="Outlined secondary" color="secondary" label="Their E-Mail Address" variant="outlined" name="receiverMail"
                            onChange={(e) => {
                                handleReceiverMail(e.target.value);
                            }} />

                        <input style={{display: 'none'}} value={receiverLink} name="receiverLink" />
                        <input style={{display: 'none'}} value={'http://localhost:5173/'} name="mainURL" />

                    </div>

                </div>


                <div className='inputOutputPageGridItemElement' >

                    <div className='inputOutputPageGridItemSliders' style={{ color: fontColor }}>
                        <div >Meeting Time</div>
                        <Slider aria-label="Custom marks" min={0} max={10} defaultValue={5} step={1} valueLabelDisplay="auto" style={{ color: fontColor }}
                            onChange={(e) => {
                                handleTime(e.target.value);
                            }} />
                        <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Hours Spent</span>

                        {theme.palette.mode === 'dark' ? <div>Sad</div> : <div>Happy</div>}
                        <Slider aria-label="Custom marks" min={0} max={4} defaultValue={2} step={1} valueLabelDisplay="auto" style={{ color: fontColor }}
                            onChange={(e) => {
                                handleHappy(e.target.value);
                            }} />
                        <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{theme.palette.mode === 'dark' ? <div>Very Sad</div> : <div>Very Happy</div>}</span>

                        {theme.palette.mode === 'dark' ? <div>Unproductive</div> : <div>Productive</div>}
                        <Slider aria-label="Custom marks" min={0} max={4} defaultValue={2} step={1} valueLabelDisplay="auto" style={{ color: fontColor }}
                            onChange={(e) => {
                                handleProductive(e.target.value);
                            }} />
                        <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', minWidth: '160px' }}>{theme.palette.mode === 'dark' ? <div>Very Unproductive</div> : <div>Very Productive</div>}</span>

                        {theme.palette.mode === 'dark' ? <div>Uninformative</div> : <div>Informative</div>}
                        <Slider aria-label="Custom marks" min={0} max={4} defaultValue={2} step={1} valueLabelDisplay="auto" style={{ color: fontColor }}
                            onChange={(e) => {
                                handleInformative(e.target.value);
                            }} />
                        <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{theme.palette.mode === 'dark' ? <div>Very Uninformative</div> : <div>Very Informative</div>}</span>
                    </div>

                </div>

                <div className='inputOutputPageGridItemElement'>

                    <div className='inputOutputPageGridItemCalculate'>

                        <div style={{ display: 'flex', justifyContent: 'left' }}>
                            <StyledButton style={{ backgroundColor: fontColor }}
                                sx={{ boxShadow: 2 }}
                                // color="secondary" 
                                variant="contained"
                                onClick={() => { handleGenerate() }}>
                                <span style={{ color: !fontColor, fontWeight: 'bold' }}>Generate your receipt</span>
                            </StyledButton>
                        </div>

                    </div>
                </div>


            </div>

            <div className='inputOutputPageGridItemRight'>

                <div>
                </div>

                <div>
                    <div >
                        <Recipe />
                    </div>

                    {/* <div id="recipe" style={{display: 'none'}}>
                        <RecipeToPrint />
                    </div> */}

                </div>

                <div className={" inputOutputPageGridItemRightDownload"}>

                    {/* <div style={{ margin: "auto" }}>
                        <StyledButton style={{ backgroundColor: fontColor }} sx={{ boxShadow: 2 }} variant="contained" onClick={() => { console.log('onClick Download'); generatePDF() }}>
                            <span style={{ color: !fontColor, fontWeight: 'bold' }}>Download</span>
                        </StyledButton>
                    </div> */}

                    <div style={{ margin: "auto" }}>
                        <Link to={{pathname: `receipt`, search: `?time=${time}&happy=${happy}&informative=${informative}&productive=${productive}`}}>
                            <StyledButton style={{ backgroundColor: fontColor }} sx={{ boxShadow: 2 }} variant="contained" onClick={() => { console.log('go to receipt'); }}>
                                <span style={{ color: !fontColor, fontWeight: 'bold' }}>Goooo</span>
                            </StyledButton>
                        </Link>
                    </div>

                    <div style={{ margin: "auto" }}>
                        <StyledButton style={{ backgroundColor: fontColor }} sx={{ boxShadow: 2 }} variant="contained" onClick={(e) => { console.log('onClick Mail'); sendEmail(e); }}
                        >
                            <span style={{ color: !fontColor, fontWeight: 'bold' }}>Send via Mail</span>
                        </StyledButton>
                    </div>

                </div>

            </div>

        </form>
    )
}

export default InputOutputPage