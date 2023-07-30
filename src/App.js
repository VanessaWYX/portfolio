import {
  Route,
  HashRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import About from './About';
import { CareerHistory } from './CareerHistory';
import { ContactMe } from './ContactMe';
import Footer from './Footer';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Lora', 'serif'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid sx={{ backgroundColor: '#eff1f3', fontFamily: 'Bold' }}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Experience" element={<CareerHistory />} />
            <Route path="/Contact" element={<ContactMe />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
