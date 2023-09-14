'use client';
import { useContext } from 'react';
import { navContext } from '../util/NavContext';

export default function Nav() {
  const { step, setStep } = useContext(navContext);

  const stepIncrement = (step: number) => {
    setStep(() => (step < 2 ? step + 1 : 2));
  };
  const stepDecrement = (step: number) => {
    setStep(() => (step > 0 ? step - 1 : 0));
  };

  return (
    <nav className="flex justify-between my-5">
      <button
        className={`${step !== 0 ? 'text-blue-600' : 'text-gray-300'}`}
        type="button"
        onClick={() => stepDecrement(step)}
      >
        Previous
      </button>
      <button
        className={`text-blue-600 ${step === 2 && 'font-semibold'}`}
        type={step === 2 ? 'submit' : 'button'}
        onClick={() => stepIncrement(step)}
      >
        {step === 2 ? 'Submit' : 'Next'}
      </button>
    </nav>
  );
}
