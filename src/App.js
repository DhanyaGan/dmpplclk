// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatApp';


import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        {/* <Route path="/ContactForm" Component={ContactForm} />
        {/*<Route path="/contact" component={Contact} /> */}
      </Routes>
      <WhatsAppButton/>
      <Footer />
    </Router>
  );
}

export default App;
