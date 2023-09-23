import React from 'react';
import Introduction from './Introduction';
import Step1Content from './Step1Content';
import Upload from './Upload';

export default function Step2() {
  return (
    <div className="">
      <Introduction />
      {/* <Step1Content /> */}

      <div className="">
        <Upload title="Birth Certificate" />
      </div>
      <div>
        <Upload title="Driver's License" />
      </div>
      <div>
        <Upload title="0 Level" />
      </div>

      <div>
        <Upload title="Marriage Certificate" />
      </div>
      <div>
        <Upload title="Office ID Card" />
      </div>
    </div>
  );
}
