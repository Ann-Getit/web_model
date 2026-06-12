import "./RestEvent.css";


const RestEvent = () => {



    return (
        <>
        <h1 className="head2">OUR EVENTS</h1>
        <div className="cont1">
 



        <div className="derde">
        <div className="box1">
        <h1>Restaurant Souk West</h1>
        <hr />
        <p>Location: westplein 35 </p>
        <p>We have dj on friday from 19:00 till 23:00. Oyster wil be €2,- each! dont mis it!</p>
        <p>Make a reservation here</p>
        </div>
        <div
  className="event-image"
  style={{ backgroundImage: "url('/pics/firstevent.jpg')" }}
></div>
</div>




<div className="derde">
<div className="box2">
    <h1>Restaurant Souk Noord</h1>
    <hr />
    <p>Location: noordstraat 540</p>
    <p>performance from Olivia on saturday from 19:00 till 20:30. come and get first drink from the house! </p>
    <p>make a reservation here</p>
</div>
<div
  className="event-image2"
  style={{ backgroundImage: "url('/pics/secondevent.jpg')" }}
></div>
</div>




<div className="derde">
<div className="box3">
    <h1> Souk Noord</h1>
    <hr />
    <p>Location: Areastraat 535</p>
    <p>Perfect location to book your events. it can be a birthday party, staffpartys and weddings</p>
    <p>We have multiple venue where you can choose from</p>
    <p>contact us for further information towards or events plan all inclusive and exclusives</p>
</div>
<div
  className="event-image3"
  style={{ backgroundImage: "url('/pics/derdeevent.jpg')" }}
></div>
</div>
        </div>
        </>
    );
};
export default RestEvent;