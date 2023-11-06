import React from 'react';
import { useTranslation } from 'react-i18next';

import { useVoucherStore } from '~/app/[locale]/voucher/_components/voucher-card/voucher-store';

type Props = { style?: React.CSSProperties | undefined };

export function Title({ style }: Props) {
    const { t } = useTranslation(['voucher']);
    const friend = useVoucherStore((state) => state.friend);

    return (
        <div>
            <h1 className="text-xl font-bold" style={style}>
                {t('title')} {friend?.name}
            </h1>
        </div>
    );
}
