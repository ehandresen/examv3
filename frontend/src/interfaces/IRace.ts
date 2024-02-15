export interface Race {
  id?: number; //id? means not required
  grandPrix: string;
  winnerName: string;
  winnerTime: string;
  numberOfLaps: number;
  image: string | undefined;
}
