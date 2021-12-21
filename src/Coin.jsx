// import { useEffect, useMemo, useState } from "react";

const Coin = ({ name, symbol }) => {
  console.log("👋 KDMLASKMDLASKDMLAKSmd:", name, symbol)

  return (
    <div className="card" id="token">
      <h1>We have a Coin!
      <br/> 
      {name} 
      <br/>
      Symbol:  ${symbol}</h1>
    </div>);
};

export default Coin;