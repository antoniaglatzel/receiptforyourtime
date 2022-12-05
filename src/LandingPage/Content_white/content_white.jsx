import { React, useContext} from 'react'
import './contentWhite.css'
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material';
import landingImageSrc from '../../assets/landing-image.png';
import landingImageSrcDark from '../../assets/You_Wasted_My_Time.png';
import { ItemContext } from '../../App_Folder/App'


const StyledButton = styled(Button)`
    border-radius: 20px;
    padding: 6px 50px
`

export default function Content({}) {
    const { appOpen, setAppOpen } = useContext(ItemContext);

    const theme = useTheme();
    const backgroundColor = theme.palette.mode === 'dark' ? '#1F2A34' : '#FBF2D1';
    const landingText = theme.palette.mode === 'dark' ? landingImageSrcDark : landingImageSrc;

    return (
        <div style={{ backgroundColor: backgroundColor }} className="landingPageContent">
            <img className="landingPageImg" src={landingText}/>
            <div className="subheadline" style={theme.palette.mode === 'dark' ? {color: '#FFF'} : { color: '#AD13E6' }}> Don’t just tell them. Give them the receipt. </div>
            <div style={{ display: 'flex', justifyContent: 'center'  }} onClick={() => setAppOpen(!appOpen)} ><StyledButton color="neutral" variant="contained">Get started</StyledButton></div>
        </div>
    )
}




