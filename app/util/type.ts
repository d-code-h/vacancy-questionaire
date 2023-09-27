import { Dispatch, SetStateAction } from 'react';

interface Person {
  name: string;
  gender: 'male' | 'female' | null;
  email: string;
  phone: string;
}

interface NavContextType {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  isSubmitted: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  person: Person;

}

export type { NavContextType };
