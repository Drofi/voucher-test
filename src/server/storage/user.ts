export type UserData = {
    id: string;
    name: string;
    email: string;
    phone: string;
};

const niko: UserData = {
    id: '1',
    name: 'Niko',
    email: 'niko@gmail.com',
    phone: '0661111111',
};

const miko: UserData = {
    id: '2',
    name: 'Miko',
    email: 'miko@gmail.com',
    phone: '0662222222',
};

const kolo: UserData = {
    id: '3',
    name: 'Kolo',
    email: 'kolo@gmail.com',
    phone: '0663333333',
};

export const users: UserData[] = [niko, miko, kolo];

export const friendship = [
    { id: niko.id, friends: [miko.id, kolo.id] },
    { id: miko.id, friends: [kolo.id] },
    { id: kolo.id, friends: [niko.id, miko.id] },
];
