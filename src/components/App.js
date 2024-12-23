import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import toursData from "./data";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 1000); // Simulating loading
  }, []);

  const deleteTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (tours.length === 0) {
    return (
      <div id="main">
        <h2 className="title">No more tours</h2>
        <button className="btn" onClick={() => setTours(toursData)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div id="main">
      <h1 className="title">Our Tours</h1>
      <Tours tours={tours} deleteTour={deleteTour} />
    </div>
  );
};

export default App;
