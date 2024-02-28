import { getCurrentDate } from "../helpers";
import { IoLocationSharp } from "react-icons/io5";

import { forecastType } from "../types";

type Props = {
  data: forecastType;
};

const Current = ({ data }: Props) => {
  const today = data.list[0];
  return (
    <section className="flex flex-col mb-8 md:mb-0 items-start gap-2 text-white w-full">
      <div className="flex items-center">
        <h1 className="text-4xl">Today</h1>
        {today.weather[0].icon && (
          <img
            className="w-[100px] object-cover"
            alt={`weather-icon-${today.weather[0].description}`}
            src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
          />
        )}
      </div>
      <p className="mt-[-20px]">{getCurrentDate()}</p>
      <p className="text-7xl my-3">
        {today.main.temp.toFixed()}
        <span>°</span>
      </p>
      <span className="capitalize">{today.weather[0].description}</span>
      <div>
        <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl mt-1">
          <IoLocationSharp />
          <span className="m-1">
            {data.name}, {data.country}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Current;
