import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {

const [open, setOpen] = useState(false);
const [, setWorkOpen] = useState(false);
const navRef = useRef(null);


useEffect(() => {
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setWorkOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);



return (
    <>

     <nav ref={navRef} className="nav-container">

        <div className="logo">Souk</div>


        {/* Desktop links */}
      <ul className="nav-links desktop">

          <li><Link to="/home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth",})}>Home</Link></li> {/** inplaats van anchor href toch wel link to gebruiken zodat ik niet vast blijft in "project page" */}

          <li><Link to="/menukaart" onClick={() => window.scrollTo({ top: 0, behavior: "smooth",})}>Menu</Link></li> {/** hover voor de nav links */}
          
          <li><Link to="/restevent" className="changebtn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth",})}>Restaurant & Events</Link></li> 

          <a href="#contact">Contact</a>
          {/*<li><Link to="#contact">Contact</Link></li>*/}
       </ul> {/* in footer.jsx moet ik  <section id="contact"> -----------------*/}
        {/* Hamburger voor mobiel */} 
      <div className="hamburger" onClick={() => setOpen(!open)}>
        &#9776; 
      </div> 



{/* Mobile overlay */}
      <ul className={`nav-links mobile ${open ? "open" : ""}`}>
        <li><Link to="/home" onClick={() => { setOpen(false); window.scrollTo({top: 0, behavior: "smooth",});}}>Home</Link></li>

        <li><Link to="/menukaart" onClick={() => { setOpen(false); window.scrollTo({top: 0, behavior: "smooth",});}}>Menu</Link></li>

        <li><Link to="/restevent" onClick={() => { setOpen(false); window.scrollTo({top: 0, behavior: "smooth",});}}>Restaurant & Events</Link></li>
        
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </ul>



      {/* overlay achtergrond bij mobiel */}
       {open && <div className="overlay" onClick={() => setOpen(false)} />}


      </nav>




    {/* 1. HOME is Web.jsx */}
    {/* 4. Menukaart.jsx */}
    {/* 2. Restaurants/events.  RestEvent.jsx */}
    {/* 3. contact/openingstijden Contact.jsx ?*/}
   
    </>
);
};
export default Nav;