import Methods from "../components/mini-components/Methods";
import TextItem from "../components/mini-components/TextItem";

const Docs = () => {
  return (
    <div className="flex justify-start items-start gap-2 flex-col w-full h-full lg:pt-10 bg-black">
      <TextItem
        title="Introduction"
        paragraph="Welcome to the Anidata API! This API allows users to interact with our data services, providing efficient access to manage and retrieve data in a structured manner. The API is hosted on a free tier of Render, so it may take a few seconds to start up when first accessed."
      />
      <TextItem
        title="Test Route"
        paragraph="To optimize user experience and avoid delays, we’ve provided a test route (/api/v1/test) that you can hit initially to warm up the service. Once this route is triggered, the API will be more responsive for subsequent requests. Below, you’ll find details on how to use the API, including the available routes and example requests."
      />
      <TextItem
        title="Api-endpoints"
        paragraph="Base URL = https://anidata-api.onrender.com/api/v1"
      />

      <Methods method="GET" route="/test" />
      <Methods method="GET" route="/animes?limit=10&skip=0" />
      <Methods method="GET" route="/mangas?limit=10&skip=0" />
      <Methods method="GET" route="/animes/genre" />
      <Methods method="GET" route="/animes/grenes/Action?limit=10&skip=10" />
    </div>
  );
};

export default Docs;
