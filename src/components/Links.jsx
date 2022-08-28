import React from "react";
import axios from "axios";

// Disсord
// https://discordapp.com/users/386504845672316929
// /assets/discord.svg

export const Links = () => {
  const [services, setServices] = React.useState([]);

  axios.get("http://localhost:80/links").then((res) => {
    setServices(res.data);
  });

  return (
    <ul className=" w-full flex flex-col  justify-center items-center text-white">
      {services.map((obj) => {
        console.log(obj);
        return (
          <li key={obj.title}>
            <button
              onClick={() => window.open(`${obj.link}`, "_blank")}
              className=" link-button flex justify-center items-center 
                        select-none cursor-pointer hover:shadow-2xl   
                        custom-text-bg w-80   h-16 rounded-3xl
                      border-neutral-900
                      hover:bg-stone-900  mb-3 "
            >
              <img
                className=" mr-2"
                width={18}
                height={18}
                src={obj.img}
                alt=""
              />
              {obj.title}
              <img
                className="ml-2"
                width={18}
                height={18}
                src={obj.img}
                alt=""
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
