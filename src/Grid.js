import React, {useState, useEffect} from 'react';

const Grid = ({apiArray, setApiArray}) => {
  const [coinFilterSetting, setCoinFilterSetting] = useState('Top Movers');
  const topMovers = apiArray.sort((a,b) => a.price_change_percentage_24h - b.price_change_percentage_24h);

  useEffect (() => {
    setApiArray(apiArray.map(el => el.price_change_percentage_24h < 0 ? {...el, difference: el.price_change_percentage_24h *= -1,  } : {...el, difference: el.price_change_percentage_24h}));
  }, coinFilterSetting)

console.log(apiArray)
    if (coinFilterSetting === 'Top Movers') {
    apiArray.sort((a,b) => b.difference - a.difference);
  } else if (coinFilterSetting === 'Top Losers') {
    apiArray.sort((a,b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
  } else if (coinFilterSetting === 'Top Risers') {
    apiArray.sort((a,b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
  }

  return (
    <>
      <div class="container drow">
      <div class="dropdown">
    <button type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">
      Coin Filter
    </button>
    <ul class="dropdown-menu">
      <li class="dropdown-item" onClick={e => {setCoinFilterSetting('Top Movers'); }}><a class="dropdown-item" href="#">Top Movers</a></li>
      <li class="dropdown-item" onClick={e => {setCoinFilterSetting('Top Risers'); }}><a class="dropdown-item" href="#">Top Risers</a></li>
      <li class="dropdown-item" onClick={e => {setCoinFilterSetting('Top Losers'); }}><a class="dropdown-item" href="#">Top Losers</a></li>
    </ul>
  </div>
  <div>
    <span class="top">{coinFilterSetting}</span>
  </div>
    </div>
  <p></p>
    <div class="container grid">
      
        {apiArray.map((item, index)=> {
          let color = '';
          if (item.price_change_percentage_24h < 0) {
            color = 'red';
          } else if (item.price_change_percentage_24h > 0) {
            color = 'green';
          }

            
            if (index < 5) {
        return <>
        <div class="box col-2 bg-dark">
          <img class="imageBox col-11 m-2" src={item.image} alt={item.name}></img>
          <div class="spanDiv bg-dark">
            <span class="spanFirst bg-dark">{item.name}</span>
            <span class="perChange bg-dark" style={{color: color, fontWeight: 700,}}>{item.price_change_percentage_24h.toFixed(2)}%</span>
          </div>  
        </div>
        
        <div class="boxSpace"></div>
        
        </>}})}
    </div>
    </>
    )
}

export default Grid;