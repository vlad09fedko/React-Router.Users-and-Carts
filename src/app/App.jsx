import { Route, Routes } from 'react-router';
import MainLayout from './MainLayout';

import Carts from '@/pages/Carts/ui/Carts';
import Home from '@/pages/Home/ui/Home';
import Users from '@/pages/Users/ui/Users';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path='/' element={<Home />} />
        <Route path='/Carts' element={<Carts />} />
        <Route path='/Carts/:id' element={<Carts />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Users/:id' element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
