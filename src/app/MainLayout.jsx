import { Outlet } from 'react-router';

import Footer from '@/widgets/Footer/ui/Footer';
import Header from '@/widgets/Header/ui/Header';
import NavBar from '@/widgets/NavBar/ui/NavBar';

function MainLayout() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
