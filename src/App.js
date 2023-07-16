import { Switch } from '../node_modules/@mui/material/index';
import { Router, Route } from '../node_modules/react-router-dom/dist/index';
import './App.css';
import { CareerHistory } from './CareerHistory';
import { ContactMe } from './ContactMe';
import { EducationHistory } from './EducationHistory';
import { Header } from './Header';
import { Summary } from './Summary';

function App() {
  return (
    <Router location={''} navigator={undefined}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
      </Switch>
    </Router>
  );
  return (
    <>
      <Header />
      {/* <Summary />
      <CareerHistory />
      <EducationHistory />
      <ContactMe /> */}
    </>
  );
}

export default App;
