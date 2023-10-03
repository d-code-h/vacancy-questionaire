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
        <Upload title="Birth Certificate" name="birth" />
        <Upload title="Driver's License" name="driver-license" />
        <Upload title="0 Level" name="0-level" />
        <Upload title="Marriage Certificate" name="marriage"  />
        <Upload title="Office ID Card" name="office-id-card"/>
      </div>
    </div>
  );
}
