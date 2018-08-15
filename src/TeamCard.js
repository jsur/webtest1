import React from 'react';

const TeamCard = ({ item }) => {
  return (
    <div className="card-team">
      <div className="card-img">
        <img className="card-team-img" src={item.pictureUrl} alt="card-img"/>
      </div>
      <div className="card-content">
        <p className="card-team-name">{item.name}</p>
        <p className="card-team-role">{item.role}</p>
        <p className="card-team-desc">{item.description}</p>
      </div>
    </div>
  )
};

export default TeamCard;
