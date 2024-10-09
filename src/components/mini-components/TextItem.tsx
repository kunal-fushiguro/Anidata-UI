const TextItem = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  return (
    <div>
      <div className="p-4 text-white font-sans">
        <div className=" mb-2">
          <span className="text-xl lg:text-2xl font-bold">{title}</span>
        </div>
        <div>
          <p className="text-sm lg:text-base leading-relaxed text-gray-300 lg:w-[50vw]">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextItem;
