
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { ShowDresses } from './pages/showDresses/ShowDresses';
import { AddOrder } from './pages/addOrder/AddOrder';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/showDresses' element={<ShowDresses />}></Route>
        <Route path='/addOrder' element={<AddOrder/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
