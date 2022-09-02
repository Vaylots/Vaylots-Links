import React from "react";
import axios from "axios";

export const Links = ({ server }) => {
  const [services, setServices] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  axios.get(server + "/links").then((res) => {
    setServices(res.data);
    setIsLoading(false);
  });

  return (
    <ul className=" w-full flex flex-col  justify-center items-center text-white">
      {isLoading ? (
        <div class="typewriter">
          <h1>Loading...</h1>
        </div>
      ) : (
        services.map((obj) => {
         
          return (
            <li key={obj.title}>
              <button
                onClick={() => window.open(`${obj.url}`, "_blank")}
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
        })
      )}
    </ul>
  );
};
