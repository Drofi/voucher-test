import { v4 as uuid } from 'uuid';
import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';
import { type VoucherData, vouchers } from '~/server/storage/voucher';

export const voucherRouter = createTRPCRouter({
    getVouchers: protectedProcedure.query(({ ctx }) => {
        const id = ctx.session.user.id;

        const received: VoucherData[] = [];
        const responded: VoucherData[] = [];

        vouchers.forEach((it) => {
            if (it.to === id) {
                received.push(it);
            } else if (it.from === id) {
                responded.push(it);
            }
        });

        return { received, responded };
    }),

    createVoucher: protectedProcedure
        .input(
            z.object({
                comment: z.string().optional().nullable(),
                price: z.number().min(0).max(100).int(),
                to: z.string(),
            }),
        )
        .mutation(({ input, ctx }) => {
            vouchers.push({
                id: uuid(),
                from: ctx.session.user.id,
                ...input,
                comment: input.comment ?? '',
            });
        }),
});
