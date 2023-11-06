export type VoucherData = {
    id: string;
    from: string;
    to: string;
    comment: string;
    price: number;
};

export const vouchers: VoucherData[] = [
    {
        id: '7cfd37b5-832e-46c2-90ed-d35f4b63e60e',
        from: '1',
        comment: 'Gift from Niko to Miko',
        price: 63,
        to: '2',
    },
    {
        id: '23b96503-a788-4b32-a998-2bc3caae60ff',
        from: '1',
        comment: 'Gift from Niko to Kolo',
        price: 76,
        to: '3',
    },
    {
        id: '682a5ae5-c373-4575-97cd-606dcbe6b4e5',
        from: '1',
        comment: 'Second gift from Niko to Miko',
        price: 80,
        to: '2',
    },
    {
        id: '361b47f5-6767-497f-af0a-a291e725888c',
        from: '1',
        comment: 'Second gift from Niko to Kolo',
        price: 54,
        to: '3',
    },
    {
        id: '682a5ae5-c373-4575-97cd-606dcgrft4rr',
        from: '3',
        comment: 'Gift from Kolo to Niko',
        price: 45,
        to: '1',
    },
    {
        id: '682a5ae5-c373-4575-97cd-606dttr6b443',
        from: '3',
        comment: 'Second gift from Kolo to Niko',
        price: 34,
        to: '1',
    },
    {
        id: '361b47f5-6767-497f-af0a-a291e72585345',
        from: '2',
        comment: 'Gift from Miko to Kolo',
        price: 73,
        to: '3',
    },
];
