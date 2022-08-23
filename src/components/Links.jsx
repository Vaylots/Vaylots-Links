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

export const Links = () => {
  return (
    <ul className=" w-full flex flex-col  justify-center items-center text-white">
      {social.map((obj) => {
        return (
          <li key={obj.title}>
            <button
              onClick={() => window.open(`${obj.link}`, "_blank")}
              className=" link-button flex justify-center items-center 
                        select-none cursor-pointer hover:shadow-2xl   
                        custom-text-bg w-96  h-16 rounded-3xl
                      border-neutral-900
                      hover:bg-stone-900  mb-4 "
            >
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
            </button>
          </li>
        );
      })}
    </ul>
  );
};
