'use client';

import React from 'react';
import { AuthForm } from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';

type ServerError = {
  message: string;
}

export default function LoginForm() {

  const router = useRouter();

  const [errors, setErrors] = React.useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //alert('submitting form login');
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try{
      const response = await fetch('http://localhost:3000/auth/login/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/');
        // TODO redirect to home page
      }

      const payload: ServerError[] = await response.json();
      setErrors(payload.map((error) => error.message));

    }catch(error){
      console.log(error);

      setErrors(['An expected error ocurred']);

    }

  };

  return <AuthForm formType="login" onSubmit={handleSubmit} />

}
