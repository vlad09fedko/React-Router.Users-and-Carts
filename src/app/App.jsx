import { Route, Routes } from 'react-router';
import MainLayout from './MainLayout';

import Home from '@/pages/Home/ui/Home';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/Carts' element={<Home />}></Route>
        <Route path='/Carts/:id' element={<Home />}></Route>
        <Route path='/Users' element={<Home />}></Route>
        <Route path='/Users/:id' element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
