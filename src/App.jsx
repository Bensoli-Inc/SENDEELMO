import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import './App.css'
import Contact from "./components/Contact/Contact";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import Back from "./components/back/back";

function App() {
  return (
    <div className="App">
      <div>
      
      <Header />
      <div className="white-gradient" />
      <Home />
    </div>
      <Back />
      <Contact />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
