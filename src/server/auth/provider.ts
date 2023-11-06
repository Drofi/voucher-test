import Credentials from 'next-auth/providers/credentials';

import { api } from '~/trpc/server';

export const MyProvider = Credentials({
    type: 'credentials',
    name: 'Credentials',
    credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Try Niko' },
    },
    async authorize(credentials, _req) {
        return api.user.getUser.query(credentials?.username);
    },
});
