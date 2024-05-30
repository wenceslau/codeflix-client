'use client';

import React from 'react';
import { UserProfile } from './UserProfile';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { useScroll } from '../hooks/useScroll';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const SearchForm = ({
                      searchTerm,
                      onSearchTermChange,
                      onSearch,
                    }: {
  searchTerm: string;
  onSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form onSubmit={onSearch} className="flex items-center space-x-2">
      <button type="submit">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
      </button>
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearchTermChange}
        className="bg-transparent text-white placeholder-white outline-none" />
    </form>
  );

};


