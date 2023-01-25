import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Navbar.js';
import MovingPrices from './MovingPrices.js';
import Grid from './Grid.js';
import Table from './Table.js'

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

function App() {
  const [apiArray, setApiArray] = useState([]);
  const [tableArray, setTableArray] = useState([]);
  const [topMoversFilter, setTopMoversFilter] = useState([]);
  const [topRisersFilter, setTopRisersFilter] = useState([]);
  const [topLosersFilter, setTopLosersFilter] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const coin = await response.json();
    setApiArray(coin);
  }
  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <div class="App">
      <Navbar />
        <p></p>
        <p></p>
      <Grid apiArray={apiArray} setApiArray={setApiArray} setTopMoversFilter={setTopMoversFilter} topMoversFilter={topMoversFilter} setTopLosersFilter={setTopLosersFilter} topLosersFilter={topLosersFilter} setTopRisersFilter={setTopRisersFilter} topRisersFilter={topRisersFilter}/>
        <p></p>
      <Table apiArray={apiArray} setApiArray={setApiArray} />
    </div>
  );
}

export default App;
