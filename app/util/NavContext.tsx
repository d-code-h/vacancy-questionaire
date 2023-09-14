'use client';
import { createContext, ReactNode, useState } from 'react';
import { NavContextType } from './type';

export const navContext = createContext<NavContextType>({
  step: 0,
  setStep: () => {},
});

export default function NavContext({ children }: { children: ReactNode }) {
  // States
  const [step, setStep] = useState(0);

  return (
    <navContext.Provider
      value={{
        step,
        setStep,
      }}
    >
      {children}
    </navContext.Provider>
  );
}
