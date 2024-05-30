import { Movie, Movies } from '@/app/Types/movies';
import { MovieCard } from '@/app/components/MovieCard';

type MovieRowProps = {
  sectionTitle: string;
  movies: Movies;
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
