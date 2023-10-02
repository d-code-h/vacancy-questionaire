'use client'

import React, { useContext, ReactNode } from 'react';
import { navContext } from '../util/NavContext';
import Form from './Form';

export default function FormCase({ children }: { children: ReactNode }) {
  const { setIsSubmitted,person, file } = useContext(navContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // const data = e.target.name;

    console.log(person)
    // console.log(data.target[0].value)
if (!file) return;

    try {
      const data = new FormData();
      data.set('file', file);
      data.set('name', "David");

      const res = await fetch('/api/', {
        method: 'POST',
        body: data
      });
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      // Handle errors here
      console.error(e)
    }
    

    setIsSubmitted(true);

  };

  return (
    <form className="bg-white text-center  " 
    onSubmit={handleSubmit}
    >
      {children}

      <Form />
    </form>
  );
}
