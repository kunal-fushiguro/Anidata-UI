import { useNavigate } from "react-router-dom";

const NavItems = ({ text, urlPath }: { text: string; urlPath: string }) => {
  const navigate = useNavigate();
  return (
    <span
      className="cursor-pointer m-2 hover:bg-[#27272A] w-28 text-center h-12 flex justify-center items-center text-lg px-8 rounded-lg"
      onClick={() => {
        navigate(urlPath);
      }}
    >
      {text}
    </span>
  );
};

export default NavItems;
