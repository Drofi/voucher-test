import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { type FilterOptionOption } from 'react-select/dist/declarations/src/filters';

import { useVoucherStore } from '~/app/[locale]/voucher/_components/voucher-card/voucher-store';
import { type UserData } from '~/server/storage/user';
import { api } from '~/trpc/react';
import { Select } from '~/ui/select';

type Option = {
    label: string;
    value: string;
    user: UserData;
};

//Add your search logic here.
const customFilter: (
    option: FilterOptionOption<Option>,
    inputValue: string,
) => boolean = (option, searchText) => {
    const user = option.data.user;
    const includeInField = (field: string) =>
        field.toLowerCase().includes(searchText.toLowerCase());

    return (
        includeInField(user.name) ||
        includeInField(user.email) ||
        includeInField(user.phone)
    );
};

const useFriendsOptions = () => {
    const { data } = api.user.getFriends.useQuery();

    return useMemo<Option[]>(() => {
        if (!data?.length) return [];

        return data.map((it) => ({
            label: it.name,
            value: it.id,
            user: it,
        }));
    }, [data]);
};

export function SelectFriend() {
    const { t } = useTranslation(['voucher']);
    const options = useFriendsOptions();
    const setFriend = useVoucherStore((state) => state.setFriend);
    const [isMounted, setIsMounted] = useState(false);

    // Must be deleted once
    // https://github.com/JedWatson/react-select/issues/5459 is fixed.
    useEffect(() => setIsMounted(true), []);

    return isMounted ? (
        <Select
            isSearchable
            filterOption={customFilter}
            onChange={(option) => {
                setFriend(option?.user ?? null);
            }}
            options={options}
            placeholder={t('add_friend_placeholder')}
            closeMenuOnSelect={true}
            //menuIsOpen={true}
        />
    ) : null;
}
