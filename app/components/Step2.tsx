import React from 'react';
import Introduction from './Introduction';
import Step1Content from './Step1Content';
import Upload from './Upload';

export default function Step2() {
  return (
    <div className="">
      <Introduction />
      {/* <Step1Content /> */}

      <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-2">
        <Upload title="Birth Certificate" />
        <Upload title="Driver's License" />
        <Upload title="0 Level" />
        <Upload title="Marriage Certificate" />
        <Upload title="Office ID Card" />
      </div>
    </div>
  );
}
