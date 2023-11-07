import { redirect } from 'next/navigation';
import { getServerAuthSession } from '~/server/auth';

export async function redirectUnAuth(locale: string) {
    const session = await getServerAuthSession();

    if (!session) {
        redirect(`/${locale}`);
    }
}
