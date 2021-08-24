import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [purchased, setPurchased] = useState([]);
  const [items, setallItems] = useState([]);
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    fetchUrl();
  }, []);
  const handlePurchased = (stock) => {
    if (!purchased.includes(stock)) {
      setPurchased([...purchased, stock]);
    }
  };
  const deletePurchased = (key) => {
    let newArr = purchased.filter((item) => {
      return item.id !== key;
    });
    setPurchased(newArr);
  };

  const fetchUrl = () => {
    fetch("http://localhost:3001/stocks")
      .then((resp) => resp.json())
      .then((data) => {
        setStocks(data);
        setallItems(data);
      });
  };
  const addStock = (obj) => {
    setPurchased([...purchased, obj]);
  };

  const filterItems = (word) => {
    console.log(word);
    let filteredArr = [...items].filter((stock) => {
      return stock.type === word;
    });
    console.log(filteredArr);
    setStocks(filteredArr);
  };
  function compareAlpha(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    console.log(nameA, nameB);

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
  function comparePrice(a, b) {
    let nameA = a.price;
    let nameB = b.price;
    console.log(nameA, nameB);

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
  const checkRadio = (word) => {
    let newArr;
    if (word === "Price") {
      newArr = [...stocks].sort(comparePrice);
    } else if (word === "Alphabetically") {
      newArr = [...stocks].sort(compareAlpha);
      console.log(newArr);
    }
    setStocks(newArr);
  };
  return (
    <div>
      <SearchBar
        stocks={stocks}
        filterItems={filterItems}
        checkRadio={checkRadio}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handlePurchased={handlePurchased} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            deletePurchased={deletePurchased}
            purchased={purchased}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
