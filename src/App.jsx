import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import './App.css'
import Partners from "./components/Partners/Partners";
import Contact from "./components/Contact/Contact";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Home /> 
      </div>
      <Partners />
      <Contact />
      <Booking />
      <Footer />

    </div>
  );
}

export default App;
