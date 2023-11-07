import { VoucherCard } from '~/app/[locale]/voucher/_components/voucher-card';
import TranslationsProvider from '~/components/translations-provider';

const i18nNamespaces = ['voucher'];

export default function VoucherPage({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return (
        <TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
            <main className="flex items-center justify-center flex-1">
                <VoucherCard />
            </main>
        </TranslationsProvider>
    );
}
