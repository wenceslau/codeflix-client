'use client';

import React from 'react';
import { InputField } from '@/app/components/InputField';
import { AuthForm } from '@/app/components/AuthForm';


export default function LoginForm() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submitting form login');
    e.preventDefault();
  };

  return <AuthForm formType="login" onSubmit={handleSubmit} />

}
