import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import * as english from './translations/en.json';
import * as spanish from './translations/es.json';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: callback => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: english,
      },
      es: {
        translation: spanish,
      },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
