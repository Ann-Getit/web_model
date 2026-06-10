import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Menukaart from "./pages/Menukaart";
import RestEvent from "./pages/RestEvent";
import Home from "./pages/Home";
import Footer from "./Footer";
import ScrollManager from "./ScrollManager.jsx";


function App() {


  return (
    <>

     <Nav />


    <main className="content">
     <Routes>
      <Route path="/" element={<Navigate to="/home" replace/>} />
     <Route path="/home" element={<Home />} />
     <Route path="/menukaart" element={<Menukaart />} />
     <Route path="/restevent" element={<RestEvent />} />
     </Routes>
    </main>
     {/*<Route path="/" element={<Web />} />*/}
     <Footer />
     </>
  );
}

export default App;
