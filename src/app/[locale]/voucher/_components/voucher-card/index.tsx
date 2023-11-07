'use client';

import React from 'react';
import { Comment } from '~/app/[locale]/voucher/_components/voucher-card/comment';
import { DoneButton } from '~/app/[locale]/voucher/_components/voucher-card/done';
import { Friend } from '~/app/[locale]/voucher/_components/voucher-card/friend';
import { Price } from '~/app/[locale]/voucher/_components/voucher-card/price';
import {
    StepEnum,
    useVoucherStore,
} from '~/app/[locale]/voucher/_components/voucher-card/voucher-store';

export function VoucherCard() {
    const step = useVoucherStore((state) => state.step);

    switch (step) {
        case StepEnum.friend:
            return <Friend />;

        case StepEnum.price:
            return <Price />;

        case StepEnum.message:
            return <Comment />;

        case StepEnum.done:
            return <DoneButton />;
    }
}
