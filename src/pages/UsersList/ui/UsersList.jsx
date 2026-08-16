import { Grid, Typography } from '@mui/material';

import { useGetAllUsersQuery } from '@/entities/user';

import { UserCard } from '@/widgets/UserCard';

function Users() {
  const { data, isLoading } = useGetAllUsersQuery();
  const users = data?.users ?? [];

  if (isLoading)
    return (
      <Typography variant='h3' align='center' sx={{ padding: '1em' }}>
        Loading...
      </Typography>
    );

  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: '95%',
        margin: '0 auto',
      }}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </Grid>
  );
}

export default Users;
