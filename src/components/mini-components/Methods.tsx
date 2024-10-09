const Methods = ({ method, route }: { method: string; route: string }) => {
  return (
    <>
      <div className="flex justify-start items-start flex-row gap-4 w-full pl-4">
        <span className="m-2 bg-green-600 w-20 text-center h-8 lg:h-12 flex justify-center items-center text-lg px-8 rounded-lg">
          {method}
        </span>
        <span className="m-2 bg-[#27272A] w-full lg:w-auto text-start h-8 lg:h-12 flex justify-center items-center text-sm text-nowrap lg:text-lg px-8 rounded-lg overflow-x-auto">
          {route}
        </span>
      </div>
    </>
  );
};

export default Methods;
