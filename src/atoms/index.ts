import { atom } from 'jotai';
import { IProduct } from '../types';

export const favoriteToggleAtom = atom(false);
export const favoriteStarToggleAtom = atom(false);
export const favoriteProductsAtom = atom([] as IProduct[]);
