import { Grid } from '@mui/material';

import { useGetAllUsersQuery } from '@/entities/users/api/userApi';

import UserCard from '@/widgets/UserCard/ui/UserCard';

function Users() {
  const { data, isLoading } = useGetAllUsersQuery();
  const users = data?.users ?? [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: '95%',
        margin: 'auto',
      }}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </Grid>
  );
}

export default Users;
