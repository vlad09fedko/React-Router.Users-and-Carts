import { Route, Routes } from 'react-router';
import MainLayout from './MainLayout';

import { Home } from '@/pages/Home/';
import { UsersList } from '@/pages/UsersList/';
import { UserForm } from '@/pages/UserForm/';
import { CartsList } from '@/pages/CartsList/';
import { Cart } from '@/pages/Cart/';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path='/' element={<Home />} />
        <Route path='/users' element={<UsersList />} />
        <Route path='/users/:id' element={<UserForm />} />
        <Route path='/carts' element={<CartsList />} />
        <Route path='/carts/:id' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
