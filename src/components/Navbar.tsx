import NavItems from "./mini-components/NavItems";

const Navbar = () => {
  return (
    <div className="w-full h-[50%] flex justify-center items-center gap-4 p-4">
      <NavItems text="Home" urlPath="/" />
      <NavItems text="Docs" urlPath="/docs" />
      <NavItems text="Example" urlPath="/example" />
    </div>
  );
};

export default Navbar;
