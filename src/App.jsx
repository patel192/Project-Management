
import './App.css'
import { DashBoard } from './Components/pages/DashBoard'
import { LandingPage } from './Components/pages/LandingPage'
import { Projects } from './Components/pages/Projects'
import { Register } from './Components/pages/Register'
import { Settings } from './Components/pages/Settings'

function App() {
 
  return (
  <>
  <LandingPage/>
  <DashBoard/>
  <Projects/>
  <Settings/>
  <Register/>
  </>
  )
}

export default App
