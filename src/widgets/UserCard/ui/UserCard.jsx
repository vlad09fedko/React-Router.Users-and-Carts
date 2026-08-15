import { useNavigate } from 'react-router';
import { Button, ButtonGroup, Card, Typography } from '@mui/material';

import { useDeleteUserMutation } from '@/entities/users/api/userApi';

import style from '../styles/userCard.module.css';

function UserCard({ user: { image, firstName, lastName, id } }) {
  const navigate = useNavigate();
  const [deleteUser] = useDeleteUserMutation();

  const onDeleteBtn = e => {
    e.stopPropagation();
    deleteUser(id);
  };

  const onEditBtn = e => {
    e.stopPropagation();
    navigate(`/users/${id}`);
  };

  return (
    <Card
      onClick={() => navigate(`/carts/${id}`)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0.5em',
        textAlign: 'center',
        cursor: 'pointer',
        transition: '0.3s',
        textDecoration: 'none',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
      }}>
      <img src={image} alt='avatar' className={style['user-card-img']} />
      <Typography>
        {firstName} {lastName}
      </Typography>
      <ButtonGroup fullWidth>
        <Button onClick={onEditBtn} variant='outlined' color='info'>
          Edit
        </Button>
        <Button variant='outlined' color='error' onClick={onDeleteBtn}>
          Delete
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default UserCard;
