import { useEffect, useState } from "react";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import NotFoundPage from "./pages/not-found";
import CoinDetailPage from "./pages/coin-details";

const API_URL = import.meta.env.VITE_COINS_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        setError(error.message);
      } finally {
        SetLoading(false);
      }
    };
    fetchCoins();
  }, [limit]);

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={
          <HomePage
            coins={coins}
            limit={limit}
            setLimit={setLimit}
            filter={filter}
            setFilter={setFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            loading={loading}
            error={error}
          />
        }
      />
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/coin/:id" element={<CoinDetailPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    </>
  );
};

export default App;
