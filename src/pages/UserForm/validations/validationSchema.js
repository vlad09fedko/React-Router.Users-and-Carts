import * as Yup from 'yup';

export default Yup.object().shape({
  firstName: Yup.string().trim().required('First name is a required field.'),
  lastName: Yup.string().trim().required('Last name is a required field.'),
  email: Yup.string().trim().required('Email is a required field.').email(),
  phone: Yup.string()
    .trim()
    .min(7, 'Minimum phone number length is 7 characters.')
    .max(16, 'Maximum phone number length is 16 characters'),
  address: Yup.object().shape({
    city: Yup.string().trim(),
    state: Yup.string().trim(),
    postalCode: Yup.string().trim(),
  }),
});
