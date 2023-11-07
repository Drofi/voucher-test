import { type ReactNode } from 'react';
import { redirectUnAuth } from '~/utils/redirect-unauth';

export async function RedirectUnAuthLayout({
    children,
    locale,
}: {
    children: ReactNode;
    locale: string;
}) {
    await redirectUnAuth(locale);

    return <>{children}</>;
}
