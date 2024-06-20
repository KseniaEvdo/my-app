import React from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Homepage from './components/homepage/homepage';
import Menu from './components/menu/menu';
import Reservation from './components/reservation/reservation';
import Orderonline from './components/orderonline/orderonline';
import Login from './components/login/login';
// import {Routes, Route, Link} from 'react-router-dom';



function App() {
  return (
    <div className="app"> 
    {/* <nav className="nav">
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About</Link>
      <Link to="/menu" className="nav-item">Menu</Link>
      <Link to="/reservations" className="nav-item">Reservations</Link>
      <Link to="/orderonline" className="nav-item">Order online</Link>
      <Link to="/login" className="nav-item">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/orderonline" element={<Orderonline />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
