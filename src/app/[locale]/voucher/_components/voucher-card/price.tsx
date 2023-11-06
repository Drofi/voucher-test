import React from 'react';
import { useTranslation } from 'react-i18next';

import { NextButton } from '~/app/[locale]/voucher/_components/voucher-card/buttons/next';
import { Title } from '~/app/[locale]/voucher/_components/voucher-card/title';
import {
    getBlackAndWightColor,
    getLinerGradientColor,
} from '~/app/[locale]/voucher/_components/voucher-card/utils/color';
import { useVoucherStore } from '~/app/[locale]/voucher/_components/voucher-card/voucher-store';

export function Price() {
    const { t } = useTranslation(['voucher']);
    const price = useVoucherStore((state) => state.price);
    const setPrice = useVoucherStore((state) => state.setPrice);
    const textColor = getBlackAndWightColor(price);

    return (
        <div
            className="flex flex-col space-y-4 w-96 mx-auto p-8 bg-gray-800 sm:rounded-lg shadow"
            style={{ background: getLinerGradientColor(price) }}
        >
            <Title style={{ color: textColor }} />

            <div style={{ color: textColor }}>
                {t('gifted_price')}: {price}$
            </div>

            <input
                value={price}
                onChange={(e) => {
                    setPrice(e.target.valueAsNumber);
                }}
                type="range"
                min={0}
                max={100}
                step={1}
                className="cursor-pointer appearance-none w-full bg-transparent bg-gradient-to-r from-green-500 via-yellow-500 to-red-700 rounded-full border-2 border-black [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
            />

            <NextButton
                disabled={!price}
                style={{
                    background: getLinerGradientColor(price, 'right'),
                    color: textColor,
                }}
            />
        </div>
    );
}
