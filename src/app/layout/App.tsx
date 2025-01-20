import EventDashboard from "../../features/events/dashboard/EventDashboard"
import NavBar from "./nav/NavBar"
import { Container } from "semantic-ui-react"


function App() {
  
  return (
    <div>
      <NavBar/>
      <Container className='main'>
        <EventDashboard/>
      </Container>
    </div>
  )
}

export default App
