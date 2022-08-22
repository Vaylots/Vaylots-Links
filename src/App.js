import React from 'react';
import Header from "./components/Header"
import Links from "./components/Links";
import "./App.css";



function App() {
  React.useEffect(() => {
    document.title = "Maxim Kondratev"
 }, []);
  
  return (
    
    <div className="app h-screen text-lg   bg-[url('./assets/Avatar.jpg')] bg-cover bg-no-repeat bg-center flex flex-row min-h-screen justify-center items-center ">
      <div className="blur-color  w-full h-full flex flex-col justify-center items-center backdrop-blur-md  ">
        <main className=" w-full flex flex-col  items-center">
          <Header />
          <Links/>
          
        </main>
      </div>
    </div>
  );
}

export default App;
