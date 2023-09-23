import { useState, useContext, useEffect } from 'react';
import { navContext } from '../util/NavContext';

export default function Nav() {
  const { step, setStep } = useContext(navContext);
  const [btnState, setBtnState] = useState('Next');

  const stepIncrement = () => {
    setStep((prev) => (prev !== 2 ? prev + 1 : 2));
  };

  const stepDecrement = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    if (step === 2) {
      return setBtnState('Submit');
    }
    setBtnState('Next');
  }, [step]);

  return (
    <nav className="flex justify-between gap-5 my-5">
      <button
        type="button"
        onClick={stepDecrement}
        className={`block w-full mt-4 py-2 rounded-2xl text-white font-semibold mb-2 ${
          step !== 0 ? 'bg-indigo-600' : 'bg-gray-400'
        }`}
      >
        Previous
      </button>

      <button
        type={btnState === 'Submit' ? 'submit' : 'button'}
        onClick={stepIncrement}
        className={`block w-full mt-4 py-2 rounded-2xl bg-indigo-600 text-white font-semibold mb-2 ${
          step === 2 && 'font-semibold'
        }`}
      >
        {btnState}
      </button>
    </nav>
  );
}
