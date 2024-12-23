import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, deleteTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {showMore ? info : `${info.slice(0, 200)}...`}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "See less" : "Show more"}
          </button>
        </p>
      </div>
      <p className="tour-price">${price}</p>
      <button className="delete-btn" onClick={() => deleteTour(id)}>
        Delete Tour
      </button>
    </article>
  );
};

export default Tour;
