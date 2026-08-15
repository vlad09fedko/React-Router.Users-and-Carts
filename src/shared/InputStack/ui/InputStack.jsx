import { Stack, TextField } from '@mui/material';
import { ErrorMessage, useField } from 'formik';

import styles from '../styles/inputStack.module.css';

function InputStack({ label, name, required = false }) {
  const [field] = useField(name);
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        gap: '5em',
        justifyContent: 'space-between',
      }}>
      <label htmlFor={name} className={styles['input-label']}>
        {label}
      </label>
      <Stack direction='column'>
        <TextField
          {...field}
          id={name}
          required={required}
          sx={{ width: '20em' }}
        />
        <ErrorMessage name={name} className={styles['error']}>
          {error => <span className={styles.error}>{error}</span>}
        </ErrorMessage>
      </Stack>
    </Stack>
  );
}

export default InputStack;
