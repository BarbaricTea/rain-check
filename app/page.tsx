"use client";

import useForecast from "./hooks/useForecast";
import React from "react";
import Input from "./components/input";
import Current from "./components/current";
import Week from "./components/week";
import Details from "./components/details";

const Home = () => {
  const {
    forecast,
    options,
    term,
    onOptionSelect,
    onSubmit,
    onInputChange,
  } = useForecast();

  // let content;

  // if (!forecast) {
  //   content = (
  //     <div className="text-white text-center h-screen mt-[5rem]">
  //       <h2 className="text-3xl font-bold mb-4">Welcome to rain check</h2>
  //       <p className="text-xl">Enter a city to get the weaether forecast</p>
  //     </div>
  //   );
  // }
  // else if (error !== "") {
  //   content = (
  //     <div className="text-white text-center h-screen mt-[5rem]">
  //       <h2 className="text-3xl font-bold mb-4">Cant find city :(</h2>
  //       <p className="text-xl">Try entering a different city</p>
  //     </div>
  //   );
  // }
  // else if (forecast) {
  //   content = (
  //     <>
  //       <div className="flex md:flex-row flex-col p-12 items-center justify-between">
  //         <Current data={forecast} />
  //         {/* <Week data={forecast} /> */}
  //       </div>
  //       <div>
  //         <Details data={forecast} />
  //       </div>
  //     </>
  //   );
  // }

  return (
    <main className="bg-cover bg-gradient-to-r from-stone-800 to-orange-400 h-full md:h-screen">
      <div className="bg-white/25 w-full flex flex-col h-full md:h-screen">
        {/* INPUT */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">
            Rain check.
          </h1>
        </div>
        {forecast ? (
          <>
            <div className="flex md:flex-row flex-col p-12 items-center justify-between">
              <Current data={forecast} />
              {/* <Week data={forecast} /> */}
            </div>
            <div>
              <Details data={forecast} />
            </div>
          </>
        ) : (
          <div className="text-white text-center h-screen mt-[5rem]">
            <h2 className="text-3xl font-bold mb-4">Welcome to rain check</h2>
            <p className="text-xl">Enter a city to get the weaether forecast</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
