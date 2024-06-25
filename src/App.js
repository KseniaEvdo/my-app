import React from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Homepage from './components/homepage/homepage';
import Menu from './components/menu/menu';
import Orderonline from './components/orderonline/orderonline';
import Login from './components/login/login';
import Bookingpage from './components/bookingpage/bookingpage';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './Logo.svg';
import hamburgerIcon from './Hamburger_icon.png';
import './App.css';



function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt='logo' className="logo" /></Link>
        <Link to="/" className="hamburgerMenu">
          <img src={hamburgerIcon} alt='|||' className="hamburger" /></Link>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/reservations" className="nav-item">Reservations</Link>
        <Link to="/orderonline" className="nav-item">Order online</Link>
        <Link to="/login" className="nav-item">Login</Link>
      </nav>
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orderonline" element={<Orderonline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
