import React from "react";

export default function Login() {
    return (
        <div
            style={{ backgroundImage: "url('/background.jpg')" }}
            className='bg-cover bg-center bg-no-repeat h-screen w-screen text-white opacity-80'>

            <div className='flex min-h-screen flex-col items-center justify-center py-2'>
               <form className='flex w-full flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
                 <div className='flex flex-col items-center space-y-4'>
                   <h1 className='text-3xl font-bold'>
                      Login
                   </h1>
                    <p className='text-sm text-gray-500'>
                      new to app? <a href='#' className='text-red-500 hover:underline '>Register</a>
                    </p>
                 </div>
                 <div>
                    <label htmlFor='email' className='text-sm'>Email</label>
                    <input type='email' name='email' id='email' className='w-full py-2 px-4 bg-[#333] text-white' />
                 </div>
               </form>
            </div>

        </div>
    );
}
