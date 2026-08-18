import { NavLink } from 'react-router';
import { List, ListItem, Typography } from '@mui/material';

import { useGetAllCartsQuery } from '@/entities/cart';

import { Spinner } from '@/shared/Spinner';

import styles from '../styles/cartsList.module.css';

function CartsList() {
  const { data, isLoading } = useGetAllCartsQuery();
  const carts = data?.carts ?? [];

  if (isLoading) return <Spinner />;

  return (
    <List
      sx={{
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
      }}>
      {carts.map(({ id, total }) => (
        <NavLink to={`/carts/${id}`} key={id} className={styles.link}>
          <ListItem
            sx={{
              border: '2px dashed #1976d2',
              borderRadius: '1em',
              padding: '1em 10em',
              transition: '0.3s',
              cursor: 'pointer',
              color: 'black',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}>
            <Typography>
              Cart #{id} Total - {total} $
            </Typography>
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}

export default CartsList;
