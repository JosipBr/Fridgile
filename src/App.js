import logo from './logo.svg';
import './App.css';
import Recipes from './pages/Recipes';
import { Route, Routes } from 'react-router-dom';
import Breakfast from './pages/Breakfast/Breakfast';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Recipes />} />
      <Route path='/breakfast' element={<Breakfast />}></Route>
    </Routes>
    
  );
}

export default App;
