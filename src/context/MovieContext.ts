import { createContext } from 'react';

interface MovieContextInterface {
    trending: {};
}

export const MovieContext = createContext<MovieContextInterface | null>(null);
