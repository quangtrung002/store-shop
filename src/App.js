import './App.css'
import "./responsive.css"
import Navbar from "./navbar/Navbar";
import Sliders from './footers/slider/Sliders';
import Heading from './footers/footer/Heading';
import Footer from './footers/footer/Footer';
import Container from './container/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createContext, useEffect, useState } from 'react';
const ThemeContext = createContext()

function App() {
  const [data, setData] = useState(null)
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [])
  
  return (
    <ThemeContext.Provider value={[data, cart, setCart]}>
      <main>
        <div className="grid wide">
          <header>
            <Navbar />
          </header>
        </div>
        <>
          <Container />
        </>
        <div className="grid wide">
          <footer>
            <Sliders />
          </footer>
        </div>
        <footer>
          <Heading />
          <Footer />
        </footer>
      </main>
    </ThemeContext.Provider>
  );
}
export { ThemeContext }
export default App;
