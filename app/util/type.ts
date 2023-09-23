import { Dispatch, SetStateAction } from 'react';

interface NavContextType {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  isSubmitted: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

export type { NavContextType };
