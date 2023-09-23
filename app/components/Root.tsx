import React from 'react';
import Aside from './Aside';
import Article from './Article';

export default function Root() {
  return (
    <div className="h-screen md:flex">
      <Aside />
      <Article />
    </div>
  );
}
