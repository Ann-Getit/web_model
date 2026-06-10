import "./Footer.css";

const Footer = () => {





    return (
        <>
        <footer className="deeleen" id="contact">
            <div className="whole">
         <div className="co">
             <h2>Contact</h2>
            <div className="opening-hours">
                <div className="row">
                <span>Email:</span>
                <span>soukrestaurant@example.com</span>
                </div>
                <div className="row">
                <span>Tel:</span>
                <span>0203948587</span>
                </div>
                <div className="row">
                <span>Faxnummer:</span>
                <span>824574293</span>
                </div>
                <div className="row">
                <span>instagram:</span>
                <span>SoukRestaurant</span>
                </div>
            </div>
            <br></br>
            <br></br>
            <h2>More</h2>
            <p>Blog</p>
            <p>Privacy</p>
            <p>Terms</p>
        </div>

        <div className="tijdenbox">
            <h2 className="tijd">Openingstijden:</h2>
            <div className="opening-hours">
                <div className="row">
                    <span>maandag</span>
                    <span>12:00  -  22:00</span>
                </div>
                <div className="row">
                    <span>dinsdag</span>
                    <span>12:00  -  22:00</span>
                </div>
                <div className="row">
                    <span>woensdag</span>
                    <span>12:00  -  22:00</span>
                </div>
                 <div className="row">
                    <span>donderdag</span>
                    <span>12:00  -  22:00</span>
                </div>
                 <div className="row">
                    <span>vrijdag</span>
                    <span>12:00  -  22:00</span>
                </div>
                 <div className="row">
                    <span>zaterdag</span>
                    <span>12:00  -  22:00</span>
                </div>
                 <div className="row">
                    <span>zondag</span>
                    <span>12:00  -  22:00</span>
                </div>
        
            </div>
        </div>
        </div>
    
        <div id="copyright">
              <hr />  
      <p id="bottom">© 2025 Souk Restaurant</p>
      </div>
        </footer>
 
        </>
    );
};

export default Footer;