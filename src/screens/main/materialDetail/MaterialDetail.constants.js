export const NAMESPACE = 'screens.main.materialDetail';
import * as Yup from 'yup';

export const MATERIAL_DETAIL_SCHEME = Yup.object().shape({
  quantity: Yup.number('Please enter number'),
  note: Yup.string()
    
  });
