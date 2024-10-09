import NavItems from "../components/mini-components/NavItems";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-full w-full lg:flex-row flex-col pt-4">
      <div className="lg:w-[50%] lg:h-[100%] w-full h-[50%] flex justify-center items-center flex-col p-6 lg:p-12">
        <div className="text-3xl font-bold text-center mb-4 text-white">
          Anidata API: Free Anime Data at Your Fingertips
        </div>
        <div className="text-lg text-center text-gray-600 leading-relaxed">
          Anidata offers a free, easy-to-use API providing comprehensive anime
          data for developers, hobbyists, and anime enthusiasts. With access to
          a vast collection of anime information, you can integrate detailed
          anime data into your projects, apps, or websites effortlessly.
          Anidata’s API is designed for simplicity, allowing you to search,
          filter, and retrieve anime data with ease. Start building your
          anime-powered project today, no strings attached!
        </div>
        <div className="flex justify-center items-center gap-4 flex-row">
          <button className="bg-white text-black w-28 text-center h-12 flex justify-center items-center text-lg px-8 rounded-lg hover:bg-[#27272A] hover:text-white">
            Docs
          </button>
          <NavItems text="Example" urlPath="/example" />
        </div>
      </div>
      <div className="lg:w-[50%] lg:h-[100%] w-full h-[50%] lg:flex justify-center items-center hidden">
        <img
          src="/anime.png"
          alt="anime"
          className="h-full w-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
