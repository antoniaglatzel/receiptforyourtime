import Content from '../LandingPage/Content_white/content_white';
import { useTheme } from '@mui/material';

const LandingPage = ({}) => {
    const theme = useTheme();
    const backgroundColor = theme.palette.mode === 'dark' ? '#1F2A34' : '#FBF2D1';
    return (
        <div style={{ height: '100vh', backgroundColor: backgroundColor }}>
            <Content/>
        </div>
    )
}

export default LandingPage