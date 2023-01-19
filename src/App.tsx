import React from 'react';


// Components
import Header from './components/header.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styles


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App
