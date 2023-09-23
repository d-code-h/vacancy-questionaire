import React, { useContext, ReactNode } from 'react';
import { navContext } from '../util/NavContext';
import Form from './Form';

export default function FormCase({ children }: { children: ReactNode }) {
  const { setIsSubmitted } = useContext(navContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setIsSubmitted(true);
  };

  return (
    <form className="bg-white text-center  " onSubmit={handleSubmit}>
      {children}

      <Form />
    </form>
  );
}
