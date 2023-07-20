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

function App() {
  return (
    <Grid>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<CareerHistory />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </Grid>
  );
}

export default App;
