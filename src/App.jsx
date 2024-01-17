import './App.css'
import { Container } from '@mui/material'
import HomePage from './pages/homepage'

function App() {

  return (
    <>
    <Container maxWidth="fluid" 
    style={{
      backgroundColor: 'red'
    }}
    >
      <HomePage />
      </Container>
    </>
  )
}

export default App
