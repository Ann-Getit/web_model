import "./Home.css";
import soups from "../assets/soups.jpg";
import hoofdgerechten from "../assets/hoofdgerechten.jpg";
import sweets from "../assets/sweets.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {

    useEffect(() => {
        document.getElementById("root").classList.add("home-bg");
    
    return () => {
        document.getElementById("root").classList.remove("home-bg");
    };
}, []);

     {/*} const hash = window.location.hash;

  if (hash) {
    document.querySelector(hash)?.scrollIntoView({
      behavior: "smooth",
    });
  }*/}

   return (
        <>
    
        <div className="content1">
         <h1 className="head">Restaurant Souk </h1>
</div>


<div className="fotoalbum">
<div className="foto">
    <img src={soups} alt="gerecht 1" />
    <img src={hoofdgerechten} alt="gerecht 3" />
    <img src={sweets} alt="gerecht 2" />
</div>
</div>

<div className="deel2">
    <div className="lastc">
<div className="about">
    <hr />
    <p>hallo</p>
    <p>Souk Restaurant exist already 5 years. We started at de noord location and expanded 2 years later.</p>
    <p>.</p>
    <p>come and enjoy our delicious food and vibe </p>
    <p></p>
    <hr />
</div>

<div className="reserveren">
    <hr />
<p>hallo</p>
<p> here i was thinking about making a reservation block</p>
<p>for guest to make a reservation as soon they enter this website</p>
<p>to cancel or change reservation time call to the given telnummer ..
</p>

<hr />
</div>
</div>

</div>


        </>
    );
};
export default Home;