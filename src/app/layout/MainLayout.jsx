import { Outlet } from 'react-router';
import { Stack } from '@mui/material';

import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

function MainLayout() {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Header />
      <NavBar />
      <Stack sx={{ flex: 1 }}>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
}

export default MainLayout;
