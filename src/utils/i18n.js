import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from '../i18n/en';
import vi from '../i18n/vi';
import ja from '../i18n/ja';


const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageCode;
  console.log(locales[0]);
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  vi,
  ja
};
export const getString = (param, mapObj) => {
  if (mapObj) {
    return I18n.t(param, mapObj);
  }
  return I18n.t(param);
};

export default I18n;
