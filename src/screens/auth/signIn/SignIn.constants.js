export const NAMESPACE = 'scenes.main.signIn';
import * as Yup from 'yup';

export const SIGNIN_FORM_SCHEME = Yup.object().shape({
    username: Yup.string()
    .min(
      8,
      'Username must have at least 8 characters',
    )
    .required(
      'Username is required',
    ),
  });
