'use client';

import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import UserAvatar from '~/app/[locale]/_components/user-avatar';
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

    const giftedPrice = !!vouchersGifted?.length
        ? vouchersGifted.reduce((acc, v) => acc + v.price, 0)
        : 0;

    const receivedPrice = !!vouchersReceived?.length
        ? vouchersReceived.reduce((acc, v) => acc + v.price, 0)
        : 0;

    return (
        <div className="flex items-center">
            <UserAvatar user={user} className="w-12 h-12 rounded-full mr-4" />

            <div className={clsx(hideOnMobile && 'hidden sm:block')}>
                <div className="text-xl font-bold">{user.name}</div>
                <div className="text-gray-400">{user.email}</div>

                {!!giftedPrice && (
                    <div className="text-gray-400">
                        ${t('gifted')}: {giftedPrice}$
                    </div>
                )}

                {!!receivedPrice && (
                    <div className="text-gray-400">
                        ${t('received')}: {receivedPrice}$
                    </div>
                )}
            </div>
        </div>
    );
};
