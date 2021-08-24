import React from "react";

const Portfolio = ({ item, deletePurchased }) => {
  const { name, price, ticker, id } = item;

  return (
    <>
      <div
        className="card"
        onClick={() => {
          deletePurchased(id);
        }}
      >
        <div>{name}</div>
        <div>
          <p>
            {ticker} : {price}
          </p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
