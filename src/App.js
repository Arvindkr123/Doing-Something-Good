import React from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Home from './components/Home';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import User from './components/User.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/user/:id' element={<User />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
