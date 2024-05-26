'use client';

import React from 'react';
import { InputField } from '@/app/auth/InputField';

export default function RegisterForm() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submitting form register');
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}
      className="flex w-full flex-col max-w-md rounded space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold">
          Register
        </h1>
        <p className="text-sm text-gray-500">
          Already have an account?
          <a href="#"
             className="text-red-500 hover:underline ">
             Login
          </a>
        </p>
      </div>
      <div className="mt-8 flex flex-col space-y-4">
        <InputField id="email" name="email" label="Email" type="email" placeholder="Enter your email" />
        <InputField id="password" name="password" label="Password" type="password" placeholder="Enter your password" />
        <InputField id="password" name="password" label="Password" type="password" placeholder="Enter your password" />


      </div>
      <div className="mt-8 flex flex-col space-y-2 pt-2 sm:flex-row sm:space-y-2 sm:space-y-0">
        <button type="submit"
                className="flex w-full items-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-sm font-semibold text-white sm:w-auto sm:px-8 ">
          Login
        </button>
      </div>
    </form>
  );
}
