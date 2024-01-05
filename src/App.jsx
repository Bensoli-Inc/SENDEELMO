import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import './App.css'
import Contact from "./components/Contact/Contact";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";


function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <div className="white-gradient" />
      </div>
        <Home />
        <Contact />
        <Services />
        <Booking />
        <Footer />
      </div>
  );
}

export default App;
