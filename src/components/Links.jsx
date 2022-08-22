import React from "react";
const social = [
  {
    title: "💬VK💬",
    link: "https://vk.com/vaylots",
  },
  {
    title: "📞Telegram📞",
    link: "https://t.me/Vaylots",
  },
  {
    title: "🖥️GitHub🖥️",
    link: "https://github.com/Vaylots",
  },
  {
    title: "🎮Steam🎮",
    link: "https://steamcommunity.com/id/Vaylots/",
  },
  {
    title: "🤖Disсord🤖",
    link: "https://discordapp.com/users/386504845672316929",
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
            className=" select-none cursor-pointer hover:shadow-2xl  hover:bg-stone-900   custom-text-bg rounded-3xl border-neutral-900   w-1/3    h-16 flex flex-col justify-center items-center mt-2  "
          >
            <p>{obj.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
