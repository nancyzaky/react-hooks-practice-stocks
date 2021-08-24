import React, { useState } from "react";

function Stock({ item, handlePurchased }) {
  const { id, price, name, ticker, type } = item;
  return (
    <div>
      <div className="card">
        <div
          className="card-body"
          onClick={() => {
            handlePurchased(item);
          }}
        >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {ticker}:{price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
