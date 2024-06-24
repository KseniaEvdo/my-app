import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import basketIcon from '../../assets/basket.png';
import greekSalad from '../../assets/greeksalad.jpg';
import bruchetta from '../../assets/bruchetta.png';
import lemonDessert from '../../assets/lemondessert.jpg';
import './orderonline.css'; // Обратите внимание на маленькую букву "o" в имени файла

const OrderOnline = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Поддержка данных для карточек
  const menuItems = [
    { id: 1, name: 'Greek Salad', image: greekSalad, description: 'Delicious salad with feta cheese, tomatoes, cucumbers, olives, and olive oil dressing' },
    { id: 2, name: 'Bruschetta', image: bruchetta, description: 'Italian bruschetta with ham and cheese' },
    { id: 3, name: 'Lemon Dessert', image: lemonDessert, description: 'Piece of our special lemon dessert' }
  ];

  // Инициализация состояния для количества товаров
  const [quantities, setQuantities] = useState({
    1: 1, // Greek Salad
    2: 1, // Bruschetta
    3: 1  // Lemon Dessert
  });

  // Функция для изменения количества товара
  const handleQuantityChange = (itemId, value) => {
    const updatedQuantities = { ...quantities, [itemId]: quantities[itemId] + value };
    if (updatedQuantities[itemId] >= 1) {
      setQuantities(updatedQuantities);
    }
  };

  const handleOrderClick = () => {
    navigate('/orderonline');
  };

  return (
    <div className="order-online">
      <div className="header">
        <h1>Order Online</h1>
        <div className="basket">
          <img src={basketIcon} alt="Basket" className="basket-icon" />
          <span className="quantity">{Object.values(quantities).reduce((a, b) => a + b)}</span>
        </div>
      </div>

      <div className="cards-container">
        {menuItems.map(item => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="card-image" />
            <div className="card-details">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-description">{item.description}</p>
            </div>
            <div className="quantity-control">
              <button className="control-button" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span className="quantity">{quantities[item.id]}</span>
              <button className="control-button" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
            <button className="card-button" onClick={handleOrderClick}>Order online</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderOnline;

