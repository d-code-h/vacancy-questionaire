'use client'

import { useContext } from 'react';
import { navContext } from '../util/NavContext';

import React from 'react';

type HandleChange = () => void

export default function Step1Content() {
  const { person: {name, email, phone}, handleChange } = useContext(navContext);

  return (
    <>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="pl-2 outline-none border-none"
          type="text"
          name="name"
          id="fullName"
          placeholder="Full name"
          value={name}
          onChange={(e) => handleChange(e)}

        />
      </div>

      <div className="my-3 mx-2">
        <label className="text-gray-500 block text-left" htmlFor='gender'>
          Gender
        </label>
        <div className='flex gap-5'>

        <div className="flex items-center">
        <input name="gender" type="radio" className=" checked:accent-blue-600" value='male'
        onChange={(e) => handleChange(e)}
        />
        <span className="ml-2">Male</span>
       </div>
       <div className="flex items-center">
        <input name="gender" type="radio" className=" checked:accent-blue-600" value='female' onChange={(e) => handleChange(e)} />
        <span className="ml-2">Female</span>
        </div>
       </div>
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
        <input
          className="pl-2 outline-none border-none"
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => handleChange(e)}
        />
      </div>

      {/* Phone number */}
        {/* <label className='text-gray-500 block text-left' htmlFor="Phone number">Phone number</label> */}
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
    
        <svg aria-hidden="true" focusable="false" className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
          fill="rgb(156, 163, 175)"
          stroke="currentColor"
        
        >
          
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>

        <input
          className="pl-2 outline-none border-none"
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => handleChange(e)}
        />
      </div>



      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
        <input
          className="pl-2 outline-none border-none"
          type="text"
          name="uname"
          id="uname"
          placeholder="Username"
        />
      </div>
      
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="pl-2 outline-none border-none"
          type="text"
          name="pass"
          id="pass"
          placeholder="Password"
        />
      </div>
    </>
  );
}
