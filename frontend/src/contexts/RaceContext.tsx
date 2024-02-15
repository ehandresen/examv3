import { createContext } from 'react';
import { Race } from '../interfaces/IRace';

export const RaceContext = createContext<Race | null>(null);

// typescript krever at vi redegjør (gjennom et interface)
// 1. hvilke data en context skal tilby
// 2. hvilke funkjsoner en context skal ha

export const RaceProvider = ({ children }) => {
  // 1. Dataene ('databasen'/informasjonen)

  // 2. Tilgangsfunksjoner (legge til/slette/oppdatere dataen)

  // 3. 'eksportering' av funksjoner (over) og data
  return (
    <>
      <RaceContext.Provider>{children}</RaceContext.Provider>
    </>
  );
};
