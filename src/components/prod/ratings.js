import React from 'react';

const Ratings = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i} style={{color:'brown'}}>&#9733;</span>); // Render a filled star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Render an empty star
    }
  }

  return <div className="ratings">{stars}</div>;
};

export default Ratings;