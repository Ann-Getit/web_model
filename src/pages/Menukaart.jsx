import { useState, useEffect } from "react";
import "./Menukaart.css";



const Menukaart = () => {
    const [starters, setStarters] = useState([]);
    const [mains, setMains] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);


    function initialize()
        { 
    fetch("https://xanderwemmers.nl/api/restaurant/starters")
    .then(response => response.json())
    .then(data =>  setStarters(data));

  fetch("https://xanderwemmers.nl/api/restaurant/mains")
    .then(response => response.json())
    .then(data => setMains(data));

  fetch("https://xanderwemmers.nl/api/restaurant/desserts")
    .then(response => response.json())
    .then(data => setDesserts(data));

  fetch("https://xanderwemmers.nl/api/restaurant/drinks")
    .then(response => response.json())
    .then(data => setDrinks(data));

}
     
      useEffect(() => {


        
        initialize();

        document.getElementById("root").classList.add("home-bgr");


        return () => {
        document.getElementById("root").classList.remove("home-bgr");
    };
  }, [drinks]);
        
    return (
        <>

    <div className="div1">
    <h1 className="head">Souk Amsterdam</h1>
    <h2>Menu</h2>
    </div>

    <div id="content"> 
    <h3>Voorgerechten</h3>

        {starters.length === 0 ? (
  <div>Downloading...</div>
) : (
    starters.map(item => (
  <div key={item.ID}>
    <h4 className="description">{item.Description}</h4>
    <p className="extra">{item.Extra}</p>
    <p className="price">€{item.Price}</p>
  </div>
)))}




    <h3>Hoofdgerechten</h3>

        {mains.length === 0 ? (
  <div>Downloading...</div>
) : (
    mains.map(item => (
  <div key={item.ID}>
    <h4 className="description">{item.Description}</h4>
    <p className="extra">{item.Extra}</p>
    <p className="price">€{item.Price}</p>
  </div>
)))}





    <h3>Desserts</h3>

    {desserts.length === 0 ? (
  <div>Downloading...</div>
) : (
    desserts.map(item => (
  <div key={item.ID}>
    <h4 className="description">{item.Description}</h4>
    <p className="extra">{item.Extra}</p>
    <p className="price">€{item.Price}</p>
  </div>
)))}




    <h3>Dranken</h3>

{drinks.length === 0 ? (
  <div>Downloading...</div>
) : (
    drinks.map(item => (
  <div key={item.ID}>
    <h4 className="description">{item.Description}</h4>
    <p className="extra">{item.Extra}</p>
    <p className="price">€{item.Price}</p>
  </div>
)))}


    </div>

        </>
    );
};
export default Menukaart;



