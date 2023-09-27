'use client'

import React, { useContext, ReactNode } from 'react';
import { navContext } from '../util/NavContext';
import Form from './Form';

export default function FormCase({ children }: { children: ReactNode }) {
  const { setIsSubmitted,person } = useContext(navContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // const data = e.target.name;

    console.log(person)
    // console.log(data.target[0].value)

    setIsSubmitted(true);
  };

  return (
    <form className="bg-white text-center  " onSubmit={handleSubmit}>
      {children}

      <Form />
    </form>
  );
}
