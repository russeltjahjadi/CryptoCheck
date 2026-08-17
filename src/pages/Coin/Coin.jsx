import React, { useState, useEffect, useContext } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);
  const [historicalData, setHistoricalData] = useState(null);
  const [coinData, setCoinData] = useState(null);
  const [days, setDays] = useState(10);

  const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        // Pass API key in the query parameter instead of headers
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=${days}&x_cg_demo_api_key=${apiKey}`,
        );

        if (!response.ok) {
          if (response.status === 429) {
            console.warn("CoinGecko API Rate Limit reached.");
            return;
          }
          throw new Error(`Error ${response.status}`);
        }

        const data = await response.json();
        setHistoricalData(data.prices);
      } catch (err) {
        console.error("Failed to fetch historical chart data:", err);
      }
    };

    const fetchCoinData = async () => {
      try {
        // Pass API key in the query parameter instead of headers
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}?x_cg_demo_api_key=${apiKey}`,
        );

        if (!response.ok) {
          if (response.status === 429) {
            console.warn("CoinGecko API Rate Limit reached.");
            return;
          }
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setCoinData(data);
      } catch (err) {
        console.error("Failed to fetch coin details:", err);
      }
    };

    if (coinId) {
      fetchCoinData();
      fetchHistoricalData();
    }
  }, [coinId, currency, days, apiKey]);

  // Prevent crashes while data is loading
  if (!coinData || !historicalData) {
    return (
      <div className="spinner">
        <p>Loading coin data...</p>
      </div>
    );
  }

  return (
    <div className="coin">
      <div className="coin-name">
        <img src={coinData.image?.large} alt={coinData.name} />
        <p>
          <b>
            {coinData.name} ({coinData.symbol?.toUpperCase()})
          </b>
        </p>
      </div>
      <div className="coin-chart">
        <LineChart historicalData={historicalData} />
      </div>

      <div className="coin-info">
        <ul>
          <li>Crypto Market Rank</li>
          <li> {coinData.market_cap_rank} </li>
        </ul>
        <ul>
          <li>Current Price</li>
          <li>
            {" "}
            {currency.symbol}{" "}
            {coinData.market_data.current_price[
              currency.name
            ].toLocaleString()}{" "}
          </li>
        </ul>

        <ul>
          <li>Market Cap</li>
          <li>
            {currency.symbol}{" "}
            {coinData.market_data.market_cap[currency.name].toLocaleString()}
          </li>
        </ul>

        <ul>
          <li>24 Hour High</li>
          <li>
            {currency.symbol}{" "}
            {coinData.market_data.high_24h[currency.name].toLocaleString()}
          </li>
        </ul>

        <ul>
          <li>24 Hour Low</li>
          <li>
            {currency.symbol}{" "}
            {coinData.market_data.low_24h[currency.name].toLocaleString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Coin;
