"use client";

import useForecast from "./hooks/useForecast";
import React from "react";
import Input from "./components/input";
import Current from "./components/current";
import Week from "./components/week";
import Details from "./components/details";
import { getWeatherColor } from "./helpers";

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
  );

  const logo = (
    <h1 className="text-2xl italic font-bold drop-shadow-lg text-end flex">
      Rain check.
    </h1>
  );

  let content;
  let color;
  if (forecast) {
    color = getWeatherColor(forecast.list[0].weather[0].icon)
    content = (
      <div className="flex flex-col md:flex-row justify-between items-center my-10 text-white">
        {input}
        {logo}
      </div>
    );
  } else {
    color = "from-blue-600 to-blue-400"
    content = (
      <section className="text-center flex flex-col items-center justify-center text-white">
        {logo}
        <p className="text-2xl mt-10">
          It's always raining somwhere, except in Philadelphia
        </p>
        <div className="mt-20 w-full flex justify-center items-center">
          {input}
        </div>
      </section>
    );
  }
  return (
    <main className={`bg-cover bg-gradient-to-r ${color} min-h-screen`}>
      <div className="bg-white/20 w-full min-h-screen flex flex-col p-10 md:px-20 items-center justify-center">
        {forecast ? (
          <section className="w-full md:max-w-[1640px]">
            {content}
            <div className="flex flex-col md:grid  md:grid-cols-4">
              <div className="flex items-center md:col-span-1 p-2 md:p-12 bg-white w-full h-full rounded-l-3xl">
                <Current data={forecast} />
              </div>
              <div className="md:col-span-3 flex flex-col gap-10 bg-gray-100 p-2 md:p-12 rounded-r-3xl">
                <Week data={forecast} />
                <Details data={forecast} />
              </div>
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
