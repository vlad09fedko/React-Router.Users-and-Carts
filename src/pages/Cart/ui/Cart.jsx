import { useParams } from 'react-router';
import { List, ListItem, Typography } from '@mui/material';

import { useGetSingleCartQuery } from '@/entities/cart/api/cartApi';

import styles from '../styles/cart.module.css';

function Cart() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCartQuery(id);
  const products = data?.products ?? [];
  if (isLoading)
    return (
      <Typography variant='h3' align='center' sx={{ padding: '1em' }}>
        Loading...
      </Typography>
    );

  return (
    <List
      sx={{
        border: '2px dashed #1976d2',
        borderRadius: '5em',
        width: 'fit-content',
        margin: '0 auto',
        padding: '1em 5em',
      }}>
      {products.map(({ id, title, price, quantity }) => (
        <ListItem key={id} className={styles.cart}>
          <Typography sx={{ margin: 'auto' }}>
            Title - <span>{title}</span> | Quantity - <span>{quantity}</span> |
            Price - <span>{price}</span> $
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

export default Cart;
