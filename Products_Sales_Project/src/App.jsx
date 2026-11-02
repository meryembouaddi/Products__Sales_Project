import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Accueil from './Accueil';
import Products from './Products';
import Contact from './Contact';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}