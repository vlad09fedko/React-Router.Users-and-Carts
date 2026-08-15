import { Outlet } from 'react-router';

import Footer from '../widgets/Footer/ui/Footer';
import Header from '../widgets/Header/ui/Header';

function MainLayout() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
