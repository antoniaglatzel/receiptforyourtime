//import Content from '../LandingPage/Content_white/content_white';
import Recipe from '../InputOutputPage/Recipe';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material';
import { ItemContext } from '../App_Folder/App';
import { useContext } from 'react';
import './ReceiptLandingPage.css';
import { flexbox } from '@mui/system';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { queryString } from 'query-string';


const StyledButton = styled(Button)`
    border-radius: 20px;
    padding: 6px 50px
`
const happyArray = ['satisfied', 'joyful', 'happy', 'thrilled', 'exhillerated'];
const productiveArray = ["one", "few", "a bunch of", "lots of", "an abundance of"];
const informativeArray = ["hearts", "flowers", "gifts", "love letters", "books"];

const sadArray = ['sad', 'tears', 'crying', 'depressed', 'dead'];
const unproductiveArray = ["one", "zero", "negative", "very unproductive", "very much unproductive"];
const uninformativeArray = ["cross", "RIP", "death", "satan", "devil"];

//const parsed = queryString.parse(props.location.search);

// const search = props.location.search;
// const params = new URLSearchParams(search);
// const time = params.get('time');
// console.log(time + " juhuu");

//useeffect that comes once at the beginning to load the right image! 


const ReceiptLandingPage = ({}) => {
    const theme = useTheme();
    const backgroundColor = theme.palette.mode === 'dark' ? '#1F2A34' : '#FBF2D1';
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
    } = useContext(ItemContext);    
    
    useEffect(() => {
        console.log(location.search);
        const search = location.search;
        const params = new URLSearchParams(search);
        
        setTime(params.get('time'));
        setHappy(params.get('happy'));
        setProductive(params.get('productive'));
        setInformative(params.get('informative'));
        
        var random_boolean = Math.random() < 0.5; //https://stackoverflow.com/questions/36756331/js-generate-random-boolean
        var person = random_boolean ? "boy" : "girl";
        setPrompt(person + " with a " + happyArray[happy] + " expression and " + productiveArray[productive] + " " + informativeArray[informative] + " as a black and white comic");
        //changes state of prompt 
      }, []);
    
    // const search = location.search;
    // const params = new URLSearchParams(search);
    // const time = params.get('time');
    // console.log(time); 
    
    return (
        <div style={{ height: '100vh', backgroundColor: backgroundColor, display: 'flex', justifyContent: 'center'}}>
                <div className='ReceiptLandingPageGrid'>
                    <div></div>
                    <div style={{ display: 'flex', justifyContent: 'center', maxHeight: '70vh', width: '50 px'}}>
                        <div>
                            <Recipe/>
                        </div>
                    </div>
                    <Link to={{pathname: `/`}}>
                        <div style={{ display: 'flex', justifyContent: 'center'  }}><StyledButton color="neutral" variant="contained">Bill someone else!</StyledButton></div>    
                    </Link>
                    
                </div>
        </div>
    )
}

export default ReceiptLandingPage