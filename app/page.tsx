"use client";

import useForecast from "./hooks/useForecast";
import React from "react";
import Input from "./components/input";
import Current from "./components/current";
import Week from "./components/week";
import Details from "./components/details";
import Umbrella from "./components/icons/ghost-logo";

const Home = () => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast();

    
  const input = (
    <Input
    term={term}
    options={options}
    onInputChange={onInputChange}
    onOptionSelect={onOptionSelect}
    onSubmit={onSubmit}
  />
  )

  const logo = (
    <h1 className="text-2xl italic font-bold drop-shadow-lg text-end flex"><Umbrella />Rain check.</h1>
  );

  let content;
  if (forecast) {
    content =
    <div className="flex flex-col md:flex-row justify-between items-center my-20 text-white my:mb-30">
      {input}
      {logo}
    </div>;
  } else {
    content =
    <section className="text-center h-screen flex flex-col items-center justify-center text-white">
      {logo}
      <p className="text-2xl mt-10">Enter a city to get the weaether forecast</p>
      <div className="mt-20 w-full flex justify-center items-center">
        {input}
      </div>
    </section>;
  }

  return (
    <main className="bg-cover bg-gradient-to-r from-blue-300 to-blue-400 h-full md:h-screen">
      <div className="bg-white/20 w-full flex flex-col h-full md:h-screen p-10 lg:p-30 md:p-20 items-center">
        {forecast ? (
          <section className="w-full md:max-w-[1640px]">
            {content}
            <div className="flex md:flex-row flex-col justify-between items-center mb-10">
              <Current data={forecast} />
              <Week data={forecast} />
            </div>
            <div className="flex-2">
              <Details data={forecast} />
            </div>
          </section>
        ) : (
          <>{content}</>
        )}
      </div>
    </main>
  );
};

export default Home;
