import { Button } from '@mui/material';

import { useDeleteUserMutation } from '@/entities/user/api/userApi';

function DeleteBtn({ id }) {
  const [deleteUser] = useDeleteUserMutation();

  const onDeleteBtn = e => {
    e.stopPropagation();
    deleteUser(id).unwrap();
  };

  return (
    <Button variant='outlined' color='error' onClick={onDeleteBtn}>
      Delete
    </Button>
  );
}

export default DeleteBtn;
