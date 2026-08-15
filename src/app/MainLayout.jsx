import { Outlet } from 'react-router';
import { AppBar, Stack, Typography } from '@mui/material';

function MainLayout() {
  return (
    <>
      <AppBar>
        <Typography>HEADER</Typography>
      </AppBar>
      <Outlet />
      <Stack>
        <Typography>FOOTER</Typography>
      </Stack>
    </>
  );
}

export default MainLayout;
