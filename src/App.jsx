import { QueryClient, QueryClientProvider } from 'react-query';





import './App.css'
import { Container } from '@mui/material'
import HomePage from './pages/homepage'


const queryClient = new QueryClient();
 
function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Container maxWidth="fluid">
      <HomePage />
      </Container>
    </QueryClientProvider>
    </>
  )
}

export default App
