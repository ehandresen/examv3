import { FC, ReactNode, useState } from 'react';
import { createContext } from 'react';
import { IRaceContext } from '../interfaces/IRaceContext';
import { Race } from '../interfaces/IRace';

export const RaceContext = createContext<IRaceContext | null>(null);

interface Props {
  children: ReactNode;
}

// typescript krever at vi redegjør (gjennom et interface), i dette tilfellet IRaceContext.ts
// 1. hvilke data en context skal tilby
// 2. hvilke funkjsoner en context skal ha

export const RaceProvider: FC<Props> = ({ children }) => {
  // 1. Dataene ('databasen'/informasjonen)
  const [races, setRaces] = useState<Race[]>([]);

  // 2. Tilgangsfunksjoner (legge til/slette/oppdatere dataen)

  // 3. 'eksportering' av funksjoner (over) og data
  return (
    <>
      <RaceContext.Provider value={{ races }}>{children}</RaceContext.Provider>
    </>
  );
};
