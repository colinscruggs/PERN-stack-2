import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import './styles/App.css';

function App() {
    /* Using <Outlet />, current route's content will be displayed within App's layout */
    return (
        <div className="App">
            <Header />
            <Box p={2} sx={{ height: '100%' }}>
                <Outlet />
            </Box>
            <Footer />
        </div>
    );
}

export default App;
