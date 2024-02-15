import { Race } from './IRace';

/*  Et interface for en context skiller seg litt fra et interface for et objekt (IRace)
    mens en interface for et objekt beskriver en 'ting' i vår applikasjon (en bok, en pizza etc), 
    så er interface for contexter ment for å fortelle hvilke data denne contexten har ansvar for,
    og hvilke funksjonalitet er det denne contexten har */

// En kontrakt for hva contexten må inneholde

export interface IRaceContext {
  races: Race[];
  // denne betyr: inne i contexten MÅ det være en funskjon som heter getById
  getById: (id: number) => void; // en annonym funksjon, void betyr at funskjonen ikke returerer noe
  addRace: (race: Race) => void;
}
