
import './App.css';

import Login from './component/Login';
import { Routes, Route } from "react-router-dom"
import Home from './component/Home';
import Register from './component/Register';
import HowTread from './component/HowTread';
import TreadDaily from './component/TreadDaily';
import Next from './hostar/Next';
import Like from './hostar/Like';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/howtread" element={<HowTread />} />
        <Route path='/tread' element={<TreadDaily />} />
        <Route path="/like" element={<Like />} />
        <Route path="/next" element={<Next />} />
      </Routes>




    </div>
  );
}

export default App;
