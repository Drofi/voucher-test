import React from 'react';
import { useTranslation } from 'react-i18next';
import { useVoucherStore } from '~/app/[locale]/voucher/_components/voucher-card/voucher-store';

type Props = { disabled?: boolean; style?: React.CSSProperties | undefined };

export function NextButton({ disabled, style }: Props) {
    const next = useVoucherStore((state) => state.next);
    const { t } = useTranslation(['voucher']);

    return (
        <button
            className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg disabled:bg-gray-500 disabled:hover:bg-gray-600 disabled:cursor-not-allowed"
            disabled={disabled}
            onClick={next}
            style={style}
        >
            {t('next')}
        </button>
    );
}
