import { CircularProgress } from '@mui/material';

function Spinner() {
  return <CircularProgress aria-label='Loading…' size='10rem' sx={{margin:'auto'}} />;
}

export default Spinner;
