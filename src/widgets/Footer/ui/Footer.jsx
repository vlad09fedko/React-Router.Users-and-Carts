import { Stack, Typography } from '@mui/material';

function Footer() {
  return (
    <Stack
      sx={{
        flexGrow: 1,
        textAlign: 'center',
        boxShadow:
          '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
        backgroundColor: '#1976d2',
        color: '#ffffff',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        minHeight: '2em',
      }}>
      <Typography variant='h6'>all rights reserved</Typography>
    </Stack>
  );
}

export default Footer;
