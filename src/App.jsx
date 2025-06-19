
import './App.css'
import { DashBoard } from './Components/pages/DashBoard'
import { LandingPage } from './Components/pages/LandingPage'
import { Login } from './Components/pages/Login'
import { Projects } from './Components/pages/Projects'
import { ProjectVisualizer } from './Components/pages/ProjectVisualizer'
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
  <Login/>
  <ProjectVisualizer/>
  </>
  )
}

export default App
