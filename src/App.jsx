import './App.css';
import {useEffect, useState} from 'react';
import  data from "./data.json";
import Indexes from './components/Indexes/Indexes';
import Coins from './components/Coins/Coins';
function App() {
  const indexes_ = 1;
  const coins_ = 2;

  let [indexes, setIndexes] = useState([]);
  let [coins, setCoins] = useState([]);
  let [datum, setDatum] = useState([]);
  let [show, setShow] = useState(1)
  useEffect(() => {
    setIndexes(data["indexes"]);
    setDatum(data['indexes'])
    // fetch("https://api.coingecko.com/api/v3/indexes/")
    //               .then((res) => res.json())
    //               .then((json) => {
    //                 setIndexes(json);
    //               })
    setCoins(data["coins"]);
    // fetch("https://api.coingecko.com/api/v3/indexes/")
    //               .then((res) => res.json())
    //               .then((json) => {
    //                 setIndexes(json);
    //})
  }, [])
  
  useEffect(()=>{
    if(show===indexes_){
      setDatum(indexes)
    }else if(show === coins_){
      setDatum(coins)
    }
  },[show, indexes, coins])

  return (
    <div className="App">
      <button onClick={()=>setShow(indexes_)}>indexes</button>
      <button onClick={()=>setShow(coins_)}>coins</button>
      {show===indexes_ && <Indexes data={datum}/>}
      {show===coins_  && <Coins data={datum}/>}
    </div>
  );
}

export default App;
