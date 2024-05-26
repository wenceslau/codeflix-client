'use client';

import React from 'react';
import { InputField } from '@/app/components/InputField';
import { AuthForm } from '@/app/components/AuthForm';

export default function RegisterForm() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submitting form register');
    e.preventDefault();
  }

  return <AuthForm formType="register" onSubmit={handleSubmit} />

}
