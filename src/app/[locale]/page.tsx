import Link from 'next/link';
import TranslationsProvider from '~/components/translations-provider';
import initTranslations from '~/i18n';
import { getServerAuthSession } from '~/server/auth';

const i18nNamespaces = ['home'];

export default async function Home({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const session = await getServerAuthSession();
    const { t } = await initTranslations(locale, i18nNamespaces);

    if (!session) {
        return (
            <TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
                <main className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

                    <Link
                        href="/api/auth/signin"
                        className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-black transition duration-300"
                    >
                        {t('login')}
                    </Link>
                </main>
            </TranslationsProvider>
        );
    }

    return (
        <TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
            <main className="flex items-center justify-center flex-1">
                <Link
                    href={`${locale}/voucher`}
                    className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-black transition duration-300"
                >
                    {t('create_voucher')}
                </Link>
            </main>
        </TranslationsProvider>
    );
}
