import React from 'react'

function Coins({data}) {
  return (
      <div>
    <div>Coins</div>
    {data.map(a=>
      <div key={a['name']}>
          <div>{JSON.stringify(a)}</div>
            <div>{a['id']},{a['symbol']},{a['name']}</div>
        </div>)} 
    </div>
  )
}

export default Coins