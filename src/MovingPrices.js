import React from 'react';

const MovingPrices = ({apiArray}) => {
  const tableArray = apiArray.sort((a,b) => a.market_cap_rank - b.market_cap_rank);
  let color = ''
  return (



    <div class='navbar pricesNavbar bg-dark'>
          {tableArray.map((item, index) => { 
            if (item.price_change_percentage_24h < 0) {
              color = 'red';
            } else if (item.price_change_percentage_24h > 0) {
              color = 'green';
            }
            
            return <div class="pricesBox">
              <span class="spanOne">{item.symbol.toUpperCase()} </span>
              <span class="spanTwo" style={{color: color}}>{item.price_change_percentage_24h.toFixed(2)}%</span>
                </div> 
                })}
        
          </div>
        
        

  )
}

export default MovingPrices;