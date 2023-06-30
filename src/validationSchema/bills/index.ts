import * as yup from 'yup';

export const billValidationSchema = yup.object().shape({
  type: yup.string().required(),
  amount: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  bank_id: yup.string().nullable(),
});
