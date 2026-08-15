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
        <Route path='/Carts' element={<CartsList />} />
        <Route path='/Carts/:id' element={<Cart />} />
        <Route path='/Users' element={<UsersList />} />
        <Route path='/Users/:id' element={<UserForm />} />
      </Route>
    </Routes>
  );
}

export default App;
