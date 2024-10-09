const data = {
  anime: {
    _id: "6703b986518a5df9b54c1f35",
    anime_id: 918,
    Name: "Gintama",
    EnglishName: "Gintama",
    OtherName: "銀魂",
    Score: 8.94,
    Genres: "Action, Comedy, Sci-Fi",
    Synopsis:
      'Edo is a city that was home to the vigor and ambition of samurai across the country. However, following feudal Japan\'s surrender to powerful aliens known as the "Amanto," those aspirations now seem unachievable...',
    Type: "TV",
    Episodes: 201,
    ImageURL: "https://cdn.myanimelist.net/images/anime/10/73274.jpg",
  },
  manga: {
    _id: "6703ba5b0b7a42ed576cf68e",
    Title: "Berserk",
    Rank: 1,
    Type: "Manga",
    Published: "Aug 1989",
    Members: 637448,
    PageURL: "https://myanimelist.net/manga/2/Berserk",
    ImageURL:
      "https://cdn.myanimelist.net/r/100x140/images/manga/1/157897.jpg?s=89f4db27210a934c566d75a6163c5530",
    Score: 9.47,
  },
};

const Card = () => {
  return (
    <div className="flex justify-center items-center flex-col lg:flex-row gap-4 w-full h-full">
      {/* Anime */}
      <div className="w-full lg:w-[50%] h-[50%] lg:h-full flex justify-center items-center">
        <div>
          <div className="bg-black rounded-lg shadow-lg overflow-hidden p-4 ">
            <img
              src={data.anime.ImageURL}
              alt={data.anime.Name}
              className="w-full h-48 object-cover object-top rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">
              {data.anime.Name} ({data.anime.EnglishName})
            </h2>
            <p className="text-gray-400 mb-2">{data.anime.Genres}</p>
            <p className="text-sm mb-2">
              {data.anime.Synopsis.substring(0, 100)}...
            </p>
            <p className="text-sm font-bold">Score: {data.anime.Score}</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] h-[50%] lg:h-full flex justify-center items-center">
        <div>
          <div className="bg-black rounded-lg shadow-lg overflow-hidden p-4">
            <img
              src={data.manga.ImageURL}
              alt={data.manga.Title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{data.manga.Title}</h2>

            <p className="text-gray-400 mb-2">{data.manga.Type}</p>
            <p className="text-sm mb-2">Published: {data.manga.Published}</p>
            <p className="text-sm font-bold">Score: {data.manga.Score}</p>
            <a
              href={data.manga.PageURL}
              className="text-blue-400 mt-4 inline-block"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
