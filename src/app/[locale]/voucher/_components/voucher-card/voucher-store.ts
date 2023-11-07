import { create } from 'zustand';
import { type UserData } from '~/server/storage/user';

export const enum StepEnum {
    friend = 'friend',
    price = 'price',
    message = 'message',
    done = 'done',
}

interface BearState {
    step: StepEnum;
    friend: UserData | null;
    price: number;
    comment: string;
}

interface BearHandlers {
    reset: () => void;
    next: () => void;
    prev: () => void;
    setFriend: (user: UserData | null) => void;
    setPrice: (price: number) => void;
    setComment: (comment: string) => void;
}

const next = (step: StepEnum) => {
    switch (step) {
        case StepEnum.friend:
            return StepEnum.price;
        case StepEnum.price:
            return StepEnum.message;
        case StepEnum.message:
            return StepEnum.done;
        case StepEnum.done:
            return StepEnum.done;
    }
};

const prev = (step: StepEnum) => {
    switch (step) {
        case StepEnum.friend:
            return StepEnum.friend;
        case StepEnum.price:
            return StepEnum.friend;
        case StepEnum.message:
            return StepEnum.price;
        case StepEnum.done:
            return StepEnum.message;
    }
};

const defaultVoucherStore = {
    step: StepEnum.friend,
    friend: null,
    price: 0,
    comment: '',
} satisfies BearState;

export const useVoucherStore = create<BearState & BearHandlers>()((set) => ({
    ...defaultVoucherStore,
    reset: () => set(defaultVoucherStore),
    next: () => set((state) => ({ step: next(state.step) })),
    prev: () => set((state) => ({ step: prev(state.step) })),
    setFriend: (friend) => set({ friend }),
    setPrice: (price) => set({ price }),
    setComment: (comment) => set({ comment }),
}));
