import { useState } from "react";
import "./App.css";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import DevApi from "./component/DevApi";
import Customer from "./component/Customer";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
function App() {
  const [isMenushown, setIsMenuShown] = useState(false);
  return (
    <div className="App">
      <Navbar isMenushown={isMenushown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenushown={isMenushown} />
      <Products />
      <DevApi />
      <Customer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
