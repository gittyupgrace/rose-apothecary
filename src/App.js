import './index.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import StoreFront from './components/StoreFront';
import Footer from './components/Footer';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleClick = () => {
    setShowCart(!showCart);
  }

  return (
    <>
      <Nav handleClick={handleClick} showCart={showCart} />
      <Header />
      <StoreFront showCart={showCart} />
      <Footer />
    </>
  );
}

export default App;