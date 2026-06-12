import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {

const [open, setOpen] = useState(false);
const [, setWorkOpen] = useState(false);
const navRef = useRef(null);
const [navHeight, setNavHeight] = useState(0);


useEffect(() => {
    if (navRef.current) { 
      setNavHeight(navRef.current.offsetHeight);
    }


    const handleResize = () => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
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

        <button onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth"
          });
           setOpen(false);
           }}>
           Contact
        </button>
          {/*<li><Link to="#contact">Contact</Link></li>*/}
       </ul> {/* in footer.jsx moet ik  <section id="contact"> -----------------*/}
        {/* Hamburger voor mobiel */} 
      <div className="hamburger" onClick={() => setOpen(!open)}>
        &#9776; 
      </div> 



{/* Mobile overlay */}
      <ul className={`nav-links mobile ${open ? "open" : ""}`}
      style={{
    top: navHeight + "px",
    height: `calc(100vh - ${navHeight}px)`}}>
      
        <li><Link to="/home" onClick={() => { setOpen(false); window.scrollTo({top: 0, behavior: "smooth",});}}>Home</Link></li>

        <li><Link to="/menukaart" onClick={() => { setOpen(false); window.scrollTo({top: 0, behavior: "smooth",});}}>Menu</Link></li>

        <li><Link to="/restevent" onClick={() => { setOpen(false); window.scrollTo({top: 0, behavior: "smooth",});}}>Restaurant & Events</Link></li>
        
        <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
    setOpen(false);
  }}
>
  Contact
</button>
      </ul>
      {/*.   {/* overlay achtergrond bij mobiel */}
      {/* {open && <div className="overlay" onClick={() => setOpen(false)} />}
 */}

      </nav>
    </>
);
};
export default Nav;