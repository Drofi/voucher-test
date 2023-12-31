import { type ReactNode } from 'react';
import { RedirectUnAuthLayout } from '~/components/redirect-unauth-layout';

export const metadata = {
    title: 'Voucher Example',
    description: 'Generated by create-t3-app',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function FriendsLayout({
    children,
    params: { locale },
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    return (
        <RedirectUnAuthLayout locale={locale}>{children}</RedirectUnAuthLayout>
    );
}
