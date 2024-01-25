import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// react router
import { Route, Routes } from 'react-router-dom';


import './App.css'
import { Container } from '@mui/material'
import HomePage from './pages/homepage'
import { ProductDetailPage } from './pages/detailpage';
import NavBar from './components/navbar';


const queryClient = new QueryClient();
 
function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="xl">
        <NavBar />
         <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/product/:id' element={ <ProductDetailPage />} />
         </Routes>
      </Container>
    </QueryClientProvider>
    </>
  )
}

export default App
