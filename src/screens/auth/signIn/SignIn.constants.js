export const NAMESPACE = 'scenes.main.signIn';
import * as Yup from 'yup';

export const SIGNIN_FORM_SCHEME = Yup.object().shape({
  staffID: Yup.string()
    .min(
      8,
      'Staff ID must have at least 8 characters',
    )
    .required(
      'Staff ID is required',
    ),
  });
