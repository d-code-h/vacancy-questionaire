import React from 'react';
import Question from './Question';

export default function Questionaire() {
  return (
    <>
      <Question
        qn="1"
        label="Who is the president of Nigeria?"
        options={['Muhammadu Buhari', 'Yemi Osibanjo', 'Bola Ahmed Tinubu']}
      />
      <Question
        qn="2"
        label="Who is the former president of Nigeria?"
        options={['Muhammadu Buhari', 'Yemi Osibanjo', 'Bola Ahmed Tinubu']}
      />
      <Question
        qn="3"
        label="Who is the president of Nigeria?"
        options={['Muhammadu Buhari', 'Yemi Osibanjo', 'Bola Ahmed Tinubu']}
      />
      <Question
        qn="4"
        label="Who is the former president of Nigeria?"
        options={['Muhammadu Buhari', 'Yemi Osibanjo', 'Bola Ahmed Tinubu']}
      />
    </>
  );
}
