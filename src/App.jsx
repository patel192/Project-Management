
import './App.css'
import ActivityLog from './Components/pages/ActivityLog'
import CommunicationHub from './Components/pages/CommunicationHub'
import { DashBoard } from './Components/pages/DashBoard'
import { FileManagement } from './Components/pages/FileManagement'
import FinancialOverview from './Components/pages/FinancialOverview'
import KnowledgeBase from './Components/pages/KnowledgeBase'
import { LandingPage } from './Components/pages/LandingPage'
import { Login } from './Components/pages/Login'
import { Notifications } from './Components/pages/Notifications'
import ProjectCalendar from './Components/pages/ProjectCalender'
import { Projects } from './Components/pages/Projects'
import ProjectSettings from './Components/pages/ProjectSettings'
import { ProjectShare } from './Components/pages/ProjectShare'
import { ProjectVisualizer } from './Components/pages/ProjectVisualizer'
import { Register } from './Components/pages/Register'
import { ReportsAndAnalytics } from './Components/pages/ReportsAndAnalytics'
import { Settings } from './Components/pages/Settings'
import { TeamManagement } from './Components/pages/TeamManagement'

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
  <ProjectShare/>
  <TeamManagement/>
  <ReportsAndAnalytics/>
  <Notifications/>
  <ProjectCalendar/>
  <FileManagement/>
  <FinancialOverview/>
  <CommunicationHub/>
  <ProjectSettings/>
  <ActivityLog/>
  <KnowledgeBase/>
  </>
  )
}

export default App
