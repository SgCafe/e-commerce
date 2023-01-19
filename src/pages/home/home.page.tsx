import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// Components
import Header from '../../components/header.component'

const HomePage = () => {
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

export default HomePage