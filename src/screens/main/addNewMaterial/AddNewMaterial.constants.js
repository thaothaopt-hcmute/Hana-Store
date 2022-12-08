export const NAMESPACE = 'screens.main.addNewMaterial';
import * as Yup from 'yup';

export const MATERIAL_ADD_NEW_SCHEME = Yup.object().shape({
  count: Yup.number('Please enter number').required('This field is required'),
  name: Yup.string().required('This field is required'),
  des: Yup.string().required('This field is required'),
  note: Yup.string().required('This field is required'),
  sample_image: Yup.string(),
  price: Yup.number().required('This field is required'),
});
