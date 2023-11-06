'use client';

import { type i18n as i18nInterface } from 'i18next';
import { type ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

import initTranslations from '~/app/i18n';

let i18n: i18nInterface;

export default function TranslationsProvider({
    children,
    locale,
    namespaces,
}: {
    children: ReactNode;
    locale: string;
    namespaces: string[];
}) {
    const [instance, setInstance] = useState(i18n);

    useEffect(() => {
        const init = async () => {
            if (!i18n) {
                const newInstance = await initTranslations(locale, namespaces);
                i18n = newInstance;
                setInstance(newInstance);
            } else {
                if (i18n.language !== locale) {
                    await i18n.changeLanguage(locale);
                }
            }
        };

        void init();
    }, [locale, namespaces]);

    if (!instance) {
        return null;
    }

    return (
        <I18nextProvider i18n={instance} defaultNS={namespaces[0]}>
            {children}
        </I18nextProvider>
    );
}
