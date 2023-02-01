import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} 

from 'react-router-dom'
import Home from "./screens/Home";
import About from "./screens/About";
import Product from "./screens/Product";

function App() {
  return (
   <Router>
    
    <Routes>
    <Route />
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Product" element={<Product/>}/>
    </Routes>
   </Router>
  );
}

export default App;
