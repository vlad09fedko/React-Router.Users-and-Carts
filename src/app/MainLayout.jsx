import { Outlet } from 'react-router';
import { Stack } from '@mui/material';

import Footer from '@/widgets/Footer/ui/Footer';
import Header from '@/widgets/Header/ui/Header';
import NavBar from '@/widgets/NavBar/ui/NavBar';

function MainLayout() {
  return (
    <>
      <Header />
      <NavBar />
      <Stack sx={{ justifyContent: 'center' }}>
        <Outlet />
      </Stack>
      <Footer />
    </>
  );
}

export default MainLayout;
