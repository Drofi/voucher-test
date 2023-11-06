import { useTranslation } from 'react-i18next';

import { NextButton } from '~/app/[locale]/voucher/_components/voucher-card/buttons/next';
import { SelectFriend } from '~/app/[locale]/voucher/_components/voucher-card/friend/select-friend';
import { useVoucherStore } from '~/app/[locale]/voucher/_components/voucher-card/voucher-store';

export function Friend() {
    const { t } = useTranslation(['voucher']);
    const hasFriend = useVoucherStore((state) => !!state.friend);

    return (
        <div className="flex flex-col space-y-4 w-96 mx-auto p-8 bg-gray-800 sm:rounded-lg shadow">
            <h1>{t('add_friend')}</h1>

            <SelectFriend />

            <NextButton disabled={!hasFriend} />
        </div>
    );
}
