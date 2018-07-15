import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={item.iconUrl} alt="card-img"/>
      </div>
      <div className="card-content">
        <p>{item.topic}</p>
      </div>
    </div>
  )
};

export default Card;
