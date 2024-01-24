import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// react router
import { Route, Routes } from 'react-router-dom';


import './App.css'
import { Container } from '@mui/material'
import HomePage from './pages/homepage'


const queryClient = new QueryClient();
 
function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="xl">
         <Routes>
            <Route path='/' element={ <HomePage /> } />
         </Routes>
      </Container>
    </QueryClientProvider>
    </>
  )
}

export default App
