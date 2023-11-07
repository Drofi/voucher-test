'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import UserAvatar from '~/components/user-avatar';
import { type UserData } from '~/server/storage/user';
import { type VoucherData } from '~/server/storage/voucher';

type Props = {
    hideOnMobile?: boolean;
    user: UserData;
    vouchersGifted?: VoucherData[];
    vouchersReceived?: VoucherData[];
};

export const UserInfo = ({
    hideOnMobile,
    user,
    vouchersGifted,
    vouchersReceived,
}: Props) => {
    const { t } = useTranslation(['user_info']);

    const priceSum = useMemo(() => {
        return {
            gifted: !!vouchersGifted?.length
                ? vouchersGifted.reduce((acc, v) => acc + v.price, 0)
                : 0,
            received: !!vouchersReceived?.length
                ? vouchersReceived.reduce((acc, v) => acc + v.price, 0)
                : 0,
        };
    }, [vouchersGifted, vouchersReceived]);

    return (
        <div className="flex items-center">
            <UserAvatar user={user} className="w-12 h-12 rounded-full mr-4" />

            <div className={clsx(hideOnMobile && 'hidden sm:block')}>
                <div className="text-xl font-bold">{user.name}</div>
                <div className="text-gray-400">{user.email}</div>

                {!!priceSum.gifted && (
                    <div className="text-gray-400">
                        {t('gifted')}: {priceSum.gifted}$
                    </div>
                )}

                {!!priceSum.received && (
                    <div className="text-gray-400">
                        {t('received')}: {priceSum.received}$
                    </div>
                )}
            </div>
        </div>
    );
};
