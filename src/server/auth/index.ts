import {
    type DefaultSession,
    type NextAuthOptions,
    getServerSession,
} from 'next-auth';
import { env } from '~/env.mjs';
import { MyProvider } from '~/server/auth/provider';
import { type UserData } from '~/server/storage/user';

declare module 'next-auth' {
    //eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends UserData {}

    interface Session extends DefaultSession {
        user?: UserData;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        userId?: string;
        phone?: string;
    }
}

export const authOptions: NextAuthOptions = {
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.userId = user.id;
                token.phone = user.phone;
            }

            return token;
        },
        session: ({ session, token }) => ({
            ...session,
            user: {
                ...session.user,
                id: token.userId,
                phone: token.phone,
            },
        }),
    },
    secret: env.AUTH_SECRET,
    providers: [MyProvider],
};

export const getServerAuthSession = () => getServerSession(authOptions);
