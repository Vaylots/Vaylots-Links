export const Admin = ({ React, axios }) => {
  const [loginStatus, setLoginStatus] = React.useState();
  const changeStatus = (userData) => {
    axios.post("http://localhost:80/login", userData).then((res) => {
      if (res.data.status === "success") {
        setLoginStatus(true);
      }
    });
  };

  const addLink = (LinkData) => {
    axios.post("http://localhost:80/add", LinkData).then((res) => {
      alert("Сервис добавлен");
    });
  };

  return (
    <div className="app h-screen text-lg   bg-[url('../../public/img/Avatar.jpg')] bg-cover bg-no-repeat bg-center flex flex-row min-h-screen justify-center items-center ">
      <div className="blur-color  w-full h-full flex flex-col justify-center items-center backdrop-blur-md  ">
        {loginStatus ? (
          <main className=" w-full flex flex-col  items-center">
            <header className="text-white">Admin panel</header>

            <ul className="w-full flex flex-col   justify-center items-center  ">
              <li className=" m-4 ">
                <input
                  id="title"
                  className="p-2 w-96 rounded-xl"
                  type="text"
                  placeholder={"Введите название сервиса"}
                />
              </li>
              <li className=" m-4 ">
                <input
                  id="url"
                  className="p-2 w-96  rounded-xl"
                  type="text"
                  placeholder={"Введите ссылку сервиса"}
                />
              </li>
              <li className=" m-4">
                <input
                  id="path"
                  className="p-2 w-96  rounded-xl"
                  type="text"
                  placeholder={"Введите путь до картинки"}
                />
              </li>
              <button
                onClick={() => {
                  addLink({
                    title: `${document.getElementById("title").value}`,
                    url: `${document.getElementById("url").value}`,
                    img: `${document.getElementById("path").value}`,
                  });
                }}
                className="link-button text-white custom-text-bg w-96 rounded-xl h-12"
              >
                Добавить
              </button>
            </ul>
          </main>
        ) : (
          <main className=" w-full flex flex-col  items-center">
            <header className="mb-4 text-white">Admin panel</header>
            <div className="flex flex-col">
              <input
                id="login"
                className="pl-4 p-2 mb-4 w-96 rounded-xl"
                type="text"
                placeholder={"Введите логин"}
              />
              <input
                id="password"
                className="p-2 w-96 mb-4 rounded-xl"
                type="password"
                placeholder={"Введите пароль"}
              />

              <button
                onClick={() => {
                  changeStatus({
                    username: `${document.getElementById("login").value}`,
                    password: `${document.getElementById("password").value}`,
                  });
                }}
                className="link-button text-white custom-text-bg w-96 rounded-xl h-12"
              >
                login
              </button>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};
