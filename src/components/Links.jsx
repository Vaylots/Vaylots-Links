import React from "react";
const social = [
  {
    title: "VK",
    link: "https://vk.com/vaylots",
    svg: "/assets/vk.svg",
  },
  {
    title: "Telegram",
    link: "https://t.me/Vaylots",
    svg: "/assets/telegram.svg",
  },
  {
    title: "GitHub",
    link: "https://github.com/Vaylots",
    svg: "/assets/github.svg",
  },
  {
    title: "Steam",
    link: "https://steamcommunity.com/id/Vaylots/",
    svg: "/assets/steam.svg",
  },
  {
    title: "Disсord",
    link: "https://discordapp.com/users/386504845672316929",
    svg: "/assets/discord.svg",
  },
];

const Links = () => {
  return (
    <ul className=" w-full flex flex-col  justify-center items-center text-white">
      {social.map((obj) => {
        return (
          <li
            onClick={() => window.open(`${obj.link}`, "_blank")}
            key={obj.title}
            className="  select-none cursor-pointer hover:shadow-2xl  hover:bg-stone-900   custom-text-bg rounded-3xl border-neutral-900   w-96    h-16 flex flex-col justify-center items-center mt-2  "
          >
            <p className="flex">
              <img
                className=" mr-2"
                width={18}
                height={18}
                src={obj.svg}
                alt=""
              />
              {obj.title}
              <img
                className="ml-2"
                width={18}
                height={18}
                src={obj.svg}
                alt=""
              />
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
