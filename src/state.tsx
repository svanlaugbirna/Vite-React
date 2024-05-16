import { atom,selector } from "recoil";

export const recoilCount = atom<number>({
    key: 'count',
    default: 0,
})

export const modifier = atom<number> ({
    key: 'modifier',
    default: 0,
})

export const recoilSelector = selector<number>({
    key:'modifier-count',
    get: ({ get }) => {
        const count = get(recoilCount);
        const currentMod = get(modifier);

        return count * currentMod;
    },
});