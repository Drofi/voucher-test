import { type Config } from 'next-i18n-router/dist/types';

const i18nConfig: Config = {
    locales: ['en', 'ua'],
    defaultLocale: 'en',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    routingStrategy: 'dynamicSegment',
};

export default i18nConfig;
