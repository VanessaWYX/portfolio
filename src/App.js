import './App.css'
import { CareerHistory } from './CareerHistory'
import { ContactMe } from './ContactMe'
import { EducationHistory } from './EducationHistory'
import { Header } from './Header'
import { Summary } from './Summary'

function App() {
  return (
    <>
      <Header />
      <Summary />
      <CareerHistory />
      <EducationHistory />
      <ContactMe />
    </>
  )
}

export default App
