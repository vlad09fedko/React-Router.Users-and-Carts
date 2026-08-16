import { useNavigate } from 'react-router';
import { ButtonGroup, Card, Typography } from '@mui/material';

import DeleteBtn from '@/features/delete-user/ui/DeleteBtn';
import EditBtn from '@/features/edit-user/ui/EditBtn';

import style from '../styles/userCard.module.css';

function UserCard({ user: { image, firstName, lastName, id } }) {
  const navigate = useNavigate();
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
        <EditBtn id={id}></EditBtn>
        <DeleteBtn id={id}></DeleteBtn>
      </ButtonGroup>
    </Card>
  );
}

export default UserCard;
