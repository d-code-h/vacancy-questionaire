'use client';
import { useContext } from 'react';
import { navContext } from '../util/NavContext';

import Steps from './Steps';
import FormCase from './FormCase';
import Message from './Message';

export default function Container() {
  const { isSubmitted } = useContext(navContext);

  return (
    <>
      {!isSubmitted ? (
        <FormCase>
          <Steps />
        </FormCase>
      ) : (
        <Message />
      )}
    </>
  );
}
