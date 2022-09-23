import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import en from './en';
import fr from './fr';
import sp from './sp';

// Set the key-value pairs for the different languages you want to support.
const translations = {
    en: en,
    fr: fr,
    sp: sp,
};

const i18n = new I18n(translations);

i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
i18n.defaultLocale = 'fr';

function translate(name: string) {
    return i18n.t(name);
}

export { translate };
