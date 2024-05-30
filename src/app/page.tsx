import Header from "./components/Header";
import { MovieRow } from "./components/MovieRow";
import { Banner } from "./components/Banner";
import { getFeaturedMovie, getMovieByGenre } from '@/app/services/MovieServive';

export default async function Home() {

  const featuredMovie = await getFeaturedMovie('103');

  const genres = ['Drama', 'Crime', 'History', 'Biography', 'Adventure'];

  const movies = await Promise.all(genres.map(async genre => {
    const movies = await getMovieByGenre(genre, { _limit: 8 });
    return { sectionTitle: genre, movies}
  })
  );


  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]">
      <Header />

      <main className="relative pb-24 pl-4 lg:pl-16">
        <Banner movie={featuredMovie} />
        {movies.map((movie ) => (
          <MovieRow
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
            movies={movie.movies} />
        ))}

      </main>

    </div>
  );
}