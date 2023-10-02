'use client';
import { createContext, ReactNode, useState } from 'react';
import { NavContextType } from './type';




export const navContext = createContext<NavContextType>({
  step: 0,
  setStep: () => {},
  isSubmitted: false,
  setIsSubmitted: () => {},
  person: {
    name: '',
  gender: null,
  email: '',
  phone: '',
  }
});

export default function NavContext({ children }: { children: ReactNode }) {
  // States
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [file, setFile] = useState<file>()
  const [person, updatePerson] = useState({
    name: '',
    gender: null,
    email: '',
    phone: '',

  })


  // Change the value of each field
  const handleChange = (e:any) => {
    updatePerson({
      ...person, 
    [e.target.name]: e.target.value
    })
  }

  return (
    <navContext.Provider
      value={{
        step,
        setStep,
        isSubmitted,
        setIsSubmitted,
        person,
        handleChange,
        file,
        setFile
      }}
    >
      {children}
    </navContext.Provider>
  );
}
