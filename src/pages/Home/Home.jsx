import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const inputHandler = (event) => {
    const value = event.target.value;
    setInput(value);

    if (showSuggestions) {
      if (value === "") {
        setSuggestions(allCoin);
      } else {
        const filtered = allCoin.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase()),
        );
        setSuggestions(filtered);
      }
    }
  };

  const handleDropdownToggle = () => {
    if (showSuggestions) {
      setShowSuggestions(false);
    } else {
      setSuggestions(allCoin);
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 150);
  };

  const selectSuggestion = (coinName) => {
    setInput(coinName);
    setShowSuggestions(false);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const coins = allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
    setShowSuggestions(false);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form onSubmit={searchHandler}>
          <div className="input-wrapper">
            <input
              onChange={inputHandler}
              onBlur={handleInputBlur}
              value={input}
              type="text"
              placeholder="Search Crypto..."
              required
            />
            <button
              type="button"
              className="dropdown-toggle"
              onClick={handleDropdownToggle}
              title="Toggle dropdown"
            >
              ▼
            </button>
          </div>

          {showSuggestions && (
            <div className="suggestions-dropdown">
              {suggestions.length > 0 ? (
                suggestions.map((item, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => selectSuggestion(item.name)}
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <div className="suggestion-item">No results found</div>
              )}
            </div>
          )}

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>

        {displayCoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}{" "}
            </p>
            <p className="market-cap">
              {" "}
              {currency.symbol} {item.market_cap.toLocaleString()}{" "}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
