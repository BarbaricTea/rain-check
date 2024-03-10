import { forecastType } from "../types";
import Image from 'next/image'

type Props = {
  data: forecastType;
};

import {
  getWeekForcast,
  getWeekDay,
  getDailyMaxTemp,
  getDailyMinTemp,
} from './../helpers'


function Week({ data }: Props) {
  const today = data.list[0];
  const week = getWeekForcast(data);
  return (
    <section className="w-full">
    <h1 className="mb-4 text-gray-800 text-xl font-medium">Week</h1>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {Object.entries(week).slice(1, 7).map(([key, time], index) => (
        <div
          key={index}
          className="bg-white/80 p-3 text-center rounded-lg flex flex-col items-center"
        >
          <p className="text-l">{getWeekDay(key)}</p>
          <Image
            alt={`weather-icon-${time[0].weather[0].description}`}
            src={require("/public/assets/weather/" + `${time[0].weather[0].icon}` + ".png")}
            width={70}
            height={70}
            className="mb-2"
          />
          <div>{getDailyMaxTemp(time)}° <span className="opacity-50 ml-1">{getDailyMinTemp(time)}°</span></div>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Week;
