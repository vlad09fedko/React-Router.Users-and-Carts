import { useNavigate, useParams } from 'react-router';
import { Button, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

import { useGetSingleUserQuery, useUpdateUserMutation } from '@/entities/user';
import validationSchema from '../model/validationSchema';

import { InputStack } from '@/shared/InputStack';

import styles from '../styles/userForm.module.css';

function UserForm() {
  const [updateUser] = useUpdateUserMutation();

  const navigate = useNavigate();

  const { id } = useParams();
  const { data: user, isLoading } = useGetSingleUserQuery(id);

  if (isLoading)
    return (
      <Typography variant='h3' align='center' sx={{ padding: '1em' }}>
        Loading...
      </Typography>
    );

  const submitForm = async values => await updateUser(values).unwrap();

  const buttonStyles = {
    width: '30%',
  };

  const renderForm = ({ isValid }) => (
    <Form className={styles['user-form']}>
      <fieldset>
        <legend>Name</legend>
        <InputStack label='First name' name='firstName' required />
        <InputStack label='Last name' name='lastName' required />
      </fieldset>

      <fieldset>
        <legend>Contact</legend>
        <InputStack label='Email' name='email' required />
        <InputStack label='Phone' name='phone' required />
      </fieldset>

      <fieldset>
        <legend>Address</legend>
        <InputStack label='City' name='address.city' />
        <InputStack label='State' name='address.state' />
        <InputStack label='Postal code' name='address.postalCode' />
      </fieldset>

      <Stack
        direction='row'
        sx={{
          justifyContent: 'space-around',
        }}>
        <Button
          disabled={!isValid}
          variant='contained'
          sx={buttonStyles}
          color='success'
          type='submit'>
          Save
        </Button>
        <Button
          variant='contained'
          sx={buttonStyles}
          onClick={() => navigate(-1)}
          type='button'>
          Return
        </Button>
        <Button
          variant='contained'
          sx={buttonStyles}
          color='error'
          type='reset'>
          Reset
        </Button>
      </Stack>
    </Form>
  );

  return (
    <Formik
      initialValues={user}
      onSubmit={submitForm}
      validationSchema={validationSchema}
      enableReinitialize>
      {renderForm}
    </Formik>
  );
}

export default UserForm;
