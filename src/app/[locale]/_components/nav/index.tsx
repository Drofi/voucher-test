import Link from 'next/link';
import { LogOut } from '~/app/[locale]/_components/nav/log-out';
import { UserInfo } from '~/app/[locale]/_components/user-info';
import initTranslations from '~/i18n';
import { getServerAuthSession } from '~/server/auth';

const i18nNamespaces = ['nav'];
export default async function Navigation({ locale }: { locale: string }) {
    const session = await getServerAuthSession();
    const { t } = await initTranslations(locale, i18nNamespaces);

    return (
        <nav className="bg-gray-900 px-4 py-2 flex items-center justify-between">
            {session?.user && <UserInfo hideOnMobile user={session.user} />}

            <Link href={`/${locale}`}>{t('home')}</Link>

            {session && <Link href={`/${locale}/friends`}>{t('friends')}</Link>}

            {session && <LogOut>{t('logout')}</LogOut>}
        </nav>
    );
}
