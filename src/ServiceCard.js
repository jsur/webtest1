import React from 'react';

const ServiceCard = ({ item }) => {
  return (
    <div className="card-service">
      <div className="card-img service">
        <img className="card-service-img" src={item.iconUrl} alt="card-img"/>
      </div>
      <div className="card-content">
        <p>{item.topic}</p>
      </div>
    </div>
  )
};

export default ServiceCard;
