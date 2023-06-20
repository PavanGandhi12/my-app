import logo from './logo.svg';
// import logo from './logo.svg';
import './App.css';
import ProductList from './Components/Productlist';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
   
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="productdetails/:id" element={<ProductDetails />} />
      </Routes>

    </>
    
  );
}

export default App;