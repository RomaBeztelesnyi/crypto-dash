import { Link } from "react-router";

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="coin-card">
        <div className="coin-header ">
          <img src={coin.image} alt={coin.name} className="coin-image" />
        </div>
        <h2>{coin.name}</h2>
        <p className="symbol">Symbol: {coin.symbol.toUpperCase()}</p>
        <p>Price: ${coin.current_price.toLocaleString()}</p>
        <p>Market capitalization: ${coin.market_cap.toLocaleString()}</p>
        <p
          className={
            coin.price_change_percentage_24h < 0 ? "negative" : "positive"
          }
        >
          Change in 24 hours:{" "}
          {typeof coin.price_change_percentage_24h === "number"
            ? coin.price_change_percentage_24h.toFixed(2) + "%"
            : "N/A"}
        </p>
      </div>
    </Link>
  );
};

export default CoinCard;
