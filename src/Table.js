import React, {useState} from 'react';

const Table = ({apiArray, setApiArray}) => {
    const tableArray = apiArray.sort((a,b) => a.market_cap_rank - b.market_cap_rank);

  return (<>
    <div class="container">
        <nav class='whiteNav bg-dark'>
            <div class="col-1 bg-dark"></div>
            <div class="imageTableHeader col-1 bg-dark"></div>
            <div class="imageTableHeader col-2 bg-dark">Coin</div>
            <div class="imageTableHeader col-1 bg-dark">Name</div>
            <div class="col-3 bg-dark"></div>
            <div class="imageTableHeader col-1 bg-dark">Price</div>
            <div class="col-1 bg-dark"></div>
            <div class="imageTableHeader col-1 bg-dark">% Change</div>
            <div class="col-1 bg-dark"></div>
        </nav>
        <div class="space"></div>
        {tableArray.map((item)=> {
            let color = '';
            if (item.price_change_percentage_24h < 0) {
              color = 'red';
            } else if (item.price_change_percentage_24h > 0) {
              color = 'green';
            }
            return <>
        <nav class='whiteNav'>
            <div class="col-1 bg-white"></div>
            <div class="imageColumn col-1 bg-white">
                <img class="coinImage" src={item.image} alt="coin"></img>
            </div>
            <div class="imageTable col-2">{item.name}</div>
            <div class="imageTable col-1">{item.symbol.toUpperCase()}</div>
            <div class="col-3 bg-white"></div>
            <div class="imageTable col-1">${item.current_price.toLocaleString(undefined, { maximumFractionDigits: 20 })}</div>
            <div class="col-1 bg-white"></div>
            <div class="imageTable col-1" style={{color: color, fontWeight: 700}}>{item.price_change_percentage_24h.toFixed(2)}%</div>
            <div class="col-1 bg-white"></div>
        </nav>
        <div class="space"></div>
        </>
        })}
    </div>
    <div class="bottom"></div>
    </>
  )
}

export default Table;