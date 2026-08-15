import { Stack } from '@mui/material';

import NavLink from '@/shared/NavLink/ui/NavLink';

function NavBar() {
  return (
    <Stack
      direction='row'
      sx={{
        justifyContent: 'center',
        gap: '3em',
        padding: '1em',
      }}>
      <NavLink text='Home' to='/' />
      <NavLink text='Carts' to='/carts' />
      <NavLink text='Users' to='/users' />
    </Stack>
  );
}

export default NavBar;
