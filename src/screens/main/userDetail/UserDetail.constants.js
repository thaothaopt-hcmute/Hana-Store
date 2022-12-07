export const NAMESPACE = 'screens.main.userDetail';
import * as Yup from 'yup';

export const USER_DETAIL_SCHEME = Yup.object().shape({
  fullname: Yup.string(),
  dob: Yup.date(),
  });