import { NavLink, Route, Routes } from 'react-router';
import { Button, ButtonGroup, Card, Typography } from '@mui/material';

import { useDeleteUserMutation } from '@/entities/users/api/userApi';

import UserForm from '@/pages/UserForm/ui/UserForm';

import style from '../styles/userCard.module.css';

function UserCard({ user: { image, firstName, lastName, id } }) {
  const [deleteUser] = useDeleteUserMutation();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0.5em',
        textAlign: 'center',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
      }}>
      <img src={image} alt='avatar' className={style['user-card-img']} />
      <Typography>
        {firstName} {lastName}
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant='outlined'
          color='info'
          component={NavLink}
          to={`/users/${id}`}>
          Edit
        </Button>
        <Button variant='outlined' color='error' onClick={() => deleteUser(id)}>
          Delete
        </Button>
      </ButtonGroup>
      <Routes>
        <Route path='/:id' element={<UserForm />} />
      </Routes>
    </Card>
  );
}

export default UserCard;
