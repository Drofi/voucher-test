import { useTranslation } from 'react-i18next';

import { NextButton } from '~/app/[locale]/voucher/_components/voucher-card/buttons/next';
import { useVoucherStore } from '~/app/[locale]/voucher/_components/voucher-card/voucher-store';

export function Comment() {
    const { t } = useTranslation(['voucher']);
    const comment = useVoucherStore((state) => state.comment);
    const setComment = useVoucherStore((state) => state.setComment);

    return (
        <div className="flex flex-col space-y-4 w-96 mx-auto p-8 bg-gray-800 sm:rounded-lg shadow">
            <textarea
                value={comment}
                onChange={(e) => {
                    setComment(e.target.value);
                }}
                placeholder={t('comment_placeholder')}
                rows={4}
                className="w-full p-2 rounded-lg text-black placeholder-gray-600 placeholder-opacity-50 focus:placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500"
            />

            <NextButton />
        </div>
    );
}
