import i18n from 'i18next';
import english from './english.json';
import spanish from './spanish.json';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: english,
        es: spanish,
    },
    lng: 'en',
    compatibilityJSON: 'v3',
    react: {
        useSuspense: false,
    },
});

export default i18n;
