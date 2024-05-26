import React from 'react';

export type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  name,
  type,
  placeholder
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id}
             className="text-sm font-semibold text-gray-500">
        {label}
      </label>
      <input type={type} name={name} id={id} placeholder={placeholder}
             className="rounded border-gray-t00 bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent " />
    </div>

  );

}

export default function Login() {
  return (
    <form className="flex w-full flex-col max-w-md rounded space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold">
          Login
        </h1>
        <p className="text-sm text-gray-500">
          new to app?
          <a href="#"
             className="text-red-500 hover:underline ">
            Register
          </a>
        </p>
      </div>
      <div className="mt-8 flex flex-col space-y-4">
        <InputField id="email" name="email" label="Email" type="email" placeholder="Enter your email" />
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
