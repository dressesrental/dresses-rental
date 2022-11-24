import { MUIRLT } from '@app/MUIRLT';
import { AppRouter } from '@appRouter';
import { AddSet } from '@pages/stock';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/conected/login/Login';
//import { AddOrder } from './pages/addOrder/AddOrder';
// import { ShowDresses } from '@/pages/dresses';;
//import { TopNav } from '@pages/index';
import { AddUser } from '@pages/users/addUser/AddUser';




// c:/Users/This_user/Downloads/dresses-rental-master/pp/dresses-rental/client/src/pages/dresses/index
// c:/Users/This_user/Downloads/dresses-rental-master/pp/dresses-rental/client/src/pages/dresses/index

function App() {

  return (
    <div className="App">
      {/* <TopNav /> */}
      <Routes>
        {/* <Route path='/' element={<Login />}></Route> */}
        <Route path='/addUser' element={<AddUser/>}/>
        {/* <Route path='/showDresses' element={<ShowDresses />}></Route>
        <Route path='/addOrder' element={<AddOrder/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
