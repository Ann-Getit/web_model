import { useEffect } from "react";
import "./Menukaart.css";


const Menukaart = () => {

    
  
    function initialize()
        { 
            
            //api kan je alleen terug halen met JSON. $.getJSON
            //ipa voor elke vak. achteraan moet de 'show{naam van function' invoeren
       

    fetch("https://xanderwemmers.nl/api/restaurant/starters")
    .then((response) => response.json())
    .then((data) => showStarters(data));

  fetch("https://xanderwemmers.nl/api/restaurant/mains")
    .then((response) => response.json())
    .then((data) => showMains(data));

  fetch("https://xanderwemmers.nl/api/restaurant/desserts")
    .then((response) => response.json())
    .then((data) => showDesserts(data));

  fetch("https://xanderwemmers.nl/api/restaurant/drinks")
    .then((response) => response.json())
    .then((data) => showDrinks(data));
}


        //todo: desserts en drinks

        function showStarters(data) //hier zet je de id naam aan en activeer je de show{functie/id naam} 
        // wat in de () zit is net als variabel
        {
            showItems(data, 'starters');//hier plaats je de ipa/data in de showItems {showItems waar je uiteindelijk specifieke data uitgaat halen} 
        }

        function showMains(data) 
        {
            showItems(data, 'mains');
        }

        function showDesserts(data)
        {
            showItems(data, 'desserts');
        }

         function showDrinks(data)
        {
            showItems(data, 'drinks');
        }

        function showItems(data, id) 
        {

            var html = ''; //blanco omdat de value veranderd

            for (var item of data)//voor {loop var item} is en specifieke item en data is alle items die er zijn. wel handig een voor loop voor als je uit meerdere datas telkens 1 item eruit wil halen. 
        {
            html += `<div class="description">${item.Description}</div>`;
            html += `<div class="extra">${item.Extra}</div>`; // als je de teksten wilt stylen moet je dit doen.
            html += `<div class="price">&euro; ${item.Price.toFixed(2)}</div>`;
           //tml += `<div class="page">&euro${item.Page}</div>`;

        }
        document.getElementById(id).innerHTML = html;

        }
        
      useEffect(() => {
        document.getElementById("root").classList.add("home-bgr");

        initialize();

        return () => {
        document.getElementById("root").classList.remove("home-bgr");
    };
  }, []);

    return (
        <>

    <div className="div1">
    <h1 className="head">Souk Amsterdam</h1>
    <h2>Menu</h2>
    </div>

    <div id="content"> 
    <h3>Voorgerechten</h3>

    <div id="starters">Downloading...</div>

    <h3>Hoofdgerechten</h3>

    <div id="mains">Downloading...</div>

    <h3>Desserts</h3>

    <div id="desserts">Downloading...</div>

    <h3>Dranken</h3>

    <div id="drinks">Downloading...</div>
    </div>

        </>
    );
};
export default Menukaart;



