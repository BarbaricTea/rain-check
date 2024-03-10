import { getCurrentDate } from "../helpers";
import { IoLocationOutline } from "react-icons/io5";

import { forecastType } from "../types";
import Image from "next/image";
import { FiCloud, FiCloudRain } from "react-icons/fi";

type Props = {
  data: forecastType;
};

const Current = ({ data }: Props) => {
  const today = data.list[0];
  return (
    <section className="flex flex-col justify-between h-full w-full mb-8 md:mb-0 gap-5 text-gray-700">
      {today.weather[0].icon && (
        <Image
          className="mx-4"
          width={150}
          height={150}
          alt={`weather-icon-${today.weather[0].description}`}
          src={require("/public/assets/weather/" + `${today.weather[0].icon}` + ".png")}
        />
      )}
      <div>
        <p className="text-8xl my-5">
          {today.main.temp.toFixed()}
          <span>°</span>
        </p>
        <h1 className="text-3xl">Today</h1>
        <p>{getCurrentDate()}</p>
        <div className="w-full h-0.5 bg-gray-200 my-5 md:my-12"></div>
        <span className="capitalize flex items-center gap-3 mb-3">
          {" "}
          <FiCloud fontSize={20}/>
          {" "}
          {today.weather[0].description}
        </span>
        <span className="flex items-center gap-3">
        <FiCloudRain  fontSize={20}/>
        Rain - {Math.round(today.pop * 100)}%
        </span>
      </div>
      <div>
        <div className="flex items-center text-gray-800 gap-2">
          <IoLocationOutline fontSize={25}/>
          <span className="text-xl">
            {data.name}, {data.country}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Current;
