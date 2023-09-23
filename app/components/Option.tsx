import React from 'react';

export default function Option({ qn, text }: { qn: string; text: string }) {
  return (
    <div className="flex items-center">
      <input name="q1" type="radio" className=" checked:accent-blue-600" />
      <span className="ml-2">{text}</span>
    </div>
  );
}
