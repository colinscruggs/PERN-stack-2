import { Typography, Divider } from '@mui/material';

const Footer = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Divider variant="middle" />
            <Typography variant="subtitle2" my={1}>
                Disclaimer: This is not actually Yelp.
            </Typography>
        </div>
    );
};

export default Footer;
