import React from 'react';
import { useNavigate } from 'react-router-dom';
import greekSalad from '../../assets/greeksalad.jpg';
import bruchetta from '../../assets/bruchetta.png';
import lemonDessert from '../../assets/lemondessert.jpg'
import './menu.css'; // Обратите внимание на маленькую букву "m" в имени файла

const Menu = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/orderonline');
  };

  return (
    <div className="menu">
      <h1>Menu Little Lemon Restaurant</h1>
      <h3>Order online and we will deliver your food within 30 minutes</h3>
      
      <div className="cards-container">
        <div className="card">
          <img src={greekSalad} alt="Greek Salad" className="card-image" />
          <div className="card-details">
            <h3 className="card-title">Greek Salad</h3>
            <p className="card-description">Delicious salad with feta cheese, tomatoes, cucumbers, olives, and olive oil dressing</p>
          </div>
          <button className="card-button" onClick={handleOrderClick}>Order online</button>
        </div>
        
        <div className="card">
          <img src={bruchetta} alt="Bruschetta" className="card-image" />
          <div className="card-details">
            <h3 className="card-title">Bruschetta</h3>
            <p className="card-description">Italian bruschetta with ham and cheese</p>
          </div>
          <button className="card-button" onClick={handleOrderClick}>Order online</button>
        </div>
        
        <div className="card">
        <img src={lemonDessert} alt="lemon dessert" className="card-image" />
          <div className="card-details">
            <h3 className="card-title">Lemon Dessert</h3>
            <p className="card-description">Piece of our special lemon dessert</p>
          </div>
          <button className="card-button" onClick={handleOrderClick}>Order online</button>
        </div>
      </div>
      
      <button className="more-food-btn">More food...</button>
    </div>
  );
};

export default Menu;

