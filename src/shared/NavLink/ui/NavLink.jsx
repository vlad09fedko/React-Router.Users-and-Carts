import { NavLink } from 'react-router';
import { Typography } from '@mui/material';

import styles from '../styles/navLink.module.css';

export default function ({ text, ...props }) {
  return (
    <NavLink
      className={styles.link}
      {...props}
      style={({ isActive }) => ({
        border: '2px dashed #1976d2',
        borderRadius: '1.5em',
        padding: '0.5em 2.5em',
        maxWidth: 'fit-content',
        textDecoration: 'none',
        transition: '0.3s',
        color: 'black',
        backgroundColor: isActive ? '#f0f0f0' : '#ffffff',
      })}>
      <Typography variant='h6'>{text}</Typography>
    </NavLink>
  );
}
