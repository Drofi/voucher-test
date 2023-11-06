import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useVoucherStore } from '~/app/[locale]/voucher/_components/voucher-card/voucher-store';
import { api } from '~/trpc/react';

export function DoneButton() {
    const { t } = useTranslation(['voucher']);
    const { locale } = useParams<{ locale: string }>();
    const reset = useVoucherStore((state) => state.reset);
    const comment = useVoucherStore((state) => state.comment);
    const price = useVoucherStore((state) => state.price);
    const to = useVoucherStore((state) => state.friend?.id);
    const { mutateAsync, isLoading } = api.voucher.createVoucher.useMutation();

    return (
        <div className="flex flex-col space-y-4 w-96 mx-auto p-8 bg-gray-800 sm:rounded-lg shadow">
            <Link
                aria-disabled={isLoading}
                href={`/${locale}`}
                className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg disabled:bg-red-500"
                onClick={async () => {
                    to && (await mutateAsync({ comment, to, price }));

                    reset();
                }}
            >
                {t('pay_and_send')}
            </Link>
        </div>
    );
}
