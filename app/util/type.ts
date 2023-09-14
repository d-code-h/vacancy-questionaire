import { Dispatch, SetStateAction } from 'react';

interface NavContextType {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export type { NavContextType };
