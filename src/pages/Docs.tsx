import TextItem from "../components/mini-components/TextItem";

const Docs = () => {
  return (
    <div className="flex justify-start items-start gap-4 flex-col w-full h-full pt-16 bg-black">
      <TextItem
        title="Introduction"
        paragraph="Welcome to the Anidata API! This API allows users to interact with our data services, providing efficient access to manage and retrieve data in a structured manner. The API is hosted on a free tier of Render, so it may take a few seconds to start up when first accessed."
      />
      <TextItem
        title="Test Route"
        paragraph="To optimize user experience and avoid delays, we’ve provided a test route (/api/v1/test) that you can hit initially to warm up the service. Once this route is triggered, the API will be more responsive for subsequent requests. Below, you’ll find details on how to use the API, including the available routes and example requests."
      />
    </div>
  );
};

export default Docs;
