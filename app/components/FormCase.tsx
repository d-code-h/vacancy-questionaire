'use client'

import React, { useContext, ReactNode } from 'react';
import { navContext } from '../util/NavContext';
import Form from './Form';

export default function FormCase({ children }: { children: ReactNode }) {
  const { setIsSubmitted,person, files } = useContext(navContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // const data = e.target.name;

    console.log(person)
    console.log(files)

    // console.log(data.target[0].value)
if (files.length === 0) return;

    try {
      const data = new FormData();
      files.forEach((file, i) => {

        data.set(`file${i}`, file);
      })
      // data.set('file2', files[1]);

      data.set('person', JSON.stringify(person))
      
      console.log(data)

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
