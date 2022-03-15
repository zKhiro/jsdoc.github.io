import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    home: {
      slogan: 'Document your code.',
    },
  },
};

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
