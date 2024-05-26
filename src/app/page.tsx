import Header from "./components/Header";
import { MovieRown } from "./components/MovieRown";
import { Banner } from "./components/Banner";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]">
      <Header />

      <main className="relative pb-24 pl-4 lg:pl-16">
        <Banner />
        <MovieRown sectionTitle="Trending Now" />
        <MovieRown sectionTitle="Top Rated" />
        <MovieRown sectionTitle="Action Movies" />

      </main>

    </div>
  );
}