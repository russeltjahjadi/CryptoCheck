import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  useEffect(() => {
    let isMounted = true;

    const fetchAllCoin = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
        },
      };

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=1`,
          options,
        );

        // Handle rate limits and non-200 responses gracefully
        if (!response.ok) {
          if (response.status === 429) {
            console.warn(
              "CoinGecko API Rate Limit exceeded (429). Please wait a minute before refreshing.",
            );
            return;
          }
          throw new Error(
            `API Error: ${response.status} ${response.statusText}`,
          );
        }

        const data = await response.json();

        if (isMounted) {
          setAllCoin(data);
        }
      } catch (err) {
        console.error("Error fetching crypto data:", err);
      }
    };

    fetchAllCoin();

    return () => {
      isMounted = false;
    };
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
