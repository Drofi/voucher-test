import { z } from 'zod';

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from '~/server/api/trpc';
import { friendship, users } from '~/server/storage/user';

export const userRouter = createTRPCRouter({
    getUser: publicProcedure
        .input(z.string().optional().nullable())
        .query(({ input }) => {
            if (!input) return null;

            const search = input.toLowerCase();
            const foundedUser = users.find((it) => {
                return (
                    it.name.toLowerCase() === search ||
                    it.email.toLowerCase() === search
                );
            });

            return foundedUser ?? null;
        }),

    getFriends: protectedProcedure.query(({ ctx }) => {
        const id = ctx.session.user.id;

        const friends = friendship.find((it) => it.id === id)?.friends;

        if (!friends?.length) return [];

        return users.filter((user) => friends.includes(user.id));
    }),
});
