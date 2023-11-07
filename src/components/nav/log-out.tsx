'use client';

import { signOut } from 'next-auth/react';

export function LogOut({ children }: { children: string }) {
    return (
        <button
            className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-black transition duration-300"
            onClick={() => signOut()}
        >
            {children}
        </button>
    );
}
