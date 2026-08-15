import { Outlet } from 'react-router';
import { Stack } from '@mui/material';

import Footer from '@/widgets/Footer/ui/Footer';
import Header from '@/widgets/Header/ui/Header';
import NavBar from '@/widgets/NavBar/ui/NavBar';

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
