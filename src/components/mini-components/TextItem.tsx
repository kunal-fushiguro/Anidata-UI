const TextItem = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  return (
    <div>
      <div className="p-6 text-white font-sans">
        <div className=" mb-4">
          <span className="text-2xl font-bold">{title}</span>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-gray-300 lg:w-[50vw]">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextItem;
