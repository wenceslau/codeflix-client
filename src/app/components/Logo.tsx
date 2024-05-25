'use client';
import Image from "next/image";
import React from "react";

export const Logo = () => (
    // <img src="/logo.svg" alt="CodeFlix" width={120} height={120} />
    <Image src="/logo.svg" alt="CodeFlix" width={90} height={90} className="cursor-pointer" />
);
