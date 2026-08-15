import { Route, Routes } from 'react-router';
import MainLayout from './MainLayout';

import Cart from '@/pages/Cart/ui/Cart';
import CartsList from '@/pages/CartsList/ui/CartsList';
import Home from '@/pages/Home/ui/Home';
import UserForm from '@/pages/UserForm/ui/UserForm';
import UsersList from '@/pages/UsersList/ui/UsersList';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path='/' element={<Home />} />
        <Route path='/carts' element={<CartsList />} />
        <Route path='/carts/:id' element={<Cart />} />
        <Route path='/users' element={<UsersList />} />
        <Route path='/users/:id' element={<UserForm />} />
      </Route>
    </Routes>
  );
}

export default App;
