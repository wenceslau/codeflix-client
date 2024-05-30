import React from 'react';
import Header from '@/app/components/Header';
import { getMovieById } from '@/app/services/MovieServive';

interface IWatchProps {
  params: {
    id: string;
  }
}

export default async function Watch({ params }: IWatchProps) {

  const movie = await getMovieById(params.id);

  if(!movie) {
    return <div>
      <div className='flex h-screen justify-center align-middle'>
        <Header />
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center' >
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Sorry, we couldn't find the movie you were looking for.
          </h1>
        </main>
      </div>
    </div>
  }

  return (
    <div>
      <h1>Watch</h1>
      <p>Movie ID: {params.id}</p>
    </div>
  );
}