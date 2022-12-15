import { MUIRLT } from '@app/MUIRLT';
import { AppRouter } from '@appRouter';
import { AddSet } from '@pages/collections';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/conected/login/Login';
//import { AddOrder } from './pages/addOrder/AddOrder';
// import { ShowDresses } from '@/pages/dresses';;
//import { TopNav } from '@pages/index';
import { AddUser } from '@pages/users/addUser/AddUser';
import { TopNav } from '@pages/topNav/TopNav';
import { prefixer } from "stylis";
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { EditUser } from '@pages/users';
import { Register } from '@pages/conected';

function App() {

   const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
  return (
    <div className="App">
      <CacheProvider value={cacheRtl}>
        <TopNav/>
        <AppRouter></AppRouter>
      </CacheProvider>
    </div>
  );
}

export default App;
