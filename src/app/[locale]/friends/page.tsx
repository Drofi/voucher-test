import TranslationsProvider from '~/components/translations-provider';
import { UserInfo } from '~/components/user-info';
import initTranslations from '~/i18n';
import { api } from '~/trpc/server';

const i18nNamespaces = ['friends'];

export default async function FriendsPage({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const friends = await api.user.getFriends.query();
    const vouchers = await api.voucher.getVouchers.query();
    const { t } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
            <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

                <ul className="space-y-4">
                    {friends.map((friend) => (
                        <UserInfo
                            key={friend.id}
                            user={friend}
                            vouchersGifted={vouchers.responded.filter(
                                (voucher) => voucher.to === friend.id,
                            )}
                            vouchersReceived={vouchers.received.filter(
                                (voucher) => voucher.from === friend.id,
                            )}
                        />
                    ))}
                </ul>
            </div>
        </TranslationsProvider>
    );
}
