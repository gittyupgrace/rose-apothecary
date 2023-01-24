import './index.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import StoreFront from './components/StoreFront';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Nav />
      <Header />

      <Routes>
        <Route path="/" element={<StoreFront />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;