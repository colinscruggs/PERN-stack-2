import { AppBar, Toolbar, Typography } from '@mui/material';
import icon from '../assets/yelp-icon.png';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#FF1A1A' }}>
            <Toolbar>
                <img src={icon} alt="logo" height="50" width="50" />
                <Typography variant="h4" noWrap sx={{ flexGrow: 1 }}>
                    Yelp
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
