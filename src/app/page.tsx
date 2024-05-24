import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full bg-black lg:h-[140vh]">

      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">

        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">

          <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black" > </div>

          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl" >
            The Wicher
          </h1>

          <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            The Witcher is a Polish-American fantasy drama streaming television series produced by Lauren Schmidt Hissrich.
            It is based on the book series of the same name by Polish writer Andrzej Sapkowski. Set on a fictional, medieval-inspired landmass known as "the Continent",
            The Witcher explores the legend of Geralt of Rivia and princess Ciri, who are linked to each other by destiny.
          </p>

        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg">
          Play
        </button>

      </main>

    </div>
  );
}