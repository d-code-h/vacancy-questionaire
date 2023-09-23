'use client';
import React from 'react';
import Nav from './Nav';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import { useContext } from 'react';
import { navContext } from '../util/NavContext';

export default function Form() {
  const { step } = useContext(navContext);

  return (
    <div>
      <div className="w-auto sm:max-h-80 sm:overflow-y-auto max-h-max p-5">
        {step === 0 ? <Step1 /> : step === 1 ? <Step2 /> : <Step3 />}
      </div>
      <Nav />
    </div>
  );
}
