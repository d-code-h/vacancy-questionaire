import React from 'react';
import Option from './Option';

export default function Question({
  qn,
  label,
  options,
}: {
  qn: string;
  label: string;
  options: string[];
}) {
  return (
    <>
      <div className="my-3">
        <label className="text-gray-700 block text-left" htmlFor={qn}>
          {qn + '. ' + label}
        </label>
        {options.map((text, i) => (
          <Option key={i} qn={qn} text={text} />
        ))}
      </div>
    </>
  );
}
