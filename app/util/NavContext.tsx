'use client';
import { createContext, ReactNode, useState } from 'react';
import { NavContextType } from './type';

export const navContext = createContext<NavContextType>({
  step: 0,
  setStep: () => {},
  isSubmitted: false,
  setIsSubmitted: () => {},
});

export default function NavContext({ children }: { children: ReactNode }) {
  // States
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <navContext.Provider
      value={{
        step,
        setStep,
        isSubmitted,
        setIsSubmitted,
      }}
    >
      {children}
    </navContext.Provider>
  );
}
