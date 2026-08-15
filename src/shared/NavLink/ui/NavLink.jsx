import { NavLink } from 'react-router';
import { Typography } from '@mui/material';

export default function ({ text, ...props }) {
  return (
    <NavLink
      {...props}
      style={({ isActive }) => ({
        border: '2px solid black',
        borderRadius: '5em',
        padding: '0.5em 1.5em',
        maxWidth: 'fit-content',
        textDecoration: 'none',
        color: isActive ? 'green' : 'red',
      })}>
      <Typography variant='h6'>{text}</Typography>
    </NavLink>
  );
}
