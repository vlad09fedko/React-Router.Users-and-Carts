import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

function EditBtn({ id }) {
  const navigate = useNavigate();

  const onEditBtn = e => {
    e.stopPropagation();
    navigate(`/users/${id}`);
  };

  return (
    <Button onClick={onEditBtn} variant='outlined' color='info'>
      Edit
    </Button>
  );
}

export default EditBtn;
