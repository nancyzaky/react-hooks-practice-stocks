import React from "react";
import Stock from "./Stock";
import Portfolio from "./Portfolio";

function PortfolioContainer({ purchased, deletePurchased }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      <div>
        {purchased.map((item) => {
          return (
            <Portfolio
              key={item.id}
              item={item}
              deletePurchased={deletePurchased}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioContainer;
