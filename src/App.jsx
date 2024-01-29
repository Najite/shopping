import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// react router
import { Route, Routes } from 'react-router-dom';


import './App.css'
import { Container } from '@mui/material'
import HomePage from './pages/homepage'
import { ProductDetailPage } from './pages/detailpage';
import NavBar from './components/navbar';
import Checkout from './components/checkout';
import Order from './components/order';


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
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/order/:orderUniqueId' element={<Order />} />
         </Routes>
      </Container>
    </QueryClientProvider>
    </>
  )
}

export default App
