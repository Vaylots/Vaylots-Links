import Avatar from "../assets/Avatar.jpg";
const Header = () => {
  return (
    <header className=" mb-8 text-center  flex flex-col  items-center  ">
      <img
        className="rounded-full border border-neutral-800  w-32 mb-2    "
        src={Avatar}
        alt=""
      />
      <p className="mt-2 mb-2 text-white rounded-xl w-28 h-8 custom-text-bg  ">
        @Vaylots <br />
      </p>
      <p className="text-white text-xl -mb-6  justify-center items-center flex">
        My Social Media
      </p>
    </header>
  );
};
export default Header;
