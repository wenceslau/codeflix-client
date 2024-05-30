import Image from 'next/image';
import { Movie, Movies } from '@/app/Types/movies';
import Link from 'next/link';
import {
  ChevronDownIcon,
  PlayIcon,
  PlusIcon,
  SpeakerWaveIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

type MovieRowProps = {
  sectionTitle: string;
  movies: Movies;
};

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="group relative min-w-[12vh] rounded bg-zinc-900 md:min-h-[12vw]">
      <Image
        alt={movie.title}
        src={movie.bannerFileURL}
        width={600}
        height={400}
        className="rounded-md object-cover object-top transition"
      />
      <div
        className="invisible absolute top-0 z-10 w-full min-w-[20vw] scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-100 sm:visible">
        <Image
          src={movie.bannerFileURL}
          alt={movie.title}
          width={600}
          height={400}
          className="duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover object-top shadow-xl transition"
        />
        <div className="absolute z-10 w-full rounded-b-md bg-zinc-800 py-2 shadow-md transition lg:p-4">
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center gap-2">
              <div
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-300 hover:text-black lg:h-10 lg:w-10">
                <Link href={`/watch/${movie.id}`}>
                  <PlayIcon className="w-4 lg:w-6" />
                </Link>
              </div>
              <div
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-300 hover:text-black lg:h-10  lg:w-10">
                <PlusIcon className="w-4 lg:w-6" />
              </div>
            </div>
            <div
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-300 hover:text-black lg:h-10 lg:w-10">
              <ChevronDownIcon className="w-4 lg:w-6" />
            </div>
          </div>

          <div className="mt-4 text-sm font-bold text-white lg:text-lg">
            {movie.title}
          </div>

          <div className='mt-4 flex flex-col gap-2 text-sm'>
            <div className='flex flex-row items-center gap-2'>
              <SpeakerWaveIcon className='h-4 w-4' />
              <span>Double Atmos 5.1 4k</span>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <UserGroupIcon className='h-4 w-4' />
              <span>Family Friendly</span>
            </div>
          </div>
          <div className='mt-4 flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm'>
            <p>{movie.genres.join(',  ')}</p>
          </div>

        </div>

      </div>

    </div>

  );
};

export function MovieRow({ sectionTitle, movies }: MovieRowProps) {
  return <div className="flex-col space-y-4">
    <div className="flex">
      <h2 className="-ml-2 inline-flex items-center text-2xl font-bold">
        {sectionTitle}
      </h2>
    </div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
      {movies.map((movie, index) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>


  </div>;
}
