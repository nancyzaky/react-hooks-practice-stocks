import React, { useState } from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handlePurchased }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((item) => {
        return (
          <Stock key={item.id} item={item} handlePurchased={handlePurchased} />
        );
      })}
    </div>
  );
}

export default StockContainer;
