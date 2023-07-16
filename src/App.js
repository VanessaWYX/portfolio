import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.css';
import { Header } from './Header';
import Home from './Home';
import About from './About';
import { CareerHistory } from './CareerHistory';
import { ContactMe } from './ContactMe';
import Footer from './Footer';

function App() {
  return (
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
  );
}

export default App;
